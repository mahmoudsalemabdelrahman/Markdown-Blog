import express from "express";
import mongoose from "mongoose";
import Article from "../models/articles.js";
import slugify from "slugify";

const router = express.Router();

router.get("/new", (req, res) => {
  res.render("articles/new", { article: new Article() });
});

router.get("/edit/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);
  if (!article) {
    return res.redirect("/articles");
  }
  res.render("articles/edit", { article: article });
});

router.post("/", async (req, res, next) => {
  req.article = new Article();
  next();
}, saveArticleAndRedirect("new"));

router.put("/:id", async (req, res, next) => {
  req.article = await Article.findById(req.params.id);
  if (!req.article) {
    return res.redirect("/articles");
  }
  next();
}, saveArticleAndRedirect("edit"));

router.get("/", async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: "desc" });
    res.render("articles/index", { articles: articles });
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

router.get("/:slug", async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug });
  if (!article) {
    return res.redirect("/");
  }
  res.render("articles/show", { article: article });
});

router.delete("/:id", async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.redirect("/articles");
  } catch (err) {
    console.log(err);
    res.redirect("/articles");
  }
});

function saveArticleAndRedirect(path) {
  return async (req, res) => {
    let article = req.article;
    article.title = req.body.title;
    article.description = req.body.description;
    article.markdown = req.body.markdown;

    try {
      await article.save();
      res.redirect(`/articles/${article.slug}`);
    } catch (err) {
      res.render(`articles/${path}`, { article: article });
      console.log(err);
    }
  };
}

export default router;
