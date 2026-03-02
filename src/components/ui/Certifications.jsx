import { useState, useEffect, useCallback } from 'react';
import certifications from '../../data/certifications.json';
import { ExternalLink, ArrowLeft, X, ZoomIn } from 'lucide-react';

export default function Certifications() {
    const [lightbox, setLightbox] = useState(null);
    const [visible, setVisible] = useState(false);
    const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

    useEffect(() => {
        const check = () => setIsDark(document.documentElement.classList.contains('dark'));
        const observer = new MutationObserver(check);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    const openLightbox = (cert) => {
        setLightbox(cert);
        requestAnimationFrame(() => setVisible(true));
    };

    const closeLightbox = useCallback(() => {
        setVisible(false);
        setTimeout(() => setLightbox(null), 250);
    }, []);

    // Close on Escape key
    useEffect(() => {
        if (!lightbox) return;
        const onKey = (e) => { if (e.key === 'Escape') closeLightbox(); };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [lightbox, closeLightbox]);

    return (
        <>
            <div className="mx-auto w-full md:w-[42rem] lg:w-[50rem] pt-4 px-4">
                <div className="flex flex-col gap-6">
                    {certifications.map(cert => (
                        <div key={cert.id} className="flex items-start gap-4 border-b pb-6 mb-6 last:border-b-0 last:pb-0 last:mb-0" style={{ borderColor: "var(--border)" }}>
                            {/* Thumbnail - clickable */}
                            <button
                                onClick={() => openLightbox(cert)}
                                className="w-16 h-16 flex-shrink-0 rounded overflow-hidden relative group focus:outline-none"
                                style={{ backgroundColor: "var(--muted)", border: "1px solid var(--border)" }}
                                aria-label={`Enlarge ${cert.title}`}
                            >
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover rounded transition-transform duration-200 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 flex items-center justify-center rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ backgroundColor: "rgba(0,0,0,0.45)" }}>
                                    <ZoomIn size={18} color="#fff" />
                                </div>
                            </button>

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

            {/* Image preview modal */}
            {lightbox && (
                <div
                    className="fixed left-0 right-0 z-[49] flex items-center justify-center"
                    style={{
                        top: "var(--header-h, 3.25rem)",
                        bottom: 0,
                        backgroundColor: isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.25)",
                        opacity: visible ? 1 : 0,
                        transition: "opacity 200ms ease",
                    }}
                    onClick={closeLightbox}
                >
                    {/* Close button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
                        style={{ backgroundColor: isDark ? "#000" : "#fff", color: isDark ? "#fff" : "#000" }}
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>

                    {/* Image */}
                    <img
                        src={lightbox.image}
                        alt={lightbox.title}
                        className="select-none"
                        style={{
                            maxWidth: "96%",
                            maxHeight: "96%",
                            objectFit: "contain",
                            transform: visible ? "scale(1)" : "scale(0.95)",
                            transition: "transform 200ms ease",
                        }}
                        onClick={(e) => e.stopPropagation()}
                        draggable={false}
                    />
                </div>
            )}
        </>
    );
}