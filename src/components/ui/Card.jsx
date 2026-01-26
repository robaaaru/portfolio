import { Badge } from "@/components/retroui/Badge";
import projects from "@/data/projects.json";

function ProjectCard({ title, description, techStack, url, ongoing, onClick }) {
    const handleClick = (e) => {
        e.preventDefault();
        onClick();
    };

    return (
        <div 
            onClick={handleClick}
            className="block p-4 rounded border cursor-pointer hover:translate-y-1 transition-all duration-200"
            style={{ 
                backgroundColor: "var(--card)",
                borderColor: "var(--card-border)",
                boxShadow: "2px 2px 0 0 var(--card-border)",
                marginBottom: '4px', // reduce vertical space between cards
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = "none"}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = "2px 2px 0 0 var(--card-border)"}
        >
            <div className="flex items-start gap-2 mb-2">
                <h3 className="text-lg font-semibold font-head flex-1" style={{ color: "var(--foreground)" }}>
                    {title}
                </h3>
                {ongoing && (
                    <span 
                        className="text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0 mt-0.5"
                        style={{ 
                            backgroundColor: "#048688",
                            color: "#fff"
                        }}
                    >
                        In Progress
                    </span>
                )}
            </div>
            <p className="text-base mb-3" style={{ color: "var(--muted-foreground)" }}>
                {description}
            </p>
            <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                    <Badge key={index} variant="outline" size="md">
                        {tech}
                    </Badge>
                ))}
            </div>
        </div>
    );
}

export default function Card({ onSelectProject }){
    return(
        <div className="mx-auto w-full md:w-[42rem] lg:w-[50rem] pt-4 px-4 flex justify-center" style={{ color: "var(--card-foreground)" }}>
            <div className="masonry" style={{ columnGap: '1.5rem', display: 'inline-block' }}>
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className="masonry-item"
                        style={{ minWidth: 0, width: '100%' }}
                    >
                        <ProjectCard {...project} onClick={() => onSelectProject(project)} />
                    </div>
                ))}
            </div>
        </div>
    )
}