import logo from './logo.svg';
// static 
import './static/css/index.css'
import './App.css';
import { Layout } from 'antd';
import Header from './component/header';
import {Switch, Route} from 'react-router-dom'
// import { Header } from 'antd/lib/layout/layout';

function App() {
  return (
      <Layout className="page">
        <Header/>
        <Layout.Content>
          <Switch>
            <Route path="/juejin" render={() => {
              return <div>j🐖</div>
            }}/>
          </Switch>
        </Layout.Content>
      </Layout>
  );
}

export default App;
