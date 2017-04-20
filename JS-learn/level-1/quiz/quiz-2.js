

let trainer={
    name:'Vijay',
    doTeach:function(){
        console.log(this.name+" teaching .js");
        let self=this;
        function doLearn(){
            console.log(this.name+' learning .js from '+self.name);
        }
        let emp={name:'IBM'};
        // doLearn();
        doLearn.call(emp);
    }
};

// trainer.doTeach();

// let oldTrainer=trainer;
// trainer={name:'New-Trainer'};
// oldTrainer.doTeach();

trainer.doTeach();
let newTrainer={name:'Praveen'};
trainer.doTeach.call(newTrainer);

