import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Siteheader from "./components/Siteheader";
import Category from "./pages/Category";
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Siteheader />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/details/:id">
            <ReviewDetails />
          </Route>
          <Route path="/category/:id">
            <Category />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
