import logo from './logo.svg';
import './App.css';
import Index from './pages/index/index'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Index}/>
      </Switch>
    </div>
  );
}

export default App;
