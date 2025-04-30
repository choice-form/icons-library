import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Guide, IconBrowser, Layout } from "./components";
import "./tailwind.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IconBrowser />} />
          <Route path="guide" element={<Guide />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
