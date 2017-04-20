
/*

    Execution-Context
    ------------------

    memory/stack-frame with given args & locals to execute instruction

    2 phases

    phase-1 : creation

       all the variables declared any-where in that context,
       will get hoisted to top with default value(undefined)

    phase-2 : execute

       all instructions will execute seq.


    imp points

    --> by default .js-runtime has one global-context & global-obj
    --> global-context executed by global-obj 

    global-obj

    browser-envi ==> window
    Node.js      ==> global & process


    --> every funcion call , also creates new-context(scope) 
       which is child of context in which func has declared

    

*/

//-------------------------------------------------------------

// var v=12;
// console.log(v);

//-------------------------------------------------------------


// //var v=12;

// function f1(){
//     console.log(v);
//     //var v=13;
// }

// f1();// f1-context ==> global-context

//-------------------------------------------------------------

var v=12;

function f1(){
    function f2(){
        console.log(v);
    }
    //f2(); // f2-context ==> f1-context
    var v=13;
    return f2;
}

var f2Ref=f1(); //f1-context ==> global-context

// f2Ref(); // f2-context ==> f1-context


//-------------------------------------------------------------

// best-practice : always declare variable at top ( file | function )

//-------------------------------------------------------------


// block scope ( till ES5 , no block scope to variables )

function f(){

    {
        var v=12;
    }

    console.log(v);

}

// f();    

//-------------------------------------------------------------


// bad things , declaring variables with 'var' keyword

/*
    --> always get hoisted
    --> no block-scope
    --> can re-declare same variable multiple times
*/


//-------------------------------------------------------------

// in ES6 ==> let & const keywords


/*

    let , const ==> variables will never get hoisted and ther y block-scopes

    let ==> mutate reference
    const ==> mutate reference

*/




// console.log(i);
// let i=12;


//----------------------------------------------


// var i=100;

// {
//     let i=200;
// }

// console.log(i);

//----------------------------------------------

// let i=12;
// let i=13;

//----------------------------------------------


const person={
    name:'Vijay'
};

person.name="ibm";

//----------------------------------------------

// Quiz


var arrFuncs=[];

for(let i=0;i<2;i++){
    arrFuncs.push(function(){return i});
}

console.log(arrFuncs[0]()); // 0
console.log(arrFuncs[1]()); // 1





