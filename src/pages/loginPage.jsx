import React from "react";
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import bg from "../assets/imagens/bg.png"
import LoginForm from "../components/loginForm";
const LoginPage = () => {
    return(
        <>
        <div
        className="flex flex-col min-h-screen relative h-[500px] bg-cover bg-center justify-center"
        style={{ backgroundImage: `url(${bg})` }}
        >
            <Navbar/>
            <div className="flex-grow flex items-center justify-center">
                <LoginForm/>
            </div>
            <Footer/>
        </div>
        </>
    )
}
 
export default LoginPage