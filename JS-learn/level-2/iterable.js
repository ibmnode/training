

var idMaker={
    [Symbol.iterator]:function(){
        let id=0;
        return {
            next:function(){
                id++;
                return {
                    value:id,
                    done:(id>10)?true:false
                }
            }
        }
    }
};

// spreadable
let ids=[...idMaker];

// new for-loop : for - of loop
for(let id of idMaker){
    console.log(id);
}
// destructring
let [a,b,c,d]=idMaker;


