
import experienceData from '../../data/experience.json';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function ExperienceList() {
    return (
        <div className="mx-auto w-full md:w-[42rem] lg:w-[50rem] flex flex-col pt-4 px-4">
            <div className="flex flex-col gap-10">
                {experienceData.map(exp => {
                    // Choose icon based on type (example: education vs work)
                    // You can expand this logic as needed
                    const isEducation = exp.role.toLowerCase().includes('bachelor') || exp.role.toLowerCase().includes('degree');
                    const Icon = isEducation ? GraduationCap : Briefcase;
                    return (
                        <div key={exp.id} className="flex flex-row gap-2 md:gap-4 items-start">
                            {/* Icon column, blue and larger */}
                            <div className="flex flex-col items-center pt-1" style={{minWidth: '3.5rem'}}>
                                <Icon size={40} className="text-[#048688] mb-2" />
                            </div>
                            {/* Main content */}
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
                    );
                })}
            </div>
        </div>
    );
}
