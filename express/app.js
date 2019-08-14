const Express=require('express');

//creation of object..

var app=new Express();

//rought setting....

app.get('/',(Request,Response)=>{

    // athil oru message pass chithu....

    Response.send("Welcome To My Website...!");//.send is a function...
});

app.get('/home',(Request,Response)=>{

    Response.send("My Home Page..!");//home set cheithu.....
});

//port assigning...

app.listen(3000);


