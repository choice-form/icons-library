import { useState, useEffect } from "react";

// 判断是否在 Tauri 环境中 - 改进检测方法
const detectTauriEnvironment = () => {
  try {
    // 检查是否处于桌面应用环境
    return (
      window.navigator.userAgent.includes("Tauri") ||
      window.location.protocol === "tauri:" ||
      "undefined" !== typeof (window as any).__TAURI__
    );
  } catch (e) {
    return false;
  }
};

const isTauri = detectTauriEnvironment();

interface ApiResponse {
  message: string;
  timestamp: string;
}

export function NodeApiTest() {
  const [apiData, setApiData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [environment, setEnvironment] = useState<string>("");
  const [serverStatus, setServerStatus] = useState<
    "idle" | "starting" | "running" | "error"
  >("idle");

  // 检测环境
  useEffect(() => {
    setEnvironment(isTauri ? "Tauri Desktop App" : "Web Browser");
  }, []);

  // 启动 Node.js 服务器 (仅在桌面应用中)
  const startNodeServer = async () => {
    if (!isTauri) return;

    setServerStatus("starting");
    try {
      // 使用模拟数据替代启动真实服务
      setTimeout(() => {
        console.log("Using simulated Node.js server");
        setServerStatus("running");
      }, 1000);
    } catch (err) {
      console.error("Error starting Node.js server:", err);
      setServerStatus("error");
      setError(
        `Failed to start Node.js server: ${err instanceof Error ? err.message : String(err)}`
      );
    }
  };

  // 直接从浏览器调用 API
  const fetchDirectly = async () => {
    setLoading(true);
    setError(null);

    try {
      // 使用直接 fetch 调用 API
      const response = await fetch("http://localhost:3000/api/icons");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setApiData(data);
    } catch (err) {
      setError(
        `Error fetching directly: ${
          err instanceof Error ? err.message : String(err)
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  // 通过 Tauri 命令调用 API
  const fetchViaTauri = async () => {
    setLoading(true);
    setError(null);

    try {
      if (!isTauri) {
        setError("此功能只在 Tauri 桌面应用中可用");
        return;
      }

      // 使用模拟数据
      const mockData = {
        message: "Icons API is working (simulated in browser)!",
        timestamp: new Date().toISOString(),
      };

      setApiData(mockData);
    } catch (err) {
      setError(
        `Error fetching via Tauri: ${
          err instanceof Error ? err.message : String(err)
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  // 使用模拟 API 数据
  const useMockData = async () => {
    setLoading(true);
    setError(null);

    try {
      // 直接返回模拟数据而不尝试调用 Tauri API
      const mockData = {
        message: "Icons API is working (mock data)!",
        timestamp: new Date().toISOString(),
      };
      setApiData(mockData);
    } catch (err) {
      setError(
        `Error getting mock data: ${
          err instanceof Error ? err.message : String(err)
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  // 自动尝试启动服务器
  useEffect(() => {
    if (isTauri && serverStatus === "idle") {
      startNodeServer();
    }
  }, [serverStatus]);

  return (
    <div className="mt-16 p-6 bg-white rounded-lg shadow max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Node.js API 测试</h2>

      <div className="p-3 bg-blue-50 text-blue-800 rounded mb-4">
        <p>
          <strong>当前环境:</strong> {environment}
        </p>
        {!isTauri && (
          <p className="mt-2 text-sm">
            注意: Tauri 相关功能仅在桌面应用程序中可用。 在浏览器中，请使用
            "直接调用 API" 按钮。
          </p>
        )}
        {isTauri && (
          <div className="mt-2 flex items-center">
            <span className="mr-2">服务器状态:</span>
            {serverStatus === "idle" && (
              <span className="text-gray-500">未启动</span>
            )}
            {serverStatus === "starting" && (
              <span className="text-yellow-500 animate-pulse">启动中...</span>
            )}
            {serverStatus === "running" && (
              <span className="text-green-500">运行中</span>
            )}
            {serverStatus === "error" && (
              <span className="text-red-500">启动失败</span>
            )}

            <button
              onClick={startNodeServer}
              disabled={loading || serverStatus === "starting"}
              className="ml-4 px-2 py-1 text-xs bg-blue-400 text-white rounded hover:bg-blue-500 transition-colors"
            >
              重新启动服务器
            </button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold">API 测试</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={fetchDirectly}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              disabled={loading}
            >
              {loading ? "加载中..." : "直接调用 API"}
            </button>

            <button
              onClick={fetchViaTauri}
              className={`px-4 py-2 ${
                isTauri
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-gray-300 cursor-not-allowed"
              } text-white rounded transition-colors`}
              disabled={loading || !isTauri}
              title={!isTauri ? "仅在桌面应用中可用" : ""}
            >
              {loading ? "加载中..." : "通过 Tauri 调用 API"}
            </button>

            <button
              onClick={useMockData}
              className={`px-4 py-2 ${"bg-purple-500 hover:bg-purple-600"} text-white rounded transition-colors`}
              disabled={loading}
              title="使用模拟数据（总是可用）"
            >
              {loading ? "加载中..." : "使用模拟数据"}
            </button>
          </div>
        </div>
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      {apiData && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded">
          <p>
            <strong>消息:</strong> {apiData.message}
          </p>
          <p>
            <strong>时间戳:</strong> {apiData.timestamp}
          </p>
        </div>
      )}
    </div>
  );
}
