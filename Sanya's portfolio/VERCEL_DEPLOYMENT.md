# 🚀 Deploy to Vercel - Quick Guide

## Method 1: Vercel Website (Easiest)

1. **Visit**: https://vercel.com
2. **Sign up/Login** with GitHub
3. **Click**: "New Project"
4. **Import**: Select your GitHub repo `Sanyabansal115/My-Web-Development`
5. **Configure**:
   - Framework: **Vite**
   - Root Directory: `Sanya's portfolio`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. **Click Deploy!**

## Method 2: CLI Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## 🎯 Benefits of Vercel:

- ✅ **Automatic HTTPS**
- ✅ **Global CDN**
- ✅ **Perfect React/Vite support**
- ✅ **Custom domain support**
- ✅ **Automatic deployments on git push**
- ✅ **Much faster than GitHub Pages**

## 📁 Your Portfolio Structure:
```
My-Web-Development/
└── Sanya's portfolio/          ← Root directory for Vercel
    ├── src/
    ├── public/
    ├── package.json
    ├── vite.config.js
    └── vercel.json            ← Deployment config
```

## 🔗 After Deployment:
You'll get a URL like: `https://sanya-bansal-portfolio.vercel.app`

Your SB logo and all features will work perfectly on Vercel! 🎉