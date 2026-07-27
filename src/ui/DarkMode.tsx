import { useTheme } from "../context/ThemeContext";
import Button from "./Button";
import { Sun, Moon } from "lucide-react";

function DarkMode() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={`relative w-18 h-8 rounded-full outline-none ${
        theme === "light"
          ? "bg-gray-200 shadow-[inset_-3px_1px_10px_rgba(3,3,3,0.4)] "
          : "bg-yellow-50 shadow-[inset_6px_2px_10px_rgba(3,3,3,0.6)]"
      } transition-colors duration-500 overflow-hidden`}
    >
      <span
        className={`absolute left-2  top-1/2 -translate-y-1/2 ${
          theme === "dark" && "translate-x-8"
        } transition-all duration-300 `}
      >
        <Sun
          color="#f69e0a"
          size={22}
          className={`absolute transition-all duration-300 ${
            theme === "light" ? "opacity-0" : "opacity-100"
          }`}
        />
        <Moon
          color="#333333"
          size={22}
          className={`transition-all duration-300 ${
            theme === "light" ? "opacity-100" : "opacity-0"
          }`}
        />
      </span>
    </Button>
  );
}

export default DarkMode;
