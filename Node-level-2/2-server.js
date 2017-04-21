

let fs=require('fs');
let server=require('http').createServer();

server.on('request',function(req,res){
    // fs.readFile('./big.file',function(err,data){
    //     if(err) throw err;
    //     res.end(data);
    // });

    let src=fs.createReadStream('./big.file');
    src.pipe(res);

});
server.listen(8080);

