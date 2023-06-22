import mongoose from "mongoose";

export const connectDB = ()=>{
mongoose.connect(process.env.MONGO_URI,{
dbName:"backendapinew",

})
.then((c)=>console.log(`Data base Connected with ${c.connection.host}`))
.catch((e)=>console.log(e));
}  