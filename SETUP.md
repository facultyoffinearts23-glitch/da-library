# تعليمات التثبيت والتشغيل

## المتطلبات

- **Node.js** 16 أو أحدث
- **pnpm** أو **npm**

## خطوات التثبيت

### 1. فك ضغط المشروع
```bash
unzip arts-digital-library.zip
cd arts-digital-library
```

### 2. تثبيت المكتبات
```bash
pnpm install
# أو
npm install
```

### 3. تشغيل خادم التطوير
```bash
pnpm dev
# أو
npm run dev
```

### 4. الوصول للتطبيق
افتح المتصفح وانتقل إلى:
```
http://localhost:5173
```

## البناء للإنتاج

```bash
pnpm build
# أو
npm run build
```

سيتم إنشاء مجلد `dist` يحتوي على الملفات الجاهزة للنشر.

## النشر على الإنترنت

### خيار 1: Vercel (مجاني)
```bash
npm install -g vercel
vercel
```

### خيار 2: Netlify
1. ادفع المشروع إلى GitHub
2. ربط Netlify بـ GitHub
3. اختر المشروع وسيتم النشر تلقائياً

### خيار 3: خادم ويب عادي
1. قم بـ `pnpm build`
2. انسخ محتوى مجلد `dist` إلى خادمك
3. تأكد من إعادة توجيه جميع المسارات إلى `index.html`

## استكشاف الأخطاء

### خطأ: "pnpm: command not found"
```bash
npm install -g pnpm
```

### خطأ: "Port 5173 already in use"
```bash
pnpm dev -- --port 3000
```

### خطأ: "Module not found"
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## الملفات المهمة

| الملف | الوصف |
|------|--------|
| `package.json` | المكتبات والإعدادات |
| `vite.config.js` | إعدادات Vite |
| `tailwind.config.js` | إعدادات TailwindCSS |
| `src/App.jsx` | المكون الرئيسي |
| `src/components/` | جميع المكونات |
| `DOCUMENTATION.md` | دليل الاستخدام الكامل |

## الدعم

للمساعدة أو الأسئلة:
- راجع `DOCUMENTATION.md`
- تحقق من رسائل الخطأ في console
- استخدم أدوات المطور (F12)

---

تم تطوير هذا المشروع بواسطة **Manus AI**
