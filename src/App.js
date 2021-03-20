import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminData from "./components/admin/AdminData";
import GetDataFromDb from "./components/admin/GetDataFromDb";
import LandingPage from "./components/LandingPage";
import GetBeds from "./components/beds/GetBeds";
import AdminLogin from "./components/admin/AdminLogin";
import db from "./firebase";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/admin">
            <AdminData />
          </Route>
          <Route path="/check">
            <GetDataFromDb />
          </Route>
          <Route path="/beds">
            <GetBeds />
          </Route>
          <Route path="/hospital/login">
            <AdminLogin />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
