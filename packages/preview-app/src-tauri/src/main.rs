// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Manager;
use std::thread;

// 模拟 Node.js API 响应的函数
#[tauri::command]
async fn mock_node_api() -> Result<String, String> {
    let response = serde_json::json!({
        "message": "Icons API is working (simulated in Tauri app)!",
        "timestamp": chrono::Utc::now().to_rfc3339()
    });
    
    Ok(response.to_string())
}

// 启动 Node.js 服务器的函数
#[tauri::command]
async fn launch_node_server() -> Result<String, String> {
    // 在单独的线程中启动 Node.js 服务器
    thread::spawn(|| {
        println!("Informational: Node.js server would be started here in a production app");
    });
    
    Ok("Node.js server (simulated) is starting...".to_string())
}

// 调用 Node.js API 的函数
#[tauri::command]
async fn fetch_from_node_api() -> Result<String, String> {
    // 尝试调用实际的 API，失败时返回模拟数据
    match reqwest::get("http://localhost:3000/api/icons").await {
        Ok(response) => {
            if response.status().is_success() {
                match response.text().await {
                    Ok(body) => Ok(body),
                    Err(e) => {
                        println!("Error reading response: {}", e);
                        mock_node_api().await
                    }
                }
            } else {
                println!("API call failed with status: {}", response.status());
                mock_node_api().await
            }
        },
        Err(e) => {
            println!("Error connecting to API: {}", e);
            mock_node_api().await
        }
    }
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .setup(|app| {
            #[cfg(debug_assertions)]
            {
                println!("Running in development mode");
            }
            
            #[cfg(not(debug_assertions))]
            {
                println!("Running in production mode");
            }
            
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            fetch_from_node_api,
            launch_node_server,
            mock_node_api
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
