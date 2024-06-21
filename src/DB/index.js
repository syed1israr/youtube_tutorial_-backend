import mongoose from "mongoose";

const ConnectDB = async() =>{
    try {

        const connection = await mongoose.connect(process.env.MONGO_URL)

        if(connection){
            console.log("Connected to Database ✅")
        }
        
    } catch (error) {
        console.log("MonogDB Connection Error ☠️",error)
        process.exit(1);
    }
}


export default ConnectDB;