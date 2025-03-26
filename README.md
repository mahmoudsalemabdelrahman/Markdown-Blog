# Markdown Blog

Markdown Blog هو تطبيق ويب بسيط يتيح للمستخدمين إنشاء، تحرير، عرض، وحذف المقالات باستخدام Markdown. يعتمد المشروع على Node.js وExpress.js وMongoDB.

---

## **المميزات**
- **إنشاء مقالات جديدة**: يمكن للمستخدمين كتابة المقالات باستخدام Markdown.
- **عرض المقالات**: يتم تحويل محتوى Markdown إلى HTML آمن باستخدام مكتبة `marked` و`dompurify`.
- **تعديل المقالات**: يمكن للمستخدمين تعديل المقالات الموجودة.
- **حذف المقالات**: يمكن حذف المقالات بسهولة.
- **تنظيم المقالات**: يتم عرض المقالات بترتيب زمني تنازلي.

---

## **التقنيات المستخدمة**
- **Backend**:
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/)
  - [Mongoose](https://mongoosejs.com/) (للتعامل مع MongoDB)
- **Frontend**:
  - [EJS](https://ejs.co/) (لإنشاء القوالب)
  - [Bootstrap 5](https://getbootstrap.com/) (لتصميم الواجهة)
- **Markdown Parsing**:
  - [marked](https://github.com/markedjs/marked)
  - [dompurify](https://github.com/cure53/DOMPurify) (لضمان أمان HTML الناتج)
- **Database**:
  - [MongoDB](https://www.mongodb.com/)

---

## **التثبيت والتشغيل**

### **1. متطلبات النظام**
- Node.js مثبت على جهازك.
- MongoDB مثبت ومشغل.

### **2. تثبيت المشروع**
1. استنسخ المشروع:
   ```bash
   git clone <repository-url>
   cd markdown-blog
   ```

   npm install

   mongod

   npm run dev

   http://localhost:5000

   markdown-blog/
├── models/
│   └── [articles.js](http://_vscodecontentref_/0)       # مخطط المقالات
├── routes/
│   └── [articles.js](http://_vscodecontentref_/1)       # مسارات المقالات
├── views/
│   ├── articles/
│   │   ├── edit.ejs      # صفحة تعديل المقالة
│   │   ├── index.ejs     # صفحة عرض المقالات
│   │   ├── new.ejs       # صفحة إنشاء مقالة جديدة
│   │   └── show.ejs      # صفحة عرض المقالة
│   └── _form_fields.ejs  # الحقول المشتركة للنماذج
├── public/
│   └── css/              # ملفات CSS (إن وجدت)
├── [server.js](http://_vscodecontentref_/2)             # نقطة البداية للتطبيق
├── [package.json](http://_vscodecontentref_/3)          # ملف التبعيات
└── [README.md](http://_vscodecontentref_/4)             # هذا الملف




---

### **كيفية استخدام هذا الملف**
1. قم بإنشاء ملف جديد باسم [README.md](http://_vscodecontentref_/5) في جذر المشروع.
2. انسخ الكود أعلاه والصقه في الملف.
3. احفظ الملف.

الآن لديك ملف [README.md](http://_vscodecontentref_/6) احترافي يصف مشروعك بشكل كامل.