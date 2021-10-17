import React from 'react';
import { Header } from './components/header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage } from './pages'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signIn" render={() => <h1>登录界面</h1>} />
          <Route render={() => <h1>404 not found 页面丢失了！</h1>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
