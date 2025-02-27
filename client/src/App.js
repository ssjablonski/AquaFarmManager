import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/dashboard";
import { ThemeProvider } from "./contexts/ThemeContext";
import ModuleInfo from "./pages/moduleInfo";

function App() {
    return (
        <div className="app min-h-screen dark:bg-black-500 dark:text-white">
            <ThemeProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/module/:id" element={<ModuleInfo />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
