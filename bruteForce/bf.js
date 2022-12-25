let fs = require('fs');
let arg = process.argv;
let str = fs.readFileSync(arg[2]).toString();
let key = arg[3].toString();

const bf = () => {
    let arr = new Array();
    for (i = 0; i < str.length; i++){
        if(str.charAt(i) == key.charAt(0)){
            for(j = 0; j < key.length; j++){
                if(str.charAt(i + j) == key.charAt(j)){
                    if (j == key.length - 1){
                        arr.push(i + 1);
                    }
                }
                else{
                    break;
                }
            }
        }
    }
    
    return arr;
}


const hash1 = () => {
    let arr = new Array();
    let codeStr = 0, codeKey = 0;
    let len_key = key.length;

    for (i = 0; i < len_key; i++){
        codeKey += key.charCodeAt(i);
        codeStr += str.charCodeAt(i);
    }

    for(i = 1; i < str.length; i++){
        if (i > 1){
            codeStr = codeStr - str.charCodeAt(i - 2) + str.charCodeAt(i + key.length - 2);
        }
        if(codeStr == codeKey){
            for (j = 0; j < len_key; j++){
                if(str.charAt(j + i - 1) == key.charAt(j)){
                    if (j == len_key - 1){
                        arr.push(i);
                    }
                }
                else{
                    break;
                }
            }
        }
    }
    return arr;
}

console.log("Bruteforce:");
console.time('Time');
console.log(bf().join(', '));
console.timeEnd('Time');

console.log("Hash1:");
console.time('Time');
console.log(hash1().join(', '));
console.timeEnd('Time');

// node bf.js testText.txt мне