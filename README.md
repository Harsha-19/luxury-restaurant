# 🍷 Aurum Dining - Luxury Restaurant Landing Page

A premium, high-converting restaurant landing page built with **Next.js 15+, TypeScript, Tailwind CSS, and Framer Motion**.

Designed for fine dining restaurants, luxury cafes, bistros, and modern hospitality brands looking to increase reservations, direct orders, and brand credibility.

---

## ✨ Features

### Premium UI/UX

* Modern Glassmorphism Design
* Luxury Typography
* Responsive Layouts
* Mobile-First Design
* Dark Theme Aesthetic
* Smooth Scrolling Experience

### Interactive Components

* Floating Navigation Bar
* Animated Hero Section
* Featured Dishes Showcase
* Restaurant Story Timeline
* Masonry Food Gallery
* Customer Review Carousel
* Multi-Step Reservation Form
* WhatsApp Ordering CTA
* Interactive Location Section
* Conversion-Focused Final CTA

### Animations

* Framer Motion Scroll Animations
* Hover Effects
* Card Tilt Effects
* Floating Statistics
* Glass Reflection Effects
* Fade-In Transitions
* Staggered Content Loading
* Smooth Page Interactions

### SEO Optimized

* Metadata Configuration
* Open Graph Tags
* Twitter Cards
* Restaurant Schema Markup
* Canonical URLs
* Sitemap Ready
* Robots.txt Ready

### Performance Optimized

* Next.js Image Optimization
* Lazy Loading
* Responsive Images
* Lighthouse Optimized
* Production Ready

---

# 🏗️ Tech Stack

| Technology      | Purpose            |
| --------------- | ------------------ |
| Next.js 15+     | Frontend Framework |
| TypeScript      | Type Safety        |
| Tailwind CSS    | Styling            |
| Framer Motion   | Animations         |
| React Hook Form | Forms              |
| Zod             | Validation         |
| Lucide React    | Icons              |
| Next/Image      | Image Optimization |
| Vercel          | Deployment         |

---

# 📂 Project Structure

```text
src/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
│
├── data/
│   └── mockData.ts
│
├── hooks/
│
├── lib/
│   └── utils.ts
│
├── types/
│
└── public/
    ├── images/
    └── videos/
```

---

# 🚀 Getting Started

## Prerequisites

Install:

* Node.js 20+
* npm / pnpm / yarn

Verify installation:

```bash
node -v
npm -v
```

---

## Clone Repository

```bash
git clone <repository-url>
cd luxury-restaurant
```

---

## Install Dependencies

```bash
npm install
```

or

```bash
pnpm install
```

---

## Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# ⚙️ Environment Variables

Create a file:

```bash
.env.local
```

Example:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=919999999999

NEXT_PUBLIC_GOOGLE_MAPS_URL=https://maps.google.com

NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

# 🖼️ Image Configuration

All images are stored locally inside:

```text
public/images/
```

Example:

```text
public/images/
├── hero.jpg
├── dish-1.jpg
├── dish-2.jpg
├── gallery-1.jpg
├── gallery-2.jpg
└── reviews/
```

If using external image providers such as Unsplash, update:

```ts
next.config.ts
```

Example:

```ts
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "images.unsplash.com",
    },
  ],
}
```

---

# 🧪 Development Commands

## Start Development

```bash
npm run dev
```

## Build Production

```bash
npm run build
```

## Start Production Server

```bash
npm run start
```

## Run Linting

```bash
npm run lint
```

---

# 🎨 Design System

## Colors

```css
Background:
#080808

Primary:
#F59E0B

Primary Hover:
#D97706

Text:
#FFFFFF

Secondary Text:
#B3B3B3

Glass:
rgba(255,255,255,0.08)
```

---

## Fonts

### Heading

```text
Playfair Display
```

### Body

```text
Inter
```

---

# 📱 Responsive Breakpoints

```text
Mobile
320px+

Tablet
768px+

Laptop
1024px+

Desktop
1440px+

Ultra Wide
1920px+
```

---

# 📋 Main Sections

## Hero

Luxury dining introduction.

### Includes

* Background Image/Video
* Statistics
* CTA Buttons
* Animated Content

---

## Featured Dishes

Premium menu showcase.

### Includes

* Dish Cards
* Ratings
* Pricing
* Hover Animations

---

## Restaurant Story

Brand narrative and timeline.

### Includes

* Company History
* Philosophy
* Awards

---

## Gallery

Visual food experience.

### Includes

* Masonry Layout
* Hover Effects
* Image Zoom

---

## Reviews

Customer testimonials.

### Includes

* Carousel
* Ratings
* Customer Profiles

---

## Reservations

Reservation form.

### Includes

* Validation
* Success State
* Loading State

---

## WhatsApp Orders

Direct order conversion section.

---

## Location

Maps and contact information.

---

# 🔍 SEO Features

Implemented:

* Meta Titles
* Meta Descriptions
* Open Graph
* Twitter Metadata
* Restaurant Schema
* Canonical URLs

---

# ♿ Accessibility

Implemented:

* Keyboard Navigation
* Focus States
* ARIA Labels
* Reduced Motion Support
* Semantic HTML

---

# 🚀 Deployment

## Vercel

```bash
npm run build
```

Push repository to GitHub.

Import project into Vercel.

Add environment variables.

Deploy.

---

## Netlify

```bash
npm run build
```

Build Command:

```bash
npm run build
```

Publish Directory:

```text
.next
```

---

# 📈 Lighthouse Targets

| Category       | Target |
| -------------- | ------ |
| Performance    | 95+    |
| Accessibility  | 95+    |
| Best Practices | 95+    |
| SEO            | 100    |

---

# 🔮 Future Enhancements

* Online Table Booking API
* Admin Dashboard
* CMS Integration
* Stripe Payments
* Loyalty Program
* Multi-Language Support
* Email Notifications
* Reservation Management System

---

# 👨‍💻 Author

Built as a premium commercial-grade landing page template for restaurants, cafes, fine dining establishments, and hospitality brands.

---

## License

This project is intended for commercial and educational use. Modify and customize according to your business requirements.
