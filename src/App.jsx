import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MatchesList from "./components/MatchList";
import Header from "./components/Header"
import Home from "./pages/Home"
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/matchlist" element={<MatchesList />} />
      </Routes>
    </Router>
  );
}

export default App;
