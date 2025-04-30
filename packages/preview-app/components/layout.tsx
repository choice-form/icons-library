import { TooltipProvider } from "@choiceform/design-system";
import { CSSProperties, useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { CustomizerContext, ThemeContext } from "../context";
import { useTheme } from "../hooks";
import { Header } from "./header";

export const Layout = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (newTheme: "light" | "dark" | "system") => {
    setTheme(newTheme);
  };

  const [iconColor, setIconColor] = useState("currentColor");
  const [iconStrokeWidth, setIconStrokeWidth] = useState(1);
  const [iconSize, setIconSize] = useState(16);

  const styles = useMemo(() => {
    return {
      "--color-accent": iconColor,
      "--icon-color": iconColor,
      "--icon-stroke-width": iconStrokeWidth,
      "--icon-size": iconSize,
      "--icon-stroke-style":
        "calc(var(--icon-stroke-width) * 16 / var(--icon-size))",
    } as CSSProperties;
  }, [iconColor, iconStrokeWidth, iconSize]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <CustomizerContext.Provider
        value={{
          color: iconColor,
          setColor: setIconColor,
          strokeWidth: iconStrokeWidth,
          setStrokeWidth: setIconStrokeWidth,
          size: iconSize,
          setSize: setIconSize,
        }}
      >
        <Toaster />
        <TooltipProvider>
          <div className="w-screen h-screen" style={styles}>
            <Header theme={theme} onThemeChange={handleThemeChange} />
            <Outlet />
          </div>
        </TooltipProvider>
      </CustomizerContext.Provider>
    </ThemeContext.Provider>
  );
};
