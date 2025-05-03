import { Dropdown, Tabs, tcx } from "@choiceform/design-system";
import {
  Choiceform,
  ThemeMoonDark,
  ThemeSunBright,
  ThemeSystem,
} from "@choiceform/icons-generate";
import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Theme = "light" | "dark" | "system";

interface HeaderProps {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export const Header = (props: HeaderProps) => {
  const { theme, onThemeChange } = props;
  const navigate = useNavigate();
  const location = useLocation();

  const activeTab = useMemo(() => {
    if (location.pathname === "/guide") return "guide";
    return "icon";
  }, [location.pathname]);

  const handleTabChange = (value: string) => {
    if (value === "icon") {
      navigate("/");
    } else {
      navigate(`/${value}`);
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && activeTab !== "icon") {
      handleTabChange("icon");
    }
  }, [location.pathname, activeTab]);

  const themeOptionsData = useMemo(
    () => [
      {
        Icon: ThemeSunBright,
        text: "Light",
        value: "light",
      },
      {
        Icon: ThemeMoonDark,
        text: "Dark",
        value: "dark",
      },
      {
        Icon: ThemeSystem,
        text: "System",
        value: "system",
      },
    ],
    []
  );

  const activeOption = useMemo(
    () =>
      themeOptionsData.find((option) => option.value === theme) ||
      themeOptionsData[0],
    [themeOptionsData, theme]
  );

  const isGuidePage = location.pathname === "/guide";

  return (
    <header className="fixed top-0 left-0 right-0 h-(--nav-height) z-50">
      <div
        className="xl:container w-full mx-auto grid grid-cols-[auto_1fr]
        lg:grid-cols-[var(--sidebar-width)_1fr] px-4"
      >
        <div
          className={tcx(
            "flex items-center gap-2 pr-4 pl-4",
            isGuidePage ? "bg-default_bg" : "bg-default_bg lg:bg-transparent"
          )}
        >
          <div
            className={tcx(
              "flex items-center gap-2 h-(--nav-height) w-full lg:mr-4",
              isGuidePage ? "" : "lg:bg-secondary_bg"
            )}
          >
            <Choiceform width={32} height={32} />
            <span className="text-xl font-bold">Icons Library</span>
          </div>
        </div>

        <div className="flex items-center justify-end bg-default_bg gap-4 h-(--nav-height)">
          <Tabs value={activeTab} onChange={handleTabChange}>
            <Tabs.Item value="icon">Icons</Tabs.Item>
            <Tabs.Item value="guide">Guide</Tabs.Item>
          </Tabs>

          <Dropdown selection={true}>
            <Dropdown.Trigger>
              <activeOption.Icon />
              <span className="hidden lg:block">{activeOption.text} Theme</span>
            </Dropdown.Trigger>
            {themeOptionsData.map((option) => (
              <Dropdown.Item
                key={option.value}
                selected={activeOption.value === option.value}
                onMouseUp={() => onThemeChange(option.value as Theme)}
              >
                <option.Icon />
                <span>{option.text} Theme</span>
              </Dropdown.Item>
            ))}
          </Dropdown>
        </div>
      </div>
    </header>
  );
};
