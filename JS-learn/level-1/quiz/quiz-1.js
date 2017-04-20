

function Person(name){
    this.name=name;
    this.sayName=function(){
        console.log('im '+this.name);
    }
}

// Person('Abc'); // Never call constructor func without 'new' keyword

new Person('Abc');