import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import passport from "passport";
import router from "./router/routes.js";

//Create express app
const app = express();

//Port
const PORT = 7000;

//Cors middleware
app.use(cors());

//JSON middleware
app.use(express.json());

//Body payload middleware
app.use(express.urlencoded({ extended: true }));

//Passport middleware
app.use(passport.initialize());

//User route middleware
app.use("/user", router);

//Create a live connection
app.listen(PORT, async () => {
  console.log("Running in http://localhost:7000 !");

  await mongoose.connect("mongodb://localhost:27017/vue-crud");
});
