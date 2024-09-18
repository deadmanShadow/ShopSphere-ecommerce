import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(5000,()=>{
    console.log("Server is running on http://localhost:" + PORT);
    connectDB();
})


// Wb8LD16Ly1rdrbBy