/**
 * BLOG CONTENT DATA
 * Each blog entry maps to an `id` from blogs.json.
 * The `content` array is a list of ordered content blocks.
 *
 * ─── AVAILABLE BLOCK TYPES ──────────────────────────────────────────────────
 *
 * TEXT
 *   { type: "text", value: "...", dropCap: true }
 *   dropCap (optional) — enlarges the first letter like a magazine opener.
 *
 * HEADING
 *   { type: "heading", value: "Section Title" }
 *   Renders an <h2> subheading to divide sections.
 *
 * IMAGE
 *   { type: "image", src: "/path/or/url", alt: "...", caption: "..." }
 *   caption (optional) — italic label below the image.
 *   Place anywhere in the content array to control its position.
 *
 * GALLERY
 *   { type: "gallery", images: [{ src, alt, caption }, ...] }
 *   Renders 2–3 images side by side in a responsive grid.
 *
 * VIDEO
 *   { type: "video", src: "https://youtube.com/embed/ID", caption: "..." }
 *   Use the YouTube/Vimeo embed URL (not the watch URL).
 *
 * QUOTE
 *   { type: "quote", value: "...", attribution: "Author Name" }
 *   attribution (optional) — shown as "— Author Name" below the quote.
 *
 * CODE
 *   { type: "code", language: "jsx", value: "..." }
 *   language (optional) — label shown above the code block (e.g. "jsx", "python").
 *   Use \n for line breaks inside the value string.
 *
 * LIST
 *   { type: "list", style: "unordered" | "ordered", items: ["item1", "item2"] }
 *   style — "unordered" for bullets, "ordered" for numbered list.
 *
 * CALLOUT
 *   { type: "callout", variant: "info" | "warning" | "tip", value: "..." }
 *   info    — teal, used for general notes.
 *   warning — yellow, used for cautions.
 *   tip     — green, used for helpful hints.
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
 *   A simple horizontal rule for visual section separation.
 *
 * LINK-CARD
 *   { type: "link-card", url: "https://...", title: "...", description: "..." }
 *   description (optional) — subtitle below the title.
 *   Opens in a new tab. Use for GitHub links, live demos, references, etc.
 *
 * ────────────────────────────────────────────────────────────────────────────
 */

const blogDetails = [
    {
        id: 1,
        content: [
            {
                type: "image",
                src: "/portfolio/assets/c2.jpg",
                alt: "Catalyst Collider Design Challenge venue",
                caption: "The competition floor at T.I.P Quezon City"
            },
            {
                type: "text",
                value: "This in-depth tutorial walks you through the entire process of creating a modern React application using Vite as the build tool. We'll cover project initialization, component structure, state management, and deployment strategies.",
                dropCap: true
            },
            {
                type: "image",
                src: "/portfolio/assets/portfolio1.png",
                alt: "Participants at work",
                caption: "Teams brainstorming during the challenge"
            },
            {
                type: "text",
                value: "You'll learn about Vite's lightning-fast hot module replacement, tree-shaking capabilities, and how it compares to other bundlers like Webpack. By the end of this guide, you'll have a solid foundation for building scalable React applications with optimal performance."
            },
            {
                type: "image",
                src: "/portfolio/assets/c2.jpg",
                alt: "Participants at work",
                caption: "Teams brainstorming during the challenge"
            },
            {
                type: "text",
                value: "The competition pushed every participant to think creatively under pressure, drawing out skills they didn't know they had."
            }
        ]
    },
    {
        id: 2,
        content: [
            {
                type: "text",
                value: "Tailwind CSS has revolutionized how we approach styling in modern web development. This comprehensive guide explores the utility-first approach, showing you how to build responsive, maintainable UIs without writing custom CSS.",
                dropCap: true
            },
            {
                type: "text",
                value: "We'll dive into Tailwind's responsive design system, component extraction strategies, and best practices for large-scale applications."
            },
            {
                type: "image",
                src: "https://picsum.photos/800/400?random=21",
                alt: "DOST RSTW exhibit hall",
                caption: "The main exhibit hall showcasing regional innovations"
            },
            {
                type: "text",
                value: "You'll learn about the design tokens, spacing scale, and how to customize Tailwind to match your brand's design system."
            }
        ]
    },
    {
        id: 3,
        content: [
            {
                type: "text",
                value: "The web development landscape is constantly evolving, with new technologies and paradigms emerging at a rapid pace. This article explores the most significant trends that will shape the industry in 2026 and beyond.",
                dropCap: true
            },
            {
                type: "heading",
                value: "A Story Told in Frames"
            },
            {
                type: "image",
                src: "https://picsum.photos/800/450?random=31",
                alt: "Animation still - the tether",
                caption: "The moment the kite string breaks"
            },
            {
                type: "text",
                value: "We'll discuss the rise of WebAssembly, the maturation of serverless architectures, the impact of AI on development workflows, and the growing importance of web performance and accessibility."
            },
            {
                type: "image",
                src: "https://picsum.photos/800/450?random=32",
                alt: "Animation still - the flight",
                caption: "Learning to fly without the tether"
            },
            {
                type: "text",
                value: "Understanding these trends will help you stay ahead in your career and make informed decisions about technology choices."
            },
            {
                type: "image",
                src: "https://picsum.photos/800/450?random=33",
                alt: "Final scene",
                caption: "The closing frame of the film"
            }
        ]
    },
    {
        id: 4,
        content: [
            {
                type: "text",
                value: "Performance is crucial for user experience and business success. This guide covers advanced React optimization techniques that can significantly improve your application's speed and responsiveness.",
                dropCap: true
            },
            {
                type: "text",
                value: "We'll explore code splitting strategies, lazy loading, memoization with React.memo and useMemo, virtualization for large lists, and bundle analysis."
            },
            {
                type: "callout",
                variant: "tip",
                value: "Always measure before optimizing. Use React DevTools Profiler to identify actual bottlenecks rather than guessing."
            },
            {
                type: "code",
                language: "jsx",
                value: "const MemoizedList = React.memo(({ items }) => {\n  return items.map(item => <ListItem key={item.id} {...item} />);\n});"
            },
            {
                type: "image",
                src: "https://picsum.photos/800/400?random=41",
                alt: "React DevTools profiler screenshot",
                caption: "Flame graph from React DevTools showing render bottlenecks"
            },
            {
                type: "heading",
                value: "Key Optimization Techniques"
            },
            {
                type: "list",
                style: "unordered",
                items: [
                    "Code splitting with React.lazy() and Suspense",
                    "Memoization using React.memo, useMemo, and useCallback",
                    "Virtualization for lists with 1000+ items",
                    "Bundle analysis with source-map-explorer"
                ]
            },
            {
                type: "callout",
                variant: "warning",
                value: "Avoid premature optimization — wrapping everything in useMemo can actually hurt performance due to the overhead of memoization itself."
            },
            {
                type: "divider"
            },
            {
                type: "quote",
                value: "The real problem is that programmers have spent far too much time worrying about efficiency in the wrong places and at the wrong times.",
                attribution: "Donald Knuth"
            },
            {
                type: "text",
                value: "You'll learn how to identify performance bottlenecks using React DevTools and browser profiling tools, and implement solutions that scale with your application."
            },
            {
                type: "link-card",
                url: "https://react.dev/reference/react/memo",
                title: "React.memo — React Documentation",
                description: "Official guide on when and how to use React.memo for component memoization."
            }
        ]
    },
    {
        id: 5,
        content: [
            {
                type: "text",
                value: "Machine learning is transforming industries across the globe, and Python has become the go-to language for ML development.",
                dropCap: true
            },
            {
                type: "image",
                src: "https://picsum.photos/800/400?random=51",
                alt: "Python ML workflow diagram",
                caption: "A typical supervised learning pipeline"
            },
            {
                type: "heading",
                value: "Getting Hands-On with scikit-learn"
            },
            {
                type: "text",
                value: "This comprehensive introduction covers the fundamental concepts of supervised and unsupervised learning, data preprocessing, model evaluation, and deployment."
            },
            {
                type: "gallery",
                images: [
                    { src: "https://picsum.photos/400/300?random=52", alt: "Data preprocessing", caption: "Cleaning data" },
                    { src: "https://picsum.photos/400/300?random=53", alt: "Model training", caption: "Training loop" },
                    { src: "https://picsum.photos/400/300?random=54", alt: "Results visualization", caption: "Accuracy plot" }
                ]
            },
            {
                type: "text",
                value: "We'll work with popular libraries like scikit-learn, pandas, and matplotlib to build real-world projects. By the end, you'll have the knowledge and confidence to start your journey in machine learning."
            }
        ]
    }
];

export default blogDetails;
