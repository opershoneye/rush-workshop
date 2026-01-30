# Rush Workshop: Personal Portfolio Project

This repository contains the Rush Workshop portfolio project for KTP. The goal is to introduce you to **modern web development** using **React**, **Vite**, and **Tailwind**, and to help you deploy your own personal portfolio site to **GitHub Pages**.

The README is structured like a typical GitHub project guide, but it also references the fact that the workshop demo was done in **WebStorm**. Instructions are given primarily for WebStorm, with alternative commands for **VS Code** or other IDEs where needed.

## 🚀 Tech Stack

  * **React 19** – Core framework
  * **Vite** – Fast dev environment & build tool
  * **TypeScript** – Safer coding with types
  * **Tailwind CSS** – Utility-first styling
  * **React Router** – Navigation between pages
  * **GitHub Pages** – Free & easy deployment

-----

## 🛠️ Prerequisites

Before starting, make sure you have:

  * **Node.js** (LTS version recommended)
  * **Git**
  * A **GitHub** account
  * **IDE / Editor**:
      * **WebStorm** (used in the workshop demo; recommended)
      * **VS Code** (or another editor) works fine with the provided commands

-----

## 📦 Installation
Below are several ways to install this repository or build a Vite app from scratch.

### WebStorm

#### Copying (cloning) the app from ktp-usc's repo in WebStorm
1.  Open WebStorm → **Get from VCS** → paste the repo URL:
    ```
    https://github.com/ktp-usc/rush-workshop.git
    ```
2.  After cloning, WebStorm will detect `package.json`. Choose **Install** or run `npm install` in the terminal.
3.  To start the dev server, click the play button at the top right of the editor.
4.  Open the browser at the URL provided in the terminal window that opens (should be `http://localhost:5173`).

#### Building a new Vite app from scratch in WebStorm
1. In WebStorm, go to *File → New Project*.
2. Select **Vite** from the templates list on the left.
3. In the configuration window, set the template to **React**.
4. Check the box for **Use TypeScript**.
5. Name your project (e.g., `rush-workshop`) and click *Create*.
6. Once created, run `npm install` in the WebStorm terminal (or press `npm install` in the window that pops up when project creation finishes).
7. Start the dev server by clicking the play button at the top right of the editor.

### VS Code / Other IDEs

#### Copying (cloning) the app from ktp-usc's repo in VS Code / Other IDEs

```bash
git clone https://github.com/ktp-usc/rush-workshop.git
cd rush-workshop
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

#### Building a new Vite app from scratch in VS Code / Other IDEs

```bash
npm create vite@latest rush-workshop -- --template react-ts
cd rush-workshop
npm install
npm run dev
```

## ✏️ Usage

You can now start editing the project files:

  * `src/components/` – reusable components like `Header`, `ProjectCard`.
  * `src/pages/` – pages like `Home` and `About`.
  * `src/assets/` – images/icons you want bundled with the build.
  * `vite.config.ts` – project configuration (update `base` before deploying).

### WebStorm tips

  * Right-click `src` → **New** → **Directory** or **New** → **TypeScript File** to create files.
  * Drag images directly into `src/assets/`; WebStorm will auto-suggest import paths.

### VS Code tips

  * Create files via the Explorer or terminal.
  * Add imports manually, e.g.:
    ```typescript
    import profilePic from './assets/profile.png';
    ```

-----

## 🌐 Deployment to GitHub Pages

1.  Push your project to a GitHub repository.
      * **WebStorm**: **VCS** → **Share Project on GitHub** → sign in → create repo → **Share**.
      * **Other IDEs**:
        ```bash
        git init
        git add .
        git commit -m "Initial commit"
        git remote add origin https://github.com/<your-username>/<your-repo>.git
        git push -u origin main
        ```
2.  In `vite.config.ts`, add the `base` property:
    ```typescript
    export default defineConfig({
      base: '/<repo-name>/',
      plugins: [react(), tailwindcss()]
    })
    ```
3.  Ensure `<BrowserRouter basename={import.meta.env.BASE_URL}>` is used in `main.tsx`.
4.  Make sure the `.github/workflows/deploy.yml` workflow file is present. You can copy this file from this repo.
5.  Commit and push to your remote repository.
6.  Go to *Settings → Actions → General permissions* and set to **Read and write**.
7.  If the initial action fails, re-run it.
8.  Go to *Settings → Pages* and set it to use the **gh-pages** branch and save.
9.  Wait for the automatically generated action to complete.
10.  Once successful, view your published page!

-----

## 🐛 Common Issues & Fixes

  * **404 errors after deploying**: Make sure you set the correct `base` in `vite.config.ts` and added `basename={import.meta.env.BASE_URL}` to `<BrowserRouter>`.
  * **GitHub Actions fails with permissions error**: Go to **Settings** → **Actions** → **General** → **Workflow permissions** and set to **Read and write**.
  * **Images not showing**: Verify you imported from `src/assets/` instead of placing them in `public/` unless you want static, unprocessed assets.
  * **Page doesn’t update after editing**: Ensure `npm run dev` is running, or restart the dev server in WebStorm/terminal.
  * **Deployed site shows old content**: Push your latest commits to `main`. GitHub Actions will redeploy automatically. Just give it a few minutes.

-----

## 🤝 Contributing

If you are part of KTP and want to suggest improvements:

  * **WebStorm**: **Git** → **New Branch** → make changes → **Commit & Push** → open PR on GitHub.
  * **Other IDEs**:
    ```bash
    git checkout -b feature/my-improvement
    git commit -am "Improvement: <describe change>"
    git push origin feature/my-improvement
    ```
    Then open a Pull Request.
