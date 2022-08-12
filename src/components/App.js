import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import Login from "./user/Login"
import Signup from "./user/Signup";
import styled from 'styled-components'
import Subscriptions from "./Subscriptions/Subscriptions";
import Home from "./Home/Home";

const Background = styled.div`
    background-color: black;
    min-height: 100vh;
    min-width: 100vw;

`

export default function App() {
    


    return (
        <Background>
            <BrowserRouter>
                <UserContext.Provider value={{}} >
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/subscriptions" element={<Subscriptions />} />
                        <Route path="/home" element={<Home />} />
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        </Background>
    )
}