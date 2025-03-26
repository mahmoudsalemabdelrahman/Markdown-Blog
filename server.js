import express from "express";
import mongoose from "mongoose";
import methodOverride from "method-override";
import articles from "./routes/articles.js";

mongoose.connect("mongodb://localhost:27017/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use("/articles", articles);

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
