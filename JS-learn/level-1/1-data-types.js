

/*


    data-types


    1. simple/primitives  ==> values

        a. string
        b. number
        c. boolean
        d. undefined
        e. symbol ( from es6 )


    2. complex/reference ==> objects




*/

// simple types

//--------------------------------------------

// a. string

var name="vijay";
var selection='a';


//--------------------------------------------

// b. number

var count=12;
var cost=12.12;

//--------------------------------------------

// c. boolean

var found=true; // false

// imp note :  falsy values ==> false,0,"",NAN,null,undefined

//--------------------------------------------

// d. undefined  ==> default value/type assigned by js-runtime

var v;   

//--------------------------------------------


// Complex types . ==> Objects


/*

    How to create objs in js lang?

    var ref=new Constructor();

    imp-note : till ES5 , no class syntax in .js-lang

    till es5, any function with pascal-case naming convntion to create objects ==> constructor

*/

var person=new Object(); // obj wrapper

// imp-note : all objs by default extensible & configurable

person.name="Vijay";
person.age=33;
person.doTeach=function(){
    console.log('teaching .js');
}

delete person.age;


//--------------------------------------------

// Literal style objects ( object can be created without new-keyword)


// a . Object

var config=new Object();
config.url="http://"
config.method="GET";
config.success=function(){}

// or

var config={
    url:'http://',
    method:'GET',
    success:function(){}
};

//--------------------------------------------

// b. Array

var menu=new Array();
menu.push("Biryani");
menu.push("Meals");

// or

var menu=["..","..."];


//--------------------------------------------

// c. RegExp

var mobRe=new RegExp("\\d{10}");

// or

var mobRe=/\d{10}/;


//--------------------------------------------

// d. Function

// imp-note : all functions are objects by default


var add=new Function("a","b","var sum=a+b;return sum;");

// or

function add(a,b){
    var sum=a+b;
    return sum;
}

function func(){

}

func.prop1=123;
func.method=function(){}

//---------------------------------------------------------


// How to access obj's propeties ?

/*
    2 ways

    way-1 : '.' notation
    way-2 : '[]' notation
*/

var person={
    name:'Vijay',
    "full-name":"Vijay Ajith"
};

// person.name="Ajith";
// console.log(person.name);

console.log(person['full-name']);

var propName="name";
console.log(person[propName]);








