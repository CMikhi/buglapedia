# Buglapedia - Encyclopedia of Insect Orders

A comprehensive, responsive web encyclopedia dedicated to educating users about different insect orders. Buglapedia provides detailed information about insects including bees, beetles, butterflies, dragonflies, and assassin bugs.

## Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices with breakpoints at 768px and 480px
- **Mobile Navigation**: Hamburger menu for easy navigation on mobile devices
- **Comprehensive Information**: Detailed pages for each insect order with anatomy, behavior, species information, and ecological importance
- **Table of Contents**: Quick navigation links on each insect page
- **Featured Orders Table**: Landing page with a sortable table of featured insect orders
- **Resources Section**: Curated external links to educational resources
- **Contact Form**: Easy-to-use contact form for user inquiries
- **Modern UI**: Clean, professional design with an earthy color scheme

## Project Structure

```
buglapedia/
├── index.html              # Landing page with featured orders and introduction
├── assassinBugs.html       # Assassin Bugs encyclopedia page
├── bees.html               # Bees encyclopedia page
├── beetles.html            # Beetles encyclopedia page
├── butterflies.html        # Butterflies encyclopedia page
├── dragonflies.html        # Dragonflies encyclopedia page
├── aboutUs.html            # About page with project information
├── contactUs.html          # Contact page with inquiry form
├── styles.css              # Centralized styling with responsive design
├── images/                 # Project images directory
│   ├── logo.png
│   ├── bugChart.jpg
│   ├── ladybug Image.png
│   ├── Bee Image.png
│   ├── Beetle Image.png
│   ├── Butterfly Image.png
│   └── Dragonfly Image.png
└── README.md              # This file
```

## Pages Overview

### index.html
- Welcome message and project introduction
- Featured Orders table showcasing 5 insect orders
- Getting Started guide
- Resources section with 5 educational links
- Bug chart image for visual reference

### Insect Order Pages (assassinBugs.html, bees.html, beetles.html, butterflies.html, dragonflies.html)
Each insect page includes:
- High-quality insect image
- Quick search navigation
- Detailed information sections
- Table of Contents for easy navigation
- Related links section

### aboutUs.html
- Project origin and inspiration
- Reference to NWACC (Northwest Arkansas Community College)
- Featured image

### contactUs.html
- Contact inquiry form with fields for:
  - First and last name
  - Email address
  - Message
- Contact information with clickable email and phone links
- Responsive design for all screen sizes

## Design System

### Color Palette
- **Header**: #5e5349 (warm brown)
- **Sidebar**: #3D352D (dark brown)
- **Accent Green**: #6b7c5e (nature green)
- **Text Dark**: #3d3d3d (dark grey)
- **Background**: #e8e4de (light beige)

### Typography
- Font Family: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- Responsive font sizes that scale with breakpoints

## Responsive Breakpoints

### Desktop (1024px and above)
- Full-width sidebar navigation
- Two-column form layout
- Desktop table views

### Tablet (768px - 1023px)
- Hamburger menu navigation
- Collapsible sidebar with expandable nav groups
- Responsive images and spacing

### Mobile (480px - 767px)
- Full-screen hamburger menu
- Single-column layouts
- Card-style table conversions
- Optimized touch targets

### Small Mobile (below 480px)
- Extra condensed padding
- Smaller font sizes
- Stacked form fields
- Full-width buttons

## Navigation

### Desktop Navigation
- Top header with logo, search bar, and main navigation links
- Fixed left sidebar with insect orders grouped by category
- Quick access to Home, About Us, and Contact Us

### Mobile Navigation
- Hamburger menu triggered by clicking the menu button
- Expandable navigation groups:
  - **BROWSE**: All Orders link
  - **INSECT ORDERS**: Links to all 5 insect pages
  - **EXPLORE**: About Us and Contact Us links

## JavaScript Features

- **Menu Toggle**: Click hamburger menu to open/close mobile sidebar
- **Group Expand/Collapse**: Click nav group titles on mobile to expand/collapse options
- **Responsive Behavior**: Navigation groups collapse/expand based on screen size

## Styling Architecture

- **CSS Variables**: Centralized color and spacing management using CSS custom properties
- **Flexbox & Grid**: Modern layout techniques for responsive design
- **Media Queries**: Mobile-first approach with breakpoint-specific styling
- **Semantic HTML**: Clean, accessible HTML structure

## Key Features Implementation

### Responsive Tables
Mobile views convert traditional tables into card-style layouts with data labels for better readability on small screens.

### Image Optimization
Individual insect images are optimized with specific sizing rules to ensure proper display across all pages and device sizes.

### Form Responsiveness
Contact form converts from 2-column grid on desktop to single-column stack on mobile devices.

### Mobile-First Navigation
Sidebar transforms from fixed left navigation on desktop to collapsible hamburger menu on mobile, with expandable categories.

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design adapts to any screen size

## Getting Started

1. Clone or download the project files
2. Open `index.html` in a web browser
3. Navigate using the sidebar (desktop) or hamburger menu (mobile)
4. Explore different insect orders
5. Use the contact form to send inquiries
6. Check out external resources on the landing page

## External Resources

- Wikipedia - Beetles
- National Wildlife Federation - Bees
- UC ANR - Assassin Bugs
- Smithsonian - Butterflies
- Wikipedia - Dragonflies

## Contact

For inquiries, visit the Contact Us page or use the contact form provided. Email contact: buglapedia@gmail.com | Phone: (479) 555-1234

## License

This project is created for educational purposes.

---

**Buglapedia** - Your complete guide to insect orders
