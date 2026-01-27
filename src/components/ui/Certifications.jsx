import certifications from '../../data/certifications.json';
import { ExternalLink } from 'lucide-react';

export default function Certifications() {
    return (
        <div className="mx-auto w-full md:w-[42rem] lg:w-[50rem] pt-4 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map(cert => (
                    <div key={cert.id} className="rounded-lg border overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-300" style={{ backgroundColor: "var(--card)", borderColor: "var(--card-border)" }}>
                        <div className="aspect-video" style={{ backgroundColor: "var(--muted)" }}>
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                                {cert.title}
                            </h3>
                            <p className="text-sm mb-1" style={{ color: "#048688" }}>
                                {cert.issuer}
                            </p>
                            <p className="text-sm mb-3" style={{ color: "var(--muted-foreground)" }}>
                                Issued {cert.date}
                            </p>
                            <div className="flex items-center justify-between">
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