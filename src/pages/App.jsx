import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import IntroPage from "./pages/IntroPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/" element={<IntroPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
