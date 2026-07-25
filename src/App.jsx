import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[var(--color-ink)] font-body">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}
