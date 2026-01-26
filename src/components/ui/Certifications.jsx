import certifications from '../../data/certifications.json';
import { ExternalLink } from 'lucide-react';

export default function Certifications() {
    return (
        <div className="mx-auto w-full md:w-[42rem] lg:w-[50rem] pt-4 px-4">
            <div className="flex flex-col gap-6">
                {certifications.map(cert => (
                    <div key={cert.id} className="flex items-start gap-4 border-b border-gray-200 pb-6 mb-6 last:border-b-0 last:pb-0 last:mb-0">
                        <div className="w-16 h-16 flex-shrink-0 rounded" style={{ backgroundColor: "var(--muted)" }}>
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-base font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                                {cert.title}
                            </h3>
                            <p className="text-sm mb-1" style={{ color: "#048688" }}>
                                {cert.issuer}
                            </p>
                            <p className="text-sm mb-2" style={{ color: "var(--muted-foreground)" }}>
                                Issued {cert.date}
                            </p>
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-mono px-2 py-1 rounded" style={{ backgroundColor: "var(--muted)", color: "var(--foreground)" }}>
                                    {cert.credentialId}
                                </span>
                                <a
                                    href={cert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm flex items-center gap-1 hover:underline"
                                    style={{ color: "#048688" }}
                                >
                                    Verify
                                    <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}