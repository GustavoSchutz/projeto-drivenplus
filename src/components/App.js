import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import Login from "./user/Login"
import Signup from "./user/Signup";
import styled from 'styled-components'
import Subscriptions from "./Subscriptions/Subscriptions";
import Home from "./Home/Home";
import PlanInfo from "./Subscriptions/PlanInfo";
import { useState } from "react";

const Background = styled.div`
    background-color: black;
    min-height: 100vh;
    min-width: 100vw;

`

export default function App() {
    

    const [userMemberStatus, setUserMemberStatus] = useState({});

    const [planInfoObj, setPlanInfoObj] = useState({});


    return (
        <Background>
            <BrowserRouter>
                <UserContext.Provider value={{ planInfoObj, setPlanInfoObj, userMemberStatus, setUserMemberStatus }} >
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/subscriptions" element={<Subscriptions />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/subscriptions/:planID" element={<PlanInfo />} />
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        </Background>
    )
}