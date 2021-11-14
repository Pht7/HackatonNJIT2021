import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import Logout from './Logout.js';
import Auction from "./Components/Auction";
import AddAnimal from './Components/AddAnimal.js';
import ZooProfile from './Components/ZooProfile.js';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
      <Login />
      <Logout />
      <Auction />
      <ZooProfile />
      <button type="button" class="profile-button" onClick={() => {
        <Profile />
      }}>Profile</button>
    </div>
  );
}

export default App;
