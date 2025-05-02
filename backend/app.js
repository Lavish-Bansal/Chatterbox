import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
  }));
app.use(urlencoded({extended: true, limit: "16kb"}));
app.use(express.json());
app.use(cookieParser());

// routes import
import userRouter from "./routes/user.routes.js";
import messageRoute from "./routes/message.routes.js";

// routes declaration
app.use("/api/user", userRouter);
app.use("/api/message", messageRoute);

export { server };
