import mongoose from "mongoose";

export const connectDB = ()=>{
mongoose.connect(process.env.MONGO_URI,{
dbName:"backendapinew",

})
.then(()=>console.log("Data base Connected"))
.catch((e)=>console.log(e));
}