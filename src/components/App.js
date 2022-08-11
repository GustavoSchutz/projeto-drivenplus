import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import Login from "./user/Login"
import Signup from "./user/Signup";
import styled from 'styled-components'

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
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        </Background>
    )
}