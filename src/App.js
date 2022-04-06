import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";

function App() {

  return (
    <Router>
      <div className="container">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
