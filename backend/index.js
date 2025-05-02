import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { server } from "./app.js";

dotenv.config();

connectDB()
.then( () =>{
    server.listen(process.env.PORT || 9000, () =>{
        console.log(`App is running on port ${process.env.PORT}`);
    })
})
.catch( (err) => {
    console.log("MongoDB connection failed ", err);
})