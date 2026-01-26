import { Calendar, Clock } from 'lucide-react';

export default function BlogDetail({ blog }) {
    const { title, description, date, readTime, image } = blog;

    return (
        <div className="mx-auto w-full max-w-4xl pt-4 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl md:text-3xl font-bold font-head mb-4" style={{ color: "var(--foreground)" }}>
                        {title}
                    </h1>
                    <div className="flex items-center gap-6 text-sm" style={{ color: "var(--muted-foreground)" }}>
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
                            className="w-full h-80 md:h-96 object-cover rounded-lg"
                        />
                    </div>
                )}

                {/* Description */}
                <div className="text-lg leading-relaxed" style={{ color: "var(--foreground)" }}>
                    <p className="mb-6">
                        <span className="text-5xl font-bold float-left mr-2 mt-1" style={{ color: "var(--foreground)" }}>
                            {description.charAt(0)}
                        </span>
                        {description.slice(1)}
                    </p>
                </div>
            </div>
        </div>
    );
}