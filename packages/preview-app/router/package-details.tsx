import React, { useState, useEffect, Suspense } from "react";
import { Prism, SyntaxHighlighterProps } from "react-syntax-highlighter";
import {
  oneLight,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useThemeContext } from "../context";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button, Scroll, tcx } from "@choiceform/design-system";
import { Link } from "react-router-dom";
import { packages } from "./packages";

const SyntaxHighlighter = Prism as unknown as React.FC<SyntaxHighlighterProps>;

interface PackageDetailsProps {
  packageId: string;
  packageName: string;
}

export const PackageDetails: React.FC<PackageDetailsProps> = ({
  packageId,
  packageName,
}) => {
  const { theme } = useThemeContext();
  const [readmeContent, setReadmeContent] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const syntaxTheme = theme === "dark" ? vscDarkPlus : oneLight;

  useEffect(() => {
    const fetchReadme = async () => {
      setLoading(true);
      try {
        // 首先尝试从静态文件夹获取README文件（生产环境优先）
        console.log(`Fetching README for ${packageId} from static files...`);
        const staticResponse = await fetch(`/readme/${packageId}.md`);

        if (staticResponse.ok) {
          // 静态文件存在，直接使用
          const content = await staticResponse.text();
          console.log(
            `README content loaded from static file (first 100 chars): ${content.substring(0, 100)}...`
          );
          setReadmeContent(content);
        } else {
          // 静态文件不存在，尝试API中间件（仅开发环境工作）
          console.log(`Static file not found, trying API middleware...`);
          const apiResponse = await fetch(`/api/readme/${packageId}`);

          if (apiResponse.ok) {
            const content = await apiResponse.text();
            console.log(
              `README content loaded from API (first 100 chars): ${content.substring(0, 100)}...`
            );
            setReadmeContent(content);
          } else {
            console.error(`Failed to fetch README for ${packageId}`);
            setReadmeContent(
              `# ${packageName}\n\n## Documentation not found\n\nThe README.md file for this package was not found.\n\n**Note for production builds:** Please run \`pnpm prepare-readmes\` before building to generate static README files.\n\n**Note for development:** Make sure README.md exists in the package directory.`
            );
          }
        }
      } catch (error) {
        console.error("Error fetching README:", error);
        setReadmeContent(
          `# ${packageName}\n\n## Error loading documentation\n\nAn error occurred while trying to load the documentation. Please check the console for more details.`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchReadme();
  }, [packageId, packageName]);

  const renderCodeBlock = ({
    className,
    children,
  }: {
    className?: string;
    children: string;
  }) => {
    // Extract the language from className or set a default
    let language = className ? className.replace("language-", "") : "text";

    // Handle Vue code blocks - map 'vue' language to 'jsx' or 'markup' which Prism supports better
    if (language === "vue") {
      language = "jsx";
    }

    return (
      <SyntaxHighlighter
        language={language}
        style={syntaxTheme}
        customStyle={{
          borderRadius: "0.375rem",
          margin: "1rem 0",
          fontSize: "0.8125rem",
          fontFamily: "var(--font-mono)",
        }}
      >
        {children}
      </SyntaxHighlighter>
    );
  };

  return (
    <>
      <aside className="fixed z-10 bg-secondary-background left-0 inset-y-0 w-(--sidebar-container-width) pl-(--sidebar-padding-left) hidden lg:block">
        <Scroll className="h-screen">
          <Scroll.Viewport className="h-full">
            <div className="pt-(--nav-height) flex flex-col gap-4 pb-32">
              <div className="text-sm font-medium mb-1 px-1 text-secondary-foreground">
                Packages
              </div>
              <nav className="flex flex-col gap-1 pr-4">
                {packages.map((pkg) => (
                  <Link key={pkg.id} to={`/packages/${pkg.id}`}>
                    <div
                      className={tcx(
                        "flex items-center gap-2 cursor-default select-none rounded-md px-2 py-1",
                        pkg.id === packageId
                          ? "text-accent-foreground bg-accent-background/10"
                          : "hover:bg-secondary-hover-background active:bg-accent-background/10"
                      )}
                    >
                      {pkg.name}
                    </div>
                  </Link>
                ))}
              </nav>
            </div>
          </Scroll.Viewport>
        </Scroll>
      </aside>

      <div className="fixed inset-0">
        <Scroll>
          <Scroll.Viewport className="flex-1 max-w-full h-screen min-w-0 overflow-auto pt-16 pb-64 pl-(--sidebar-container-width) pr-(--icon-browser-padding-right)">
            <div className="w-full relative pl-8 max-w-[calc(100vw-2rem)] min-w-0">
              {/* 面包屑导航 */}
              <div className="my-4 flex items-center">
                <Button variant="link" asChild>
                  <Link
                    to="/packages"
                    className="text-secondary-foreground hover:text-default-foreground no-underline cursor-default"
                  >
                    Packages
                  </Link>
                </Button>
                <span className="mx-2 text-secondary">/</span>
                <span className="font-medium">{packageName}</span>
              </div>

              {/* 内容区域 */}
              <div className="prose dark:prose-invert max-w-none min-w-0 overflow-hidden">
                <Suspense fallback={<div>Loading...</div>}>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      code: ({ className, children, ...props }) => {
                        const match = /language-(\w+)/.exec(className || "");
                        return match ? (
                          renderCodeBlock({
                            className,
                            children: String(children),
                          })
                        ) : (
                          <code
                            className="bg-secondary-hover-background px-1 py-0.5 rounded"
                            {...props}
                          >
                            {children}
                          </code>
                        );
                      },
                      pre: ({ children }) => <div>{children}</div>,
                      // 增强表格样式
                      table: (props) => (
                        <div className="overflow-x-auto">
                          <table
                            className="border-collapse w-full"
                            {...props}
                          />
                        </div>
                      ),
                      th: (props) => (
                        <th
                          className="border border-default-boundary bg-secondary-hover-background p-2 text-left"
                          {...props}
                        />
                      ),
                      td: (props) => (
                        <td
                          className="border border-default-boundary p-2"
                          {...props}
                        />
                      ),
                      // 处理相对链接
                      a: ({ href, ...props }) => {
                        if (href && href.startsWith("./")) {
                          // 将相对链接转换为应用内链接
                          const targetPackage = href.replace("./", "");
                          return (
                            <Link
                              to={`/packages/${targetPackage}`}
                              {...props}
                            />
                          );
                        }
                        return (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            {...props}
                          />
                        );
                      },
                    }}
                  >
                    {readmeContent}
                  </ReactMarkdown>
                </Suspense>
              </div>
            </div>
          </Scroll.Viewport>
        </Scroll>
      </div>
    </>
  );
};
