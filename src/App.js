import './App.css';
import TokenService from "./TokenService";
import Login from "./carpark/Login";
import CarPark from "./carpark/CarPark";
import React from "react";

function App() {

    const token = TokenService.getToken();

    return (
        <div className="App">
            {token==null ? <Login /> : <CarPark />}
        </div>
    );
}

export default App;
