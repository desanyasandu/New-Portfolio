import type { PortfolioData } from "../types/portfolio";
import greenDairyErpImg from "../assets/green-dairy-erp.png";
import nutrivisionImg from "../assets/nutrivision-ai.jpg";
import ceylonStayImg from "../assets/ceylon-stay-nibm.png";
import aquaflowImg from "../assets/aquaflow-meet-management.jpg";
import codCodeIdeImg from "../assets/cod-code-ide.jpg";
import theErpImg from "../assets/the-erp-system.jpg";

export const portfolioData: PortfolioData = {
  name: "Desan Yasandu",
  role: "Full-stack Developer",
  tagline: "Software Engineer | Creative Thinker | Problem Solver",
  about: "A dedicated software engineering student with a strong passion for coding, algorithms, and building efficient software solutions. My journey spans from system optimization scripts to full-stack microservices, always with a focus on clean, scalable code.",
  profileImage: "/about-me.jpg",
  heroImage: "/hero-me.png",
  aboutImage: "/about-me.jpg",
  projects: [
    {
      id: "7",
      title: "Green Dairy — Enterprise Dairy Production & Intelligent Supply Chain Management System",
      description: "Green Dairy — an end-to-end Enterprise Dairy Production & Intelligent Supply Chain Management System! 🥛🏭 Managing commercial dairy operations from rural raw milk procurement and multi-tier perishable batch production (BOM), to offline-first mobile lorry POS fleet distribution, multi-tender treasury, statutory HRMS payroll, and real-time observability.",
      tech: [
        "Next.js (App Router)",
        "React 19",
        "TypeScript",
        "PostgreSQL",
        "Prisma ORM",
        "Capacitor (Android)",
        "Dexie.js (IndexedDB)",
        "HTML5-QRCode",
        "Tailwind CSS",
        "Radix UI",
        "Lucide Icons",
        "Recharts",
        "JWT (Jose)",
        "Bcrypt.js"
      ],
      link: "https://lnkd.in/p/gqFGNQ8u",
      github: "https://github.com/desanyasandu/green-dairy-erp",
      image: greenDairyErpImg,
      featured: true,
      badge: "Featured Enterprise ERP & Mobile POS",
      demoVideo: "https://www.linkedin.com/posts/iamdesan_excited-to-share-my-latest-engineering-ugcPost-7502410053220610049-ZuVr/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFViZecBKVFcRFuYpEjym_KrLSIqLuI6t0Y",
      highlights: [
        "🥛 Raw Milk Procurement & Farmer Ecosystem: Daily collection intake logging (volume, density, automated pricing), farmer advances with automated settlement deductions on payouts, and bulk milk outflow tracking.",
        "🏭 Batch Production & Multi-Tier BOM Engine: Advanced Bill of Materials (BOM) linking raw milk & additives to finished goods (yogurt, pasteurized milk, curd), dynamic batch lifecycle (MFG/EXP) & real-time wastage tracking.",
        "🚚 Fleet Distribution & Offline-First Mobile POS: Field sales app for distribution lorries with offline-first sync (Dexie.js / IndexedDB) for low-connectivity rural zones, live vehicle GPS telemetry, and barcode/QR dispatch.",
        "💳 POS Terminal, Credit Control & Treasury: Multi-tender cashier POS (cash, credit, deferred cheque realization), two-tier credit approval workflows, and shop ledger debt aging management.",
        "🛡️ Enterprise Security & Observability: Dynamic RBAC with granular permissions, immutable audit logging, login telemetry (IP/device agents), and interactive Recharts executive dashboards."
      ]
    },
    {
      id: "aquaflow-meet-management",
      title: "AquaFlow — Swimming & Athletics Meet Management System",
      description: "AquaFlow (also featuring Athlete Prime) — an all-in-one, high-performance real-world sports administration platform engineered for competitive swimming and multi-sport meets. Features a zero-backend single-file SPA architecture, automated HY-TEK center-out lane seeding (6/8 lanes), multi-sheet Excel synchronization via SheetJS, offline-first IndexedDB persistence, live record tracking (MR, PR, NR), and official government & ministry print-ready merit reports.",
      tech: [
        "Vanilla JavaScript (ES6+)",
        "IndexedDB (Offline-First)",
        "SheetJS (Excel XLSX)",
        "HY-TEK Lane Seeding",
        "HTML5 Semantic SPA",
        "CSS3 Glassmorphism",
        "GSAP Animations",
        "Lenis Smooth Scroll",
        "Ionicons"
      ],
      link: "https://lnkd.in/p/gsWr-QKX",
      github: "https://github.com/desanyasandu/Swimming-Meet-Management-Application--AquaFlow--",
      image: aquaflowImg,
      featured: true,
      badge: "Featured Real-World Sports Meet System",
      demoVideo: "https://www.linkedin.com/posts/iamdesan_webdevelopment-javascript-frontend-ugcPost-7502615391215738881-_1Fa/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFViZecBKVFcRFuYpEjym_KrLSIqLuI6t0Y",
      highlights: [
        "🏊 HY-TEK Center-Out Lane Seeding: Automated multi-heat seeding and center-out lane assignments for 6-lane and 8-lane configurations ([4,5,3,6,2,7,1,8] / [3,4,2,5,1,6]) based on verified seed times.",
        "⚡ Zero-Backend & Offline-First IndexedDB: Operates seamlessly in any browser without external servers or internet connectivity, featuring instant autosave, ACID state transactions, and robust schema upgrades.",
        "📊 Bi-Directional SheetJS Excel Integration: Real-time bulk athlete enrollment parsing, automated event catalog mapping, and multi-sheet workbook generation for meet exports.",
        "⏱️ Live Marshalling & Record Breaker Detection: Rapid keyboard-first result entry with automated detection and real-time flagging of broken Meet (MR), Provincial (PR), and National Records (NR).",
        "🏆 Dynamic Championship Scoring: Automated team point tallies (Places 1-8 for individual & relay events), multi-age group brackets (U12–U20), and real-time school participation analytics.",
        "🖨️ Official Ministry & HY-TEK Print Reports: Custom print media engine rendering high-density official government merit lists with NIC, admission IDs, and certificate generation tables."
      ]
    },
    {
      id: "nutrivision-ai",
      title: "NutriVision AI — Computer Vision Nutrition & Preventive Health Ecosystem",
      description: "NutriVision AI — a cutting-edge cross-platform mobile ecosystem built with Flutter and Computer Vision to eliminate manual nutrition tracking. Features instant camera & gallery meal scanning, deep macro & micronutrient breakdown, an interactive Digital Health Twin metabolic simulation, a 24/7 context-aware conversational AI coach, hands-free voice assistance, chronic disease risk predictive analysis, and medical dietary conflict alerts.",
      tech: [
        "Flutter",
        "Dart",
        "Computer Vision",
        "Deep Learning",
        "Provider",
        "Digital Health Twin",
        "Voice Assistant",
        "REST APIs",
        "Lucide Icons"
      ],
      link: "https://lnkd.in/p/gnWVs4ba",
      github: "https://github.com/desanyasandu/Nutrivision-AI-Flutter",
      image: nutrivisionImg,
      featured: true,
      badge: "Featured AI Health & Vision Platform",
      demoVideo: "https://www.linkedin.com/posts/iamdesan_flutter-ai-computervision-ugcPost-7502657475548966913-DXsX/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFViZecBKVFcRFuYpEjym_KrLSIqLuI6t0Y",
      highlights: [
        "📸 AI-Powered Instant Food Recognition: Real-time camera & gallery meal scanning utilizing deep learning models with high confidence scoring, multi-item detection, and automatic macro calculations.",
        "🔬 Deep Nutritional & Macro Breakdown: Instant precision computation of calories, protein, carbohydrates, fats, and fiber with daily goal calibration and visual macro distribution.",
        "🧬 Digital Health Twin Simulation: Interactive biometric model simulating metabolic responses to dietary intake and forecasting long-term physiological wellness over time.",
        "🤖 24/7 Context-Aware AI Coach & Voice Assistant: Conversational agent offering personalized dietary advice, meal swaps, and natural hands-free voice logging on the go.",
        "🩺 Predictive Chronic Disease Risk Analysis: Dynamic risk assessment algorithms analyzing nutritional patterns for Prediabetes, Type 2 Diabetes, Cardiovascular health, and Hypertension.",
        "⚠️ Disease Conflict & Dietary Checker: Dynamic safety engine alerting users of medical contraindications, dietary restrictions, and allergen cross-conflicts.",
        "📋 Interactive Kanban Meal & Habit Planner: Visual pipeline organizing breakfast, lunch, and dinner workflows with habit and streak tracking."
      ]
    },
    {
      id: "cod-code-ide",
      title: "Cod Code IDE — Real-Time Collaborative IDE & Streaming AI Pair-Programming Workspace",
      description: "Cod Code IDE — an all-in-one collaborative cloud & desktop development environment engineered by Team Dark Code. Eliminates tool fragmentation by merging real-time multiplayer code editing (CRDTs via Yjs & WebSockets), embedded peer-to-peer voice huddles & screen sharing, a streaming AI Copilot state machine (Ready ➔ Thinking ➔ Typing), Monaco editor tabs, and integrated dynamic terminal execution into a unified, zero-latency workspace.",
      tech: [
        "React 19",
        "TypeScript",
        "Tauri (Rust)",
        "Yjs (CRDT)",
        "WebSockets",
        "Monaco Editor",
        "Tailwind CSS v4",
        "Electron",
        "Lucide Icons"
      ],
      link: "https://lnkd.in/p/gpGM3Ut9",
      github: "https://github.com/desanyasandu/IDE",
      image: codCodeIdeImg,
      featured: true,
      badge: "Featured Multiplayer IDE & AI Copilot",
      demoVideo: "https://www.linkedin.com/posts/iamdesan_softwareengineering-webdevelopment-collaboration-ugcPost-7503463307295588352-tDWp/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFViZecBKVFcRFuYpEjym_KrLSIqLuI6t0Y",
      highlights: [
        "👥 Conflict-Free Multiplayer CRDTs: Deterministic real-time live editing powered by Yjs, y-monaco, and WebSocket buffers with multi-peer presence, custom colored carets, and zero edit collision lag.",
        "🎙️ Integrated Voice Huddles & Screen Sharing: Embedded low-latency peer-to-peer voice rooms and live screen broadcasts directly inside the IDE layout without external app switching.",
        "🔮 Streaming AI Pair-Programming Copilot: Context-aware AI assistant with dynamic state transitions (Ready ➔ Thinking ➔ Typing), streaming word-by-word code generation, refactoring, and test generation.",
        "💻 Monaco Multi-Tab Pro Workspace: High-performance code editor featuring customizable font sizing, Dark/Light modes, file explorer tree navigation, and breadcrumbs.",
        "🖥️ Dynamic Terminal & Git Controls: Interactive command prompt supporting macOS, Linux, and Windows syntax with source control commit/push workflows.",
        "🦀 Cross-Platform Hybrid Runtime: Runs high-speed in the browser and compiles into lightweight, memory-efficient native desktop binaries via Tauri (Rust) and Electron."
      ]
    },
    {
      id: "9",
      title: "TheERP (NexusERP) — Factory & Distribution Control Center",
      description: "TheERP (NexusERP) — an end-to-end, bilingual (Sinhala & English) manufacturing and FMCG operations platform built with Next.js 14 and Prisma. Eliminates 'clipboard lag' and operational blindspots across physical factory floors by integrating real-time production batching (FIFO), lorry dispatch manifests with returns/unload reconciliation, double-entry financial ledgers, route petty cash recovery flows, and an 11-in-1 executive reports suite.",
      tech: [
        "Next.js 14 (App Router)",
        "React 18",
        "TypeScript",
        "Prisma ORM",
        "SQLite",
        "Tailwind CSS",
        "Shadcn UI",
        "Recharts",
        "Server Actions"
      ],
      link: "https://lnkd.in/p/gAFrM9uN",
      github: "https://github.com/desanyasandu/ERP",
      image: theErpImg,
      featured: true,
      badge: "Featured Factory & Distribution ERP",
      demoVideo: "https://www.linkedin.com/posts/iamdesan_fullstack-nextjs-webdevelopment-ugcPost-7505283891100827648-MqKD/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFViZecBKVFcRFuYpEjym_KrLSIqLuI6t0Y",
      highlights: [
        "🏭 Production Control & FIFO Batching: Real-time queue scheduling, raw material chemical consumption tracking, and batch-wise expiry monitoring ensuring strict FIFO compliance.",
        "🚚 Lorry Fleet & In-Transit Dispatch: Immutable transaction-driven dispatch manifest tracking with damaged goods handling, route cash collection, and returns/unload reconciliation.",
        "📊 Executive Infographics Dashboard: Real-time factory KPI telemetry including active fleet status, stock valuation, regional sales distribution, and Recharts production trends.",
        "💼 Double-Entry Financial Ledger Hub: Complete accounting suite with automated cash books, dynamic Profit & Loss (P&L) statements, cash flow analytics, and balance sheets.",
        "🏢 Full Operations & Client Registers: Supermarket and retail grocer registry (Cargills, Keells), debtor/creditor aging schedules, and supplier contract monitoring.",
        "📈 11-in-1 Reports Suite & Bilingual UI: Multi-tier reporting for finished goods, chemical stock, fixed assets, and bank loans with instant CSV export and full Sinhala/English localization."
      ]
    },
    {
      id: "ceylon-stay-nibm",
      title: "Diploma in Software Engineering at NIBM Final Project",
      description: "Built our 1st year final project with a strong DevOps focus. A real-world deployable accommodation booking platform engineered with microservice architecture, automated GitOps delivery, container orchestration, and computer vision AI.",
      tech: ["React Vite", "Python FastAPI", "Kubernetes", "Docker", "RabbitMQ", "YOLOv11n", "ArgoCD", "PostgreSQL", "Redis", "WSO2"],
      link: "https://www.linkedin.com/posts/kushan-randika-herath-5a3b39352_diploma-in-software-engineering-at-nibm-final-activity-7448927464082501632-AAzH",
      github: "https://github.com/desanyasandu/CEYLON-STAY-FRONT-END",
      image: ceylonStayImg,
      featured: true,
      badge: "Featured NIBM Final Project",
      demoVideo: "https://www.linkedin.com/posts/kushan-randika-herath-5a3b39352_diploma-in-software-engineering-at-nibm-final-activity-7448927464082501632-AAzH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFViZecBKVFcRFuYpEjym_KrLSIqLuI6t0Y",
      highlights: [
        "Microservices Architecture: Vanilla K8s orchestration, Docker containers & MetalLB load balancing",
        "AI & Computer Vision: YOLOv11n pre-trained vision model for object detection with MinIO S3 storage",
        "GitOps & Delivery: Automated builds and continuous deployments via ArgoCD & Helm Charts on Ubuntu Server",
        "API Governance & Security: WSO2 Asgardeo identity management & WSO2 Bijira API Gateway traffic lifecycle",
        "Event Messaging & Data: RabbitMQ queue handling, Python FastAPI, Redis caching, and PostgreSQL database"
      ]
    }
  ],
  skills: [
    { name: "Flutter & Dart", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "React.js", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "Java (Spring Boot)", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "MySQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Git", category: "Tools" },
    { name: "CI/CD", category: "Tools" }
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/iamdesan/",
    github: "https://github.com/desanyasandu",
    email: "desanyasandu@gmail.com"
  }
};
