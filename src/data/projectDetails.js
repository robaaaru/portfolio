/**
 * PROJECT CONTENT DATA
 * Each project entry maps to an `id` from projects.json.
 * The `content` array is a list of ordered content blocks.
 *
 * ─── AVAILABLE BLOCK TYPES ──────────────────────────────────────────────────
 *
 * TEXT
 *   { type: "text", value: "..." }
 *   Standard paragraph. No dropCap in project context.
 *
 * HEADING
 *   { type: "heading", value: "Section Title" }
 *   Renders a subheading to divide sections within the project detail.
 *
 * IMAGE
 *   { type: "image", src: "/path/or/url", alt: "...", caption: "..." }
 *   caption (optional) — italic label below the image.
 *   Place anywhere in the content array to control its position.
 *
 * GALLERY
 *   { type: "gallery", images: [{ src, alt, caption }, ...] }
 *   Renders 2–3 images side by side in a responsive grid.
 *   Ideal for before/after comparisons or screenshot collections.
 *
 * VIDEO 
 *   { type: "video", src: "https://youtube.com/embed/ID", caption: "..." }
 *   Use the YouTube/Vimeo embed URL (not the watch URL).
 *   Great for demo walkthroughs or presentation recordings.
 *
 * QUOTE
 *   { type: "quote", value: "...", attribution: "Author Name" }
 *   attribution (optional) — shown as "— Author Name" below the quote.
 *   Use for mentor feedback, user testimonials, or notable remarks.
 *
 * CODE
 *   { type: "code", language: "python", value: "..." }
 *   language (optional) — label shown above the code block.
 *   Use \n for line breaks inside the value string.
 *
 * LIST
 *   { type: "list", style: "unordered" | "ordered", items: ["item1", "item2"] }
 *   style — "unordered" for bullets, "ordered" for numbered steps.
 *   Great for feature lists, installation steps, or requirements.
 *
 * CALLOUT
 *   { type: "callout", variant: "info" | "warning" | "tip", value: "..." }
 *   info    — teal, used for general notes (e.g. awards, mentions).
 *   warning — yellow, used for known limitations or caveats.
 *   tip     — green, used for setup hints or pro tips.
 *
 * FLOAT-IMAGE
 *   { type: "float-image", src: "/path", alt: "...", position: "left" | "right", caption: "..." }
 *   A small image floated to the left or right. Text blocks that follow it
 *   will naturally wrap around it (magazine-style).
 *   position — "left" (default) or "right".
 *   caption (optional) — italic label below the image.
 *   On mobile the image goes full-width; float only activates on sm: (640px+).
 *
 * DIVIDER
 *   { type: "divider" }
 *   A horizontal rule for visual section separation.
 *
 * LINK-CARD
 *   { type: "link-card", url: "https://...", title: "...", description: "..." }
 *   description (optional) — subtitle below the title.
 *   Opens in a new tab. Use for GitHub repos, live demos, papers, etc.
 *
 * ────────────────────────────────────────────────────────────────────────────
 */

const projectDetails = [
    {
        id: 1,
        content: [
            {
                type: "image",
                src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.2/public/assets/portfolio.png",
                alt: "Portfolio website homepage",
                caption: "Homepage of the portfolio website"
            },
            {
                type: "text",
                value: "This portfolio website showcases my journey as a developer. Built with React and Vite for optimal performance, it features a modern design with smooth animations and responsive layout."
            },
            {
                type: "image",
                src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.2/public/assets/portfolio1.png",
                alt: "Portfolio website projects section",
                caption: "Mobile view of homepage and projects section"
            },
            {
                type: "text",
                value: "The site includes sections for my experience, certifications, blog posts, and detailed project showcases. It demonstrates my proficiency in front-end technologies and attention to user experience design."
            },
            {
                type: "divider"
            },
            {
                type: "heading",
                value: "Key features"
            },
            {
                type: "list",
                style: "unordered",
                items: [
                    "Responsive design",
                    "Phone-like navigation",
                    "Easy dark-to-light mode toggle",
                    "Minimalist/RetroUI design"
                ]
            }
        ]
    },
    {
        id: 2,
        content: [
            {
                type: "text",
                value: "A real muffler shop uses this end-to-end analytics system to log actual sales from a React Native mobile app and view business performance in Power BI."
            },
            {
                type: "heading",
                value: "Mobile Sales App"
            },
            {
                type: "gallery",
                images: [
                    {
                        src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.3/public/assets/reactapplication.png",
                        alt: "Muffler shop mobile sales application",
                        caption: "Sales entry app"
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.3/public/assets/brandxservice.png",
                        alt: "Muffler shop service screen",
                        caption: "Service selection"
                    }
                ]
            },
            {
                type: "heading",
                value: "System Architecture"
            },
            {
                type: "text",
                value: "The mobile app sends sales to a JWT-protected FastAPI service, which stores the operational data in Azure PostgreSQL. dbt transforms the raw data into 9 analytics views in a separate schema for Power BI. The Dockerized services are stored in Azure Container Registry and run on an Azure VM with CI/CD."
            },
            {
                type: "heading",
                value: "API and Data Integrity"
            },
            {
                type: "list",
                style: "unordered",
                items: [
                    "A normalized schema separates transactions, orders, services, and motors. Per-order order_cost captures services whose price varies by job size.",
                    "The API validates inputs and calculates total_cost. It flushes to obtain generated IDs, then commits once so a sale is not partially saved.",
                    "Services and motors cannot be deleted while they are in use, and every endpoint requires a valid JWT.",
                    "Batch fetching and joinedload avoid N+1 queries.",
                    "User-provided created_at supports retroactive sales logging, and order deletion cascades to its dependent records."
                ]
            },
            {
                type: "heading",
                value: "Power BI Dashboards"
            },
            {
                type: "gallery",
                images: [
                    {
                        src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.3/public/assets/page1pbi.png",
                        alt: "Muffler shop Power BI dashboard, page one",
                        caption: "Dashboard overview"
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.3/public/assets/pag2pbi.png",
                        alt: "Muffler shop Power BI dashboard, page two",
                        caption: "Additional dashboard insights"
                    }
                ]
            },
            {
                type: "heading",
                value: "Analytics Metric Correctness"
            },
            {
                type: "text",
                value: "The analytics sum line_revenue rather than total_cost to avoid double-counting order totals."
            }
        ]
    },
    {
        id: 6,
        content: [
            {
                type: "image",
                src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.2/public/assets/vrsos.png",
                alt: "VRSOS virtual lab environment",
                caption: "The virtual chemistry lab in VRSOS"
            },
            {
                type: "text",
                value: "VRSOS is an innovative virtual reality chemistry lab simulation designed for educational purposes. Developed using Unity and C#, it provides students with a safe environment to conduct experiments and learn chemistry concepts."
            },
            {
                type: "heading",
                value: "AI Assessment & Instructor Monitoring"
            },
            {
                type: "text",
                value: "The system incorporates AI-driven performance assessment to track student progress and provide personalized feedback. Real-time instructor monitoring allows educators to observe student activities and intervene when necessary using WebRTC technology."
            },
            {
                type: "image",
                src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.2/public/assets/vrsos1.png",
                alt: "VRSOS instructor monitoring dashboard",
                caption: "Instructor monitoring dashboard"
            },
            {
                type: "text",
                value: "3D models created in Blender bring the lab equipment to life, making the learning experience immersive and engaging. This project combines game development, AI, and educational technology to create a comprehensive learning platform."
            },
            {
                type: "divider"
            },
            {
                type: "heading",
                value: "Key Features"
            },
            {
                type: "list",
                style: "unordered",
                items: [
                    "Immersive VR chemistry lab environment",
                    "AI-driven student performance assessment",
                    "Real-time instructor monitoring via WebRTC",
                    "3D-modeled lab equipment built in Blender"
                ]
            },
            {
                type: "callout",
                variant: "info",
                value: "VRSOS was presented at the 2025 DOST RSTW in NCR and received positive feedback from educators and industry professionals."
            }
        ]
    },
    {
        id: 4,
        content: [
            {
                type: "image",
                src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.2/public/assets/storm_track.png",
                alt: "Storm tracker dashboard overview",
                caption: "Storm tracker dashboard overview"
            },
            {
                type: "text",
                value: "This project focuses on processing and visualizing a long historical dataset of tropical cyclone rapid intensification events. The goal was to analyze trend patterns and identify conditions that can accelerate storm development."
            },
            {
                type: "heading",
                value: "Dashboard Views"
            },
            {
                type: "gallery",
                images: [
                    {
                        src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.3/public/assets/typhoondashboard.png",
                        alt: "Typhoon rapid intensification dashboard",
                        caption: "Typhoon dashboard overview"
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.3/public/assets/typhoondashboard1.png",
                        alt: "Additional typhoon dashboard view",
                        caption: "Additional dashboard view"
                    }
                ]
            },
            {
                type: "text",
                value: "The system combines front-end visualization with backend data processing to present large-scale meteorological information in a user-friendly way. It highlights how programming, analysis, and storytelling can be combined to make climate and weather data more interpretable."
            },
            {
                type: "divider"
            },
            {
                type: "heading",
                value: "Key Features"
            },
            {
                type: "list",
                style: "unordered",
                items: [
                    "Historical storm data processing",
                    "Rapid intensification analysis",
                    "Interactive data visualization",
                    "Weather insight dashboard"
                ]
            }
        ]
    },
    {
        id: 3,
        content: [
            {
                type: "image",
                src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.2/public/assets/luxelane.png",
                alt: "LuxeLane landing page and registration",
                caption: "LuxeLane landing page and registration"
            },
            {
                type: "text",
                value: "LuxeLane is a comprehensive e-commerce platform built with traditional web technologies. The front-end uses HTML, CSS, and JavaScript to create an intuitive user interface with dynamic product displays."
            },
            {
                type: "text",
                value: "This project demonstrates my ability to build full-stack web applications using server-side technologies and create user-friendly e-commerce solutions."
            },
            {
                type: "divider"
            },
            {
                type: "heading",
                value: "Key Features"
            },
            {
                type: "list",
                style: "unordered",
                items: [
                    "User authentication",
                    "Inventory management",
                    "Seamless booking",
                    "Secure payment processing"
                ]
            }
        ]
    },
    {
        id: 5,
        content: [
            {
                type: "text",
                value: "A reproducible, two-year data pipeline that connects Philippine severe-weather warnings with province-level regular-milled rice prices. It identifies places with both high typhoon-warning exposure and recurring upward rice-price movement."
            },
            {
                type: "heading",
                value: "The Question"
            },
            {
                type: "text",
                value: "Which provinces and regions experience high severe-warning exposure and large upward rice-price movements? This is a descriptive overlap analysis for screening and follow-up, not a causal study or an estimate of physical damage."
            },
            {
                type: "heading",
                value: "Data and Pipeline"
            },
            {
                type: "list",
                style: "unordered",
                items: [
                    "Combined 2024–2025 PAGASA tropical cyclone bulletins, PSA monthly rice-price workbooks, and provincial boundary data.",
                    "Parsed hundreds of bulletin PDFs and normalized province names with a controlled allowlist.",
                    "Used SHA-256 manifests and row hashes for resumable downloads and incremental, idempotent SQLite updates.",
                    "Added source, transformation, and notebook-output validation to fail clearly when schemas or data are invalid.",
                    "Generated province and region rankings, charts, KPI trends, and dashboard data from the same processed database."
                ]
            },
            {
                type: "heading",
                value: "How the Analysis Works"
            },
            {
                type: "text",
                value: "For each province and storm, the pipeline retains the highest PAGASA signal reached. n_severe counts distinct storms that reached Signal 3 or higher. Rice-price upside swing measures the RMS of consecutive percentage rises; decreases and unchanged readings contribute zero."
            },
            {
                type: "text",
                value: "Provincial and regional results are placed in a strict 2×2 grid using above-median exposure and upside-swing thresholds. Regions use median provincial values and report regional size and the share of provinces in each category."
            },
            {
                type: "heading",
                value: "Key Findings"
            },
            {
                type: "list",
                style: "unordered",
                items: [
                    "CAR and Cagayan Valley remain high-overlap regions in both the full reading and monthly-sampling checks.",
                    "The full analysis flags 12 provinces as high-severe-warning and high-rice-price-upside; 10 remain in that category when only monthly first readings are used.",
                    "Bicol has strong overlap in the main result but does not remain stable in the monthly-sampling robustness check.",
                    "Abra, Apayao, Aurora, Cagayan, Ifugao, Isabela, Mountain Province, and Quirino are among the robust province set."
                ]
            },
            {
                type: "heading",
                value: "Robustness and Limitations"
            },
            {
                type: "text",
                value: "The monthly-sampling check retains 67 of 81 province classifications and 13 of 17 regional classifications. Sulu and Batanes lack usable regular-milled rice readings and are excluded from price comparisons; Batanes remains in warning analysis."
            },
            {
                type: "text",
                value: "The data covers only 2024–2025 and cannot establish causation, physical damage, or market responsibility for price changes. Median-based regional summaries and a 14-day repeat-hit rule are explicit analytical choices."
            },
            {
                type: "heading",
                value: "Skills Demonstrated"
            },
            {
                type: "text",
                value: "Python and pandas transformation, PDF and XLSX parsing, data validation, incremental ETL, SQLite modeling, KPI engineering, median-based segmentation, robustness testing, notebook automation, static dashboard serialization, and responsible analytical communication."
            }
        ]
    },
    {
        id: 7,
        content: [
            {
                type: "text",
                value: "The AI-powered system includes computer vision both for family closure and reunification. The system utilizes Unmanned Aerial Vehicles (UAVs) to scan for survivors and reunify evacuees in post-disaster scenarios."
            },
            {
                type: "image",
                src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.2/public/assets/face_detection.PNG",
                alt: "Offline-first webpage interface for facial detection and recognition",
                caption: "Offline-first webpage interface for facial detection and recognition"
            },
            {
                type: "text",
                value: "The system also supports in-ground detection using computer vision models built around convolutional neural networks (CNN). It includes food and medicine detection using YOLO, OCR, and Google Gemini 2.5 to ensure proper distribution of consumables."
            },
            {
                type: "image",
                src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.2/public/assets/food_detection.PNG",
                alt: "Mobile-based food and medicine detection",
                caption: "Mobile-based food and medicine detection"
            },
            {
                type: "divider"
            },
            {
                type: "heading",
                value: "Key Features"
            },
            {
                type: "list",
                style: "unordered",
                items: [
                    "Face detection and recognition",
                    "Google Gemini 2.5 integration",
                    "Aerial drone detection"
                ]
            },
            {
                type: "callout",
                variant: "info",
                value: "This system has been tested and validated in Tagulod, Pampanga. Furthermore, this system was used as a methodology to validate its corresponding published research paper."
            }
        ]
    },
    {
        id: 8,
        content: [
            {
                type: "text",
                value: "AquaGuard is an IoT-based water conservation system that uses ultrasonic sensors to monitor water levels in real time. The mobile app, built with Flutter, provides users with insights into their water usage patterns."
            },
            {
                type: "text",
                value: "The system helps promote water conservation by alerting users to potential leaks or excessive usage. Data collected from sensors is analyzed to provide recommendations for more efficient water management."
            },
            {
                type: "text",
                value: "This project combines hardware integration, mobile development, and data analytics to address environmental concerns and promote sustainable living."
            },
            {
                type: "divider"
            },
            {
                type: "heading",
                value: "Key Features"
            },
            {
                type: "list",
                style: "unordered",
                items: [
                    "In-board automated alarm system",
                    "Mobile app integration",
                    "Real-time water level monitoring",
                    "Sustainable resource insights"
                ]
            },
            {
                type: "callout",
                variant: "warning",
                value: "No demonstration photos were available at the time of writing, but the system design and functionality were validated through the project workflow."
            }
        ]
    }
];

export default projectDetails;
