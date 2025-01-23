import { defineConfig } from 'rspress/config';
import path from 'path';
import type { RspressPlugin } from '@rspress/shared';

export function docPluginDemo(): RspressPlugin {
  return {
    name: 'add-pages',
    addPages(config, isProd) {
      return [
        {
          routePath: '/api/index',
          filepath: path.join(__dirname, 'docs/guide', 'index.mdx'),
        },
        {
          routePath: '/api/installation',
          filepath: path.join(__dirname, 'docs/guide', 'installation.mdx'),
        },
        {
          routePath: '/api/installation2',
          filepath: path.join(__dirname, 'docs/guide', 'installation2.mdx'),
        },
      ];
    },
    async routeGenerated(routes, isProd) {
      // 这里可以拿到 routes 数组，执行一些操作
      console.log(routes, '1111111')
      console.log(22222222222)
    },
  };
}

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  plugins: [docPluginDemo()],
});
