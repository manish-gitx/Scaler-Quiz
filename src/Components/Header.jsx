import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const handlePlayClick = () => {
        navigate('/play');
    }

    return (
        <header>
            <h1>Quick quiz</h1>
            <button className="a-btn" onClick={handlePlayClick}>Play</button>
        </header>
    );
}