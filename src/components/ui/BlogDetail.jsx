import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import blogDetails from '../../data/blogDetails.json';

export default function BlogDetail({ blog, onBack }) {
    const { id, title, date, readTime, image } = blog;
    const detail = blogDetails.find(d => d.id === id);
    const content = detail ? detail.content : [];

    return (
        <div className="mx-auto w-full max-w-4xl pt-4 px-4">
            {/* Mobile Back Button */}
            <div className="md:hidden mb-4">
                <button onClick={onBack} className="flex items-center gap-2 text-sm font-medium hover:opacity-75 transition-opacity" style={{ color: "var(--foreground)" }}>
                    <ArrowLeft size={16} />
                    Back
                </button>
            </div>
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
                <div className="text-base leading-relaxed" style={{ color: "var(--foreground)" }}>
                    {content.map((paragraph, index) => (
                        <p key={index} className="mb-6">
                            {index === 0 ? (
                                <>
                                    <span className="text-5xl font-bold float-left mr-2 mt-1" style={{ color: "var(--foreground)" }}>
                                        {paragraph.charAt(0)}
                                    </span>
                                    {paragraph.slice(1)}
                                </>
                            ) : (
                                paragraph
                            )}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}