

// arrow functions 
// -------------------

// Syntax


// let getPrice=()=>100.00;
// let getPrice=(count)=>count*100.00;
// let getPrice=count=>count*100.00;
// let getPrice=(count,tax)=>(count*100.00)+tax;
// let getPrice=(count,tax)=>{let result=(count*100.00)+tax; return result};

// console.log(typeof getPrice);
// console.log(getPrice(10,10));

//----------------------------------------------------------------

// Why we need arrow functions ?


/*

    on which context arrow-func created , 
    using that context's owner only they execute any-where 

*/


// let trainer={
//     name:'Vijay',
//     doTeach:function(){
//         console.log(this.name+" teaching .js");

//         // let self=this;
//         // function askQues(ques){
//         //     console.log(this);
//         //     console.log(self.name+" answering "+ques);
//         // }

//         let askQues=(ques)=>{console.log(this.name+" answering "+ques);}


//         return askQues;
//     }
// };

// let askQuesFunc=trainer.doTeach();
// askQuesFunc('what is arrow?');


//-----------------------------------------------------------------------------

// let invoice={
//     num:123,
//     process:function(){
//         console.log('Processing invoice '+this.num);
//     }
// };

// let invoice={
//     num:123,
//     process:()=>{console.log('Processing invoice '+this.num);}
// };


let invoice = {
    num: 123,
    process: function () {
        console.log(this.num + " initialy processed");

        // let self = this;
        // let subProcess = function () {
        //     console.log(self.num + " sub-processed");
        // }

        let subProcess = () => { console.log(this.num + " sub-processed") }

        return subProcess;
    }
};

let subProcess123 = invoice.process();
// subProcess();

let otherInvoice={num:321};
subProcess123.call(otherInvoice)  // wont make any effect if it arrow functions



//------------------------------------------------


// advantages of arrow function

/*

    --> they always execute with owner's context where that func created
    --> cant bindable with any object dynamically

*/




function Person(name,age){
    this.name=name;
    this.age=age;

    // event ==> Timer API class
    setInterval(()=>{
        this.age++;
        console.log(this.age);
    },1000);

}

let p=new Person("Kid",0);