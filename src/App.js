import React from "react";
import SignInComponent from "./Components/SignIn/SignInComponent";
import RegisterComponent from "./Components/Register/RegisterComponent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthContext } from "./Components/useAuth";
import PrivateRoute from "./Components/PrivateRoute";
import Admin from "./Components/Home/Admin";

function App() {
  return (
    <AuthContext.Provider value={false}>
      <Router>
        <div>
          <Route exact path="/" component={SignInComponent} />
          <Route exact path="/Signup" component={RegisterComponent} />
          <PrivateRoute path="/admin" component={Admin} />
        </div>
      </Router>
    </AuthContext.Provider>
    // <Router>
    //   <div>
    //     <Switch>
    //       <Route path="/" exact component={SignInComponent} />
    //       <Route path="/Signup" component={RegisterComponent} />
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
