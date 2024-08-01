const fs = require("fs");

fs.writeFile("message.txt", "Hello World!", (err) => {
    if (err) throw err;
    console.log("The file is saved successfully!");
});
