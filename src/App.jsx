import React from "react"
import Hello from "./Hello"
import Header from "./Header"
import Footer from "./Footer"
import About from "./About"
import Why from "./Why"
import How from "./How"
import Projects from "./Projects"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Hello}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          <Route exact path="/why" component={Why}></Route>
          <Route exact path="/how" component={How}></Route>
          <Hello />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;