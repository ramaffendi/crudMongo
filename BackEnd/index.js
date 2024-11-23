import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./route/UserRoute.js";

const app = express();
mongoose.connect("mongodb://localhost:27017/fullstack_db");
const db = mongoose.connection;
db.on("error", (e) => console.log(e));
db.once("open", () => console.log("Database connect"));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, () => console.log("server running "));
