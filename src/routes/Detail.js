import React from "react";
import {useLocation, Navigate} from 'react-router-dom';


function Detail() {
    
    const location = useLocation();

    if(location.state == null) {
        console.log('state is null');
        return <Navigate replace to = "/" />
    
    }

    const state = location.state;

    return (
        <div>
            <h1>{state.title}</h1>
            <img src = {state.poster} />
            <p>{state.year}</p>
            <p>{state.genres}</p>
            <p>{state.summary}</p>
        </div>
    );
}
export default Detail;