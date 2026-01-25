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

  const strokeWidth = 2;

  const bgTransparent = isDark ? "rgba(26, 26, 26, 0.15)" : "rgba(255, 255, 255, 0.15)";

  const baseIconClasses =
    "w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6 transition-colors duration-175 ease-in cursor-pointer";
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
    <footer className="fixed bottom-0 w-full overflow-visible z-50" style={{ backgroundColor: bgTransparent, color: "var(--foreground)", backdropFilter: "blur(32px)", WebkitBackdropFilter: "blur(32px)", transition: "background-color 200ms ease, color 200ms ease, border-color 200ms ease" }}>
      <div className="mx-auto w-full md:max-w-[810px] px-3 md:px-4 lg:px-5 h-13 md:h-15 lg:h-18 border-t" style={{ borderColor: "var(--border)", transition: "background-color 200ms ease, color 200ms ease, border-color 200ms ease" }}>
        <div className="flex justify-center items-center gap-6 h-full">
          {icons.map(({ icon: Icon, key, label }, index) => (
            <button
              key={key}
              onClick={() => handlePageChange(index)}
              className="flex items-center justify-center relative transition-transform duration-200 ease-out"
              style={{ transform: activePage === index ? "translateY(-2px)" : "translateY(0)" }}
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
              <div 
                className="w-1 h-1 rounded-full absolute -bottom-2 left-1/2 -translate-x-1/2 transition-all duration-200 ease-out" 
                style={{ 
                  backgroundColor: "#048688",
                  opacity: activePage === index ? 1 : 0,
                  transform: `translateX(-50%) ${activePage === index ? "scale(1)" : "scale(0)"}`
                }}
              ></div>
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
