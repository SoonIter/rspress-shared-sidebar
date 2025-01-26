import { defineConfig } from 'rspress/config';
import path from 'path';
import type { RspressPlugin } from '@rspress/shared';

export function docPluginDemo(): RspressPlugin {
  return {
    name: 'add-pages',
    addPages(config, isProd) {
      const pages = config.themeConfig?.locales
        ?.map(({ lang }) => [
          {
            routePath: `/${lang}/api/index`,
            filepath: path.join(__dirname, `docs/${lang}/hidden`, 'index.mdx'),
          },
          {
            routePath: `/${lang}/api/installation`,
            filepath: path.join(
              __dirname,
              `docs/${lang}/hidden`,
              'installation.mdx',
            ),
          },
          {
            routePath: `/${lang}/api/installation2`,
            filepath: path.join(
              __dirname,
              `docs/${lang}/hidden`,
              'installation2.mdx',
            ),
          },
          {
            routePath: `/${lang}/guide/index`,
            filepath: path.join(__dirname, `docs/${lang}/hidden`, 'index.mdx'),
          },
          {
            routePath: `/${lang}/guide/installation`,
            filepath: path.join(
              __dirname,
              `docs/${lang}/hidden`,
              'installation.mdx',
            ),
          },
          {
            routePath: `/${lang}/guide/installation2`,
            filepath: path.join(
              __dirname,
              `docs/${lang}/hidden`,
              'installation2.mdx',
            ),
          },
        ])
        .flat();

      console.log('pages', pages);
      return pages;
    },
    async routeGenerated(routes, isProd) {
      // 这里可以拿到 routes 数组，执行一些操作
      console.log(routes, '1111111');
    },
  };
}

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  plugins: [docPluginDemo()],
  lang: 'zh',
  locales: [
    {
      lang: 'zh',
      title: '一个很棒的项目',
      description: '一个很棒的项目描述',
      // 语言切换按钮的文案
      // Language switch button text
      label: '简体中文',
    },
    {
      lang: 'en',
      title: 'A awesome project',
      description: 'A awesome project description',
      label: 'English',
    },
  ],
});
