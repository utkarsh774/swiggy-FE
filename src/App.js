import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Cart from "./components/About"
import About from "./components/About"
import NotFound from './components/NotFound.';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
      <Route></Route>
    </Routes>
    </Router>
   </>
  );
}

export default App;
