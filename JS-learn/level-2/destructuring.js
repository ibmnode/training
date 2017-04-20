

let person={name:'A',age:12};

// // manually destructuring

// let name,age;
// name=person.name;
// age=person.age;

// with destructuring

// let {name:myName,age:myAge}=person;
// console.log(myName);
// console.log(myAge);


// let myName;
// let myAge;
// ({name:myName,age:myAge}=person);
// console.log(myName);
// console.log(myAge);

// let name,age;
// ({name,age}=person);
// console.log(name);
// console.log(age);


// let {name,age}=person;

//----------------------------------------------------


// Array destructuring

let salaries=[100,200,300];

// manual

// let min=salaries[0];
// let avg=salaries[1];
// let max=salaries[2];


let [min,avg,max=5000]=salaries;
console.log(min);
console.log(avg);
console.log(max);







