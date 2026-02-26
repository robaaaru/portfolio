import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import blogDetails from '../../data/blogDetails.js';
import blogs from '../../data/blogs.json';
import ContentRenderer from './ContentRenderer';

export default function BlogDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const idNum = parseInt(id);
    if (isNaN(idNum)) {
        return <div>Invalid blog id</div>;
    }
    const blog = blogs.find(b => b.id === idNum);

    if (!blog) {
        return <div>Blog not found</div>;
    }

    const { title, date, readTime } = blog;
    const detail = blogDetails.find(d => d.id === parseInt(id));
    const content = detail ? detail.content : [];

    return (
        <div className="mx-auto w-full max-w-4xl pt-4 px-4">
            {/* Mobile Back Button */}
            <div className="md:hidden mb-4">
                <button onClick={() => navigate('/blog')} className="flex items-center gap-2 text-sm font-medium hover:opacity-75 transition-opacity" style={{ color: "var(--foreground)" }}>
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
                    <div className="flex items-center gap-6 text-sm" style={{ color: "#048688" }}>
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

                {/* Content Blocks */}
                <ContentRenderer content={content} />
            </div>
        </div>
    );
}