import app from "./app.js";
import dotenv from "dotenv"
import ConnectDB from "./DB/index.js"
dotenv.config({
    path:"./.env"
})

const PORT = process.env.PORT || 8000;



ConnectDB().then(()=>{
    app.listen(process.env.PORT || PORT,()=>{
        console.log(`Server is Running on Port ${PORT} 🖥️`)
    })
}).catch((err)=>{
    console.log("MonogDB Connection Error ☠️",err)
});





