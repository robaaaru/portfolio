import { Badge } from "@/components/retroui/Badge";
import { ArrowLeft } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { Carousel } from "@/components/retroui/Carousel";
import Autoplay from "embla-carousel-autoplay";
import projects from '../../data/projects.json';
import projectDetails from '../../data/projectDetails.json';

export default function ProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const idNum = parseInt(id);
    if (isNaN(idNum)) {
        return <div>Invalid project id</div>;
    }
    const project = projects.find(p => p.id === idNum);

    if (!project) {
        return <div>Project not found</div>;
    }

    const { title, description, techStack, url, ongoing } = project;
    const detail = projectDetails.find(d => d.id === idNum);
    const content = detail ? detail.content : [];

    return (
        <div className="mx-auto w-full md:w-[42rem] lg:w-[46rem] pt-4 px-4">
            {/* Mobile Back Button */}
            <div className="md:hidden mb-4">
                <button onClick={() => navigate('/projects')} className="flex items-center gap-2 text-sm font-medium hover:opacity-75 transition-opacity" style={{ color: "var(--foreground)" }}>
                    <ArrowLeft size={16} />
                    Back
                </button>
            </div>
            <div 
                className="p-6 rounded border"
                style={{ 
                    backgroundColor: "var(--card)",
                    borderColor: "var(--card-border)",
                }}
            >
                {/* Header */}
                <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-2 flex-wrap">
                        <h1 className="text-2xl md:text-3xl font-bold font-head" style={{ color: "var(--foreground)" }}>
                            {title}
                        </h1>
                        {ongoing && (
                            <span 
                                className="text-xs font-semibold px-2 py-0.5 rounded"
                                style={{ 
                                    backgroundColor: "#048688",
                                    color: "#fff"
                                }}
                            >
                                In Progress
                            </span>
                        )}
                    </div>
                </div>

                {/* Description */}
                <p className="text-base mb-6 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                        Tech Stack
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech, index) => (
                            <Badge key={index} variant="outline" size="md">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Project Details */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--foreground)" }}>
                        Project Details
                    </h2>
                    <div className="text-base leading-relaxed" style={{ color: "var(--foreground)" }}>
                        {content.map((paragraph, index) => (
                            <p key={index} className="mb-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Screenshots */}
                {detail && detail.screenshots && detail.screenshots.length > 0 && (
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--foreground)" }}>
                            Screenshots
                        </h2>
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            plugins={[
                                Autoplay({
                                    delay: 3000,
                                }),
                            ]}
                            className="w-full"
                        >
                            <Carousel.Content>
                                {detail.screenshots.map((screenshot, index) => (
                                    <Carousel.Item key={index} className="basis-full">
                                        <img src={screenshot} alt={`Screenshot ${index + 1}`} className="w-full h-96 object-cover rounded border" style={{ borderColor: "var(--card-border)" }} />
                                    </Carousel.Item>
                                ))}
                            </Carousel.Content>
                            <Carousel.Previous className="left-2 bg-card border-card-border text-card-foreground hover:bg-card-foreground hover:text-card" />
                            <Carousel.Next className="right-2 bg-card border-card-border text-card-foreground hover:bg-card-foreground hover:text-card" />
                        </Carousel>
                    </div>
                )}

                {/* Actions */}
                {url && url !== "#" && (
                    <a 
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 rounded font-semibold text-sm transition-all duration-200 hover:translate-y-0.5"
                        style={{ 
                            backgroundColor: "#048688",
                            color: "#fff",
                            boxShadow: "2px 2px 0 0 var(--card-border)"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.boxShadow = "none"}
                        onMouseLeave={(e) => e.currentTarget.style.boxShadow = "2px 2px 0 0 var(--card-border)"}
                    >
                        View Project
                    </a>
                )}
            </div>
        </div>
    );
}
