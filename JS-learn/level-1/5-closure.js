
/*

     A closure is a function having access to the parent scope,
     even after the parent function has closed.

     why we need?

        --> to abstract public behav of any js-module to other modules
        --> while running func async on event, to access the parent scoped data.

*/

// function teach(sub){
//     console.log('teaching '+sub);
//     let notes=sub+"-notes";
//     let i=100;

//     function learn(){
//         console.log('learning '+sub+' with '+notes);
//     }

//     //learn(); // learn-context ==> teach-context

//     console.log('teaching ends..'); // teach-context destroyed..

//     return learn;
// } 


// let learnFunc=teach('.js'); // teach-contex with ( sub + Notes )

// learnFunc();
// learnFunc();

//-------------------------------------------------------------




// Use-1 

// e.g counter-module ( self executable func - pattern)

    // const counter=(function(){

    //     let count=0;  // private
    //     // public ( closures)
    //     function doCount(){
    //         count++;
    //     }
    //     function getCount(){
    //         return count;
    //     }
    //     return {
    //         doCount,
    //         getCount
    //     };

    // })();


// Use-2


    function Person(name,age){
        this.name=name;
        this.age=age;

        let self=this;
        setInterval(function(){  
            //console.log(this);          
            self.age++;
            console.log(self.name+" - "+self.age);
        },1000); // emit event in given interval

    }

    let p=new Person('kid',0);



    