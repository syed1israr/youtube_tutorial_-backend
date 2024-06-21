import app from "./app.js";
import dotenv from "dotenv"
import ConnectDB from "./DB/index.js"
dotenv.config({
    path:"./.env"
})
ConnectDB().then(()=>{
    app.listen(process.env.PORT || PORT,()=>{
        console.log(`Server is Running on Port ${PORT} 🖥️`)
    })
}).catch((error)=>{
    console.log("Error while Setting up Server ☠️")
})



const PORT = process.env.PORT || 8000;
