import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import moment from'moment';

function App() {
  var now = moment();
  console.log(now);
  const [count, setCount] = useState(0)
  useEffect(() => {

  },[])

  return (
    <div className="App">
      {moment().format('dddd')}
      <br/>
      {moment().format('MMMM Do YYYY, h:mm:ss a')}
      <br/>
      {moment([2022,0,11]).fromNow()}
    </div>
  )
}

export default App
