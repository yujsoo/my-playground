import { defineConfig } from "vitepress";

export default defineConfig({
  title: "my-playground",
  description: "개인 작업 노트",
  lang: "ko-KR",
  base: "/my-playground/",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "가이드", link: "/markdown/" },
      { text: "기록", link: "/notes/" },
    ],

    sidebar: {
      "/notes/": [
        {
          text: "가이드",
          items: [{ text: "Markdown", link: "/markdown/" }],
        },
        {
          text: "기록",
          items: [
            { text: "Vanilla", link: "/vanilla/" },
            { text: "CSS", link: "/css/" },
            { text: "React", link: "/react/" },
            { text: "Vue", link: "/vue/" },
          ],
        },
      ],
      "/markdown/": [
        {
          text: "가이드",
          items: [{ text: "Markdown", link: "/markdown/" }],
        },
        {
          text: "기록",
          items: [
            { text: "Vanilla", link: "/vanilla/" },
            { text: "CSS", link: "/css/" },
            { text: "React", link: "/react/" },
            { text: "Vue", link: "/vue/" },
          ],
        },
      ],
      "/vanilla/": [
        {
          text: "Vanilla",
          items: [
            { text: "시작하기", link: "/vanilla/" },
            { text: "임시 페이지", link: "/vanilla/temp" },
          ],
        },
      ],
      "/react/": [
        {
          text: "React",
          items: [
            { text: "시작하기", link: "/react/" },
            { text: "임시 페이지", link: "/react/temp" },
          ],
        },
      ],
      "/vue/": [
        {
          text: "Vue",
          items: [
            { text: "시작하기", link: "/vue/" },
            { text: "임시 페이지", link: "/vue/temp" },
          ],
        },
      ],
      "/css/": [
        {
          text: "CSS",
          items: [
            { text: "시작하기", link: "/css/" },
            { text: "중앙에서 확장되는 밑줄 효과", link: "/css/css01" },
          ],
        },
      ],
    },

    search: {
      provider: "local",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/yujsoo" }],

    footer: {
      copyright: "Copyright © 2026 yujsoo",
    },

    editLink: {
      pattern: "https://github.com/yujsoo/my-playground/edit/main/docs/:path",
      text: "이 페이지 수정하기",
    },
  },
});
