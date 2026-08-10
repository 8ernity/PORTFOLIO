<h1 style="margin:0;">
  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.gif" alt="🚀" width="38" style="vertical-align:-4px;">
  Developer Portfolio — Arpan Biswas
</h1>

<h2 style="margin:0;">
  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4f7/512.gif" width="28" style="vertical-align:-4px;">
  Preview
</h2>

<p align="center">
  <img src="./public/prev.gif" width="800"/>
</p>

🌐 **Live Website:** https://portfoliox-tauv.vercel.app

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

<h2 style="margin:0;">
  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.gif" alt="✨" width="25" style="vertical-align:-4px;">
  Overview
</h2>

This portfolio represents my journey as a **B.Tech CSE (AI-ML)** student, focused on building scalable, efficient, and user-centric applications. It combines modern UI/UX design with smooth animations and interactive elements to create an engaging experience.

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

<h2 style="margin:0;">
  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f3af/512.gif" width="28" style="vertical-align:-4px;">
  Features
</h2>

- ⚡ **Modern Futuristic UI** — Clean, dark-themed interface with glowing cosmic accents  
- 🌌 **3D Interactive Space Canvas** — Real J2000 planetary orbital physics with interactive camera tilt  
- 🎬 **Smooth Animations & 60 FPS Performance** — Powered by Framer Motion & GPU hardware acceleration  
- 📊 **Live GitHub Activity Graph** — Real 52-week contribution heatmap synced via GitHub APIs  
- 🧠 **AI & Distributed Systems Projects Showcase** — Highlighting projects like SurgeShield (lock-free rate limiter in Rust)  
- 📱 **Fully Responsive Design** — Optimized for mobile, tablet, and desktop viewports  
- 🚀 **Production-Ready CI/CD Workflows** — Automated daily stats sync & Vercel deployment  

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

<h2 style="margin:0;">
  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f6e0_fe0f/512.gif" alt="🛠️" width="28" style="vertical-align:-4px;">
  Tech Stack
</h2>

### 🚀 Frontend
- **Next.js 16 (App Router & Turbopack)**
- **React**
- **TypeScript**

### 🎨 Styling & Design
- **Tailwind CSS**
- **Vanilla CSS Tokens & Glassmorphism**

### 🎬 Animations & 3D Physics
- **Framer Motion**
- **HTML5 Canvas 2D Celestial Physics Engine**

### ⚙️ Automation & Tooling
- **GitHub Actions (CI/CD Workflows)**
- **Node.js Automation Scripts**

### ☁️ Deployment
- **Vercel**

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

<h2 style="margin:0;">
  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d7_fe0f/512.gif" alt="🏗️" width="28" style="vertical-align:-4px;">
  System Architecture
</h2>

```mermaid
flowchart TD
    %% Node Style Definitions matching modern dark-theme aesthetics
    classDef cyanBox fill:#00838f,stroke:#00e5ff,stroke-width:2px,color:#ffffff,font-weight:bold;
    classDef blueBox fill:#1565c0,stroke:#42a5f5,stroke-width:2px,color:#ffffff,font-weight:bold;
    classDef purpleBox fill:#6a1b9a,stroke:#ab47bc,stroke-width:2px,color:#ffffff,font-weight:bold;
    classDef orangeDiamond fill:#e65100,stroke:#ff9800,stroke-width:2px,color:#ffffff,font-weight:bold;
    classDef redBox fill:#c62828,stroke:#ef5350,stroke-width:2px,color:#ffffff,font-weight:bold;
    classDef greenBox fill:#2e7d32,stroke:#66bb6a,stroke-width:2px,color:#ffffff,font-weight:bold;

    %% Telemetry & Web UI Header
    PS["🔥 Prometheus Server<br/><i>Scrapes GET /metrics</i>"]:::cyanBox
    PE["📈 Prometheus Endpoint<br/>/metrics"]:::cyanBox
    WB["🌐 Web Browser<br/><i>Views GET /dashboard</i>"]:::blueBox
    UI["🖥️ Embedded Telemetry<br/>Web UI"]:::cyanBox

    PS --> PE
    WB --> UI

    %% Request Processing Pipeline
    CR["📡 Client Request"]:::blueBox
    SSL["🛡️ SurgeShield<br/>Middleware Layer"]:::purpleBox

    CR --> SSL

    D1{"⛔ Check Jail Status"}:::orangeDiamond

    SSL --> D1

    D1 -- "Jailed / Banned" --> B1["⛔ Instant 403 Forbidden<br/><i>&lt; 0.01ms</i>"]:::redBox
    D1 -- "Not Jailed" --> KE["🔑 Key Extractor"]:::purpleBox

    KE -- "Single-Instance Node" --> MS["💾 MemoryStore / DashMap"]:::cyanBox
    KE -- "Multi-Node Cluster" --> RS["⚡ RedisStore / Atomic Lua"]:::blueBox

    B1 --> RPT["📊 Record Prometheus<br/>Telemetry"]:::cyanBox

    D2{"🚦 Rate Limit Engine"}:::orangeDiamond

    MS --> D2
    RS --> D2

    D2 -- "Quota Available" --> OK["✅ Allow Request - 200 OK"]:::greenBox
    D2 -- "Quota Exceeded" --> B2["⛔ Block Request - 429<br/>Rate Limited"]:::redBox

    OK --> ARH["🚀 Application Route Handler"]:::greenBox
    B2 --> IVC["🔥 Increment Violation<br/>Counter"]:::orangeDiamond

    IVC -- "≥ 5 Violations" --> B1
    ARH --> CR
    B2 --> CR
```

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

<h2 style="margin:0;">
  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f504/512.gif" alt="🔄" width="28" style="vertical-align:-4px;">
  Automated Workflows & CI/CD
</h2>

### 🤖 GitHub Coding Stats Sync Workflow
- **Workflow File:** [.github/workflows/update-coding-stats.yml](.github/workflows/update-coding-stats.yml)
- **Automatic Triggers:**
  - `push: branches: [main]` — Runs automatically whenever code is pushed to the `main` branch.
  - `schedule: cron '0 0 * * *'` — Runs automatically every day at midnight UTC (5:30 AM IST).
  - `workflow_dispatch` — Allows manual one-click trigger from the GitHub Actions tab.
- **Automation Pipeline:**
  1. Executes [scripts/fetch-github-stats.mjs](scripts/fetch-github-stats.mjs).
  2. Queries live GitHub APIs for repository language breakdown and real 52-week contribution calendars.
  3. Updates [public/data/coding-stats.json](public/data/coding-stats.json).
  4. Automatically commits changes back using `git-auto-commit-action`.

### 🚀 Continuous Deployment
- Integrated with **Vercel** for instant production builds and zero-downtime deployment on every commit.

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

<h2 style="margin:0;">
  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4c1/512.gif" alt="📁" width="28" style="vertical-align:-4px;">
  Folder Structure
</h2>

```
PORTFOLIO/
├── .github/
│   └── workflows/
│       └── update-coding-stats.yml   # GitHub Action automated workflow
├── app/                              # Next.js App Router pages and layout
├── components/                       # Reusable UI components & 3D visuals
│   └── ui/                           # UI primitives (OrbitalHero, StarButton)
├── public/                           # Static assets & live JSON stats
│   └── data/
│       └── coding-stats.json         # Automated GitHub contribution dataset
├── scripts/
│   └── fetch-github-stats.mjs        # Automation script fetching live API metrics
├── utils/                            # Helper utilities and motion variants
├── README.md
├── next.config.ts                    # Next.js configuration
├── package.json                      # Dependencies and scripts
└── tsconfig.json                     # TypeScript configuration
```

<h2 align="left">
  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/2699_fe0f/512.gif" alt="⚙️" width="35" height="35" align="center">
  &nbsp;<b>Getting Started</b>
</h2>

### 📥 Clone the Repository
```bash
git clone https://github.com/8ernity/PORTFOLIO.git  
cd PORTFOLIO  
```

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

<h3 style="margin:0;">
  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4e6/512.gif" alt="📦" width="28" style="vertical-align:-4px;">
  Install Dependencies
</h3>

```bash
npm install  
```

### 💻 Run Development Server
```bash
npm run dev  
```
Open in browser: `http://localhost:3000`

### 📊 Fetch Live Stats Manually
```bash
node scripts/fetch-github-stats.mjs
```

### 🏗 Build for Production
```bash
npm run build  
```

### ▶️ Start Production Server
```bash
npm start  
```

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

<h2 style="margin:0;">
  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.gif" alt="🤝" width="28" style="vertical-align:-4px;">
  Contributing
</h2>

Contributions, suggestions, and feedback are welcome!  
Feel free to fork the repository and submit a pull request.

<h2 style="margin:0;">
  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/2b50/512.gif" alt="⭐" width="28" style="vertical-align:-4px;">
  Support
</h2>

If you like this project, consider giving it a ⭐ on GitHub!

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

### 📜 License

This project is open-source and available under the MIT License.
