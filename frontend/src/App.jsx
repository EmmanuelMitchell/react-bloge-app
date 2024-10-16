import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={"Project"} />
        <Route path="/about" element={"About"} />
        <Route path="/sign-in" element={"Sign-In"} />
        <Route path="/sign-up" element={"Sign-Up"} />
        <Route path="/dashboard" element={"Dashboard"} />
      </Routes>
    </BrowserRouter>
  );
}
