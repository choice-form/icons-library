import {
  BrowserRouter,
  HashRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import {
  Guide,
  IconBrowser,
  Layout,
  Packages,
  PackageDetails,
  NodeApiTest,
} from "./components";

// 包列表 - 确保与prepare-readmes.js中的列表保持同步
const packages = [
  { id: "icons", name: "Icons" },
  { id: "icons-core", name: "Icons Core" },
  { id: "icons-react", name: "Icons React" },
  { id: "icons-vue", name: "Icons Vue" },
  { id: "icons-angular", name: "Icons Angular" },
  { id: "icons-solid", name: "Icons Solid" },
  { id: "icons-js", name: "Icons JS" },
  { id: "figma-plugin", name: "Figma Plugin" },
];

// 判断是否在 Tauri 应用中运行
const isTauriApp = "undefined" !== typeof (window as any).__TAURI__;

// 根据环境使用不同的路由器组件
const Router = isTauriApp ? HashRouter : BrowserRouter;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IconBrowser />} />
          <Route path="guide" element={<Guide />} />
          <Route path="node-api" element={<NodeApiTest />} />

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
    </Router>
  );
}

export default App;
