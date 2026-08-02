import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import clsx from "clsx";

function DarkMode({className}: {className?: string}) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={clsx(
        "relative w-18 h-8 rounded-full outline-none transition-colors duration-500 overflow-hidden",
        className,
        theme === "light"
          ? "bg-gray-200 shadow-[inset_-3px_1px_10px_rgba(3,3,3,0.4)] "
          : "bg-yellow-50 shadow-[inset_6px_2px_10px_rgba(3,3,3,0.6)]",
      )}
    >
      <span
        className={clsx(
          "absolute left-2  top-1/2 -translate-y-1/2 transition-transform duration-300",
          theme === "dark" ? "translate-x-8" : "translate-x-0",
        )}
      >
        <Sun
          size={22}
          className={clsx(
            "absolute text-[#f69e0a] transition-opacity duration-300",
            theme === "light" ? "opacity-0" : "opacity-100",
          )}
        />
        <Moon
          color="#333333"
          size={22}
          className={clsx(
            "text-[#333333] transition-opacity duration-300",
            theme === "light" ? "opacity-100" : "opacity-0",
          )}
        />
      </span>
    </button>
  );
}

export default DarkMode;
