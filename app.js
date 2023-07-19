const fs = require("fs");

fs.writeFileSync("response.txt", new Date().toUTCString());
