import {useState} from 'react';
import logo from './logo.svg';
import ChartDemo from './components/ChartDemo';
import './App.css';

const Count = () => {
  let [count, setCount] = useState(0)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() =>setCount(count+1)}>click me</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      {/* <Count/> */}
      <ChartDemo/>
    </div>
  );
}

export default App;
