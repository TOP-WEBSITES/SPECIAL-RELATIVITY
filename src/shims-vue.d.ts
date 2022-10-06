/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '@hsorby/vue3-katex' {
  import { App } from 'vue';
  export default function install(app: App): void;
}
