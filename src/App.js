import Header from "@Components/header"
import Home from "@Components/Home/Home";
import AboutUs from "@Components/aboutUs";
import Stockists from "@Components/stockists";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomerCare from "@Components/customerCare";
import Login from "@Components/login";

function App() {
  return (
  <Router>
    <div>
        <Header />
        <Switch>
            <Route path = "/" exact component = {Home}/>
            <Route path = "/stockists" component = {Stockists}/>
            <Route path = "/customerCare" component = {CustomerCare}/>

        </Switch>
        <AboutUs/>
    </div>
  </Router>
  )
}

export default App
