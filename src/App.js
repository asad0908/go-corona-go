import "./App.css";
import BedManagementApp from "./BedManagementApp";
import store from "./components/redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BedManagementApp />
      </Provider>
    </div>
  );
}

export default App;
