import app from "./app.js";
import dotenv from "dotenv"
import ConnectDB from "./DB/index.js"
dotenv.config({
    path:"./.env"
})


ConnectDB();


app.listen(process.env.PORT || PORT,()=>{
    console.log(`Server is Running on Port ${PORT} 🖥️`)
})




const PORT = process.env.PORT || 8000;
