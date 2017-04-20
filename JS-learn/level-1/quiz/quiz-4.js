
// Model
let tnr={
    name:'Praveen'
};

// Service
let tnrService={
    doTeach:function(){
        console.log(this.name+" teaching to IBM today");
    }
}

// View
let teachBtn=document.getElementById('teachBtn');

// teachBtn.addEventListener('click',function(){
//     tnrService.doTeach.call(tnr);
// });
// or
teachBtn.addEventListener('click',tnrService.doTeach.bind(tnr));


/*

 event-handler/callback function always executed 
 by an obj who emitted that event

*/