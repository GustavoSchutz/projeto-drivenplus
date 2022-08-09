import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import Login from "./Login/Login"
import Signup from "./Signup/Signup";

export default function App() {
    
    return (
        <BrowserRouter>
            <UserContext.Provider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}