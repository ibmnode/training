



function Person(name, age) {
    this.name = name;
    this.age = age;

    // this.sayName=function(){
    //     console.log('im '+this.name);
    // }
    // this.sayAge=function(){
    //     console.log('im '+this.age +" old");
    // }
}

Person.prototype.sayName = function () {
    console.log('im ' + this.name);
}
Person.prototype.sayAge = function () {
    console.log('im ' + this.age + " old");
}

// let p1 = new Person("A", 12);
// let p2 = new Person("B", 13);


//--------------------------------------------------

// function Employee(name,age,salary){
//     Person.call(this,name,age);
//     this.salary=salary;
// }
// Employee.prototype=new Person();
// Employee.prototype.saySalary=function(){
//     console.log('i get '+this.salary);
// }

// let emp=new Employee('Vijay',33,1000.00);

//--------------------------------------------------

// ES6

// class Person{

//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

//     sayName(){

//     }
//     sayAge(){
        
//     }
// }

// class Employee extends Person{
//     constructor(name,age,salary){
//         super(name,age)
//         this.salary=salary;
//     }
//     sayName(){
//         //.......
//     }
//     saySalary(){
//         //..
//     }
// }