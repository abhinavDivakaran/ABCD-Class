const Express=require('express');

//creation of object..

var app=new Express();


//rought setting....

app.get('/',(Request,Response)=>{

    // athil oru message pass chithu....

    Response.send("<h1>Welcome</h1>");//.send is a function...
});

app.get('/home',(Request,Response)=>{

    Response.send("<h2>Welcome Back...</h2>");//home set cheithu.....
});

//port assigning...

app.listen(3000,()=>{
    console.log("Working On Progress.....");

});


