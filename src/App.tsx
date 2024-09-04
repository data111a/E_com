import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.page";
import SignUp from "./pages/SignUp.page";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Login from "./pages/Login.page";
import About from "./pages/About.page";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" index element={<Navigate to="/home" />} />
        <Route path="/home" index element={<Home />} />
        <Route path="/signup" index element={<SignUp />} />
        <Route path="/login" index element={<Login />} />
        <Route path="/about" index element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
