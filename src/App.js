import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";

import ResetCss from "./styles/ResetCss";
import GlobalCss from "./styles/GlobalCss";

export default function App() {
    return (
        <BrowserRouter>
            <ResetCss />
            <GlobalCss />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<>Not found</>} />
            </Routes>
        </BrowserRouter>
    );
}