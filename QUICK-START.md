# Quick Start Guide - Machan Travels Modern

Get up and running in 5 minutes!

## Prerequisites

You need **Node.js** installed on your computer. Download it here:
👉 https://nodejs.org/ (Choose LTS version)

To check if you have it:
```bash
node --version
```

## Installation Steps

### 1. Open Terminal/Command Prompt

**Windows**: Press `Win + R`, type `cmd`, press Enter

**Mac**: Press `Cmd + Space`, type `terminal`, press Enter

### 2. Navigate to Project

```bash
cd C:\xampp\htdocs\MachanTravels.co.uk\modern-site
```

### 3. Install Dependencies

```bash
npm install
```

This will take 2-3 minutes. ☕

### 4. Start Development Server

```bash
npm run dev
```

### 5. Open in Browser

Open your browser and go to:
```
http://localhost:3000
```

🎉 **You should see your website!**

## Making Changes

1. Edit files in `src/components/`
2. Save the file
3. Browser automatically refreshes!

## Common Issues

### "npm: command not found"
- Install Node.js from https://nodejs.org/

### Port 3000 already in use
```bash
npx kill-port 3000
npm run dev
```

### Changes not showing
- Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Or clear `.next` folder and restart

## File Structure (Where to Edit)

```
src/
├── components/
│   ├── Hero.tsx          ← Edit hero text here
│   ├── Features.tsx      ← Edit features here
│   ├── Destinations.tsx  ← Edit destinations here
│   └── ...
├── app/
│   ├── page.tsx          ← Main page structure
│   └── layout.tsx        ← Site-wide settings
└── ...
```

## Changing Content

### Example: Update Hero Title

1. Open `src/components/Hero.tsx`
2. Find:
```tsx
Experience Sri Lanka
<span className="gradient-text">Like Never Before</span>
```
3. Change to your text
4. Save - browser auto-refreshes!

### Example: Add a Feature

1. Open `src/components/Features.tsx`
2. Find the `features` array
3. Add new object:
```tsx
{
  icon: '🌴',
  title: 'Your Feature',
  description: 'Your description...',
}
```

## Building for Production

When ready to deploy:

```bash
npm run build
npm start
```

Your site will be optimized and ready!

## Need More Help?

See the full `README.md` for:
- Deployment guides
- Customization options
- Animation examples
- Performance tips

## Next Steps

1. ✅ Get it running locally
2. 📝 Update content in components
3. 🖼️ Add real images to `public/images/`
4. 🎨 Customize colors in `tailwind.config.ts`
5. 🚀 Deploy to Vercel/Netlify

**You're all set!** Start customizing and make it yours! 🎨
