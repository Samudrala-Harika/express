const express=require('express')
const app=express();


const PORT=6677;
app.get("/user",(req,res)=>{
    
    return res.json("This is Read or get method")

})
app.get("/user1",(req,res)=>{
    return res.json("This is user 1 end point with get method");
})
app.post("/post",(req,res)=>{
    return res.json("This is post method");

})
app.put("/put",(req,res)=>{
    return res.json("This is put method");

})
app.delete("/delete",(req,res)=>{
    return res.json("This is delete  method");

})


app.listen(PORT,()=>{
    console.log(`My Server is running on ${PORT} number`);
})


/*   1...synchronization.......................................................................................
console.log("First Statement");
const display=()=>{
    let sum=0;
    for(let i=1;i<=1000000;i++){
        sum=sum+i;
    }
    console.log("Sum of i valule is= "+sum);
}
display();
console.log("Second statement")*/

/*2.. Asynchronization........................................................................................
console.log("First Statement");
const display=()=>{
    let sum=0;
    for(let i=1;i<=1000000;i++){
        sum=sum+i;
    }
    setTimeout(()=>{
        console.log("Sum of i valule is= "+sum);
    },7000)   
}
display();
console.log("Second statement")*/

/* CALLBACK function ....................................................
function greet(name, callback){
    console.log(name);
    callback();
}
function welcome(){
console.log("This is an example program on callback fucntion")
}
greet("Harika",welcome);    //calling function */

/*function test(){
    x=10+20;
    console.log("inside of the function")
    return x;
}
let res=test();
console.log("result is="+res);*/

/* async with then keyword.......................................................................
async function test(){
    x=10+20;
    console.log("inside of the function")
    return x;
}
let res=test();
res.then((data)=>{
    console.log(data)
}) */
/* async with then ,catch and await......................................................
    async function test(){
        x= await 10+20;        //await fetch data from APIs
        console.log("inside of the function")
        return x;
    }
    let res=test();
    res.then((data)=>{
        console.log(data)
    })
    res.catch((error)=>{
        console.log(error);
    })*/
   

