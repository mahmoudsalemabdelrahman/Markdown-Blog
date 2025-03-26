import mongoose from "mongoose";
import { marked } from "marked"; // تعديل الاستيراد
import slugify from "slugify";
import { JSDOM } from "jsdom";
import createDomPurifier from "dompurify";

const dompurify = createDomPurifier(new JSDOM().window);

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  markdown: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  sanitizedHtml: {
    type: String,
    required: true,
  },
});

articleSchema.pre("validate", function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true }).toUpperCase(); // تحويل إلى أحرف كبيرة
  }
  if(this.markdown){
    this.sanitizedHtml = dompurify.sanitize(marked(this.markdown));
  }
  next();
});

// articleSchema.virtual("sanitizedHtml").get(function () {
//   return dompurify.sanitize(marked(this.markdown));
// });

const Article = mongoose.model("Article", articleSchema);
export default Article;
