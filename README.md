# 🚀 Personal Portfolio Website

A modern, responsive, and interactive personal portfolio website built with HTML5, CSS3, and Vanilla JavaScript. Features a clean design with dark mode support, smooth animations, and mobile-first responsive layout.

## 👨‍💻 About

This portfolio showcases my projects, skills, and professional experience in web development. Built as part of an AI-assisted development project, it demonstrates proficiency in front-end technologies and modern web design principles.

## ✨ Features

### Core Features
- **📱 Fully Responsive Design** - Seamless experience across desktop, tablet, and mobile devices
- **🌓 Dark/Light Mode Toggle** - Theme preference saved in browser LocalStorage
- **🍔 Mobile Hamburger Menu** - Smooth slide-in navigation for mobile devices
- **⚡ Smooth Scrolling** - Elegant transitions between sections
- **📝 Contact Form** - Form validation with user feedback
- **🎨 Modern UI/UX** - Clean, professional design with custom animations

### Interactive Elements
- Animated hero section with floating shapes
- Scroll-triggered animations using Intersection Observer API
- Animated skill progress bars
- Hover effects on cards and buttons
- Active navigation link highlighting
- Form validation with error handling

### Technical Highlights
- Semantic HTML5 markup
- CSS Custom Properties (CSS Variables) for theming
- Mobile-first responsive design approach
- Accessibility features (ARIA labels, keyboard navigation)
- Performance optimized with CSS animations
- Clean, modular JavaScript code
- LocalStorage for persistent theme preference
- No external dependencies or frameworks

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Vanilla JavaScript for interactivity

### Fonts
- **Crimson Pro** - Display/heading font
- **DM Sans** - Body text font

### Tools & Deployment
- **Git** - Version control
- **GitHub** - Code repository
- **Vercel/Netlify** - Deployment platform
- **VS Code** - Code editor with AI assistance

## 📂 Project Structure

```
portfolio-website/
│
├── index.html          # Main HTML structure
├── style.css           # CSS styles and animations
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
│
└── assets/             # Images, icons, and media files
    ├── images/
    └── icons/
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.)
- Git (for version control)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   ```

2. **Navigate to project directory**
   ```bash
   cd portfolio-website
   ```

3. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

4. **View in browser**
   - Open `http://localhost:8000` in your browser

### Customization

1. **Update Personal Information**
   - Edit `index.html` to add your name, description, and contact details
   - Replace placeholder text in About, Projects, and Skills sections

2. **Add Your Projects**
   - Update project cards with your actual projects
   - Add project images to the `assets/images/` folder
   - Update project links and descriptions

3. **Customize Styling**
   - Modify CSS variables in `style.css` to change colors
   - Adjust fonts, spacing, and layout as needed
   - Update color scheme in `:root` and `.dark-mode` selectors

4. **Add Your Images**
   - Replace placeholder images with your photos
   - Add project screenshots
   - Optimize images for web (compress and resize)

## 🌐 Deployment

### Deploy to Vercel

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Configure Settings** (Optional)
   - Set custom domain
   - Configure environment variables if needed

### Deploy to Netlify

1. **Push code to GitHub** (if not already done)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Connect to GitHub and select your repository
   - Click "Deploy site"

3. **Alternative: Drag and Drop**
   - Zip your project folder
   - Go to Netlify and drag the folder to deploy instantly

### Manual Deployment

1. **Upload to any static hosting service**
   - GitHub Pages
   - Firebase Hosting
   - AWS S3
   - Any web hosting provider with static site support

## 📋 Features Breakdown

### 1. Dark Mode Toggle
```javascript
// Saves preference to LocalStorage
// Restores on page reload
// Smooth theme transition
```

### 2. Hamburger Menu
```javascript
// Mobile-responsive navigation
// Smooth slide animation
// Auto-close on navigation
// Prevents body scroll when open
```

### 3. Smooth Scrolling
```javascript
// Smooth transitions between sections
// Accounts for fixed header offset
// Updates URL without page jump
```

### 4. Form Validation
```javascript
// Real-time validation
// Email format checking
// User-friendly error messages
// Success feedback
```

### 5. Scroll Animations
```javascript
// Intersection Observer API
// Efficient performance
// Staggered element animations
// One-time trigger for optimization
```

## 🎨 Color Scheme

### Light Mode
- Background: `#fafaf9`
- Text: `#1c1917`
- Accent: `#dc2626`

### Dark Mode
- Background: `#0c0a09`
- Text: `#fafaf9`
- Accent: `#ef4444`

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 🔧 Development

### Code Quality
- Follows semantic HTML5 standards
- CSS organized with BEM-like naming
- JavaScript uses ES6+ features
- Modular and maintainable code structure

### Performance
- Optimized CSS animations
- Efficient JavaScript event listeners
- Lazy loading for scroll animations
- Minimal HTTP requests

### Accessibility
- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Sufficient color contrast
- Focus indicators

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio-website/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)

Live Demo: [https://your-portfolio.vercel.app](https://your-portfolio.vercel.app)

## 🙏 Acknowledgments

- Font: [Google Fonts](https://fonts.google.com/)
- Icons: SVG icons embedded directly
- Design Inspiration: Modern portfolio trends
- Development: AI-assisted coding practices

---

**Built with ❤️ and JavaScript**

⭐ Star this repository if you found it helpful!
