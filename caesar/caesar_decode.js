let arg = process.argv;
let fs = require("fs");
let text = fs.readFileSync(arg[2]).toString().toLowerCase();
let letters = new Array();
let freq = new Array();
let key = new Array();
let move = new Array();
let cf = JSON.parse(fs.readFileSync("rus.json"));
let trashcan = ".,!?;: …\t\n\r()-—";
let outText = "";

let length = 0;

for(let i of text){
  if(!trashcan.includes(i)){
    if(!(i in letters)){
      letters[i] = 0;
    }
    letters[i]++;
    length++;
  }
}

let amount = 0;
for(let i in letters){
    letters[i] /= length;
    freq[amount] = letters[i];
    amount++; 
}

let shift = 0;
let minShift = 0;
let min = 2;
let check;
let count = 0;

for (let i = 0; i <= amount; i++) {
    check = 0;
    count = 0;
    for (let j in letters){
        check += Math.pow(freq[(count + shift) % amount] - cf[j], 2)
        count++;
    }
    if (min > check) {
        min = check;
        minShift = shift;
    }
    shift++;
}

count = 0;

for(let i in letters){
    move[(count + minShift) % amount] = i;
    count++;
}

count = 0;

for(let i in letters){
    key[i] = move[count];
    count++;
}

for (let i of text){
    if(!trashcan.includes(i)){
      outText += key[i];
    } else {
      outText += i;
    }
  }
  
  fs.writeFileSync("caesar_decoded.txt", outText);