

// const {Writable}=require('stream');

// let outStream=new Writable({
//     write(chunk,encoding,callback){
//         console.log(chunk.toString());
//         callback();
//     }
// });

// process.stdin.pipe(outStream);


//-------------------------------------


// const {Readable}=require('stream');

// const inStream=new Readable();
// inStream.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
// inStream.push(null);

// inStream.pipe(process.stdout);


//-------------------------------------

const {Transform} = require('stream');

const upperCaseTr=new Transform({
    transform(chunk,encoding,callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

process.stdin.pipe(upperCaseTr).pipe(process.stdout);






