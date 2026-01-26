import blogData from '../../data/blogs.json';
import { Badge } from "@/components/retroui/Badge";
import { Calendar, Clock } from 'lucide-react';

export default function BlogList({ onSelectBlog }) {
    return (
        <div className="mx-auto w-full md:w-[42rem] lg:w-[50rem] flex flex-col pt-4 px-4">
            <div className="flex flex-col gap-8">
                {blogData.map(blog => (
                    <div key={blog.id} className="flex flex-col gap-4">
                        {/* Blog Card */}
                        <div
                            className="p-6 rounded border cursor-pointer hover:translate-y-1 transition-all duration-200"
                            style={{
                                backgroundColor: "var(--card)",
                                borderColor: "var(--card-border)",
                                boxShadow: "2px 2px 0 0 var(--card-border)",
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.boxShadow = "none"}
                            onMouseLeave={(e) => e.currentTarget.style.boxShadow = "2px 2px 0 0 var(--card-border)"}
                            onClick={() => onSelectBlog && onSelectBlog(blog)}
                        >
                            <div className="flex flex-col md:flex-row gap-4">
                                {/* Image */}
                                {blog.image && (
                                    <div className="flex-shrink-0 w-full md:w-48 h-48 md:h-32">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-full object-cover rounded border"
                                            style={{ borderColor: "var(--card-border)" }}
                                        />
                                    </div>
                                )}

                                {/* Content */}
                                <div className="flex-1">
                                    {/* Header */}
                                    <div className="flex flex-col gap-2 mb-3">
                                        <h2 className="text-xl md:text-2xl font-bold font-head" style={{ color: "var(--foreground)" }}>
                                            {blog.title}
                                        </h2>
                                        <div className="flex items-center gap-4 text-sm" style={{ color: "var(--muted-foreground)" }}>
                                            <div className="flex items-center gap-1">
                                                <Calendar size={16} />
                                                <span>{blog.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock size={16} />
                                                <span>{blog.readTime}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Excerpt */}
                                    <p className="text-base mb-4 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                                        {blog.excerpt}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {blog.tags.map((tag, index) => (
                                            <Badge key={index} variant="outline" size="sm">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}