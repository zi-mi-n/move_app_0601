import React from "react";
import {Link} from 'react-router-dom';
import "./Navigation.css";

// a 말고 router dom의 Link를 사용했더니 #가 삽입되었다.
function Navigation() {
    return (
        <div className = "nav">
            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>
        </div>
    );
}

export default Navigation;