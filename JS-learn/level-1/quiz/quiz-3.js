
function sessionStart(){

    function Trainer(name){
        this.name=name;
        this.doTeach=function(){
            console.log(this.name+" teaching");
            let self=this;
            function doLearn(){
                console.log(this.name+" learning from "+self.name);
            }
            return doLearn;
        }
    }

    function Employee(name){
        this.name=name;
    }

    let tnr1=new Trainer('Vijay'); // Constructor invocation

    let emp1=new Employee('neha');
    let emp2=new Employee('atul');

    let learnFunc=tnr1.doTeach();  // Method invocation

    learnFunc.call(emp1); // call/apply/bind invocation
    learnFunc.call(emp2);

}

sessionStart(); // function invocation