import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
const Footer = () =>{
    
    return (
        <>
        <h1 className="text-2xl text-white">Nova serra.Todos os direitos rezervados</h1>
        <footer className="w-full bg-gradient-to-bl from-green-500 to-blue-600 text-black py-2 px-3 shadow-lg mt-auto">
        <div className="w-full mx-auto flex flex-col justify-between items-center">
            <div className="text-center mb-4 mb:mb-0">
                <p className=" text-white text-3xl">Nova serra verde. Todos os direitos reservados</p>
                </div>
             
                <div className="text bg-centern flex space-x-6">
                <a href="#" className="hover:text-blue-800 text-2xl"><FaFacebook /></a>
                <a href="#" className="hover:text-fuchsia-900 text-2xl"><CiInstagram/></a>
                
  

                
            

            </div>
        </div>
        </footer>
        </>
    )
}
export default Footer;