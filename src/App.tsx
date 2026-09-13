import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import TwoWaysToGrow from "./components/Twowaystogrow";
import ProblemSolution from "./components/Problemsolution";
import About from "./pages/About";
import Booking from "./pages/Booking";

function Home() {
  return (
    <>
      <Hero />
      <TwoWaysToGrow />
      <ProblemSolution/>
    </>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}