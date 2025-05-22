import mongoose from "mongoose";

export const ConnectToDb=async()=>{
    try {
         const db=await mongoose.connect(process.env.MONGO_URI);
         if(db)
            console.log("mongodb connected");
    } catch (error) {
        console.log(error);
    }
}