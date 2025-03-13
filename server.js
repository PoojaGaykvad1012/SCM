const express = require('express')
const mongoose= require('mongoose')
const app = express()
const port=3000;


app.get("/",(req,res)=>
{
    console.log("hello Pooja Gaykvad");
})
mongoose.connect('mongodb://localhost:27017/Demo2')
.then(()=>
console.log('connected')
)
.catch(()=>
console.log('Not Connected')
)
const Emplooye= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    mob:{
        type:Number,
        required:true,
        unique:true
    }
}
)
const Emodel=new mongoose.model('emdata',Emplooye)
app.listen(port,()=>{
    console.log(`server is runing on port ${port}`);
})

















