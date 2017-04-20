

let fs=require('fs');

// blocking-IO

// open & read file ==> display on console

// let contents=fs.readFileSync('./data.txt','utf8'); //..........
// console.log(contents);

// console.log('\ncontinue with other work...');

//------------------------------------------------------------

// Non Blocking-IO

fs.readFile('./data.txt',function(err,data){
    if(err) throw err;
    console.log(data.toString('utf8'));
});

console.log('\ncontinue with other work...');


//------------------------------------------------------------