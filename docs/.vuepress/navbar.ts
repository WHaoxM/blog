import { navbar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
// 专题话题的路径需在尾部添加 /，否则有可能出现链接错误。比如下方「生活」中的 baby/
export default navbar([
  { text:"主页", icon: "fa6-solid:house", link: "/" },
  { text: "博客", icon: "fa6-solid:blog", link: "/blog" },
  {
    text: "学习笔记",
    icon: "fa6-solid:graduation-cap",
    prefix: "notes/",
    children: [
      {
        text: "技术笔记",
        icon: "fa6-solid:laptop-code",
        prefix: "tech/",
        children: [
          "javascript/",
          "typescript/",
          "vue/",
          "react/",
        ],
      },
      {
        text: "生活技能",
        icon: "fa6-solid:utensils",
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
    prefix: "/life/",
    children: [
      "daily-life/",
      "travel/",
      "health/",
      "fitness/",
    ],
  },
  {
    text: "创作",
    icon: "fa6-solid:pencil",
    prefix: "/create/",
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
    children: [
      {
        text: "实用工具",
        icon: "fa6-solid:screwdriver-wrench",
        link: "/tools/",
      },
      {
        text: "资源分享",
        icon: "fa6-solid:folder-open",
        link: "/resources/",
      },
      {
        text: "推荐链接",
        icon: "fa6-solid:star",
        link: "/recommendations/",
      },
    ],
  },
  {
    text: "关于",
    icon: "fa6-solid:user",
    children: [
      { text: "个人简介", icon: "fa6-solid:id-card", link: "/about/" },
      { text: "联系方式", icon: "fa6-solid:envelope", link: "/contact/" },
      { text: "友链", icon: "fa6-solid:link", link: "/links/" },
    ],
  },
]);
