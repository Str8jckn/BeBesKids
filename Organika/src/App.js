import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/footer";
import Quantity from "./components/Quantity P/Quantity";
import Product from "./components/Product/p1";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <h1>MoneyMaknMitch</h1>

      <Product></Product>
      <Quantity></Quantity>

      <Footer>I Said YO!</Footer>
    </div>
  );
}

export default App;
