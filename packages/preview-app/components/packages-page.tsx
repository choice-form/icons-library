import { Button, Scroll } from "@choiceform/design-system";
import { Link } from "react-router-dom";

// 包列表 - 确保与App.tsx和prepare-readmes.js中的列表保持同步
export const packages = [
  {
    id: "icons",
    logo: "svg.svg",
    name: "Icons",
    description: "Core SVG icons library",
  },
  {
    id: "icons-core",
    logo: "core.svg",
    name: "Icons Core",
    description: "Core utilities for SVG icons",
  },
  {
    id: "icons-react",
    logo: "react.svg",
    name: "Icons React",
    description: "React components for SVG icons",
    npm: "https://www.npmjs.com/package/@choiceform/icons-react",
    shields: "https://img.shields.io/npm/v/@choiceform/icons-react",
    npm_downloads: "https://img.shields.io/npm/dm/@choiceform/icons-react",
  },
  {
    id: "icons-vue",
    logo: "vue.svg",
    name: "Icons Vue",
    description: "Vue components for SVG icons",
    npm: "https://www.npmjs.com/package/@choiceform/icons-vue",
    shields: "https://img.shields.io/npm/v/@choiceform/icons-vue",
    npm_downloads: "https://img.shields.io/npm/dm/@choiceform/icons-vue",
  },
  {
    id: "icons-angular",
    logo: "angular.svg",
    name: "Icons Angular",
    description: "Angular components for SVG icons",
    npm: "https://www.npmjs.com/package/@choiceform/icons-angular",
    shields: "https://img.shields.io/npm/v/@choiceform/icons-angular",
    npm_downloads: "https://img.shields.io/npm/dm/@choiceform/icons-angular",
  },
  {
    id: "icons-solid",
    logo: "solid.svg",
    name: "Icons Solid",
    description: "SolidJS components for SVG icons",
    npm: "https://www.npmjs.com/package/@choiceform/icons-solid",
    shields: "https://img.shields.io/npm/v/@choiceform/icons-solid",
    npm_downloads: "https://img.shields.io/npm/dm/@choiceform/icons-solid",
  },
  {
    id: "icons-js",
    logo: "js.svg",
    name: "Icons JS",
    description: "JavaScript library for SVG icons",
    npm: "https://www.npmjs.com/package/@choiceform/icons-js",
    shields: "https://img.shields.io/npm/v/@choiceform/icons-js",
    npm_downloads: "https://img.shields.io/npm/dm/@choiceform/icons-js",
  },
  {
    id: "figma-plugin",
    logo: "figma.svg",
    name: "Figma Plugin",
    description: "Figma plugin for Choiceform icons",
    url: "https://www.figma.com/community/plugin/1499166753064086486/choiceform-svg-icons-exporter",
  },
];

export const Packages = () => {
  return (
    <>
      <div className="fixed inset-0">
        <Scroll>
          <Scroll.Viewport
            className="px-8 pb-16 pt-32 w-full h-full max-w-none
            prose dark:prose-invert"
          >
            <div className="mx-auto xl:container xl:px-8">
              <div className="mb-8">
                <h1 className="text-3xl font-bold">Packages</h1>
                <p className="text-secondary mt-2">
                  Choose a package to view its documentation.
                </p>
              </div>

              <div className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-4 not-prose">
                {packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="flex flex-col items-start gap-4 p-6 bg-secondary_bg rounded-lg no-underline"
                  >
                    <div className="flex justify-center items-center p-4 bg-white rounded-lg">
                      <img
                        src={`./framework-logo/${pkg.logo}`}
                        alt={pkg.name}
                        className="w-10 h-10"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <h2 className="text-xl font-semibold">{pkg.name}</h2>
                      <p className="text-secondary">{pkg.description}</p>
                    </div>
                    <div className="mt-auto flex items-end gap-4 justify-between self-stretch">
                      <Button asChild size="large">
                        <Link to={`/packages/${pkg.id}`}>Guide</Link>
                      </Button>
                      {pkg.shields && (
                        <Link to={pkg.npm}>
                          <img src={pkg.shields} alt="NPM" />
                        </Link>
                      )}
                      {pkg.url && (
                        <Button asChild size="large" variant="secondary">
                          <Link to={pkg.url}>Figma Community</Link>
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Scroll.Viewport>
        </Scroll>
      </div>
    </>
  );
};
