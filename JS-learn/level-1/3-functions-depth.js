

/*

    we can create func in 2 ways

    1. function declaration / Named Function

        --> func-obj created at context-creation phase
        --> always get hoisted with func-object

        when to use ?

        to have func-obj by default in that context
        

    2. function expression / Anonymous function

        --> func-obj created at context-execution phase
        --> can invoke only after expression

        when to use?

        to create any function based input or conditions



*/

//--------------------------------------------------------

// 1. function declaration

// console.log(add(12,12));

// function add(a,b){
//     return a+b;
// }

// console.log(add(12,12));

//--------------------------------------------------------


// 2. function expression

// console.log(add(12,12)); // will throw Error

// var add=function(a,b){
//     return a+b;
// }

// console.log(add(12,12));


//--------------------------------------------------------


// function as values

// function sayHello(){
//     console.log('Hello');
// }

// let sayHi=sayHello;

// sayHi();

//--------------------------------------------------------

// function as arguments

// function greet(f){
//     if(f){
//         f();
//         return;
//     }
//     console.log('Hello..');
// }


// greet();
// greet(function(){console.log('Ola...')});

// e.g

// let nums=[1,3,5,7,9,2,4,6,8,10];
// // nums.sort();
// nums.sort(function(a,b){return a-b;});
// console.log(nums);


//--------------------------------------------------------


// function as return values


// function teach(){
//     console.log('im teaching');
//     function learn(){
//         console.log('im learning...');
//     }
//     return learn;
// }

// let learnFunc=teach();
// learnFunc();
// learnFunc();


//--------------------------------------------------------

// more about func

// function func(a,b){
//     console.log(a);
//     console.log(b);
//     //console.log(arguments);
//     console.log(arguments['2']);
//     console.log(arguments['3']);
//     console.log(arguments['3']);
// }

// func(1,2,3,4,5);

// e.g

// function sum(){
//     let i=0,
//         len=arguments.length,
//         total=0;
//     while(i<len){
//         total+=arguments[i];
//         i++;
//     }    
//     return total;
// }


//--------------------------------------------------------


// Quiz

// function getFood(){
//     return "No Food";
// }
// // let getFood=new Function('...');

// function getFood(pay){
//     if(arguments.length===0)return "No Food";
//     return "Biryani";
// }
// // getFood=new Function('...');

// console.log(getFood(200));


//--------------------------------------------------------


// ES6 Features

    // 1. default func params
    // 2. rest operator



    function func(a=1,b=2){

        // if(!a){
        //     a=1; // default value
        // }
        // if(!b){
        //     b=2; // default value
        // }

        // or

        // a=a||1;
        // b=b||2;


        console.log(a);
        console.log(b);
    }

    //func(undefined,20);


    // rest operator

    function getProducts(id,...categories){
        console.log(id);
        console.log(Array.isArray(categories));
        console.log(categories);
    }

    getProducts(1000,'s/w','h/w','other');


