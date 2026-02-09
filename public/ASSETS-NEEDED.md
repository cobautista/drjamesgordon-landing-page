# Assets Required for Dr. James R. Gordon Website

## Hero Section

### Videos
- **Location:** `/public/videos/`
- **Files Needed:**
  - `hero-background.mp4` - Hero video background (H.264, <5MB)
  - `hero-background.webm` - Hero video backup format (WebM, <5MB)

**Video Specifications:**
- Duration: 10-20 seconds (looping)
- Resolution: 1920x1080 (Full HD minimum)
- Format: MP4 (H.264) + WebM for compatibility
- Size: Under 5MB for performance
- Content: Professional medical office or abstract medical imagery
- No audio required (muted autoplay)

### Images
- **Location:** `/public/images/`
- **Files Needed:**
  - `hero-poster.jpg` - Fallback poster image for video (1920x1080, <200KB)

### Award Logos
- **Location:** `/public/images/awards/`
- **Files Needed:**
  - `award-1.svg` - Board Certified logo
  - `award-2.svg` - Top Doctor 2024 logo
  - `award-3.svg` - Castle Connolly logo
  - `award-4.svg` - Fellow AACS logo

**Logo Specifications:**
- Format: SVG (preferred) or PNG with transparent background
- Size: 80x80px display size
- Colors: Should work on dark/light backgrounds
- High resolution for retina displays

### Fonts
- **Location:** `/public/fonts/`
- **Files Needed:**
  - `AzoSans-Black.woff2` - AzoSans Black font (primary format)
  - `AzoSans-Black.woff` - AzoSans Black font (fallback)
  - `Bhineka.woff2` - Bhineka script font (primary format)
  - `Bhineka.woff` - Bhineka script font (fallback)

**Font Specifications:**
- Format: WOFF2 (primary) + WOFF (fallback)
- License: Ensure commercial use is permitted
- Font weights: AzoSans Black (900), Bhineka (400)

---

## How to Add Assets

1. **Videos**: Place video files in `/public/videos/`
   - Compress videos using HandBrake or similar tool
   - Target bitrate: 2-3 Mbps for web delivery
   - Test autoplay behavior on mobile devices

2. **Images**: Place images in `/public/images/` or `/public/images/awards/`
   - Optimize images using ImageOptim, TinyPNG, or similar
   - Convert to WebP for additional performance gains
   - Provide fallback formats (JPEG/PNG)

3. **Fonts**: Place font files in `/public/fonts/`
   - Use Font Squirrel Webfont Generator for conversion
   - Subset fonts to reduce file size (Latin characters only)
   - Test font loading and fallback behavior

---

## Temporary Placeholders

Until real assets are provided:
- Hero video: Using poster image only
- Award logos: Using text placeholders with SVG circles
- Custom fonts: Falling back to system fonts (Poppins from Google Fonts is loaded)

---

**Last Updated:** 2026-02-10
