# 🚀 Quick Start Guide - YNOV-Afrik Website

## Getting Started in 3 Steps

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Start Development Server
```bash
npm run dev
```
The site will be available at: http://localhost:5173

### 3️⃣ Build for Production
```bash
npm run build
```
Production files will be in the `dist/` folder.

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section with stats
│   ├── Services.tsx        # 12 service offerings
│   ├── Expertise.tsx       # Technical expertise areas
│   ├── GlobalPresence.tsx  # Worldwide presence
│   ├── Certifications.tsx  # Professional certifications
│   ├── Projects.tsx        # Portfolio of projects
│   ├── Technologies.tsx    # Technology stack
│   ├── Contact.tsx         # Contact form & info
│   └── Footer.tsx          # Site footer
├── App.tsx                 # Main app component
├── main.tsx               # App entry point
└── index.css              # Global styles

```

## 🎨 Key Features

✅ **Fully Responsive** - Mobile, Tablet, Desktop optimized
✅ **Smooth Scrolling** - Navigation with smooth scroll
✅ **Modern Design** - Clean, professional, premium feel
✅ **Real Images** - High-quality Pexels stock photos
✅ **TypeScript** - Type-safe code
✅ **Tailwind CSS** - Utility-first styling
✅ **Performance** - Optimized build with Vite

## 📞 Contact Information (Current)

- **Phone**: +228 90 00 00 00
- **Email**: ynovafrik@gmail.com
- **Location**: Lomé, Togo
- **Coverage**: 180+ countries

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run typecheck` | Check TypeScript types |
| `npm run lint` | Run ESLint |

## 🌈 Customization Tips

### Update Contact Info
Edit `src/components/Contact.tsx` and `src/components/Footer.tsx`

### Change Colors
Modify Tailwind colors in component files (e.g., `bg-blue-600` → `bg-green-600`)

### Add New Services
Edit the `services` array in `src/components/Services.tsx`

### Update Projects
Modify the `projects` array in `src/components/Projects.tsx`

### Change Images
Replace Pexels image URLs with your own images

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

## ✨ What Makes This Site Special

1. **Comprehensive** - All major IT services covered
2. **Professional** - Enterprise-grade design
3. **Global Focus** - 180+ countries highlighted
4. **Expertise Showcase** - Certifications & experience
5. **Portfolio** - Real project examples
6. **Contact Ready** - Easy to reach out
7. **SEO Optimized** - Meta tags & semantic HTML
8. **Fast Performance** - Optimized build
9. **Accessible** - WCAG guidelines followed
10. **Maintainable** - Clean, modular code

## 🎯 Next Steps

1. ✅ Review the design in browser
2. ✅ Test on mobile devices
3. ✅ Customize content if needed
4. ✅ Add real project images
5. ✅ Connect contact form to backend
6. ✅ Deploy to production

---

**Need Help?** Check README.md for detailed documentation.

**Ready to Launch?** Run `npm run build` and deploy!
