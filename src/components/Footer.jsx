import { Square, PanelsTopLeft, Building, SquarePen, SquareUser } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer({ setPage, activePage = 0, labels = [] }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const strokeWidth = 1.8;

  const bgTransparent = isDark ? "rgba(26, 26, 26, 0.15)" : "rgba(255, 255, 255, 0.15)";

  const baseIconClasses =
    "w-[1.3rem] h-[1.3rem] md:w-[1.445rem] md:h-[1.445rem] lg:w-[1.7rem] lg:h-[1.75rem] transition-colors duration-175 ease-in cursor-pointer";
  const wrapperClasses = "flex flex-col items-center justify-center relative";

  const icons = [
    { icon: Square, key: "home" },
    { icon: PanelsTopLeft, key: "dashboard" },
    { icon: Building, key: "offices" },
    { icon: SquarePen, key: "drafts" },
    { icon: SquareUser, key: "profile" },
  ].map((item, index) => ({ ...item, label: labels[index] || item.key }));

  const handlePageChange = (index) => {
    setPage(index);
  };

  return (
    <footer className="fixed bottom-0 w-full" style={{ backgroundColor: bgTransparent, color: "var(--foreground)", backdropFilter: "blur(32px)", WebkitBackdropFilter: "blur(32px)", transition: "background-color 200ms ease, color 200ms ease, border-color 200ms ease" }}>
      <div className="mx-auto w-full md:w-[45rem] py-3 px-2 md:py-4 md:px-4 lg:py-5 lg:px-5 border-t-1" style={{ borderColor: "var(--border)", transition: "background-color 200ms ease, color 200ms ease, border-color 200ms ease" }}>
        <div className="flex justify-center items-center gap-6">
          {icons.map(({ icon: Icon, key, label }, index) => (
            <button
              key={key}
              onClick={() => handlePageChange(index)}
              className={wrapperClasses}
              aria-label={label}
              title={label}
            >
              <Icon
                strokeWidth={strokeWidth}
                className={baseIconClasses}
                style={{
                  stroke: activePage === index ? "#048688" : "var(--icon-muted)",
                  transition: "stroke 200ms ease",
                }}
                onMouseEnter={(e) => {
                  if (activePage !== index) e.currentTarget.style.stroke = "#048688";
                }}
                onMouseLeave={(e) => {
                  if (activePage !== index) e.currentTarget.style.stroke = "var(--icon-muted)";
                }}
              />
              {activePage === index && (
                <div className="w-1.5 h-1.5 rounded-full mt-1 animate-in fade-in duration-300" style={{ backgroundColor: "#048688" }}></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
