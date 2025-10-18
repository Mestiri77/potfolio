# Interactive Portfolio with Effects
 
 <div align="center">
   <img src="src/assets/61d16c52608384e6255bd5d9cc59429cecf01121.png" alt="Farouk Mestiri Logo" height="72" />
   <h1>Farouk Mestiri — Interactive Portfolio</h1>
   <p>Modern, performance‑first portfolio built with Vite + React, beautiful micro‑interactions, and a11y‑friendly UI.</p>
   <img src="src/assets/9e94761fe39ede1028a23154f9511cfbfa815afd.png" alt="Farouk Mestiri Portrait" height="140" borderRadius="50%"/>
   <br/>
   <a href="#getting-started">Getting Started</a> ·
   <a href="#features">Features</a> ·
   <a href="#customization">Customization</a> ·
   <a href="#deployment">Deployment</a>
 </div>
 
 ---
 
 ## Overview
 
 This repository hosts the source code for Farouk Mestiri’s interactive portfolio. It is a refined implementation of an “Interactive Portfolio with Effects” concept, adapted for production with a clean component architecture, accessible interactions, and a lightweight build.
 

 ## Features
 
 - **Responsive UI** with fluid layouts and motion.
 - **Accessible components** (keyboard, screen readers) via Radix primitives.
 - **Dark mode** support and theme toggling.
 - **Sectioned content** for About, Work, Skills, and Contact.
 - **SEO‑ready** meta tags and sharable preview.
 - **Fast dev experience** powered by Vite.
 
 ## Tech Stack
 
 - **Framework**: React 18 + Vite
 - **UI Primitives**: Radix UI (`@radix-ui/*`)
 - **Icons**: `lucide-react`
 - **Animations/gestures**: `motion`
 - **Forms**: `react-hook-form`
 - **Charts/visuals**: `recharts` (optional components)
 - **Styling utilities**: `clsx`, `class-variance-authority`, `tailwind-merge`
 
 Dev tooling: `@vitejs/plugin-react-swc`, TypeScript types for Node.
 
 ## Getting Started
 
 ```bash
 npm i
 npm run dev
 ```
 
 - App runs on the port Vite selects (usually http://localhost:5173).
 - Edit `src/App.tsx` and components under `src/components/` to iterate.
 
 ## Scripts
 
 - **dev**: `vite` — start development server
 - **build**: `vite build` — create production build in `dist/`
 
 ## Project Structure
 
 ```text
 interactive portfolio/
 ├─ index.html
 ├─ package.json
 ├─ src/
 │  ├─ App.tsx
 │  ├─ main.tsx
 │  ├─ index.css
 │  ├─ assets/            # place logo/portrait here
 │  ├─ components/        # UI and sections
 │  └─ styles/            # design tokens/utilities
 └─ vite.config.ts
 ```
 
 ## Customization
 
 - **Branding**
   - Logo: place your file at `src/assets/farouk-logo.png` and ensure the import/path is used wherever the header/brand is rendered.
   - Portrait: place your photo at `src/assets/farouk.jpg` and wire it in the About/Hero section.
 
 - **Colors & theme**
   - Centralized in `src/index.css` and `src/styles/` utilities. Adjust CSS variables or Tailwind utility mappings if used.
 
 - **Content**
   - Update copy in section components under `src/components/` (e.g., About, Projects, Skills, Contact).
   - Social links and contact details can be centralized in a config file or component props (search in `src/components/`).
 
 - **Icons & motion**
   - Use `lucide-react` for consistent icons.
   - Use `motion` for subtle transitions and scroll‑based effects.
 
 ## Deployment
 
 1. Build the site:
    ```bash
    npm run build
    ```
 2. Deploy the `dist/` folder with your preferred host:
    - **Netlify**: drag‑and‑drop `dist/` or connect repo.
    - **Vercel**: import the repo; framework preset: Vite.
    - **GitHub Pages**: serve `dist/` via an actions workflow or a static branch.
 
 ## Attribution
 
 Concept inspired by the referenced Figma design. See `src/Attributions.md` for component‑level credits when applicable.
 
 ## License
 
 This template is provided for personal and portfolio use by Farouk Mestiri. For other uses, please request permission.
 
 ## Contact
 
 - **Name**: Farouk Mestiri
 - **Email**: your@email.com
 - **Website**: https://your-domain.example
 - **LinkedIn / GitHub**: add links in the Contact section and header.
 
 — Built with care and performance in mind.