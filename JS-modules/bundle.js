(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){



// var o={
//     doWork:function(){
//         console.log('im mod2');
//     }
// };

//-----------------------------------------------------

// var app=app||{};

// (function(){


//     var o={
//         doWork:function(){
//             console.log('im mod2');
//         }
//     };

//     app.mod2=o;  //  export / abstract


// })();

//-----------------------------------------------------


// english greet module

function greet(){
    console.log('Hello....');
}

module.exports=greet;
},{}],2:[function(require,module,exports){



// var o={
//     doWork:function(){
//         console.log('im mod3');
//     }
// };

//-----------------------------------------------------

// var app=app||{};

// (function(){

//     var i=0;

//     var o={
//         doWork:function(){
//             console.log('im mod3');
//         }
//     };

//     app.mod3=o;  //  export / abstract


// })();

//-----------------------------------------------------



// spanish greet module

function greet(){
    console.log('Ola....');
}

module.exports=greet;
},{}],3:[function(require,module,exports){



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
},{"./en":1,"./es":2}],4:[function(require,module,exports){


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



},{"./greet":3}]},{},[4]);
