import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"

import userRoutes  from "./routes/UserRoutes.js"

export const app = express()

//configure the dotenv file
dotenv.config({
    path:"./configuration/.env"
})

//using middleware
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","PUT","POST","DELETE"],
    credentials: true
}))

// // Routes for user
app.use('/api/v1/users', userRoutes);




//default route
app.get("/", (req, res)=>{
    res.send("nice working")
})
