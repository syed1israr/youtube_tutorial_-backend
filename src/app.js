import cors from "cors";
import express from "express";




const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))


//Common Middlewares -- Must Use it Now on All Apps :D
app.use(express.json({limit:"64kb"}))
app.use(express.urlencoded({extended:true , limit:"64kb"}))
app.use(express.static("public"))

// import Routes 
import healthCheckRouter from "./routes/HealthCheck.route.js";

// routes
app.use("/api/v1/healthcheck",healthCheckRouter)




export default app;