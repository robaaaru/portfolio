import blogData from '../../data/blogs.json';
import { Calendar, Clock } from 'lucide-react';

export default function BlogList({ onSelectBlog }) {
    return (
        <div className="mx-auto w-full md:w-[42rem] lg:w-[50rem] flex flex-col pt-4 px-4">
            <div className="flex flex-col gap-4">
                {blogData.map(blog => (
                    <div key={blog.id} className="border-b border-gray-200 pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0 cursor-pointer hover:bg-gray-50 transition-colors duration-200" onClick={() => onSelectBlog && onSelectBlog(blog)}>
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Content */}
                            <div className="flex-1">
                                {/* Title */}
                                <h3 className="text-lg font-semibold mb-3 font-head" style={{ color: "var(--foreground)" }}>
                                    {blog.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-sm mb-3 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                                    {blog.excerpt}
                                </p>

                                {/* Meta Info */}
                                <div className="flex items-center gap-4 text-sm mb-3" style={{ color: "var(--muted-foreground)" }}>
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

                            {/* Image */}
                            {blog.image && (
                                <div className="flex-shrink-0 w-full md:w-48 h-48 md:h-32">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover rounded"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}