# Video Setup Guide

## Current Status ✅

Your site is **working perfectly** with beautiful gradient backgrounds! The 404 errors are expected - they just mean videos haven't been added yet.

## What You See Now

**Gradient Backgrounds** (3 slides rotating every 8 seconds):
1. **Slide 1**: Amber → Teal → Navy (Ancient temples theme)
2. **Slide 2**: Sky Blue → Teal → Navy (Beach theme)
3. **Slide 3**: Emerald → Teal → Navy (Wildlife theme)

These look great and are production-ready! You can use them as-is or add videos later.

## Adding Real Videos (Optional)

### Quick Steps

**1. Get Free Videos**

Visit these sites and search for "Sri Lanka":
- **Pexels**: https://www.pexels.com/search/videos/sri%20lanka/
- **Pixabay**: https://pixabay.com/videos/search/sri%20lanka/
- **Coverr**: https://coverr.co/ (search: tropical, beach, temple)

**2. Download 3 Videos**

Choose videos that represent:
- Ancient temples/cultural sites
- Beaches/coastline
- Wildlife/nature

**3. Prepare Videos**

- **Format**: MP4
- **Resolution**: 1920x1080 (Full HD)
- **Size**: Under 10MB each (compress if needed)
- **Duration**: 10-30 seconds
- **Names**: Rename to:
  - `slide1.mp4`
  - `slide2.mp4`
  - `slide3.mp4`

**4. Add to Project**

Place videos in:
```
modern-site/public/videos/
├── slide1.mp4
├── slide2.mp4
└── slide3.mp4
```

**5. Refresh Browser**

That's it! Videos will automatically play as backgrounds.

## Video Optimization Tips

### Compress Videos (If Large)

**Online Tools:**
- https://www.freeconvert.com/video-compressor
- https://www.videosmaller.com/

**Settings:**
- Target size: 5-8MB
- Keep resolution: 1920x1080
- Format: MP4 (H.264)

### Alternative: Use Shorter Clips

If videos are too large, trim to 10-15 seconds:
- https://www.kapwing.com/tools/trim-video

## Troubleshooting

### Videos Not Playing?

1. **Check file names** (must be exact):
   - `slide1.mp4` ✅
   - `Slide1.mp4` ❌ (wrong case)
   - `slide-1.mp4` ❌ (wrong format)

2. **Check file location**:
   ```
   modern-site/
   └── public/
       └── videos/
           ├── slide1.mp4
           ├── slide2.mp4
           └── slide3.mp4
   ```

3. **Clear browser cache**:
   - Chrome/Edge: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`

4. **Check file format**:
   - Must be MP4
   - Use H.264 codec

### Still See Gradients?

That's normal! The code shows gradients as a fallback. If you like them, keep them! Many modern sites use gradients instead of videos.

## Free Video Recommendations

### Best Free Sri Lanka Videos

**Pexels:**
- Search: "Sri Lanka temple"
- Search: "Sri Lanka beach"
- Search: "elephant Sri Lanka"

**Similar Tropical Videos:**
- "Bali temple" (similar architecture)
- "tropical beach sunset"
- "rainforest wildlife"

### Video Quality Checklist

✅ Good lighting
✅ Smooth camera movement
✅ Clear subject
✅ No text/watermarks
✅ Landscape orientation (not portrait)

## Using YouTube Video (Your Request)

### ⚠️ Important: YouTube Terms

You **cannot** directly embed YouTube videos as backgrounds because:
- YouTube's TOS prohibit downloading
- Copyright restrictions
- Technical limitations

### Solution: Extract the Clip

**Option 1: Use Similar Free Video**
Find a similar Sri Lanka tourism video on Pexels/Pixabay

**Option 2: Contact Creator**
If you own/know the creator, ask for the original file

**Option 3: Screen Record (Not Recommended)**
Only if you have permission from the creator

## No Videos? No Problem!

The gradient backgrounds are:
- ✅ Fast loading
- ✅ Look professional
- ✅ Work on all devices
- ✅ No bandwidth issues
- ✅ Production-ready

Many modern sites use gradients! Examples:
- Stripe.com
- Linear.app
- Vercel.com

## Next Steps

### Option A: Keep Gradients
Nothing to do! Site is ready to deploy.

### Option B: Add Videos
1. Download 3 free videos from Pexels
2. Compress to under 10MB each
3. Rename to slide1.mp4, slide2.mp4, slide3.mp4
4. Place in `public/videos/`
5. Refresh browser

### Option C: Mix Both
Keep gradients for now, add videos later when you find perfect clips.

## Questions?

- **Q: Do I need videos?**
  A: No! Gradients look great.

- **Q: Will videos slow down the site?**
  A: Not if kept under 10MB and properly compressed.

- **Q: Can I use different file names?**
  A: Yes, but update `Hero.tsx` lines 12, 18, 24.

- **Q: Mobile users?**
  A: Videos auto-pause on mobile to save bandwidth (shows gradients).

---

**Your site works beautifully right now!** 🎉

Videos are optional enhancement, not required.
