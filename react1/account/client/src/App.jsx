import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from 'react-router-dom'; // Switch 路由每次只匹配一次
import routes from './router';
import NavBar from "./components/Nav";

import { ConfigProvider } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
// import 'zarm/dist/zarm.css';  自动按需引入

function App() {

  const [showNav, setShowNav] = useState(false);
  const needNav = ['/', '/data', '/user']
  const { pathname } = useLocation();//获取档期路径
  useEffect(() => {
    setShowNav(needNav.includes(pathname))
  }, [pathname])

  return (
    <ConfigProvider primaryColor={'#007fff'} locale={zhCN}>
      <>
        <Switch>
          {
            routes.map(route => <Route exact key={route.path} path={route.path} component={route.component} />)
          }
        </Switch>
        <NavBar showNav={showNav} />
      </>
    </ConfigProvider>
  )
}

export default App;
