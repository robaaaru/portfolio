import { Badge } from "@/components/retroui/Badge";
import { Calendar, Clock } from 'lucide-react';

export default function BlogDetail({ blog }) {
    const { title, description, tags, date, readTime, image } = blog;

    return (
        <div className="mx-auto w-full md:w-[42rem] lg:w-[50rem] pt-4 px-4">
            <div
                className="p-6 rounded border"
                style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--card-border)",
                }}
            >
                {/* Header */}
                <div className="flex flex-col gap-2 mb-4">
                    <h1 className="text-xl md:text-2xl font-bold font-head" style={{ color: "var(--foreground)" }}>
                        {title}
                    </h1>
                    <div className="flex items-center gap-4 text-sm" style={{ color: "var(--muted-foreground)" }}>
                        <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock size={16} />
                            <span>{readTime}</span>
                        </div>
                    </div>
                </div>

                {/* Image */}
                {image && (
                    <div className="mb-6">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-64 md:h-80 object-cover rounded border"
                            style={{ borderColor: "var(--card-border)" }}
                        />
                    </div>
                )}

                {/* Description */}
                <div className="mb-6">
                    <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                        {description}
                    </p>
                </div>

                {/* Tags */}
                <div className="mb-6">
                    <h2 className="text-sm font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                        Tags
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <Badge key={index} variant="outline" size="md">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Back button or additional content can be added here */}
            </div>
        </div>
    );
}