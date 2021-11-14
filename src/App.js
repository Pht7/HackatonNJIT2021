import logo from './logo.svg';
import './App.css';
import Login from './Components/Login.js';
import Logout from './Components/Logout.js';
import Auction from "./Components/Auction";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AddAnimal from './Components/AddAnimal.js';
import ZooProfile from './Components/ZooProfile.js';
import Profile from './Components/Profile';
import Rat from './Components/Rat';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="animals" element={<Animals />} />
            <Route path="about" element={<About />} />
            <Route path="profile" element={<Profile />} />
            <Route path="rat" element={<Rat />} />
          </Routes>
        </div>


      <div id = "navbar">
        <div class = "link">
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </div>
        <div class = "link">
          <nav>
            <Link to="animals">Animals</Link>
          </nav>
        </div>
        <div class = "link">
          <nav>
            <Link to="about">About</Link>
          </nav>
        </div>
        <div class = "link">
          <nav>
            <Link to="profile">Profile</Link>
          </nav>
        </div>
        <div class = "link">
          <nav>
            <Link to="rat">Rat</Link>
          </nav>
        </div>
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
      <h1>This is our app. We need to come up with a name for it</h1>
      <p> Why did we create this web application? The purpose was to support our local zoos, animal sanctuary, and anti poaching abroad. With our auction bidding system, the funds created would go 100% back to the community to help fight these causes. As a token from these organizations, we have teamed up and the winner of of each auction will get a chance to spend a day with those animals. This includes feeding, petting and much more.</p>
      <p>Created using React, CSS, HTML, and Flask</p>
      <p>Team members: Peter Tran, Adrian Majcher, Samuel Muller, Yezen Armout </p>
    </div>
  );
}

function Animals() {
  return (
    <div>
      <Auction />
      <ZooProfile />
    </div>
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
