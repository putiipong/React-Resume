import WelcomePage from "./Pages/WelcomePage";
import HomePage from "./Pages/HomePage";
import Skill from "./Pages/Skill";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={WelcomePage}></Route> */}
          <Route path="/" component={HomePage}></Route>
          {/* <Route path="/skill" component={Skill}></Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
