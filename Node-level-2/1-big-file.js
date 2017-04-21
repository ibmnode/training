

let fs=require('fs');
let file=fs.createWriteStream('./big.file');

for(let i=0;i<=5e6;i++){
    file.write('Node.js® is a JavaScript runtime built on Chromes V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js package ecosystem, npm, is the largest ecosystem of open source libraries in the world.');
}

file.end();


//-------------------------------------------------------------------------------


