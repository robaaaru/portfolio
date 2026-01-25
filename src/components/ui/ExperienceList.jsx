import experienceData from '../../data/experience.json';

export default function ExperienceList() {
    return (
        <div className="mx-auto w-full md:w-[42rem] lg:w-[50rem] flex flex-col pt-4 px-4">
            <div className="flex flex-col gap-10">
                {experienceData.map(exp => (
                    <div key={exp.id} className="flex flex-row gap-4 md:gap-6 items-start">
                        {/* On mobile, image is above text and left-aligned */}
                        <div className="flex-shrink-0 w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-[var(--card)] border border-[var(--card-border)] flex items-center justify-center mb-3 md:mb-0">
                            <img src={exp.image} alt={exp.institution + ' logo'} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                            <div className="font-semibold text-base mb-1" style={{color: "var(--foreground)"}}>{exp.institution}</div>
                            <div className="text-sm font-medium mb-1" style={{color: "#048688"}}>{exp.role}</div>
                            <div className="text-xs mb-2" style={{color: "var(--muted-foreground)"}}>{exp.date}</div>
                            {exp.responsibilities && exp.responsibilities.length > 0 && (
                                <div className="mt-2">
                                    <div className="text-xs font-semibold mb-1" style={{color: "var(--foreground)"}}>Responsibilities & Contributions</div>
                                    <ul className="list-disc pl-5 text-xs md:text-sm" style={{color: "var(--muted-foreground)"}}>
                                        {exp.responsibilities.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
