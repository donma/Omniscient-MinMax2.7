# Spark Academy Education Template - AI Prompt

## Template Overview
Create a complete, production-ready education/training website template called "Spark Academy" featuring a modern card-based layout with progress tracking system.

## Design Specifications

### Color Palette
- Bright Yellow: #F7C948 (primary accent)
- Deep Blue: #1E3A5F (primary brand color)
- White: #FFFFFF (backgrounds)
- Additional colors defined in CSS variables

### Typography
- Headings: Poppins (Google Fonts)
- Body: Inter (Google Fonts)

### CSS Requirements
- Minimum 450+ lines
- Completely unique CSS (no shared classes)
- Design tokens defined at top with CSS custom properties
- Responsive design with mobile-first approach

### CSS Structure
1. `.header` — fixed top navigation with white bg, Poppins logo in blue, yellow underline on active nav link
2. `.hero` — full-width blue (#1E3A5F) bg, white text, giant Poppins headline, yellow CTA button. NOT split-screen
3. `.step-tracker` — horizontal progress tracker with 4 numbered steps, yellow fill on completed steps, connecting line
4. `.course-card` — white bg card with thumbnail img (full width top), category tag (yellow), course title, instructor avatar + name, star rating, price, "Enroll" button, hover: lift shadow
5. `.stat-item` — center-aligned, giant Poppins bold number in yellow, label below
6. `.mentor-card` — circle avatar img, name, title, social links
7. `.pricing-card` — white card, plan name, price, feature list with checkmarks, highlighted plan has blue border
8. `.faq-item` — accordion with smooth expand, question hover blue
9. `.btn-yellow` — yellow bg, dark text, hover: darker yellow
10. `.grid-3`, `.grid-4` — uniform card grids
11. `.section`, `.section-alt` — standard section wrappers
12. Responsive: mobile collapses grids to 1 col, step-tracker becomes vertical

## Page Requirements

### 12 HTML Pages Required
1. **index.html** - Homepage with hero, step tracker, popular courses, stats, mentors, pricing
2. **about.html** - Company story, mission, values, timeline, team
3. **courses.html** - Full course listing with filters
4. **course-detail.html** - Single course with syllabus, enrollment card
5. **mentors.html** - Mentor profiles with bios and social links
6. **pricing.html** - Pricing plans with comparison table
7. **testimonials.html** - Student success stories and testimonials
8. **faq.html** - Accordion-style FAQ
9. **blog.html** - Blog listing
10. **blog-detail.html** - Single blog post
11. **contact.html** - Contact form and information
12. **careers.html** - Job listings and benefits

### Common Elements
- Same `.header` navigation on all pages
- `.page-hero` on inner pages (blue bg, white text, page title + breadcrumb)
- FontAwesome CDN for icons
- Google Fonts import (Poppins + Inter)
- Realistic Chinese content throughout

## Content Requirements
- All Chinese content must be realistic (course names, descriptions, mentor names)
- Use Unsplash for images with proper sizing (?w=1200&q=85 for heroes, ?w=800&q=85 for content)
- Complete, valid HTML with proper DOCTYPE and meta tags
- No truncation - complete files only

## Assets Structure
```
template-018-spark-academy/
├── assets/
│   ├── css/
│   │   └── style.css (450+ lines)
│   └── js/
│       └── main.js (nav toggle + FAQ accordion)
├── index.html
├── about.html
├── courses.html
├── course-detail.html
├── mentors.html
├── pricing.html
├── testimonials.html
├── faq.html
├── blog.html
├── blog-detail.html
├── contact.html
├── careers.html
├── prompt.md
├── tags.json
├── template.json
├── README.md
└── image-sources.md
```

## index.html Structure
```
<header class="header"> with nav links + "Enroll Now" yellow button
<section class="hero"> — big headline "Unlock Your Potential", subtext, yellow CTA button
<div class="step-tracker"> — 4 steps: Explore → Enroll → Learn → Certify
<section class="section-alt"> — "Popular Courses" heading + 6 course-card grid
<section class="section"> — 4 stats (Students, Courses, Mentors, Countries) with big numbers
<section class="section-alt"> — "Meet Our Mentors" + mentor-card grid (3)
<section class="section"> — 3 pricing-card (Basic, Pro highlighted, Enterprise)
<footer> — dark blue bg, white text
```

## JavaScript Requirements
- Mobile navigation toggle
- FAQ accordion functionality
- Back to top button
- Scroll animations for cards

## Additional Files Required

### prompt.md
Full AI prompt documenting the template creation requirements

### tags.json
```json
{
  "id": "template-018",
  "name": "Spark Academy",
  "category": "教育培訓",
  "tags": ["教育", "培訓", "卡片方格", "亮黃", "進度追蹤"],
  "colorScheme": {
    "bg": "#FFFFFF",
    "yellow": "#F7C948",
    "blue": "#1E3A5F"
  },
  "fonts": {
    "heading": "Poppins",
    "body": "Inter"
  }
}
```

### template.json
Full template configuration with all 12 pages, metadata, and structure

### README.md
Chinese documentation, 15+ lines, covering template features, structure, and usage

### image-sources.md
10+ Unsplash education-related image URLs with attribution