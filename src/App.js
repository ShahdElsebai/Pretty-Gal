import Header from "@Components/header"
import Home from "@Components/pages/Home/Home";
import AboutUs from "@Components/pages/aboutUs";
import Stockists from "@Components/pages/stockists";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomerCare from "@Components/pages/customerCare";
import Shop from "@Components/pages/shop";

function App() {
  return (
  <Router>
    <div>
        <Header />
        <Switch>
            <Route path = "/" exact component = {Home}/>
            <Route path = "/stockists" component = {Stockists}/>
            <Route path = "/customerCare" component = {CustomerCare}/>
            <Route path = "/shop" component = {Shop}/>
        </Switch>
        <AboutUs/>
    </div>
  </Router>
  )
}

export default App
