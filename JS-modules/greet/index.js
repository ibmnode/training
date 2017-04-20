


// var o={
//     doWork:function(){
//         console.log('im mod1');
//     }
// };

//-----------------------------------------------------


// var app=app||{};

// (function(){

//     app.mod2.doWork();
//     app.mod3.doWork();

//     var o={
//         doWork:function(){
//             console.log('im mod1');
//         }
//     };

//     app.mod1=o;  //  export or abstract

// })();

//-----------------------------------------------------

console.log('-mod1.js-');

let en=require('./en');
let es=require('./es');

let message="Hello..";

function sayHello(){
    console.log(message);
}
function sayName(){
    console.log('im Node');
}

function greet(lang){
    if(lang==="en"){
        en();
    }
    if(lang==="es"){
        es()
    }
}

// sayHello();

// module.exports.sayName=sayName;
// module.exports.sayHello=sayHello;

// or

module.exports={
    sayHello,
    sayName,
    greet
};