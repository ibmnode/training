

// why we need 'this' keyword?

/*

    in any func,

    accesing any variable 
    
        -> without referenece, reads context's data
        -> with referenece, reads obj's data

*/

//let name="GLOBAL"; // context's var

// let person={
//     name:'Vijay', // person's property
//     sayName:function(){
//         // let pname="LOCAL"; // context's var
//         // console.log('im '+name);
//         //console.log('im '+person.name);
//         console.log('im '+this.name);
//     }
// };
// // person.sayName();

// let p=person;
// person={name:'IBM'};

// p.sayName(); // im Vijay?


// best practice :  
// never read obj's data with reverence var, if reference floating

/*

    soln:

    use 'this' keyword

*/

//-------------------------------------------------------


// let name='GLOBAL';
// let person={
//     name:'Soumya',
//     sayName:function(){
//         //let name='LOCAL';
//         // console.log('im '+name);
//         console.log('im '+this.name);
//     }
// };

// person.sayName();

//-------------------------------------------------------

// this ==> Owner of execution context



// #1

// let p1={name:'soumya',sayName:function(){console.log('im '+this.name)}};
// let p2={name:'neha',sayName:function(){console.log('im '+this.name)}};

// better code

// function sayNameForAll(){
//     console.log('im '+this.name);
// }

// // static func binding
// let p1={name:'soumya',sayName:sayNameForAll};
// let p2={name:'neha',sayName:sayNameForAll};


// sayNameForAll(); // im  // function invocation ( context owned by global-obj)
// p1.sayName(); // im soumya // method invocation ( context owned by invoker-obj)
// p2.sayName(); // im neha

/*

    imp notes

    --> every func call creates new-context
    --> every context must be executed by one-object ( this )

    this ==> Owner of execution context

*/

//-------------------------------------------------------

// dynamic function binding

// from third-party
var greetLib={
    sayName:function(message,from){
        console.log(message+' im '+this.name +" - "+from);
    }
};


// our data-objects

// var p1={name:'person'}
// var e1={name:'employee'}

// way-1
// greetLib.sayName.call(p1,"Hello","Universe"); // 
// greetLib.sayName.call(e1,"Dude","IBM"); // 

// or

// way-2
// greetLib.sayName.apply(p1,["Hello","Universe"]); // 
// greetLib.sayName.apply(e1,["Dude","IBM"]); // 

// way-3 : 

// let newF=greetLib.sayName.bind(p1);
// newF("Hi","Earth");
// newF("Hi","IND");


// let newFF=greetLib.sayName.bind(e1,"dude","IBM");
// newFF();
// newFF();


//-------------------------------------------------------


// constructor / class

// 10000+

// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     this.sayName=function(){
//         //..
//         console.log('im '+this.name);
//     }
//     this.sayAge=function(){
//         //..
//     }
// }

// let p1=new Person('A',33);
// let p2=new Person('B',32);


//-------------------------------------------------------


// in .js-lang, we can invoke in 4 ways

// a. function invocation        ( this ==> global-obj )
// b. method invocation          ( this ==> invoker-obj)
// c. constructor invocation     ( this ==> new-obj)
// d. call/apply/bind invocation ( this ==> arg-obj)


//-------------------------------------------------------


