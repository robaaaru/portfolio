import { Badge } from "@/components/retroui/Badge";
import { ArrowLeft } from 'lucide-react';

export default function ProjectDetail({ project, onBack }) {
    const { title, description, techStack, url, ongoing } = project;

    return (
        <div className="mx-auto w-full md:w-[42rem] lg:w-[46rem] pt-4 px-4">
            {/* Mobile Back Button */}
            <div className="md:hidden mb-4">
                <button onClick={onBack} className="flex items-center gap-2 text-sm font-medium hover:opacity-75 transition-opacity" style={{ color: "var(--foreground)" }}>
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
                        <h1 className="text-xl md:text-2xl font-bold font-head" style={{ color: "var(--foreground)" }}>
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
                    <h2 className="text-sm font-semibold mb-2" style={{ color: "var(--foreground)" }}>
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

                {/* Placeholder content */}
                <div 
                    className="p-4 rounded border mb-6"
                    style={{ 
                        borderColor: "var(--card-border)",
                        backgroundColor: "var(--background)"
                    }}
                >
                    <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                        Project details and screenshots will go here...
                    </p>
                </div>

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
