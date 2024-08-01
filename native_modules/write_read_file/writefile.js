const fs = require("fs");

fs.writeFile("message.txt", "Hello from Node JS", (err) => {
    if (err) throw err;
    console.log("The file is updated Successfully!");
});
