import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import ChannelContext from "./contexts/ChannelContext";

import Home from "./pages/Home";
import VideoRoom from "./pages/VideoRoom";

import ResetCss from "./styles/ResetCss";
import GlobalCss from "./styles/GlobalCss";

export default function App() {
    const [user, setUser] = useState(getUserInfo());
    const [channel, setChannel] = useState("");

    function getUserInfo() {
        const userInfo = localStorage.getItem('user');
        if (userInfo) {
            const userParse = JSON.parse(userInfo);
            return userParse;
        }
        return "";
    }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <ChannelContext.Provider value={{ channel, setChannel }}>
                <BrowserRouter>
                    <ResetCss />
                    <GlobalCss />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/room" element={<VideoRoom />} />
                        <Route path="*" element={<>Not found</>} />
                    </Routes>
                </BrowserRouter>
            </ChannelContext.Provider>
        </UserContext.Provider>
    );
}