# 📦 Component Reference Guide

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── page.js                    ← Main entry point
│   ├── layout.js                  ← Root layout (updated)
│   ├── globals.css                ← Global styles (updated)
│   └── home/
│       └── new.jsx                ← ✅ CLEARED
│
├── components/
│   └── home/
│       ├── Header.jsx             ← Navigation & Profile
│       ├── HeroSection.jsx        ← Introduction
│       ├── SkillsSection.jsx      ← Tech Stack
│       ├── FeaturedSections.jsx   ← Feature Cards
│       └── HomePage.jsx           ← Main Layout
│
├── contexts/
│   ├── ThemeContext.js            ← Dark mode
│   └── AuthContext.js             ← Authentication
│
├── lib/
│   ├── firebase.js                ← Firebase config
│   └── firebaseConfig.js          ← Firebase setup
│
└── public/
    └── images/                    ← Static assets
```

---

## 🧩 Component Breakdown

### 1. **Header.jsx** (Navigation Sidebar)
```jsx
Location: components/home/Header.jsx
Purpose: Main navigation and profile section
Features:
  - Profile image and name
  - Navigation menu (Home, About, Projects, Contact)
  - Language toggle (US/AR)
  - Theme toggle (Light/Dark)
  - Copyright footer
  - Responsive sidebar
```

**Key Props**: None (self-contained)

**Dependencies**:
- next/image
- next/link

---

### 2. **HeroSection.jsx** (Introduction)
```jsx
Location: components/home/HeroSection.jsx
Purpose: Main introduction and bio
Features:
  - Name heading
  - Location and work status
  - Professional description
  - Responsive layout
```

**Key Props**: None (static content)

**Customization**:
- Edit name in h1
- Update location in ul
- Modify bio in p tag

---

### 3. **SkillsSection.jsx** (Technology Stack)
```jsx
Location: components/home/SkillsSection.jsx
Purpose: Display technology skills
Features:
  - 14 technology icons
  - 3D hover effects
  - Responsive grid
  - Animated tooltips
```

**Technologies Included**:
1. Cloudinary
2. CSS3
3. Express
4. Firebase
5. Git
6. Github
7. HTML5
8. JavaScript
9. MongoDB
10. Next.js
11. Node.js
12. React
13. Tailwind CSS
14. Vercel

**To Add More Skills**:
```jsx
const skills = [
  ...existing,
  { 
    name: 'NewTech', 
    color: 'bg-color-class', 
    icon: 'svg-path-data' 
  }
];
```

---

### 4. **FeaturedSections.jsx** (Feature Cards)
```jsx
Location: components/home/FeaturedSections.jsx
Purpose: Showcase main sections
Features:
  - 6 feature cards
  - Responsive grid
  - Hover effects
  - Link navigation
```

**Cards Included**:
1. **Projects Showcase** (2 cols)
   - Link: /projects
   - Shows project thumbnails

2. **About Me** (1 col)
   - Link: /about
   - Profile image

3. **Skills & Tools** (1 col)
   - Link: /
   - Technology overview

4. **Achievements** (1 col)
   - Link: /achievements
   - Certificates display

5. **Chat Room** (1 col)
   - Link: /chat
   - Message preview

6. **Services** (2 cols)
   - Link: /
   - Service categories

---

### 5. **HomePage.jsx** (Main Layout)
```jsx
Location: components/home/HomePage.jsx
Purpose: Combine all sections
Structure:
  - Container wrapper
  - Header (sidebar)
  - Main content area
    - HeroSection
    - Divider
    - SkillsSection
    - Divider
    - FeaturedSections
```

**Layout Classes**:
- `max-w-7xl` - Container width
- `lg:px-12` - Large screen padding
- `force-ltr` - Left-to-right direction

---

## 🎨 CSS Classes Reference

### Brand Classes
```css
.brand-bg              → Blue gradient background
.force-ltr             → Force left-to-right
.arabic-rtl            → Arabic RTL support
.arabic-semibold       → Font weight 600
.arabic-text-xs        → Font size 0.875rem
.arabic-bold           → Font weight 700
```

### Utility Classes
```css
.sidebar-scroll        → Custom scrollbar
.scrollbar-hide        → Hide scrollbar
.perspective-[24em]    → 3D perspective
.transform-3d          → 3D transforms
.aos-init              → Animation init
.aos-animate           → Animation active
```

---

## 🔧 Customization Guide

### Change Profile Information
**File**: `components/home/Header.jsx`
```jsx
// Line 15-20: Update image
<Image
  src="YOUR_IMAGE_URL"
  alt="Your Name"
/>

// Line 25: Update name
<h2>Your Name</h2>

// Line 30: Update title
<div>Your Title</div>
```

### Change Hero Content
**File**: `components/home/HeroSection.jsx`
```jsx
// Line 5: Update name
<h1>Hi, I'm Your Name</h1>

// Line 11-13: Update details
<li>Your Location</li>
<li>Your Status</li>

// Line 16: Update bio
<p>Your bio here...</p>
```

### Add/Remove Skills
**File**: `components/home/SkillsSection.jsx`
```jsx
// Line 1-15: Add to skills array
const skills = [
  { name: 'NewSkill', color: 'bg-blue-500', icon: 'path' }
];
```

### Modify Feature Cards
**File**: `components/home/FeaturedSections.jsx`
```jsx
// Each card is a div with:
- Link href
- Icon SVG
- Title h2
- Description p
```

---

## 🚀 Usage Examples

### Import HomePage
```jsx
// app/page.js
import HomePage from '@/components/home/HomePage';

export default function Page() {
  return <HomePage />;
}
```

### Use Individual Components
```jsx
import Header from '@/components/home/Header';
import HeroSection from '@/components/home/HeroSection';

export default function CustomPage() {
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
}
```

---

## 📱 Responsive Breakpoints

```css
sm:  640px   → Small devices
md:  768px   → Medium devices
lg:  1024px  → Large devices
xl:  1280px  → Extra large
2xl: 1536px  → 2X Extra large
```

---

## 🎯 Key Features

✅ **Modular Components** - Easy to reuse
✅ **Responsive Design** - Mobile-first
✅ **Dark Mode** - Full support
✅ **3D Effects** - Smooth animations
✅ **SEO Optimized** - Next.js benefits
✅ **Type Safe** - JSX components
✅ **Fast Loading** - Image optimization

---

## 📝 Notes

- All components use Next.js 13+ App Router
- Images use next/image for optimization
- Styling with Tailwind CSS
- Dark mode via ThemeContext
- Firebase for backend features

---

**Quick Reference**: Keep this file handy for component modifications!
