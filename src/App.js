import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminData from "./components/admin/AdminData";
import GetDataFromDb from "./components/admin/GetDataFromDb";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admin">
            <AdminData />
          </Route>
          <Route path="/check">
            <GetDataFromDb />
          </Route>
          <Route path="/">
            <h1>Main page covid 19 bed management</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
