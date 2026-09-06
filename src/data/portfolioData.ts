import type { PortfolioData } from "../types/portfolio";
import greenDairyErpImg from "../assets/green-dairy-erp.png";
import nutrivisionImg from "../assets/nutrivision-ai.jpg";
import ceylonStayImg from "../assets/ceylon-stay-nibm.png";

export const portfolioData: PortfolioData = {
  name: "Desan Yasandu",
  role: "Full-stack Developer",
  tagline: "Software Engineer | Creative Thinker | Problem Solver",
  about: "A dedicated software engineering student with a strong passion for coding, algorithms, and building efficient software solutions. My journey spans from system optimization scripts to full-stack microservices, always with a focus on clean, scalable code.",
  profileImage: "/about-me.png",
  heroImage: "/hero-me.png",
  aboutImage: "/about-me.png",
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
      id: "nutrivision-ai",
      title: "Nutrivision AI - Dietary Health Assistant",
      description: "An AI-powered mobile nutrition platform built with Flutter. Features real-time computer vision food scanning, calorie & macro tracking, disease risk estimation, digital health twin analytics, and interactive AI dietary coaching.",
      tech: ["Flutter", "Dart", "Computer Vision", "AI Agents", "Provider", "REST APIs"],
      link: "https://github.com/desanyasandu",
      github: "https://github.com/desanyasandu",
      image: nutrivisionImg,
      highlights: [
        "Secure Edge API proxy architecture with zero client-side secret key leaks",
        "Local caching layer reducing recurring Vision AI inference calls by 40%",
        "Strict input validation preventing malicious prompt & payload injections"
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
