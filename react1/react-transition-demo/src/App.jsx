import React, { useState } from 'react'
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'
import './App'
const Home = () => {
  return (
    <div className='page home'>
      Home
    </div>
  )
}
const About = () => {
  return (
    <div className='page about'>
      About
    </div>
  )
}

function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Index</Link>
        <br></br>
        <Link to="/about">About</Link>
      </nav>
      <TransitionGroup
        className={'router-wrapper'}
        childFactory={child => React.cloneElement(child, { className })}
      >
        <CSSTransition timeout={500}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </CSSTransition>

      </TransitionGroup>

    </BrowserRouter>
  )
}

export default App
