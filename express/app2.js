const Express=require('express');

//creation of object..

var app=new Express();

//html varan vendii.... view engine venam..

app.set('view engine','ejs');

//rought setting....

app.get('/',(Request,Response)=>{

    // athil oru message pass chithu....
    //namesil oru array koduthu.. ini ath ejsil print cheyyanam...

    Response.render("index",{title:"ICTAK","names":["anju","amal","abhi"]});//.send is a function...
});

app.get('/home',(Request,Response)=>{

    Response.render("index1",{title:"infopark"});//home set cheithu.....
});

//port assigning...

app.listen(3000,()=>{
    console.log("Working On Progress.....");

});