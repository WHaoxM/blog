import { webpackBundler } from "@vuepress/bundler-webpack";
import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

import theme from "./theme.js";

export default defineUserConfig({

  head: [
    // ...

    // 导入相应链接
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;700&display=swap",
        rel: "stylesheet",
      },
    ],
  ],

  // 网站路径默认为主域名。如果网站部署在子路径下，比如 xxx.com/yyy，那么 base 应该被设置为 "/yyy/"
  base: "/",

  // 网站语言，默认为中文
  lang: "zh-CN",
  // 网站标题
  title: "MyLifeHub",
  // 网站描述
  description: "我的个人学习成长与生活记录空间，记录并分享一切值得珍藏的知识与经历。",

  theme,
  // 是否开启页面预拉取，如果服务器宽带足够，可改为 true，会提升其他页面加载速度
  shouldPrefetch: false,

  // 使用 client.ts 来添加全局功能，而不是 templateBuild
  // templateBuild: "./templateBuild.html",

  // 禁止文件夹生成静态文件，参考 [VuePress 文档]（https://v2.vuepress.vuejs.org/zh/guide/page.html#routing）
  pagePatterns: ["**/*.md", "!_temp", "!reading", "!.vuepress", "!node_modules"],

  plugins: [
    // 谷歌分析
    googleAnalyticsPlugin({
      // 设置你的 Analytics ID
      id: "G-RWKZTY2P9R",
    }),
  ],
  bundler: webpackBundler({
    postcss: {},
    vue: {},
  }),
});