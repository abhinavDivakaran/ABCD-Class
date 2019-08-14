var EventEmit=require('events');

var emitter=new EventEmit();

//Listening....(on function)

emitter.on("door open",(name)=>{
    console.log(name+"Waiting Outside..");
});

//multiple listening is possible...

emitter.on("door open",(name)=>{
    console.log(name+"Please Wait Outside...");
});

//Emitting....(emit function)

emitter.emit("door open","Abhinav");

emitter.emit("door open","Anandhu");

//multiple emision is possible......
// on aadhyam vaikanam...enitte emit vaikan paaduu......