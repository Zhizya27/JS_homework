let fs = require('fs');
let arg = process.argv;
let text = fs.readFileSync(arg[2]).toString();
let str = arg[3].toString();

function bruteforce() {
    let arr = new Array();
    for (i = 0; i < text.length; i++){
        if(text.charAt(i) == str.charAt(0)){
            for(j = 0; j < str.length; j++){
                if(text.charAt(i + j) == str.charAt(j)){
                    if (j == str.length - 1){
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


function hash1() {
    let arr = new Array();
    let codeText = 0, codeStr = 0;
   
    for (i = 0; i < str.length; i++){
        codeStr += str.charCodeAt(i);
        codeText += text.charCodeAt(i);
    }

    for(i = 1; i < text.length; i++){
        if (i > 1){
            codeText = codeText - text.charCodeAt(i - 2) + text.charCodeAt(i + str.length - 2);
        }
        if(codeText == codeStr){
            for (j = 0; j < str.length; j++){
                if(text.charAt(j + i - 1) == str.charAt(j)){
                    if (j == str.length - 1){
                        arr.push(i);
                    }
                }
                else {
                    break;
                }
            }
        }
    }

    return arr;
}
function hash2() {
    let arr = new Array();
    let codeText = 0, codeStr = 0;
       
    for (let i = 0; i < str.length; i++){
        codeStr += str.charCodeAt(i) * Math.pow(2, str.length - i - 1);
        codeText += text.charCodeAt(i) * Math.pow(2, str.length - i - 1);
        
    }
    
    for (i = 1; i <= text.length - str.length + 1; i++){
        if (codeText == codeStr){
            for (j = 0; j < str.length ; j++){
                if(text.charAt(j + i - 1) == str.charAt(j)){
                    if (j == str.length - 1){
                        arr.push(i);
                    }
                }
                else{
                    break;
                }
            }
        }
        codeText = (codeText - text.charCodeAt(i - 1) * Math.pow(2, str.length - 1)) * 2 + text.charCodeAt(str.length + i - 1);
    }
    return arr;
}

function hash3(){
    let arr = new Array();
    let codeText = 0, codeStr = 0;
 
    
    for (let i = 0; i < str.length; i++){
        codeStr += str.charCodeAt(i) * str.charCodeAt(i);
        codeText += text.charCodeAt(i) * text.charCodeAt(i);
    }
    
    let i = 1;
    while (i <= text.length - str.length + 1) {
        if (codeStr == codeText) {
            let j = 0;
            while (text.charAt(i - 1 + j) === str.charAt(j)){
                j++
                if (j == str.length){
                    arr.push(i);
                    break;
                }
            }
        }
        codeText = (codeText - text.charCodeAt(i - 1) * text.charCodeAt(i - 1)) + text.charCodeAt(i - 1 + str.length) * text.charCodeAt(i - 1 + str.length);
        i++;
    }
    return arr;
}
console.log("Bruteforce:");
console.time('Time');
console.log(bruteforce().join(', '));
console.timeEnd('Time');

console.log("Hash1:");
console.time('Time');
console.log(hash1().join(', '));
console.timeEnd('Time');

console.log("Hash2:");
console.time('Time');
console.log(hash2().join(', '));
console.timeEnd('Time');

console.log("Hash3:");
console.time('Time');
console.log(hash3().join(', '));
console.timeEnd('Time');

