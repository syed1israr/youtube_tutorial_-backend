import { Router } from "express";
import { healthCheck } from "../controllers/HealthCheck.controller.js"


const router  = Router();



router.get("/",healthCheck)



export default router;