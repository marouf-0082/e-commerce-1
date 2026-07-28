import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface IThemeContext {
  theme: TTheme;
  toggleTheme: () => void;
}

type TTheme = "light" | "dark";

interface IThemeProvider {
  children: React.ReactNode;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const defaultTheme: TTheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
  const [theme, setTheme] = useLocalStorage<TTheme>("theme", defaultTheme);

  const docToggle = () =>
    document.documentElement.classList.toggle("dark", theme === "dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    docToggle();
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
