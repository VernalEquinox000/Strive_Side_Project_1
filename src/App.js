import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Backoffice from "./components/Backoffice";
function App() {
  state = {
    query: "",
  };
  return (
    <Router>
      <NavBar />
      <Route render={(props) => <Home {...props} />} />
    </Router>
  );
}

export default App;
