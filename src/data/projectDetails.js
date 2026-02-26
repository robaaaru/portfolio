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
                src: "/portfolio/assets/portfolio.png",
                alt: "Portfolio website homepage",
                caption: "Homepage of the portfolio website"
            },
            {
                type: "text",
                value: "This portfolio website showcases my skills and projects as a full-stack developer. Built with React and Vite for optimal performance, it features a modern design with smooth animations and responsive layout. "
            },
            {
                type: "float-image",
                src: "/portfolio/assets/portfolio.png",
                alt: "Screenshot",
                position: "left"    // or "right"
            },
            {
                type: "text",
                value: "The site includes sections for my experience, certifications, blog posts, and detailed project showcases. It demonstrates my proficiency in front-end technologies and attention to user experience design.The site includes sections for my experience, certifications, blog posts, and detailed project showcases. It demonstrates my proficiency in front-end technologies and attention to user experience design.The site includes sections for my experience, certifications, blog posts, and detailed project showcases. It demonstrates my proficiency in front-end technologies and attention to user experience design.The site includes sections for my experience, certifications, blog posts, and detailed project showcases. It demonstrates my proficiency in front-end technologies and attention to user experience design."
            },
            {
                type: "image",
                src: "/portfolio/assets/portfolio1.png",
                alt: "Portfolio website projects section",
                caption: "Projects section of the portfolio"
            }
        ]
    },
    {
        id: 2,
        content: [
            {
                type: "image",
                src: "/portfolio/assets/vrsos.png",
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
                src: "/portfolio/assets/vrsos1.png",
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
                type: "text",
                value: "LuxeLane is a comprehensive e-commerce platform built with traditional web technologies. The front-end uses HTML, CSS, and JavaScript to create an intuitive user interface with dynamic product displays."
            },
            {
                type: "text",
                value: "The back-end, powered by PHP, handles user authentication, inventory management, and secure payment processing. The platform features a seamless checkout flow with multiple payment options and order tracking."
            },
            {
                type: "text",
                value: "This project demonstrates my ability to build full-stack web applications using server-side technologies and create user-friendly e-commerce solutions."
            }
        ]
    },
    {
        id: 4,
        content: [
            {
                type: "text",
                value: "AquaGuard is an IoT-based water conservation system that uses ultrasonic sensors to monitor water levels in real-time. The mobile app, built with Flutter, provides users with insights into their water usage patterns."
            },
            {
                type: "text",
                value: "The system helps promote water conservation by alerting users to potential leaks or excessive usage. Data collected from sensors is analyzed to provide recommendations for more efficient water management."
            },
            {
                type: "text",
                value: "This project combines hardware integration, mobile development, and data analytics to address environmental concerns and promote sustainable living."
            }
        ]
    },
    {
        id: 5,
        content: [
            {
                type: "text",
                value: "This smart greenhouse project utilizes computer vision and AI to monitor plant health and optimize growing conditions. Using YOLO (You Only Look Once) object detection, the system can identify different plant species and detect signs of disease or nutrient deficiencies."
            },
            {
                type: "heading",
                value: "IoT Sensor Integration"
            },
            {
                type: "text",
                value: "Integrated IoT sensors collect data on temperature, humidity, soil moisture, and light levels. Machine learning algorithms analyze this data to provide automated recommendations for watering, fertilizing, and environmental control."
            },
            {
                type: "text",
                value: "The system includes a Python-based backend for data processing and analytics, with real-time monitoring capabilities. This project demonstrates the application of AI and IoT in agriculture for improved crop yields and resource efficiency."
            }
        ]
    }
];

export default projectDetails;
