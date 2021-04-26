// import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <ChakraProvider> */}
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </BrowserRouter>
      {/* </ChakraProvider> */}
    </div>
  );
}

export default App;
