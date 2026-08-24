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
                src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.1/public/assets/portfolio.png",
                alt: "Portfolio website homepage",
                caption: "Homepage of the portfolio website"
            },
            {
                type: "text",
                value: "This portfolio website showcases my journey as a developer. Built with React and Vite for optimal performance, it features a modern design with smooth animations and responsive layout."
            },
            {
                type: "image",
                src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.1/public/assets/portfolio1.png",
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
                type: "image",
                src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.1/public/assets/vrsos.png",
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
                src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.1/public/assets/vrsos1.png",
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
        id: 3,
        content: [
            {
                type: "image",
                src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.1/public/assets/storm_tracker.png",
                alt: "Storm tracker dashboard overview",
                caption: "Storm tracker dashboard overview"
            },
            {
                type: "text",
                value: "This project focuses on processing and visualizing a long historical dataset of tropical cyclone rapid intensification events. The goal was to analyze trend patterns and identify conditions that can accelerate storm development."
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
        id: 4,
        content: [
            {
                type: "image",
                src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.1/public/assets/luxelane.png",
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
                value: "This project looks at how rice prices respond to typhoon events in the Philippines. It combines data collection, transformation, and analysis into a structured workflow that makes the problem easier to understand and evaluate."
            },
            {
                type: "text",
                value: "The work centers around building a repeatable data pipeline and analytical story that connects climate impacts and economic outcomes. It shows how data engineering and analytics can support community-oriented decisions."
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
                    "Data pipeline design",
                    "Typhoon impact analysis",
                    "Price trend evaluation",
                    "Community-focused insight generation"
                ]
            }
        ]
    },
    {
        id: 6,
        content: [
            {
                type: "text",
                value: "The AI-powered system includes computer vision both for family closure and reunification. The system utilizes Unmanned Aerial Vehicles (UAVs) to scan for survivors and reunify evacuees in post-disaster scenarios."
            },
            {
                type: "image",
                src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.1/public/assets/face_detection.PNG",
                alt: "Offline-first webpage interface for facial detection and recognition",
                caption: "Offline-first webpage interface for facial detection and recognition"
            },
            {
                type: "text",
                value: "The system also supports in-ground detection using computer vision models built around convolutional neural networks (CNN). It includes food and medicine detection using YOLO, OCR, and Google Gemini 2.5 to ensure proper distribution of consumables."
            },
            {
                type: "image",
                src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.1/public/assets/food_detection.PNG",
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
        id: 7,
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
