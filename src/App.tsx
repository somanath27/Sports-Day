import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Homepage/Home";
import Event from "./pages/Event/Event";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="events" element={<Event />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
