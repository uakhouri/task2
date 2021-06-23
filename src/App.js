import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation/Navigation";
import Home from "./Home/Home";
import Courses from "./Courses/Courses";
import Hiring from "./Hiring/Hiring";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div className="Mainapp">
      <div className="Header">
        <Navigation />
      </div>

      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/hiring">
          <Hiring />
        </Route>
      </Switch>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
