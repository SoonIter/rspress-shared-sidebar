import Theme, { Sidebar, SidebarList } from 'rspress/theme';
import { Layout as BaseLayout } from 'rspress/theme';
import { useState } from 'react';
import { useLocation } from 'rspress/runtime';

const Layout = () => {
  const [sidebarData, setSidebarData] = useState([{
    text: '介绍',
    link: '/guide/index'
  },{
    text: '前端安装',
    link: '/guide/installation'
  }, {
    text: '客户端安装',
    link: '/guide/installation2'
  }]);

  const { pathname } = useLocation()
  console.log(sidebarData)
  return (
    <BaseLayout />
  );
};

export default {
  ...Theme,
  Layout,
};

export * from 'rspress/theme';
