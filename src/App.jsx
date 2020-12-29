import React from "react"
import Home from "./components/pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Who from "./components/pages/Who"
import Why from "./components/pages/Why"
import How from "./components/pages/How"
import What from "./components/pages/What"
import './index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/who" component={Who}></Route>
          <Route exact path="/what" component={What}></Route>
          <Route exact path="/why" component={Why}></Route>
          <Route exact path="/how" component={How}></Route>
          <Home />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;