import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/footer";
import Quantity from "./components/Quantity P/Quantity";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <h1>hello world</h1>

      <Quantity></Quantity>

      <Footer>bottom</Footer>
    </div>
  );
}

export default App;
