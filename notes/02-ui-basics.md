# 📘 Summary: UI Basics (Frontend)

---

## 🔹 1. HTML5 / Semantics

**Purpose:** structure and content of a web page.

### Document Structure

**Basic template:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
  <link rel="icon" href="favicon.ico">
</head>
<body>
  <header>Header</header>
  <nav>Navigation</nav>
  <main>
    <section>Section</section>
    <article>Article</article>
    <aside>Sidebar</aside>
  </main>
  <footer>Footer</footer>
  <script src="script.js"></script>
</body>
</html>
```

### Semantic Elements

**Semantic tags:** `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<aside>` — useful for SEO and accessibility.

**Content Structure:**
```html
<article>
  <h1>Article Title</h1>
  <p>Paragraph with <strong>bold</strong> and <em>italic</em> text</p>
  <blockquote cite="source">Quote with citation</blockquote>
  <figure>
    <img src="image.jpg" alt="Description">
    <figcaption>Image caption</figcaption>
  </figure>
</article>
```

### HTML5 Input Types

**Modern Input Types:**
```html
<input type="email" placeholder="Email">
<input type="tel" placeholder="Phone">
<input type="url" placeholder="Website">
<input type="date">
<input type="time">
<input type="number" min="1" max="100">
<input type="range" min="0" max="100">
<input type="color">
<input type="file" accept="image/*">
```

⚡️ **Interview tip:** difference between `<div>` and semantic tags, and explain HTML5 form validation attributes.

**Answer:**
- **`<div>` vs semantic tags:** `<div>` has no semantic meaning - it's just a container. Semantic tags like `<header>`, `<nav>`, `<main>`, `<article>` have meaning for browsers, screen readers, and SEO. They improve accessibility and help search engines understand page structure.
- **HTML5 validation:** Built-in attributes like `required`, `pattern`, `min/max`, `minlength/maxlength` provide client-side validation without JavaScript. Example: `<input type="email" required>` automatically validates email format.

**Answer:**
- **`<div>` vs semantic tags:** `<div>` has no semantic meaning - it's just a container. Semantic tags like `<header>`, `<nav>`, `<main>`, `<article>` have meaning for browsers, screen readers, and SEO. They improve accessibility and help search engines understand page structure.
- **HTML5 validation:** Built-in attributes like `required`, `pattern`, `min/max`, `minlength/maxlength` provide client-side validation without JavaScript. Example: `<input type="email" required>` automatically validates email format.

---

## 🔹 2. CSS / Box Model

**Box model:** every element has:
- content  
- padding (inner space)  
- border  
- margin (outer space)  

### Box Model Visualization

**ASCII схема box model:**
```
┌─────── margin ───────┐
│  ┌──── border ────┐  │
│  │  ┌─ padding ─┐ │  │
│  │  │  content  │ │  │
│  │  └──────────┘ │  │
│  └────────────────┘  │
└──────────────────────┘
```

**Box Model Example:**
```css
div {
  width: 200px;          /* content width */
  height: 100px;         /* content height */
  padding: 20px;         /* inner space */
  border: 2px solid black; /* border */
  margin: 10px;          /* outer space */
  box-sizing: border-box; /* includes padding & border in width */
}
```

⚡️ **Interview tip:** What is the CSS box model and how does it work?

**Answer:**
The CSS box model describes how elements are structured and how their dimensions are calculated. Every element consists of four areas:
- **Content:** The actual content (text, images)
- **Padding:** Space between content and border (transparent)
- **Border:** The border around padding and content
- **Margin:** Space outside the border (transparent)

By default, width/height only applies to content. With `box-sizing: border-box`, width/height includes content + padding + border, making responsive design easier.

---

## 🔹 2. CSS / Box Model

**Box model:** every element has:
- content  
- padding (inner space)  
- border  
- margin (outer space)  

### Box Model Visualization

**ASCII схема box model:**
```
┌─────── margin ───────┐
│  ┌──── border ────┐  │
│  │  ┌─ padding ─┐ │  │
│  │  │  content  │ │  │
│  │  └──────────┘ │  │
│  └────────────────┘  │
└──────────────────────┘
```

**Box Model Example:**
```css
div {
  width: 200px;          /* content width */
  height: 100px;         /* content height */
  padding: 20px;         /* inner space */
  border: 2px solid black; /* border */
  margin: 10px;          /* outer space */
  box-sizing: border-box; /* includes padding & border in width */
}
```

### CSS Selectors

**Basic Selectors:**
```css
.class-name { }           /* class selector */
#unique-id { }            /* ID selector */
div { }                   /* element selector */
* { }                     /* universal selector */
```

**Advanced Selectors:**
```css
div p { }                 /* descendant */
div > p { }               /* direct child */
div + p { }               /* adjacent sibling */
div ~ p { }               /* general sibling */
```

**Pseudo-classes:**
```css
:hover                    /* mouse over */
:focus                    /* focused element */
:active                   /* being clicked */
:first-child              /* first child element */
:last-child               /* last child element */
:nth-child(2)             /* second child */
:nth-child(odd)           /* odd children */
:nth-child(even)          /* even children */
```

### CSS Positioning

**Position Properties:**
```css
.static { position: static; }     /* default, normal flow */
.relative { position: relative; } /* relative to normal position */
.absolute { position: absolute; } /* relative to nearest positioned parent */
.fixed { position: fixed; }       /* relative to viewport */
.sticky { position: sticky; }     /* sticky scrolling */
```

⚡️ **Interview tip:** explain box model, difference between `position: absolute / relative / fixed`, and what `box-sizing: border-box` does.

**Answer:**
- **Box model:** Every element has content → padding → border → margin from inside out. Total width = content + padding + border + margin.
- **Positioning:** `relative` - positioned relative to its normal position; `absolute` - positioned relative to nearest positioned parent; `fixed` - positioned relative to viewport (stays in place when scrolling).
- **`box-sizing: border-box`:** Makes width/height include padding and border, not just content. Makes responsive design easier to calculate.

**Answer:**
- **Box model:** Every element has content → padding → border → margin from inside out. Total width = content + padding + border + margin.
- **Positioning:** `relative` - positioned relative to its normal position; `absolute` - positioned relative to nearest positioned parent; `fixed` - positioned relative to viewport (stays in place when scrolling).
- **`box-sizing: border-box`:** Makes width/height include padding and border, not just content. Makes responsive design easier to calculate.

---

## 🔹 3. UI/UX Basics

### Typography & Colors

**Font Properties:**
```css
body {
  font-family: 'Roboto', Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.5px;
}
```

**Google Fonts Integration:**
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
```

**Color Systems:**
```css
/* HEX Colors */
color: #ff0000;           /* red */
color: #00ff00;           /* green */
color: #0000ff;           /* blue */

/* RGB Colors */
color: rgb(255, 0, 0);    /* red */
background: rgba(255, 0, 0, 0.5); /* red with 50% opacity */

/* HSL Colors */
color: hsl(0, 100%, 50%); /* red */
background: hsla(0, 100%, 50%, 0.5); /* red with 50% opacity */
```

### Icon Implementation

**Icon Methods:**
```html
<!-- FontAwesome -->
<i class="fas fa-home"></i>

<!-- Material Icons -->
<i class="material-icons">home</i>

<!-- SVG Icons -->
<svg width="24" height="24" viewBox="0 0 24 24">
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
</svg>
```

### Color Theory Basics

**Color Combinations:**
- **Primary:** Red, Blue, Yellow
- **Secondary:** Orange, Green, Purple  
- **Complementary:** Opposite on color wheel
- **Analogous:** Adjacent on color wheel
- **Triadic:** Three equally spaced colors

⚡️ **Interview tip:** What is color theory and how do you ensure good color contrast for accessibility?

**Answer:**
Color theory helps create harmonious designs:
- **Complementary colors:** Create high contrast and vibrant look (red/green, blue/orange)
- **Analogous colors:** Create serene and comfortable designs (blue/blue-green/green)
- **Triadic colors:** Create vibrant yet balanced designs

For accessibility, WCAG guidelines require:
- **4.5:1 contrast ratio** for normal text (18px or smaller)
- **3:1 contrast ratio** for large text (18px+ bold or 24px+ regular)
- Don't rely on color alone to convey information
- Test with tools like WebAIM Contrast Checker or browser dev tools

⚡️ **Interview tip:** difference between serif and sans-serif fonts, when to use each, and explain color accessibility (contrast ratios).

**Answer:**
- **Serif fonts:** Have small decorative strokes (Times New Roman). Better for long-form reading, traditional/formal content, print materials.
- **Sans-serif fonts:** Clean without strokes (Arial, Helvetica). Better for digital screens, modern/clean design, UI elements.
- **Color accessibility:** WCAG requires 4.5:1 contrast ratio for normal text, 3:1 for large text. Use tools like WebAIM contrast checker. Consider colorblind users - don't rely on color alone for information.

**Answer:**
- **Serif fonts:** Have small decorative strokes (Times New Roman). Better for long-form reading, traditional/formal content, print materials.
- **Sans-serif fonts:** Clean without strokes (Arial, Helvetica). Better for digital screens, modern/clean design, UI elements.
- **Color accessibility:** WCAG requires 4.5:1 contrast ratio for normal text, 3:1 for large text. Use tools like WebAIM contrast checker. Consider colorblind users - don't rely on color alone for information.

---

## 🔹 4. Forms

### Form Elements

**Input Types:**
```html
<form method="POST" action="/submit">
  <!-- Text inputs -->
  <input type="text" name="username" placeholder="Username" required>
  <input type="email" name="email" placeholder="Email" required>
  <input type="password" name="password" placeholder="Password" required>
  
  <!-- Selection inputs -->
  <input type="checkbox" id="newsletter" name="newsletter" value="yes">
  <label for="newsletter">Subscribe to newsletter</label>
  
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Male</label>
  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Female</label>
  
  <!-- Dropdown -->
  <select name="country">
    <option value="">Select Country</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
  </select>
  
  <!-- Text area -->
  <textarea name="message" rows="4" cols="50" placeholder="Your message"></textarea>
  
  <!-- File upload -->
  <input type="file" name="avatar" accept="image/*">
  
  <!-- Submit button -->
  <button type="submit">Submit</button>
</form>
```

### Form Validation

**HTML5 Validation:**
```html
<input type="email" required>                    <!-- required field -->
<input type="text" minlength="3" maxlength="20"> <!-- length limits -->
<input type="number" min="1" max="100">          <!-- number range -->
<input type="text" pattern="[A-Za-z]{3}">       <!-- regex pattern -->
```

**CSS Form Styling:**
```css
input:valid { border-color: green; }
input:invalid { border-color: red; }
input:focus { outline: 2px solid blue; }
```

### Form Accessibility

**Accessible Forms:**
```html
<label for="username">Username:</label>
<input type="text" id="username" name="username" aria-describedby="username-help">
<small id="username-help">Must be at least 3 characters</small>
```

⚡️ **Interview tip:** Why are form labels important and how do you make forms accessible?

**Answer:**
Form labels are crucial for accessibility and UX:
- **Screen reader support:** Labels are announced when users focus on inputs
- **Click target:** Clicking label focuses the associated input (better UX)
- **Form validation:** Properly labeled fields provide better error messages

Best practices:
- Always use `<label>` with `for` attribute matching input `id`
- Or wrap input inside label: `<label>Name: <input type="text"></label>`
- Add `aria-describedby` for additional help text
- Use `fieldset` and `legend` for grouped inputs (radio buttons)
- Provide clear error messages and instructions

⚡️ **Interview tip:** difference between `GET` and `POST` methods, form validation techniques, and importance of labels for accessibility.

**Answer:**
- **GET vs POST:** GET appends data to URL (visible, limited length, cacheable) - used for search/filtering. POST sends data in request body (hidden, unlimited length, not cached) - used for submitting sensitive data.
- **Form validation:** Client-side (HTML5 attributes, JavaScript) for UX; Server-side validation for security (never trust client data). Use both together.
- **Labels:** `<label>` elements are crucial for screen readers. Use `for` attribute matching input `id`, or wrap input inside label. Improves accessibility and UX (clicking label focuses input).

**Answer:**
- **GET vs POST:** GET appends data to URL (visible, limited length, cacheable) - used for search/filtering. POST sends data in request body (hidden, unlimited length, not cached) - used for submitting sensitive data.
- **Form validation:** Client-side (HTML5 attributes, JavaScript) for UX; Server-side validation for security (never trust client data). Use both together.
- **Labels:** `<label>` elements are crucial for screen readers. Use `for` attribute matching input `id`, or wrap input inside label. Improves accessibility and UX (clicking label focuses input).

---

## 🔹 5. Responsive Design

### Mobile-First Approach

**Mobile-First Strategy:**
```css
/* Base styles (mobile) */
.container {
  width: 100%;
  padding: 10px;
}

/* Tablet styles */
@media (min-width: 768px) {
  .container {
    max-width: 750px;
    margin: 0 auto;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    padding: 20px;
  }
}
```

### Media Query Breakpoints

**Common Breakpoints:**
```css
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) { }

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) { }

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) { }

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) { }

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) { }
```

### CSS Units Comparison

⚡️ **Interview tip:** difference between CSS units:

**Answer:**
- **`px` (pixels):** Absolute unit, always same size regardless of parent/root. Use for borders, small fixed elements, precise control.
- **`%` (percentage):** Relative to parent element's size. Use for responsive widths, fluid layouts. If parent is 400px wide, 50% = 200px.
- **`em`:** Relative to current element's font-size. If font-size is 16px, 1em = 16px, 2em = 32px. Can compound (nested elements multiply).
- **`rem` (root em):** Relative to root element's font-size only. More predictable than em, doesn't compound. Best for consistent spacing and typography.

| Unit | Description | Use Case | Example | Best For |
|------|-------------|----------|---------|----------|
| `px` | Absolute pixels | Fixed sizes, borders | `font-size: 16px` | Borders, small fixed elements |
| `%` | Relative to parent | Responsive widths | `width: 50%` | Layout widths, responsive design |
| `em` | Relative to current font-size | Scalable spacing | `margin: 1.5em` | Component-based scaling |
| `rem` | Relative to root font-size | Consistent scaling | `font-size: 1.2rem` | Typography, consistent spacing |
| `vw` | Viewport width percentage | Full-width elements | `width: 100vw` | Hero sections, full-screen |
| `vh` | Viewport height percentage | Full-height elements | `height: 100vh` | Full-screen sections |

### Responsive Images

**Responsive Image Techniques:**
```css
/* Flexible images */
img {
  max-width: 100%;
  height: auto;
}

/* Responsive background images */
.hero {
  background-image: url('mobile.jpg');
  background-size: cover;
  background-position: center;
}

@media (min-width: 768px) {
  .hero {
    background-image: url('desktop.jpg');
  }
}
```

⚡️ **Interview tip:** How do you make images responsive and what are the different techniques?

**Answer:**
Several techniques for responsive images:
1. **CSS approach:** `max-width: 100%; height: auto;` - image scales down but never larger than original
2. **HTML srcset:** `<img srcset="small.jpg 500w, large.jpg 1000w" sizes="100vw">` - browser chooses appropriate size
3. **Picture element:** Different images for different conditions
```html
<picture>
  <source media="(max-width: 600px)" srcset="mobile.jpg">
  <source media="(max-width: 1200px)" srcset="tablet.jpg">
  <img src="desktop.jpg" alt="Description">
</picture>
```
4. **CSS background images:** Use media queries to serve different images
5. **Modern formats:** Use WebP with fallbacks for better compression

⚡️ **Interview tip:** explain mobile-first vs desktop-first approach, viewport meta tag importance, and responsive image techniques.

**Answer:**
- **Mobile-first:** Start with mobile styles, add complexity for larger screens with `min-width` media queries. Results in better performance, forces prioritizing content, easier to scale up than down.
- **Viewport meta tag:** `<meta name="viewport" content="width=device-width, initial-scale=1.0">` tells browser how to scale page. Without it, mobile browsers zoom out to fit desktop layout.
- **Responsive images:** Use `max-width: 100%; height: auto;` for flexible sizing. `<picture>` element or `srcset` attribute for different image sizes. CSS `background-size: cover/contain` for background images.

**Answer:**
- **Mobile-first:** Start with mobile styles, add complexity for larger screens with `min-width` media queries. Results in better performance, forces prioritizing content, easier to scale up than down.
- **Viewport meta tag:** `<meta name="viewport" content="width=device-width, initial-scale=1.0">` tells browser how to scale page. Without it, mobile browsers zoom out to fit desktop layout.
- **Responsive images:** Use `max-width: 100%; height: auto;` for flexible sizing. `<picture>` element or `srcset` attribute for different image sizes. CSS `background-size: cover/contain` for background images.

---

## 🔹 6. Layouts

### Flexbox Layout

**Flexbox Container Properties:**
```css
.flex-container {
  display: flex;
  flex-direction: row;        /* row | row-reverse | column | column-reverse */
  flex-wrap: wrap;           /* nowrap | wrap | wrap-reverse */
  justify-content: center;   /* flex-start | flex-end | center | space-between | space-around | space-evenly */
  align-items: center;       /* flex-start | flex-end | center | stretch | baseline */
  align-content: center;     /* flex-start | flex-end | center | stretch | space-between | space-around */
  gap: 20px;                /* spacing between items */
}
```

**Flexbox Item Properties:**
```css
.flex-item {
  flex-grow: 1;     /* how much to grow */
  flex-shrink: 1;   /* how much to shrink */
  flex-basis: auto; /* initial size */
  align-self: center; /* override align-items */
  order: 2;         /* change visual order */
}
```

### CSS Grid Layout

**Grid Container:**
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  grid-template-rows: auto 1fr auto;     /* header, content, footer */
  grid-gap: 20px;                       /* spacing between cells */
  grid-template-areas: 
    "header header header"
    "sidebar content content"
    "footer footer footer";
}
```

**Grid Items:**
```css
.grid-item {
  grid-column: 1 / 3;           /* span columns 1-2 */
  grid-row: 1 / 2;              /* span row 1 */
  grid-area: header;            /* use named area */
}
```

### Layout Examples

**Holy Grail Layout (Flexbox):**
```css
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  display: flex;
  flex: 1;
}

.sidebar { flex: 0 0 200px; }
.main { flex: 1; }
```

**Card Grid Layout:**
```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}
```

⚡️ **Interview tip:** when to use Flexbox vs Grid - Flexbox for 1D layouts (navbar, card layouts), Grid for 2D layouts (page layouts, complex positioning).

**Answer:**
- **Flexbox:** Best for 1-dimensional layouts (row OR column). Use for navigation bars, centering content, card layouts, distributing space between items. Great for components and smaller-scale layouts.
- **CSS Grid:** Best for 2-dimensional layouts (rows AND columns). Use for page layouts, complex positioning, overlapping elements, magazine-style layouts. Great for overall page structure.
- **Together:** Often used together - Grid for page layout, Flexbox for component layouts within grid areas.

**Answer:**
- **Flexbox:** Best for 1-dimensional layouts (row OR column). Use for navigation bars, centering content, card layouts, distributing space between items. Great for components and smaller-scale layouts.
- **CSS Grid:** Best for 2-dimensional layouts (rows AND columns). Use for page layouts, complex positioning, overlapping elements, magazine-style layouts. Great for overall page structure.
- **Together:** Often used together - Grid for page layout, Flexbox for component layouts within grid areas.

---

## 🔹 7. Animations

### CSS Transitions

**Transition Properties:**
```css
.button {
  background: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  /* Transition properties */
  transition-property: background, transform, box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  
  /* Shorthand */
  transition: all 0.3s ease-in-out;
}

.button:hover {
  background: darkblue;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
```

### CSS Animations & Keyframes

**Keyframe Animations:**
```css
@keyframes fadeIn {
  0% { 
    opacity: 0;
    transform: translateY(20px);
  }
  100% { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}

/* Animation usage */
.fade-in {
  animation: fadeIn 1s ease-in-out;
}

.bounce {
  animation: bounce 2s infinite;
}
```

### Loading Animations

**Spinner Animation:**
```css
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}
```

### Animation Performance

**GPU-Accelerated Properties:**
```css
/* Use these for smooth animations */
transform: translateX(100px);    /* instead of left: 100px */
transform: scale(1.2);           /* instead of width/height */
opacity: 0.5;                    /* naturally GPU-accelerated */
```

⚡️ **Interview tip:** difference between `transition` and `animation`, which CSS properties trigger repaints vs reflows, and how to optimize animation performance.

**Answer:**
- **Transition vs Animation:** Transitions are triggered by state changes (hover, focus) and go from A to B. Animations run automatically, can loop, and have multiple keyframes with complex sequences.
- **Repaints vs Reflows:** Reflows (expensive) - changing layout properties like `width`, `height`, `position`. Repaints (cheaper) - changing visual properties like `color`, `background`. Transforms and opacity are cheapest.
- **Animation optimization:** Use `transform` and `opacity` (GPU-accelerated). Avoid animating layout properties. Use `will-change` property sparingly. Consider `transform3d(0,0,0)` to force GPU layer.

**Answer:**
- **Transition vs Animation:** Transitions are triggered by state changes (hover, focus) and go from A to B. Animations run automatically, can loop, and have multiple keyframes with complex sequences.
- **Repaints vs Reflows:** Reflows (expensive) - changing layout properties like `width`, `height`, `position`. Repaints (cheaper) - changing visual properties like `color`, `background`. Transforms and opacity are cheapest.
- **Animation optimization:** Use `transform` and `opacity` (GPU-accelerated). Avoid animating layout properties. Use `will-change` property sparingly. Consider `transform3d(0,0,0)` to force GPU layer.

---

## 🔹 8. Frameworks

### Bootstrap

**Bootstrap Grid System:**
```html
<div class="container">
  <div class="row">
    <div class="col-md-8">Main content</div>
    <div class="col-md-4">Sidebar</div>
  </div>
</div>
```

**Bootstrap Components:**
```html
<!-- Button variations -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>

<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Brand</a>
</nav>

<!-- Cards -->
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Card content</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div>
```

### SASS Preprocessor

**SASS Variables:**
```scss
// Variables
$primary-color: #3498db;
$secondary-color: #2c3e50;
$font-size-base: 16px;
$border-radius: 5px;

// Usage
.button {
  background: $primary-color;
  font-size: $font-size-base;
  border-radius: $border-radius;
}
```

**SASS Nesting:**
```scss
.navigation {
  background: $primary-color;
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      display: inline-block;
      
      a {
        color: white;
        text-decoration: none;
        padding: 10px 15px;
        
        &:hover {
          background: rgba(white, 0.2);
        }
        
        &.active {
          background: $secondary-color;
        }
      }
    }
  }
}
```

**SASS Mixins:**
```scss
// Mixin definitions
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin button-style($bg-color, $text-color, $size: medium) {
  background: $bg-color;
  color: $text-color;
  border: none;
  border-radius: $border-radius;
  cursor: pointer;
  
  @if $size == small {
    padding: 5px 10px;
    font-size: 12px;
  } @else if $size == large {
    padding: 15px 30px;
    font-size: 18px;
  } @else {
    padding: 10px 20px;
    font-size: 14px;
  }
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
}

// Usage
.container {
  @include flex-center;
}

.primary-btn {
  @include button-style($primary-color, white, large);
}

.secondary-btn {
  @include button-style($secondary-color, white, small);
}
```

### SASS Functions & Operations

**SASS Functions:**
```scss
// Color functions
.header {
  background: lighten($primary-color, 10%);
  border-color: darken($primary-color, 20%);
}

// Math operations
.container {
  width: 100% - 20px;
  margin: $base-margin * 2;
}

// String functions
.element {
  background-image: url('#{$image-path}/background.jpg');
}
```

⚡️ **Interview tip:** advantages of CSS preprocessors (variables, nesting, mixins, functions), difference between SASS and SCSS syntax, and when to use Bootstrap vs custom CSS.

**Answer:**
- **Preprocessor advantages:** Variables for consistency, nesting for organization, mixins for reusable code, functions for calculations, imports for modular CSS, math operations.
- **SASS vs SCSS:** SASS uses indentation (like Python), no braces/semicolons. SCSS uses braces and semicolons (like regular CSS). SCSS is more popular because it's easier to convert existing CSS.
- **Bootstrap vs Custom:** Bootstrap for rapid prototyping, consistent components, team projects with tight deadlines. Custom CSS for unique designs, better performance (no unused code), full control over styling, learning purposes.

**Answer:**
- **Preprocessor advantages:** Variables for consistency, nesting for organization, mixins for reusable code, functions for calculations, imports for modular CSS, math operations.
- **SASS vs SCSS:** SASS uses indentation (like Python), no braces/semicolons. SCSS uses braces and semicolons (like regular CSS). SCSS is more popular because it's easier to convert existing CSS.
- **Bootstrap vs Custom:** Bootstrap for rapid prototyping, consistent components, team projects with tight deadlines. Custom CSS for unique designs, better performance (no unused code), full control over styling, learning purposes.

---

## 🔹 9. Publishing

### Hosting Options

**Static Site Hosting:**
```bash
# GitHub Pages
1. Create repository
2. Enable Pages in Settings
3. Deploy from main branch
# Access: username.github.io/repo-name

# Netlify
1. Connect GitHub repo
2. Auto-deploy on push
3. Custom domain support

# Vercel
1. Import GitHub project
2. Zero-config deployment
3. Automatic HTTPS
```

### Build Tools & Deployment

**Package.json Scripts:**
```json
{
  "scripts": {
    "build": "sass src/scss:dist/css --watch",
    "deploy": "npm run build && gh-pages -d dist",
    "serve": "live-server --port=3000"
  }
}
```

**Deployment Checklist:**
- ✅ Optimize images (WebP format, compress)
- ✅ Minify CSS/JS files  
- ✅ Set up proper meta tags
- ✅ Add favicon
- ✅ Test on multiple devices
- ✅ Check accessibility (WAVE, axe)
- ✅ Validate HTML/CSS

### Performance Optimization

**CSS Performance:**
```css
/* Optimize CSS delivery */
<link rel="preload" href="critical.css" as="style">
<link rel="stylesheet" href="non-critical.css" media="print" onload="this.media='all'">

/* Reduce reflows */
.optimized {
  will-change: transform; /* Prepare for animation */
  transform: translateZ(0); /* Force GPU layer */
}
```

⚡️ **Interview tip:** difference between static and dynamic websites, CDN benefits, and web performance optimization techniques (minification, compression, lazy loading).

**Answer:**
- **Static vs Dynamic:** Static sites serve pre-built HTML files (faster, secure, cheap hosting). Dynamic sites generate content on-demand (personalized, interactive, require server processing).
- **CDN benefits:** Content Delivery Network distributes files globally, reduces latency, improves loading speed, handles traffic spikes, provides caching.
- **Performance optimization:** Minify CSS/JS (remove whitespace), compress images (WebP format), lazy loading (load content when needed), tree shaking (remove unused code), caching headers, reduce HTTP requests.

**Answer:**
- **Static vs Dynamic:** Static sites serve pre-built HTML files (faster, secure, cheap hosting). Dynamic sites generate content on-demand (personalized, interactive, require server processing).
- **CDN benefits:** Content Delivery Network distributes files globally, reduces latency, improves loading speed, handles traffic spikes, provides caching.
- **Performance optimization:** Minify CSS/JS (remove whitespace), compress images (WebP format), lazy loading (load content when needed), tree shaking (remove unused code), caching headers, reduce HTTP requests.

---

## 🔹 10. Portfolio

### Portfolio Structure

**Essential Pages:**
```
portfolio/
├── index.html          # Home/Landing page
├── about.html          # About me
├── projects.html       # Projects showcase
├── contact.html        # Contact form
├── resume.pdf          # Downloadable resume
├── css/
│   ├── style.css       # Main styles
│   └── responsive.css  # Media queries
├── js/
│   └── main.js         # Interactive features
├── images/
│   ├── profile.jpg     # Profile photo
│   └── projects/       # Project screenshots
└── README.md           # Project documentation
```

**Portfolio Content Strategy:**
- **Hero Section:** Name, title, brief intro
- **About:** Background, skills, personality
- **Projects:** 3-5 best projects with live demos
- **Skills:** Technical and soft skills
- **Contact:** Multiple ways to reach you

### Project Showcase Format

**Project Structure:**
```html
<div class="project-card">
  <img src="project-screenshot.jpg" alt="Project Name">
  <div class="project-info">
    <h3>Project Name</h3>
    <p>Brief description of what the project does</p>
    <div class="tech-stack">
      <span class="tech">HTML</span>
      <span class="tech">CSS</span>
      <span class="tech">JavaScript</span>
    </div>
    <div class="project-links">
      <a href="live-demo-url">Live Demo</a>
      <a href="github-repo-url">GitHub</a>
    </div>
  </div>
</div>
```

### SEO & Accessibility

**SEO Optimization:**
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>John Doe - Frontend Developer</title>
  <meta name="description" content="Frontend developer specializing in React, JavaScript, and responsive design">
  <meta name="keywords" content="frontend developer, web developer, React, JavaScript">
  
  <!-- Open Graph tags -->
  <meta property="og:title" content="John Doe - Frontend Developer">
  <meta property="og:description" content="Frontend developer portfolio">
  <meta property="og:image" content="profile-image.jpg">
  <meta property="og:url" content="https://johndoe.github.io">
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
```

### Portfolio Best Practices

**Design Principles:**
- **Clean & Minimal:** Don't overwhelm visitors
- **Fast Loading:** Optimize images and code
- **Mobile-First:** Most traffic is mobile
- **Accessibility:** Use proper contrast, alt tags
- **Call-to-Action:** Make it easy to contact you

**Content Guidelines:**
- **Quality over Quantity:** Show your best 3-5 projects
- **Tell a Story:** Explain your problem-solving process
- **Show Impact:** Include metrics, user feedback
- **Keep Updated:** Regular updates with new projects
- **Personal Touch:** Show your personality

⚡️ **Interview tip:** what makes a portfolio stand out - unique design, working projects, clear explanations, good UX, fast performance, and professional presentation.

**Answer:**
- **Unique design:** Avoid generic templates, show creativity while maintaining usability. Use consistent branding, good typography, and color scheme that reflects your personality.
- **Working projects:** Include live demos, GitHub links, and case studies. Show problem-solving process, challenges faced, and solutions implemented. Quality over quantity.
- **Clear explanations:** Explain what each project does, technologies used, your role, and impact/results. Use non-technical language for business stakeholders.
- **Good UX:** Fast loading, mobile-responsive, intuitive navigation, clear call-to-action. Make it easy for recruiters to contact you and view your work.
- **Professional presentation:** Error-free content, professional email, LinkedIn integration, downloadable resume, consistent online presence across platforms.

---

## ✅ Summary of the block

You should confidently know:

### Core Technologies
- **HTML5 semantic structure** (header, nav, main, section, article, aside, footer)
- **CSS3 fundamentals** (box model, selectors, positioning, flexbox, grid)
- **Responsive design** (mobile-first, media queries, flexible layouts)

### Advanced Concepts  
- **CSS animations** (transitions, keyframes, performance optimization)
- **Forms & validation** (input types, accessibility, user experience)
- **SASS preprocessing** (variables, nesting, mixins, functions)

### Tools & Workflow
- **Framework knowledge** (Bootstrap components, utility classes)
- **Deployment processes** (GitHub Pages, Netlify, performance optimization)
- **Portfolio development** (structure, SEO, accessibility, best practices)

### Interview Readiness
- **Technical explanations** (box model, positioning, flexbox vs grid)
- **Best practices** (semantic HTML, accessibility, performance)
- **Real-world application** (responsive design, cross-browser compatibility)

---

## 📚 Additional Interview Questions & Answers

### HTML/CSS Fundamentals

**Q: What is the difference between `block`, `inline`, and `inline-block` elements?**
**Answer:**
- **Block:** Takes full width, starts on new line (div, h1, p). Width/height properties work. Margin/padding work on all sides.
- **Inline:** Takes only content width, flows with text (span, a, strong). Width/height ignored. Only horizontal margin/padding.
- **Inline-block:** Flows like inline but accepts width/height like block. Good for navigation items, buttons in a row.

**Q: Explain CSS specificity and how it's calculated.**
**Answer:**
Specificity determines which CSS rule applies when multiple rules target same element:
- **Inline styles:** 1000 points (`style="color: red"`)
- **IDs:** 100 points (`#header`)
- **Classes, attributes, pseudo-classes:** 10 points (`.class`, `[type="text"]`, `:hover`)
- **Elements and pseudo-elements:** 1 point (`div`, `::before`)
- **Important rule:** `!important` overrides everything (avoid if possible)

Example: `#nav .menu li a` = 100 + 10 + 1 + 1 = 112 points

**Q: What are CSS pseudo-elements and how do they differ from pseudo-classes?**
**Answer:**
- **Pseudo-classes:** Select elements in specific states (`:hover`, `:focus`, `:first-child`). Style existing elements.
- **Pseudo-elements:** Create virtual elements that don't exist in HTML (`::before`, `::after`, `::first-line`). Add content or style parts of elements.

Example: `p::first-letter { font-size: 2em; }` styles just the first letter.

### Responsive Design & Performance

**Q: What is Critical CSS and why is it important?**
**Answer:**
Critical CSS is the minimal CSS needed to render above-the-fold content. Benefits:
- Faster perceived loading (content appears sooner)
- Eliminates render-blocking CSS
- Improves Core Web Vitals scores
- Better user experience on slow connections

Implementation: Inline critical CSS in `<head>`, load rest asynchronously.

**Q: Explain the difference between `em`, `rem`, `vh`, `vw`, and when to use each.**
**Answer:**
- **em:** Relative to parent's font-size. Use for component scaling that should inherit parent sizing.
- **rem:** Relative to root font-size. Use for consistent spacing, typography that shouldn't compound.
- **vh (viewport height):** 1vh = 1% of viewport height. Use for full-screen sections, hero areas.
- **vw (viewport width):** 1vw = 1% of viewport width. Use for responsive typography, full-width elements.
- **vmin/vmax:** Relative to smaller/larger viewport dimension. Use for elements that should scale with screen size.

**Q: How do you optimize CSS for performance?**
**Answer:**
- **Minimize:** Remove unused CSS, minify files
- **Critical path:** Inline critical CSS, defer non-critical
- **Efficient selectors:** Avoid deep nesting, use specific selectors
- **Reduce reflows:** Batch DOM changes, use `transform` instead of layout properties
- **CSS containment:** Use `contain` property for isolated components
- **Lazy loading:** Load CSS for components when needed