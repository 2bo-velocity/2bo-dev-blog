いいですね 👍
そのまま GitHub に置ける **実用的 README.md（2bo ブランド用）** を作ります。
Hugo + Tailwind + GitHub Pages 前提にしてあります。

---

# 📘 2bo.dev Developer Blog

2bo.dev は、**2boブランドのツール開発ノウハウ・技術情報を発信する開発者ブログ**です。

Rust / Tauri / TailwindCSS を中心に、
**月1アプリ開発で得た知見を公開** しています。

---

## 🌐 Site

* Production: [https://2bo.dev](https://2bo.dev)
* GitHub: [https://github.com/2bo-velocity](https://github.com/2bo-velocity)
* X: [https://x.com/2bo_velocity](https://x.com/2bo_velocity)

---

## 🧩 Tech Stack

| Technology   | Purpose               |
| ------------ | --------------------- |
| Hugo         | Static Site Generator |
| TailwindCSS  | UI Styling            |
| GitHub Pages | Hosting               |
| Markdown     | Article Writing       |

---

## 🎨 Brand Design

* Base: White
* Accent: 2bo Blue

```txt
Primary Blue: #1E40AF
Accent Blue:  #3B82F6
```

---

## 📂 Project Structure

```
2bo-dev-blog/
├── content/          # 記事
├── layouts/          # Hugoテンプレート
├── static/           # 画像 / CSS
├── assets/           # Tailwind入力CSS
├── config.toml       # Hugo設定
├── tailwind.config.js
├── package.json
└── .gitignore
```

---

## 🚀 Setup (Development)

---

### ① Install Dependencies

#### Hugo (Extended Required)

```bash
hugo version
```

If not installed → [https://gohugo.io/](https://gohugo.io/)

---

#### Node.js (LTS)

```bash
node -v
npm -v
```

---

### ② Install Tailwind

```bash
npm install
```

---

### ③ Start Development

#### Tailwind Watch

```bash
npm run watch
```

#### Hugo Server

```bash
hugo server -D
```

---

### 🌐 Local Preview

```
http://localhost:1313
```

---

## 🏗 Build (Production)

---

### Build Tailwind

```bash
npm run build
```

---

### Generate Static Site

```bash
hugo --gc --minify
```

---

Output:

```
/public
```

---

## ☁ Deploy (GitHub Pages)

---

Push public directory OR use GitHub Actions.

---

## ✍ Writing Articles

---

### New Post

```bash
hugo new blog/new-post.md
```

---

### Article Location

```
content/blog/
```

---

### Markdown Example

```markdown
---
title: "Post Title"
date: 2026-02-09
tags: ["Rust", "Tauri"]
categories: ["Development"]
---

Article content here.
```

---

## 🧪 Development Workflow (2bo Standard)

---

### During Development

```
npm run watch
hugo server
```

---

### Before Release

```
npm run build
hugo --minify
```

---

## 📅 Release Policy

* 📦 1 App per Month
* 📝 Dev Article per Release
* 🔁 Continuous Improvement

---

## 🔐 License

Copyright © 2bo

---

## ✉ Contact

For inquiries or collaboration:

* GitHub Issues
* X (DM)

---

# 🚀 2bo Vision

Build small, fast, reliable tools.
Ship continuously.
Accumulate engineering assets.

---

もしよければ、次はかなり実務寄りにできます👇

* 🔥 GitHub Actions 自動デプロイ付き README 版
* 🔥 SEO / OGP 完全対応 README
* 🔥 OSS 公開向け README（スター集めやすい構成）

どれ作ります？
