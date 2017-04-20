

console.log('-in main-');


//--------------------------------------------------------

// var app=app||{};

// // mod1 func
// app.mod1.doWork();


//--------------------------------------------------------


// let mod1=require('./pack1/mod1');
let greetMod=require('./greet');

// mod1.sayHello();
// mod1.sayName();


greetMod.greet('en');
greetMod.greet('es');

//--------------------------------------------------------


