// 测试按需导入
console.log("🧪 测试按需导入功能...");

try {
  // 测试按需导入单个图标
  const { default: Add } = await import("./dist/icons/Add.js");
  console.log("✅ 按需导入 Add 成功:", typeof Add);

  // 测试传统 barrel import (兼容性)
  const { Add: AddFromBarrel } = await import("./dist/index.js");
  console.log("✅ Barrel 导入 Add 成功:", typeof AddFromBarrel);

  console.log("🎉 所有导入测试通过！");
} catch (error) {
  console.error("❌ 导入测试失败:", error.message);
}
