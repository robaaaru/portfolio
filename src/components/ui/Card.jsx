import { Badge } from "@/components/retroui/Badge";
import projects from "@/data/projects.json";

function ProjectCard({ title, description, techStack, url, ongoing }) {
    return (
        <a 
            href={url} 
            className="block p-4 rounded border cursor-pointer hover:translate-y-1 transition-all duration-200 relative"
            style={{ 
                backgroundColor: "var(--card)",
                borderColor: "var(--card-border)",
                boxShadow: "2px 2px 0 0 var(--card-border)",
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = "none"}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = "2px 2px 0 0 var(--card-border)"}
        >
            {ongoing && (
                <span 
                    className="absolute top-3 right-3 text-xs font-semibold px-2 py-0.5 rounded"
                    style={{ 
                        backgroundColor: "#048688",
                        color: "#fff"
                    }}
                >
                    In Progress
                </span>
            )}
            <h3 className="text-lg font-semibold mb-2 font-head" style={{ color: "var(--foreground)" }}>
                {title}
            </h3>
            <p className="text-sm mb-3" style={{ color: "var(--muted-foreground)" }}>
                {description}
            </p>
            <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                    <Badge key={index} variant="outline" size="md">
                        {tech}
                    </Badge>
                ))}
            </div>
        </a>
    );
}

export default function Card(){
    return(
        <div className="mx-auto w-full md:w-[42rem] lg:w-[46rem]" style={{ color: "var(--card-foreground)" }}>
            <div className="flex flex-col gap-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    )
}   