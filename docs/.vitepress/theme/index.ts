import DefaultTheme from "vitepress/theme";
import "./custom.css";
import CodeCollapse from "./components/CodeCollapse.vue";
import CodeDemo from "./components/CodeDemo.vue";
import type { Theme } from "vitepress";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("CodeCollapse", CodeCollapse);
    app.component("CodeDemo", CodeDemo);
  },
} satisfies Theme;
