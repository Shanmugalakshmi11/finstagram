import "./styles/Variables.css";
import "./styles/App.css";
import Navigationbar from "./components/Layout/navbar/Navigationbar";
import Content from "./components/Layout/Content";
import Footer from "./components/Layout/Footer";
import Login from "./components/Layout/navbar/Login/Login";

function App() {
  const handleLogin = (username) => {
    // Handle actions upon successful login (e.g., redirect, state update)
    console.log(`${username} logged in successfully`);
  };

  return (
    <div className="App">
      <Navigationbar />
      <Login onLogin={handleLogin} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
