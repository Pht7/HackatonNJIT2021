import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import Logout from './Logout.js';
import Auction from "./components/Auction";

function App() {
  return (
    <div className="App">
      <Login />
      <Logout />
      <Auction />
      <header className="App-header">
        <h1> Hello Test</h1>
      </header>
        <a href ="google.com"> <button>Hello</button> </a>
    </div>
  );
}

export default App;
