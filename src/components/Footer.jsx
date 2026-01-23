import { Square, PanelsTopLeft, Building, SquarePen, SquareUser } from "lucide-react";
import { useState } from "react";

export default function Footer({ setPage }) {
  const [activePage, setActivePage] = useState(0);
  const strokeWidth = 1.8;

  const baseIconClasses =
    "stroke-gray-700 w-[1.3rem] h-[1.3rem] md:w-[1.445rem] md:h-[1.445rem] lg:w-[1.7rem] lg:h-[1.75rem] transition-colors duration-175 ease-in cursor-pointer";
  const wrapperClasses = "flex flex-col items-center justify-center relative";

  const icons = [
    { icon: Square, key: "Square" },
    { icon: PanelsTopLeft, key: "PanelsTopLeft" },
    { icon: Building, key: "Building" },
    { icon: SquarePen, key: "SquarePen" },
    { icon: SquareUser, key: "SquareUser" },
  ];

  const handlePageChange = (index) => {
    setActivePage(index);
    setPage(index);
  };

  return (
    <footer className="fixed bottom-0 w-full p-2 md:p-4 lg:p-5 h-13 md:h-15 lg:h-18 backdrop-blur-2xl">
      <div className="flex justify-center items-center gap-6">
        {icons.map(({ icon: Icon, key }, index) => (
          <button
            key={key}
            onClick={() => handlePageChange(index)}
            className={wrapperClasses}
            aria-label={key}
          >
            <Icon
              strokeWidth={strokeWidth}
              className={`${baseIconClasses} ${
                activePage === index ? "stroke-[#048688]" : "hover:stroke-[#048688]"
              }`}
            />
            {activePage === index && (
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1 animate-in fade-in duration-300"></div>
            )}
          </button>
        ))}
      </div>
    </footer>
  );
}
