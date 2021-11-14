import logo from './logo.svg';
import './App.css';
import Login from './Components/Login.js';
import Logout from './Components/Logout.js';
import Auction from "./Components/Auction";
import AddAnimal from './Components/AddAnimal.js';

function App() {
  return (
    <div className="App">
      <Login />
      <Logout />
      <Auction />
      <AddAnimal />
    </div>
  );
}

export default App;
