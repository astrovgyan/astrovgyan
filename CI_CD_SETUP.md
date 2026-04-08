# GitHub CI/CD Infrastructure for AstrovGyan

I have implemented a professional CI/CD (Continuous Integration and Continuous Delivery) pipeline to ensure the highest code quality and automated deployments.

## 🚀 Key Features

### 1. Automated Pipeline (`.github/workflows/ci-cd.yml`)
- **Linting**: Automatically checks HTML and CSS for errors and consistency on every push and Pull Request.
- **Performance & SEO Audit**: Uses **Lighthouse CI** to verify page performance, accessibility, and SEO health before merging.
- **Auto-Deployment**: Configuration for automated deployment to **GitHub Pages**.

### 2. Local Quality Tools
- **`package.json`**: Added to manage development tools and provide standard scripts:
  - `npm run lint`: Runs all quality checks.
  - `npm run lint:css`: Checks styling rules.
  - `npm run lint:html`: Validates HTML structure.
- **Config Files**: Ready-to-use configurations for `.stylelintrc.json`, `.htmlhintrc`, and `.gitignore`.

### 3. Performance Budget (`lighthouse-budget.json`)
- Sets strict limits on page size and load times to ensure a premium, fast-loading experience for users.

## 🛠️ Usage Instructions

### Running Checks Locally
Before pushing your code, you can run the following command to ensure everything is perfect:
```bash
npm install
npm run lint
```

### Deployment to GitHub Pages
To enable the automated deployment:
1. Go to your repository **Settings** > **Pages**.
2. Set **Source** to "GitHub Actions".
3. The pipeline will now automatically update your live site whenever you push to `main`.

### Vercel Integration
Since you are using Vercel, this GitHub Action acts as a **pre-deployment gate**, ensuring that only high-quality, lint-free code reaches your production environment.
