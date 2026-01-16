import { sidebar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
export default sidebar({
  "/": [
    "DailyRoutine",
    "Fitness",
    // 读书笔记架构更换到 docsify，不能使用相对链接
    { text: "读书笔记", icon: "fa6-brands:readme", link: "https://newzone.top/reading/" },
    // 指定显示页面
    {
      text: "学习笔记",
      icon: "fa6-solid:graduation-cap",
      prefix: "notes/",
      collapsible: true,
      children: [
        {
          text: "前端技术",
          icon: "fa6-solid:code",
          collapsible: true,
          prefix: "tech/",
          children: [
            "javascript/",
            "typescript/",
            "vue/",
            "react/",
          ],
        },
        {
          text: "后端技术",
          icon: "fa6-solid:server",
          collapsible: true,
          prefix: "tech/",
          children: [
            "nodejs/",
            "python/",
            "database/",
          ],
        },
        {
          text: "生活技能",
          icon: "fa6-solid:utensils",
          collapsible: true,
          prefix: "life-skills/",
          children: [
            "cooking/",
            "finance/",
            "time-management/",
          ],
        },
        {
          text: "学科知识",
          icon: "fa6-solid:book",
          collapsible: true,
          prefix: "subjects/",
          children: [
            "mathematics/",
            "science/",
            "literature/",
          ],
        },
      ],
    },
    {
      text: "生活记录",
      icon: "fa6-solid:calendar-days",
      prefix: "life/",
      collapsible: true,
      children: [
        "daily-life/",
        "travel/",
        "health/",
        "fitness/",
      ],
    },
    {
      text: "创作分享",
      icon: "fa6-solid:pencil",
      prefix: "create/",
      collapsible: true,
      children: [
        "writing/",
        "photography/",
        "art-design/",
        "projects/",
      ],
    },
    {
      text: "工具资源",
      icon: "fa6-solid:toolbox",
      prefix: "apps/",
      collapsible: true,
      children: [
        "topic/",
        "Applist.md",
        "design.md",
        "toolbox.md"
      ],
    },
    {
      text: "页面开发",
      icon: "",
      prefix: "web/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "网站部署",
      icon: "",
      prefix: "deploy/",
      collapsible: true,
      children: [
        "Static.md",
        "CloudServices.md",
        "VPS.md",
        {
          text: "部署工具",
          icon: "fa6-brands:windows",
          collapsible: true,
          children: ["GitHub.md", "Cloudflare.md", "MySQL.md", "DNS.md"],
        },
      ],
    },
    {
      text: "代码编程",
      icon: "",
      prefix: "code/",
      collapsible: true,
      children: [
        "README.md",
        {
          text: "Basic",
          icon: "fa6-solid:cube",
          collapsible: true,
          children: ["Markdown.md", "Electron.md", "AutoHotkey.md", "Regex.md"],
        },
        {
          text: "FrondEnd",
          icon: "fa6-solid:object-group",
          collapsible: true,
          children: ["Vue.md", "HTML.md", "Javascript.md", "Python.md"],
        },
      ],
    },
    {
      text: "关于我",
      icon: "fa6-solid:user",
      prefix: "about/",
      collapsible: true,
      children: [
        ""
      ],
    },
    {
      text: "加密目录",
      icon: "material-symbols:encrypted",
      prefix: "encrypt/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "博客文章",
      icon: "fa6-solid:feather-pointed",
      prefix: "_posts/",
      link: "/blog",
      collapsible: true,
      children: "structure",
    },
  ],
  // 专题区（独立侧边栏）
  "/apps/topic/": "structure",
  // 如果你不想使用默认侧边栏，可以按照路径自行设置。但需要去掉下方配置中的注释，以避免博客和时间轴出现异常。_posts 目录可以不存在。
  /*"/_posts/": [
    {
      text: "博客文章",
      icon: "fa6-solid:feather-pointed",
      prefix: "",
      link: "/blog",
      collapsible: true,
      children: "structure",
    },
  ], */
});
