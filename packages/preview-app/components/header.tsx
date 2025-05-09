import {
  Button,
  Dropdown,
  IconButton,
  Segmented,
  Tabs,
  tcx,
} from "@choiceform/design-system";
import {
  Choiceform,
  Github,
  ThemeMoonDark,
  ThemeSunBright,
  ThemeSystem,
} from "@choiceform/icons-react";
import { useEffect, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

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

  const isIconPage = location.pathname === "/";
  const isPackagesPage = location.pathname === "/packages";
  const isNodeApiPage = location.pathname === "/node-api";

  return (
    <header className="fixed top-0 left-0 right-0 h-(--nav-height) z-50">
      <div
        className="xl:container w-full mx-auto grid grid-cols-[auto_1fr]
        lg:grid-cols-[var(--sidebar-width)_1fr] px-4"
      >
        <div
          className={tcx(
            "flex items-center gap-2 pr-4 pl-4",
            isPackagesPage
              ? "bg-default-background"
              : "bg-default-background lg:bg-transparent"
          )}
        >
          <Link
            to="/"
            className={tcx(
              "flex items-center gap-2 h-(--nav-height) w-full lg:mr-4 cursor-default hover:text-accent-foreground",
              isPackagesPage
                ? "bg-default-background"
                : "lg:bg-secondary-background"
            )}
          >
            <Choiceform width={32} height={32} />
            <span className="text-xl font-bold">Icons Library</span>
          </Link>
        </div>

        <div className="flex items-center justify-end bg-default-background gap-4 h-(--nav-height)">
          <div className="flex items-center gap-2">
            <Button
              variant={isIconPage ? "link" : "ghost"}
              asChild
              active={isIconPage}
            >
              <Link to="/">Icons</Link>
            </Button>

            <Button
              variant={isPackagesPage ? "link" : "ghost"}
              asChild
              active={isPackagesPage}
            >
              <Link to="/packages">Packages</Link>
            </Button>

            <Button
              variant={isNodeApiPage ? "link" : "ghost"}
              asChild
              active={isNodeApiPage}
            >
              <Link to="/node-api">Node API</Link>
            </Button>
          </div>

          <Segmented
            value={activeOption.value}
            onChange={(value) => onThemeChange(value as Theme)}
          >
            {themeOptionsData.map((option) => (
              <Segmented.Item
                key={option.value}
                value={option.value}
                tooltip={option.text}
              >
                <option.Icon />
              </Segmented.Item>
            ))}
          </Segmented>

          <IconButton asChild>
            <a
              href="https://github.com/choice-form/icons-library"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </IconButton>
        </div>
      </div>
    </header>
  );
};
