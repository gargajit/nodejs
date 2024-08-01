/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


inquirer
  .prompt([
    {
        message: "Please enter the URL: ",
        name: "URL"
    }
  ])
  .then((answers) => {
    // console.log(answers.URL);
    var qr_svg = qr.image(answers.URL, {type: 'pdf'});
    qr_svg.pipe(fs.createWriteStream('qr_pdf.pdf'));
    fs.writeFile('url.txt', answers.URL, 'utf8', (err) => {
        if (err) throw err;
        console.log("Text file saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
