import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import Logout from './Logout.js';
import Auction from "./Components/Auction";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="animals" element={<Animals />} />
            <Route path="about" element={<About />} />
          </Routes>
        </div>
      

      <div id = "navbar">
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <nav>
          <Link to="animals">Animals</Link>
        </nav>
        <nav>
          <Link to="about">About</Link>
        </nav>

        <Login />
        <Logout />
      </div>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <div className="App">
      <br/>
      <h1>Welcome to Adoptables</h1>
      <p>This is a website made to raise money for zoos by allowing users to own the animals</p>
    </div>
  );
}

function Animals() {
  return (
    <Auction />
  )
}

function About() {
  return (
    <div>
      <h1>About us</h1>
      <p>we sell animals virtually</p>
    </div>
  )
}

export default App;
