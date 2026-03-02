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
 *   { type: "link-card", url: "https://...", title: "...", description: "...", thumbnail: "/path/or/url" }
 *   description (optional) — subtitle below the title.
 *   thumbnail (optional) — image shown on the left side of the card.
 *   Opens in a new tab. Use for GitHub links, live demos, references, etc.
 *
 * ────────────────────────────────────────────────────────────────────────────
 */

const blogDetails = [
    {
        id: 1,
        content: [
             {
                type: "text",
                value: "Earlier this year, I had the opportunity to participate in T.I.P QC's first ever design challenge, an experience that pushed me well beyond what I thought I was capable of at this stage of my academic journey.",
                dropCap: true
            },
            {
                type: "image",
                src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.0/public/assets/c2.jpg",
                alt: "Catalyst Collider Design Challenge venue",
                caption: "The competition floor at T.I.P Quezon City"
            },
            {
                type: "text",
                value: "The project ran for eight months, and the pace was relentless from the start. Balancing tight constraints around time, resources, and technical scope meant that every decision had to be deliberate. There was little room for second-guessing, and the process taught me how to move quickly without cutting corners on quality."
            },
            {
                type:"text",
                value:"For the challenge's theme, our team developed a VR chemistry laboratory, a virtual environment designed to simulate hands-on lab experiences in an accessible and interactive way. Building it required navigating the intersection of instructional design, software development, and user experience, all at once. The process was iterative, sometimes frustrating, but ultimately one of the most rewarding things I have worked on."
            },
            {
                type: "image",
                src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.0/public/assets/vrsos_blog_picture.PNG",
                alt: "Development of chemistry lab assets in Blender",
                caption: "Development of chemistry lab assets in Blender"
            },
            {
                type: "text",
                value: "One of the most significant moments of the challenge was the presentation stage, where we pitched our project to over 40 industry partners. Standing in front of professionals from various fields and articulating the value, functionality, and vision behind the product was a different kind of pressure than anything I had faced in a classroom setting. It sharpened how I communicate ideas, how I frame problems, and how I respond to critical questions on the spot."
            },
            {
                type: "image",
                src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.0/public/assets/vrsos_blogs_picture1.jpeg",
                alt: "Industry matchmaking pitch",
                caption: "Industry matchmaking pitch"
            },
             {
                type: "text",
                value: "One of the most significant moments of the challenge was the presentation stage, where we pitched our project to over 40 industry partners. Standing in front of professionals from various fields and articulating the value, functionality, and vision behind the product was a different kind of pressure than anything I had faced in a classroom setting. It sharpened how I communicate ideas, how I frame problems, and how I respond to critical questions on the spot."
            },
            {
                type:"text",
                value:"Beyond the technical output, the experience gave me a clearer picture of how the industry actually operates. From project timelines and stakeholder expectations to the importance of iteration and documentation, I came away with practical knowledge that coursework alone could not have provided. It was a challenge in every sense of the word, and one I am glad I took on."
            }
        ]
    },
    {
        id: 2,
        content: [
            {
                type: "text",
                value: "Being selected to present at the annual DOST Regional Science, Technology, and Innovation Week in NCR was an experience I did not take lightly. It was a platform that brought together innovators, researchers, and students from across the region, and having the chance to stand among them with something we actually built made the whole thing feel very real.",
                dropCap: true
            },
            {
                type: "image",
                src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.0/public/assets/blogs_dost_picture1.jpeg",
                alt: "Animation still - the tether",
                caption: "VRSOS Exhibition Booth"
            },
            {
                type: "text",
                value: "Throughout the event, I had the opportunity to present to senior high school and college students from different schools, walking them through the project and engaging with a wide range of audiences in a single setting. Each conversation was different. Some were curious about the technology, others were skeptical, and a few were genuinely excited about the possibilities. Adjusting to each group and finding the right way to explain the same ideas in different ways was one of the more valuable parts of the experience.",
            },
            {
                type: "image",
                src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.0/public/assets/dost_blogs_picture.jpeg",
                alt: "VR Demo to Students",
                caption: "VR Demo to Students"
            },
            
             {
                type: "text",
                value: 'At the core of the presentation was a demonstration of what VR can actually do in an educational context. The focus was on its capacity to provide a safe and controlled environment for learning, particularly in scenarios where real-world practice carries risk or requires resources that are not always available. Showing students how a virtual chemistry lab could replicate hands-on experimentation without the hazards of a physical lab made the use case tangible rather than theoretical. It shifted the conversation from "what is VR" to "where can this actually be useful.'
            },
             {
                type: "text",
                value: "There is something distinct about presenting work you genuinely poured effort into. It was not just a school requirement being demonstrated for a grade. It was a finished product, shown to real people, in a real venue. That distinction made every question feel worth answering and every moment in front of an audience feel worthwhile."
            },



           
        ]
    },
    {
        id: 3,
        content: [
            {
                type: "text",
                value: "This was my first time making an animated and narrated writing video, and looking back, I think putting words into a format like this made me feel like I was stepping on foreign soil; a place that isn't just pen and paper. Countless storyboard iterations, midnight voice-recordings, and choosing the right word on my 15-word vocabulary. It was hard but it's worth it.",
                dropCap: true
            },
            {
                type: "image",
                src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.0/public/assets/tether_and_flight.png",
                alt: "A tether and flight",
                caption: "A snapshot of the animation"
            },
            {
                type: "text",
                value: "The piece is about something I have observed around me for a while, the way love and attachment tend to be more complicated than people let on. The comfort that quietly builds between two people, what it feels like when someone is no longer around, and the kind of peace that comes after something ends but still leaves you with questions. These are things I have seen play out in people close to me and in conversations I have been around long enough to think about."
            },
            {
                type: "image",
                src: "https://cdn.jsdelivr.net/gh/robaaaru/portfolio@v1.0/public/assets/storyboarding.PNG",
                alt: "One of my storyboard screenshots",
                caption: "One of my storyboard screenshots"
            },
             {
                type: "text",
                value: "Writing it pushed me to be more precise about those observations. The animation and narration made it feel more complete in a way I did not fully anticipate. Hearing the words read back and watching them take shape visually helped me figure out what I was actually trying to say."
            },
            { 
                type: "quote", 
                value: "There's a cruel beauty in loving those things that allow you to fly away. Like the wings of a butterfly, they take you to places you never imagined. In letting go, there's a sense of liberation, a bittersweet feeling of watching something you cherish find its own path, even if it leads away. It's a reminder that love can be both a tether and a flight",
                attribution: "Me" 
            },
             {
                 type: "link-card", 
                 url: "https://youtu.be/d4W886dx90U?si=V-6uKlGL4NSM6FDJ", 
                 title: "[YOUTUBE] A tether and a flight",
                 thumbnail:"/portfolio/assets/thumbnail.png"
            }

            


           
        ]
    },
   
];

export default blogDetails;
