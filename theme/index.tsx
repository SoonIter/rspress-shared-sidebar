import Theme, { SidebarList, type SidebarData } from 'rspress/theme';
import { Layout as BaseLayout } from 'rspress/theme';
import { useEffect, useMemo, useState } from 'react';
import { useLang, useLocation } from 'rspress/runtime';

const createSidebarData = (lang: string, pathname: string): SidebarData => {
  const langPrefix = lang === 'zh' ? '' : `/${lang}`;
  const navPrefix = pathname.includes('/api')
    ? '/api'
    : pathname.includes('/guide')
    ? '/guide'
    : '';

  console.log(navPrefix, 'navPrefix');

  return navPrefix
    ? [
        {
          text: '介绍',
          link: `${langPrefix}${navPrefix}/index`,
        },
        {
          text: '前端安装',
          link: `${langPrefix}${navPrefix}/installation`,
        },
        {
          text: '客户端安装',
          link: `${langPrefix}${navPrefix}/installation2`,
        },
        {
          dividerType: 'solid',
        },
      ]
    : [];
};

const Layout = () => {
  const lang = useLang();
  const { pathname } = useLocation();
  console.log(pathname, 2222);

  const [sidebarData, setSidebarData] = useState(() => {
    return createSidebarData(lang, pathname);
  });
  useEffect(() => {
    setSidebarData(() => {
      const res = createSidebarData(lang, pathname);
      console.log('res', res);
      return res;
    });
  }, [lang, pathname]);

  return (
    <BaseLayout
      beforeSidebar={
        <SidebarList
          sidebarData={sidebarData}
          setSidebarData={setSidebarData}
        />
      }
    />
  );
};

export default {
  ...Theme,
  Layout,
};

export * from 'rspress/theme';
