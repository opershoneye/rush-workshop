import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Header from "./components/Header.tsx";

function App() {
    return (
        <div className="min-h-dvh bg-blue text-gray-900 ">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <footer className="mx-auto max-w-5xl p-4 text-xs text-gray-500">
                © {new Date().getFullYear()} Opeoluwa Shoneye
            </footer>
        </div>
    );
}

export default App;
