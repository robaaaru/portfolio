import { Info, AlertTriangle, Lightbulb, ExternalLink } from 'lucide-react';

const calloutConfig = {
    info: {
        icon: Info,
        bg: "rgba(4, 134, 136, 0.1)",
        border: "#048688",
        label: "Info",
    },
    warning: {
        icon: AlertTriangle,
        bg: "rgba(234, 179, 8, 0.1)",
        border: "#eab308",
        label: "Warning",
    },
    tip: {
        icon: Lightbulb,
        bg: "rgba(34, 197, 94, 0.1)",
        border: "#22c55e",
        label: "Tip",
    },
};

function TextBlock({ block }) {
    return (
        <p className="mb-6 text-base leading-relaxed" style={{ color: "var(--foreground)" }}>
            {block.dropCap ? (
                <>
                    <span className="text-5xl font-bold float-left mr-2 mt-1" style={{ color: "var(--foreground)" }}>
                        {block.value.charAt(0)}
                    </span>
                    {block.value.slice(1)}
                </>
            ) : (
                block.value
            )}
        </p>
    );
}

function ImageBlock({ block }) {
    return (
        <figure className="mb-6">
            <img
                src={block.src}
                alt={block.alt || ''}
                className="w-full rounded-lg object-cover"
            />
            {block.caption && (
                <figcaption className="text-sm text-center mt-2 opacity-60 italic" style={{ color: "var(--foreground)" }}>
                    {block.caption}
                </figcaption>
            )}
        </figure>
    );
}

function HeadingBlock({ block }) {
    return (
        <h2 className="text-xl font-bold font-head mb-4 mt-8" style={{ color: "var(--foreground)" }}>
            {block.value}
        </h2>
    );
}

function QuoteBlock({ block }) {
    return (
        <blockquote
            className="mb-6 pl-4 py-2 border-l-4 italic"
            style={{
                borderColor: "#048688",
                color: "var(--muted-foreground)",
            }}
        >
            <p className="text-base leading-relaxed mb-1">{block.value}</p>
            {block.attribution && (
                <cite className="text-sm not-italic opacity-70">— {block.attribution}</cite>
            )}
        </blockquote>
    );
}

function CodeBlock({ block }) {
    return (
        <div className="mb-6 rounded-lg overflow-hidden" style={{ backgroundColor: "var(--card)" }}>
            {block.language && (
                <div
                    className="px-4 py-1.5 text-xs font-mono font-semibold border-b"
                    style={{
                        color: "#048688",
                        borderColor: "var(--card-border)",
                    }}
                >
                    {block.language}
                </div>
            )}
            <pre className="p-4 overflow-x-auto">
                <code className="text-sm font-mono leading-relaxed whitespace-pre" style={{ color: "var(--foreground)" }}>
                    {block.value}
                </code>
            </pre>
        </div>
    );
}

function ListBlock({ block }) {
    const Tag = block.style === 'ordered' ? 'ol' : 'ul';
    const listClass = block.style === 'ordered'
        ? 'list-decimal'
        : 'list-disc';

    return (
        <Tag
            className={`mb-6 pl-6 ${listClass} space-y-1 text-base leading-relaxed`}
            style={{ color: "var(--foreground)" }}
        >
            {block.items.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </Tag>
    );
}

function CalloutBlock({ block }) {
    const config = calloutConfig[block.variant] || calloutConfig.info;
    const Icon = config.icon;

    return (
        <div
            className="mb-6 flex items-start gap-3 p-4 rounded-lg border-l-4"
            style={{
                backgroundColor: config.bg,
                borderLeftColor: config.border,
            }}
        >
            <Icon size={20} style={{ color: config.border, flexShrink: 0, marginTop: 2 }} />
            <div>
                <span className="text-xs font-bold uppercase tracking-wider block mb-1" style={{ color: config.border }}>
                    {config.label}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: "var(--foreground)" }}>
                    {block.value}
                </p>
            </div>
        </div>
    );
}

function DividerBlock() {
    return (
        <hr
            className="my-8 border-none h-px"
            style={{ backgroundColor: "var(--card-border)" }}
        />
    );
}

function GalleryBlock({ block }) {
    const cols = block.images.length >= 3 ? 'grid-cols-3' : `grid-cols-${block.images.length}`;
    return (
        <div className={`mb-6 grid ${cols} gap-3`}>
            {block.images.map((img, i) => (
                <figure key={i}>
                    <img
                        src={img.src}
                        alt={img.alt || ''}
                        className="w-full h-48 object-cover rounded-lg"
                    />
                    {img.caption && (
                        <figcaption className="text-xs text-center mt-1 opacity-60 italic" style={{ color: "var(--foreground)" }}>
                            {img.caption}
                        </figcaption>
                    )}
                </figure>
            ))}
        </div>
    );
}

function VideoBlock({ block }) {
    return (
        <figure className="mb-6">
            <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden">
                <iframe
                    src={block.src}
                    title={block.caption || 'Embedded video'}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
            {block.caption && (
                <figcaption className="text-sm text-center mt-2 opacity-60 italic" style={{ color: "var(--foreground)" }}>
                    {block.caption}
                </figcaption>
            )}
        </figure>
    );
}

function LinkCardBlock({ block }) {
    return (
        <a
            href={block.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 flex items-center gap-4 p-4 rounded-lg border transition-all duration-200 hover:translate-y-0.5 no-underline"
            style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--card-border)",
                boxShadow: "2px 2px 0 0 var(--card-border)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "none")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "2px 2px 0 0 var(--card-border)")}
        >
            <div className="flex-1 min-w-0">
                <span className="text-base font-semibold block truncate" style={{ color: "var(--foreground)" }}>
                    {block.title}
                </span>
                {block.description && (
                    <span className="text-sm block mt-1 truncate" style={{ color: "var(--muted-foreground)" }}>
                        {block.description}
                    </span>
                )}
            </div>
            <ExternalLink size={18} style={{ color: "#048688", flexShrink: 0 }} />
        </a>
    );
}

function FloatImageBlock({ block }) {
    const isLeft = block.position !== 'right';
    return (
        <figure
            className={`mb-3 w-full sm:w-48 md:w-56 ${isLeft ? 'sm:float-left sm:mr-5' : 'sm:float-right sm:ml-5'}`}
        >
            <img
                src={block.src}
                alt={block.alt || ''}
                className="w-full rounded-lg object-cover"
            />
            {block.caption && (
                <figcaption className="text-xs text-center mt-1.5 opacity-60 italic" style={{ color: "var(--foreground)" }}>
                    {block.caption}
                </figcaption>
            )}
        </figure>
    );
}

function renderBlock(block, index) {
    switch (block.type) {
        case 'text':
            return <TextBlock key={index} block={block} />;
        case 'image':
            return <ImageBlock key={index} block={block} />;
        case 'heading':
            return <HeadingBlock key={index} block={block} />;
        case 'quote':
            return <QuoteBlock key={index} block={block} />;
        case 'code':
            return <CodeBlock key={index} block={block} />;
        case 'list':
            return <ListBlock key={index} block={block} />;
        case 'callout':
            return <CalloutBlock key={index} block={block} />;
        case 'divider':
            return <DividerBlock key={index} />;
        case 'gallery':
            return <GalleryBlock key={index} block={block} />;
        case 'video':
            return <VideoBlock key={index} block={block} />;
        case 'link-card':
            return <LinkCardBlock key={index} block={block} />;
        case 'float-image':
            return <FloatImageBlock key={index} block={block} />;
        default:
            return null;
    }
}

export default function ContentRenderer({ content = [] }) {
    return (
        <div>
            {content.map((block, index) => renderBlock(block, index))}
        </div>
    );
}
