import express from "express"
import cors from "cors"




const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))


//Common Middlewares -- Must Use it Now on All Apps :D
app.use(express.json({limit:"64kb"}))
app.use(express.urlencoded({extended:true , limit:"64kb"}))
app.use(express.static("public"))






export default app;