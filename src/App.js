import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp";
import { AuthProvider } from "./components/Auth";
import PrivateRoute from "./components/PrivateRoute";
import Classes from "./components/Dashboard/Classes";
import TestScreen from "./components/Dashboard/TestScreen";
import LevelAndClasses from "./components/Dashboard/LevelAndClasses";
import EduPoints from "./elements/edupoints.js";
import "./App.css";
import Home from "./home/Home";

function App() {
  // Ignore the above haha
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <PrivateRoute
            exact
            path="/dashboard"
            component={Dashboard}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path="/sessions"
            component={Classes}
          ></PrivateRoute>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route path="/test-history/:topic" component={TestScreen}></Route>
          <Route path="/level/:topic" component={LevelAndClasses}></Route>
          <Route path="/edupoints" component={EduPoints}></Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
