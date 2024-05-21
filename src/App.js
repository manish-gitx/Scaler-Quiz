import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Play from "./Components/Play";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/play" element={<Play />} />
            </Routes>
        </Router>
    );
}