let fs = require("fs");
let mem = new Array();

let filename = process.argv[2]; //  путь к "fact_zjs.txt"(файл, в котором хранится текст)

let text = fs.readFileSync(filename).toString();
let skip = false;

text.split('\n').forEach(function(str){
    str.split(" ").forEach(function(word){
        if (word.includes("//") || skip){
            skip = true;
            return;
        }
        if (isNaN(word)) {
            mem.push(word.replace('\r', '')); 
        }
        else {
            mem.push(Number(word));
        }
    });
    skip = false;
})


let ip = 0;
while (mem[ip] != 'exit') {
    switch (mem[ip]) {
        case 'input':
            mem[mem[ip+1]] = mem[ip+2];
            ip += 3;
            break; 
        case 'output':
            console.log(mem[mem[ip+1]]);
            ip += 2;
            break;
        case 'sub':
            mem[mem[ip+3]] = mem[mem[ip+1]] - mem[mem[ip+2]];
            ip += 4;
            break;
        case 'add':
            mem[mem[ip+3]] = mem[mem[ip+1]] + mem[mem[ip+2]];
            ip += 4;
            break;
        case 'multi':
            mem[mem[ip+3]] = mem[mem[ip+1]] * mem[mem[ip+2]];
            ip += 4;
            break;
        case 'div':
            mem[mem[ip+3]] = mem[mem[ip+1]] / mem[mem[ip+2]];
            ip += 4;
            break;
        case 'mod':
            mem[mem[ip+3]] = mem[mem[ip+1]] % mem[mem[ip+2]];
            ip += 4;
            break;
        case 'spot':
            mem[mem[ip+1]] = ip + 2;
            while (mem[ip] != 'endspot') {
                ip += 1;
            }
            break;
        case 'endspot':
            ip += 1;
            break;
        case 'jb':
            if (mem[mem[ip+1]] > mem[mem[ip+2]]) {
                ip = mem[mem[ip+3]];
            } else {
                ip += 4;
            }
            break;
        case 'je':
            if (mem[mem[ip+1]] == mem[mem[ip+2]]){
                ip = mem[mem[ip+3]];
            }
            else {
                ip += 4;
            }
            break;
        case 'jz':
            if (mem[mem[ip+1]] < mem[mem[ip+2]]){
                ip = mem[mem[ip+3]];
            }
            else {
                ip += 4;
            }
            break;
        case 'go':
            ip = mem[mem[ip+1]];
            break;
        default:
            console.log('Скорее всего пристуствует лишний пробел или же отсутсвует exit.');
            mem[ip] = 'exit';
            break;
     }
}