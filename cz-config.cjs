module.exports = {
  // types: [
  //   { value: "feat", name: "feat:     新功能" },
  //   { value: "fix", name: "fix:      修复" },
  //   { value: "docs", name: "docs:     文档变更" },
  //   { value: "style", name: "style:    代码格式(不影响代码运行的变动)" },
  //   { value: "refactor", name: "refactor: 重构(既不是增加feature，也不是修复bug)" },
  //   { value: "perf", name: "perf:     性能优化" },
  //   { value: "test", name: "test:     增加测试" },
  //   { value: "chore", name: "chore:    构建过程或辅助工具的变动" },
  //   { value: "revert", name: "revert:   回退" },
  //   { value: "build", name: "build:    打包" },
  // ],
  types: [
    {
      value: "feat",
      name: "✨ feat:     新功能",
    },
    {
      value: "fix",
      name: "🐛 fix:      修复bug",
    },
    {
      value: "build",
      name: "📦️ build:    打包",
    },
    {
      value: "perf",
      name: "⚡️ perf:     性能优化",
    },
    {
      value: "release",
      name: "🎉 release:  发布正式版",
    },
    {
      value: "style",
      name: "💄 style:    代码的样式美化",
    },
    {
      value: "refactor",
      name: "♻️  refactor: 重构",
    },
    {
      value: "docs",
      name: "✏️  docs:     文档变更",
    },
    {
      value: "test",
      name: "✅ test:     测试",
    },
    {
      value: "revert",
      name: "⏪️ revert:   回退",
    },
    {
      value: "chore",
      name: "🚀 chore:    构建/工程依赖/工具",
    },
    {
      value: "ci",
      name: "👷 ci:       CI related changes",
    },
  ],
  messages: {
    type: "请选择提交类型:",
    customScope: "请输入修改范围(可选):",
    subject: "请简要描述提交(必填):",
    body: "请输入详细描述(可选):",
    footer: "请输入要关闭的issue(可选):",
    confirmCommit: "确认使用以上信息提交？(y/n)",
  },
  skipQuestions: ["body", "footer"],
  subjectLimit: 100,
};
