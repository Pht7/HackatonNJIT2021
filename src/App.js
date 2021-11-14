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
      <h1>This is our app. We need to come up with a name for it</h1>
      <p>Peter smells</p>
    </div>
  );
}

function Animals() {
  return (
    <div>
      <Auction />
      <ZooProfile />
      <button type="button" class="profile-button" onClick={() => {
        <Profile />
      }}>Profile</button>
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
