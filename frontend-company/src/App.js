import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddUser from "./clients/AddUser";
import EditUser from "./clients/EditUser";
import ShowUser from "./clients/ShowUser";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/newclient" element={<AddUser />} />
          <Route exact path="/editeclient/:id" element={<EditUser />} />
          <Route exact path="/showclient/:id" element={<ShowUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
