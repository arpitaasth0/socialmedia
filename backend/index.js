import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js";
import messageRoute from "./routes/message.route.js";
//middlewares

dotenv.config({});

const corsOptions = {
    origin:"http://localhost:5173",
    credentials:"true"
}



const app = express();

const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended:true}));

app.use(cors(corsOptions));

app.use("/api/v1/user",userRoute);
app.use("/api/v1/post",postRoute);
app.use("/api/v1/message",messageRoute);





app.listen(PORT,()=> {
    console.log(`server listen at ${PORT}`);
    connectDB();
})