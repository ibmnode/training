



// imp-note : All objects that emit events are instances of the EventEmitter class. 

let EventEmitter=require("events").EventEmitter;
// let ee=new EventEmitter();

// ee.on('hungry',function(food){
//     console.log(`having ${food}`);
// })

// setTimeout(()=>{
//     ee.emit('hungry',"Biryani")
// },2000);

//--------------------------------------------------------


// Practical example on Node-Events


class Door extends EventEmitter{
    open(){
        console.log('door opened...');
        let event={num:117,floor:2};
        this.emit('door-open',event);
    }
    close(){
        console.log('door closed...');
    }
}
let door=new Door();



class Light{
    setUp(){
        door.on('door-open',function(event){
            console.log(`Light ON - num: ${event.num} - floor: ${event.floor}`);
        });
    }
}

let light=new Light();
light.setUp();



setTimeout(()=>{
    door.open();
    setTimeout(()=>{door.close();},2000);
},2000);





