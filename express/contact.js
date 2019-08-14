const Cont=require('express');


var contact=new Cont();

contact.set('view engine','ejs');

contact.get('/',(Request,Response)=>{

    Response.render("contact");
});
contact.get('/contact',(Request,Response)=>{

    Response.render("contact");
});

contact.listen(3000,()=>{
    console.log("Working On Progress.....!");

});
