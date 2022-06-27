import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/home/HomePage";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Redux App Basic</p>
      </header>
      {/* <HomePage /> */}
    </div>
  );
};

export default App;
