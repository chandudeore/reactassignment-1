// import logo from "./logo.svg";
import { Link, Route, Routes } from "react-router-dom";
import AllDeal from "./components/AllDeal";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <>
      <div className="linkbar">
        <Link to={"/"} className="link">
          Create-Deal
        </Link>
        <Link to={"/all"} className="link">
          All-Deals
        </Link>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/all" element={<AllDeal />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
