

let name="Vijay";
let age=33;

// let person={
//     name:name,
//     age:age
// }

// ES6

// let person={
//     name,
//     age
// };

//---------------------------------


// let person={
//     name:'Vijay',
//     sayName:function(){
//         ///
//     }
// };

// // or


// let person={
//     name:'Vijay',
//     sayName(){
//         ///
//     }
// };

//------------------------------------------



let dynamicField="name";

let person={
    ["ibm-"+dynamicField]:'Vijay',
    "say Name"(){
        //...
    }
};


console.log(person["ibm-"+dynamicField]);
person["say Name"]();