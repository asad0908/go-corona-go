import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminData from "./components/admin/AdminData";
import GetDataFromDb from "./components/admin/GetDataFromDb";
import LandingPage from "./components/LandingPage";
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
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
