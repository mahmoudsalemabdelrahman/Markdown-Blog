import express from "express";
import articles from "./routes/articles.js";

const app = express();

app.set("view engine", "ejs");
app.use('/articles', articles);

app.get('/', (req, res) => {
    const articles = [
        {
            title: "Article 1",
            createdAt: new Date(),
            description: "This is the first article."
        },
        {
            title: "Article 2",
            createdAt: new Date(),
            description: "This is the second article."
        },
        {
            title: "Article 3",
            createdAt: new Date(),
            description: "This is the third article."
        }
    ];
    res.render("articles/index", {articles:articles});
});

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});