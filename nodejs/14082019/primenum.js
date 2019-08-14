module.exports.prime=(x)=>{
    var m=x/2;
    var flag=0;
        for(i=2;i<=m;i++){
            if(x%i==0){
                console.log("Not a prime number");
                flag=1;
                break;
            }
        }
        if(flag==0){
            console.log("Prime Number");
        }
}