import "./App.css";
import SignIn from "./SignIn";
import Profile from "./Profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return <SignIn />;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Profile />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
