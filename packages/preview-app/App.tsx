import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { Guide, Icons, PackageDetails, Packages } from "./router";

// 包列表 - 确保与prepare-readmes.js中的列表保持同步
const packages = [
  { id: "icons", name: "Icons" },
  { id: "icons-core", name: "Icons Core" },
  { id: "icons-sprite", name: "Icons Sprite" },
  { id: "icons-react", name: "Icons React" },
  { id: "icons-vue", name: "Icons Vue" },
  { id: "icons-angular", name: "Icons Angular" },
  { id: "icons-solid", name: "Icons Solid" },
  { id: "icons-js", name: "Icons JS" },
  { id: "figma-plugin", name: "Figma Plugin" },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Icons />} />
          <Route path="guide" element={<Guide />} />

          {/* 包文档路由 */}
          <Route path="packages">
            {/* 包列表 */}
            <Route index element={<Packages />} />

            {/* 单个包详情 */}
            {packages.map((pkg) => (
              <Route
                key={pkg.id}
                path={pkg.id}
                element={
                  <PackageDetails packageId={pkg.id} packageName={pkg.name} />
                }
              />
            ))}
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
