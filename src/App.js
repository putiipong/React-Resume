import WelcomePage from "./Pages/WelcomePage";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={WelcomePage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
