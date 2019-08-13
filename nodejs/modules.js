const myos=require('os');

const myfs=require('fs');

var userdata=myos.userInfo();

var platform=myos.platform();

myfs.appendFile("mydata.txt",userdata.username,(error)=>{
    if(error){
        throw error;
        console.log(error);
    }
});



//console.log(userdata.username +"uses" +platform);