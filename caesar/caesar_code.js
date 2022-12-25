let arg = process.argv;
let fs = require("fs");
let text = fs.readFileSync(arg[2]).toString().toLowerCase();
let shift = Number(arg[3]);
let letters = new Array();
let letters_shift = new Array();
let key = new Array();
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

let amount = 0; // счетчик букв в нашем тексте

for(let i in letters) { // если в цикле in - мы берем ключи, а если of - то мы берем значение
  letters[i] /= length;
  amount++;
}

let count = 0;
for(let i in letters){
  letters_shift[(count + shift) % amount] = i;
  count++;
}

count = 0;
for(let i in letters){
  key[i] = letters_shift[count];
  count++;
}

for (let i of text){
  if(!trashcan.includes(i)){
    outText += key[i];
  } else {
    outText += i;
  }
}

fs.writeFileSync("caesar_coded.txt", outText);