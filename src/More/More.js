import { Switch, Route } from "react-router-dom";
import Welcomemore from "./Moremodules/Welcomemore";
import Blog from "./Moremodules/Blog";
import Certification from "./Moremodules/Certification";
import Morenav from "./Morenav";

import "./More.css";
import { Button } from "react-bootstrap";
function More() {
  return (
    <div className="Moremain">
      <div className="Navside">
        <Button className="Buttonresp">
          <Morenav />
        </Button>
      </div>
      <div className="Pageopen">
        <Switch>
          <Route path="/" exact={true}>
            <Welcomemore />
          </Route>
          <Route path="/more/blog">
            <Blog />
          </Route>
          <Route path="/more/certification">
            <Certification />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
export default More;
