import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./contexts/UserContext";

import Home from "./pages/Home";

import ResetCss from "./styles/ResetCss";
import GlobalCss from "./styles/GlobalCss";

export default function App() {
    const [user, setUser] = useState("");

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <ResetCss />
                <GlobalCss />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<>Not found</>} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}