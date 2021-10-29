import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import routes from './router';
import { ConfigProvider } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
// import 'zarm/dist/zarm.css';
function App() {

  return (
    <Router>
      <ConfigProvider primaryColor={'#007fff'} locale={zhCN}>
        <Switch>
          {
            routes.map(route => <Route exact key={route.path} path={route.path} component={route.component} />)
          }
        </Switch>
      </ConfigProvider>
    </Router>
  )
}

export default App
