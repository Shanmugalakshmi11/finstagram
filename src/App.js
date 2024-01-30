import "./styles/Variables.css";
import "./styles/App.css";
import Navigationbar from "./components/Layout/navbar/Navigationbar";
import Content from "./components/Layout/Content";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <div className="App">
      <Navigationbar />

      <Content imageUrl="tech.jpg" />
      <Footer />
    </div>
  );
}

export default App;
