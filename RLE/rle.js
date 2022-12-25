let fs = require("fs");
let arg = process.argv;
let mode = arg[2];
let input = arg[3];
let coder = arg[4];

let inText = fs.readFileSync(input, "utf-8");
let resStr = "";

let n = 1;

function code(inText) {
  for(i = 0; i < inText.length; i++) {
    if(inText.charAt(i) == inText.charAt(i + 1) && n != 255) {
      n += 1;
    } else {
      if((n > 3) || (inText.charAt(i) == "#")) {
        resStr += "#" + String.fromCharCode(n) + inText.charAt(i);
      } else {
        for (let x = 0; x < n; x++) {
          resStr += inText.charAt(i); 
        }
      }
      n = 1; 
    }
  }
  fs.writeFileSync(coder, resStr); 
}

function decode(inText) {
  let i = 0;
  while (i < inText.length) {
    if (inText.charAt(i) == "#") {
      resStr += inText.charAt(i+2).repeat(inText.charCodeAt(i+1));
      i += 3;
    } else {
      resStr += inText.charAt(i);
      i += 1;
    }
  }

  fs.writeFileSync(coder, resStr)
}

if (mode == "code") {
  code(inText);
  let inputSize = fs.statSync(input).size;
  let coderSize = fs.statSync(coder).size;
  console.log("Коэффициент сжатия:", inputSize/coderSize)
} else if (mode == "decode") {
  decode(inText);
}
