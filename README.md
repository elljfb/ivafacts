# IVA Facts - Static Website

A comprehensive information website about Individual Voluntary Arrangements (IVAs) and debt solutions in the UK, built with Eleventy (11ty) and hosted on GitHub Pages.

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/iva-facts.git
   cd iva-facts
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm start
   ```
   
   The site will be available at `http://localhost:8080`

4. **Build for production**
   ```bash
   npm run build
   ```
   
   The built site will be in the `_site` folder.

## 📁 Project Structure

```
iva-facts/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── src/
│   ├── _includes/              # Reusable components
│   │   ├── header.njk
│   │   ├── footer.njk
│   │   └── legal-disclaimer.njk
│   ├── _layouts/               # Page layouts
│   │   ├── base.njk
│   │   └── page.njk
│   ├── css/
│   │   └── style.css          # Main stylesheet
│   ├── js/
│   │   ├── main.js            # Main JavaScript
│   │   └── eligibility-calculator.js
│   ├── what-is-an-iva/        # IVA information pillar
│   │   └── index.md
│   ├── debt-solutions/         # Alternatives pillar
│   │   └── index.md
│   ├── iva-process/            # Process guide pillar
│   │   └── index.md
│   ├── calculators/            # Interactive tools
│   │   ├── index.md
│   │   └── eligibility/
│   │       └── index.md
│   ├── blog/                   # Blog section
│   │   └── index.md
│   ├── disclaimer/             # Legal pages
│   ├── privacy-policy/
│   ├── cookies-policy/
│   ├── terms-of-use/
│   ├── contact/
│   ├── CNAME                   # Custom domain
│   └── index.njk               # Homepage
├── .eleventy.js                # Eleventy configuration
├── .gitignore
├── package.json
└── README.md
```

## 🌐 Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Create a new repository on GitHub (e.g., `iva-facts`)
2. **Do not** initialize with README, .gitignore, or license (we already have these)

### Step 2: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: IVA Facts website"

# Add remote
git remote add origin https://github.com/YOUR-USERNAME/iva-facts.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
4. The workflow will automatically run and deploy your site

### Step 4: Configure Custom Domain

1. In your repository, go to **Settings** → **Pages**
2. Under "Custom domain", enter: `ivafacts.co.uk`
3. Click **Save**

4. In your domain registrar (where you bought ivafacts.co.uk):
   - Add an **A record** pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Add a **CNAME record** for `www` pointing to: `YOUR-USERNAME.github.io`

5. Wait for DNS propagation (can take 24-48 hours)
6. Enable **Enforce HTTPS** in GitHub Pages settings

## 📝 Content Management

### Adding New Pages

1. Create a new `.md` file in the appropriate directory:
   ```markdown
   ---
   layout: page.njk
   title: Page Title
   description: Page description for SEO
   ---

   ## Your Content Here

   Add your Markdown content...
   ```

2. The page will automatically be built and deployed

### Adding Blog Posts

1. Create a new `.md` file in `src/blog/`:
   ```markdown
   ---
   layout: page.njk
   title: Post Title
   description: Post description
   date: 2026-01-12
   tags: post
   ---

   Your blog post content...
   ```

### Updating Navigation

Edit `src/_includes/header.njk` to modify the main navigation menu.

### Updating Footer

Edit `src/_includes/footer.njk` to modify footer links and content.

## 🎨 Customization

### Styling

- Main styles: `src/css/style.css`
- Uses CSS custom properties (variables) for easy theming
- Responsive design included

### Colors

Update CSS variables in `src/css/style.css`:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #10b981;
  /* etc. */
}
```

### Adding Calculators

1. Create new calculator page in `src/calculators/`
2. Add corresponding JavaScript in `src/js/`
3. Follow the pattern from `eligibility-calculator.js`

## 🔍 SEO Features

- ✅ Semantic HTML structure
- ✅ Meta descriptions on all pages
- ✅ Proper heading hierarchy
- ✅ Mobile-responsive design
- ✅ Fast loading times (static site)
- ✅ Internal linking structure
- ✅ Clean URLs (no .html extensions)

## 📊 Google AdSense Integration

Once your site has enough content (recommended 30-40 quality pages):

1. Apply for Google AdSense
2. Add AdSense code to `src/_layouts/base.njk`
3. Place ad units in appropriate locations
4. Ensure compliance with AdSense policies

## ⚖️ Legal Compliance

All required legal pages are included:
- ✅ Disclaimer
- ✅ Privacy Policy (GDPR compliant)
- ✅ Cookie Policy
- ✅ Terms of Use

**Important**: Update these pages with:
- Your contact email
- Actual cookie names when implementing analytics
- Any specific data processing details

## 🚦 Development Workflow

```bash
# Start development server
npm start

# Build production site
npm run build

# Clean build directory
npm run clean

# Git workflow
git add .
git commit -m "Description of changes"
git push

# GitHub Actions will automatically deploy
```

## 📈 Analytics Setup (Optional)

### Google Analytics

1. Create a Google Analytics account
2. Get your tracking ID
3. Add to `src/_layouts/base.njk`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_TRACKING_ID');
   </script>
   ```

## 🛠️ Technologies Used

- **Eleventy (11ty)** - Static Site Generator
- **Nunjucks** - Templating Engine
- **Markdown** - Content Authoring
- **CSS3** - Styling (no frameworks, custom CSS)
- **Vanilla JavaScript** - Interactive features
- **GitHub Pages** - Hosting
- **GitHub Actions** - CI/CD

## 📋 Content Roadmap

Based on your brief, you should create these additional pages:

### What is an IVA? Section
- [ ] IVA Pros and Cons
- [ ] IVA Eligibility Criteria
- [ ] IVA Costs and Fees
- [ ] IVA Effects on Credit
- [ ] IVA Consequences

### IVA Alternatives Section
- [ ] IVA vs. Bankruptcy
- [ ] IVA vs. Debt Relief Order
- [ ] IVA vs. Debt Management Plan
- [ ] IVA vs. Scottish Trust Deed
- [ ] Full Debt Solution Comparison Table

### IVA Process Section
- [ ] Initial Assessment
- [ ] Choosing an Insolvency Practitioner
- [ ] Proposal Preparation
- [ ] Creditors' Meeting
- [ ] IVA Approval & Living With It
- [ ] IVA Completion/Failure

### Calculators & Tools
- [x] IVA Eligibility Calculator (basic version created)
- [ ] IVA Monthly Payment Calculator
- [ ] Debt Solution Comparator
- [ ] IVA Cost Breakdown Calculator

### FAQ Pages
- [ ] FAQ - Eligibility
- [ ] FAQ - Process
- [ ] FAQ - Living with IVA
- [ ] FAQ - After IVA

### Supporting Pages
- [ ] Glossary of Terms
- [ ] IVA Case Studies
- [ ] Insolvency Register Guide
- [ ] IVA Myths Debunked

### Blog Categories
- [ ] IVA News
- [ ] Debt Advice
- [ ] Credit Repair
- [ ] Mental Health & Money
- [ ] Success Stories

## 🎯 Next Steps

1. **Push to GitHub** and enable Pages
2. **Configure custom domain** DNS
3. **Create remaining content** following the roadmap above
4. **Implement additional calculators** with JavaScript
5. **Add Google Analytics** for traffic monitoring
6. **Apply for Google AdSense** once you have 30-40 pages
7. **Build backlinks** through content marketing
8. **Regular updates** with blog posts

## 📞 Support & Resources

- [Eleventy Documentation](https://www.11ty.dev/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/)

## 📄 License

This project structure is provided as-is for your use. Remember to:
- Update all placeholder content
- Add your contact information
- Review and customize legal pages
- Ensure all information is accurate and up-to-date

---

**Built with ❤️ using Eleventy**

**Remember**: This website provides information only, not financial advice. Always encourage visitors to seek professional guidance.
