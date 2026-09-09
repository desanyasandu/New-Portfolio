import type { PortfolioData } from "../types/portfolio";
import greenDairyErpImg from "../assets/green-dairy-erp.png";
import nutrivisionImg from "../assets/nutrivision-ai.jpg";
import ceylonStayImg from "../assets/ceylon-stay-nibm.png";
import aquaflowImg from "../assets/aquaflow-meet-management.jpg";
import codCodeIdeImg from "../assets/cod-code-ide.jpg";

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
        "👥 HRMS & Statutory Payroll Engine: Biometric/daily attendance tracking, automated Sri Lankan statutory compliance engine (EPF 8%/12%, ETF 3%), and integrated payroll with commission & advance deductions.",
        "🛡️ Enterprise Security & Observability: Dynamic RBAC with granular permissions, immutable audit logging, login telemetry (IP/device agents), and interactive Recharts executive dashboards."
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
      id: "8",
      title: "CourseConnect Enterprise",
      description: "An enterprise learning management platform (LMS) with secure course creation, interactive forums, progress tracking, checkout integrations, and dual OracleDB & MongoDB synchronization.",
      tech: ["Next.js", "React", "OracleDB", "MongoDB", "Tailwind CSS"],
      link: "https://github.com/desanyasandu/courseconnect-enterprise",
      github: "https://github.com/desanyasandu/courseconnect-enterprise",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000",
      highlights: [
        "Dual OracleDB & MongoDB synchronization with idempotent write pipelines",
        "IDOR & unauthorized resource protection via strict server-side session checks",
        "Optimized indexed pagination keeping dashboard read latency under 80ms"
      ]
    },
    {
      id: "9",
      title: "Raw Material & Inventory ERP",
      description: "A warehouse and logistics tracking dashboard managing raw material shelf-lives, finished good batches, lorry inventory manifests, and driver petty cash ledger files.",
      tech: ["Next.js", "React", "Prisma", "SQLite", "Tailwind CSS", "Recharts"],
      link: "https://github.com/desanyasandu/ERP",
      github: "https://github.com/desanyasandu/ERP",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000",
      highlights: [
        "ACID-compliant inventory transaction ledgers preventing double-allocation anomalies",
        "Least-privilege database user permissions for audit and operational safety"
      ]
    },
    {
      id: "1",
      title: "Smart Browser History Manager",
      description: "A comprehensive tool for managing and analyzing browser history with advanced search and visualization capabilities.",
      tech: ["TypeScript", "React", "State Management"],
      link: "https://github.com/desanyasandu/SmartBrowserHistoryManager",
      github: "https://github.com/desanyasandu/SmartBrowserHistoryManager",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
      id: "2",
      title: "Zoom Alternative",
      description: "A real-time video conferencing prototype showcasing WebRTC integration and collaborative features.",
      tech: ["TypeScript", "WebRTC", "Socket.io"],
      link: "https://github.com/desanyasandu/Zoom-Alternative",
      github: "https://github.com/desanyasandu/Zoom-Alternative",
      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1974&auto=format&fit=crop",
      highlights: [
        "Peer-to-peer WebRTC mesh signaling with room-scoped socket memory cleanup",
        "Tokenized room handshakes preventing unauthorized cross-session joins"
      ]
    },
    {
      id: "3",
      title: "RAM-Cleaner Utility",
      description: "Effortless Windows RAM optimization tool automated via batch scripting for peak performance.",
      tech: ["Batch", "Shell", "Optimization"],
      link: "https://github.com/desanyasandu/RAM-Cleaner---Windows-Batch-Script-Desan-Yasandu-",
      github: "https://github.com/desanyasandu/RAM-Cleaner---Windows-Batch-Script-Desan-Yasandu-",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "4",
      title: "React SpringBoot MS",
      description: "Full-stack microservices application demonstrating seamless integration between React and Spring Boot.",
      tech: ["Java", "Spring Boot", "React", "REST API"],
      link: "https://github.com/desanyasandu/React-SpringBoot-MS",
      github: "https://github.com/desanyasandu/React-SpringBoot-MS",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      highlights: [
        "Stateless JWT authentication with cross-service authorization boundaries",
        "Strict DTO validation layer preventing broken object-level authorization (BOLA)"
      ]
    },
    {
      id: "5",
      title: "Library API",
      description: "Robust backend solution for library management featuring clean architecture and RESTful endpoints.",
      tech: ["Java", "Spring Boot", "MySQL", "REST"],
      link: "https://github.com/desanyasandu/Library-API",
      github: "https://github.com/desanyasandu/Library-API",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2090&auto=format&fit=crop"
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
