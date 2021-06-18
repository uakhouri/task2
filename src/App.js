import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation/Navigation";
import Home from "./Home/Home";
import Courses from "./Courses/Courses";
import Hiring from "./Hiring/Hiring";

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
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
    </div>
  );
}

export default App;
