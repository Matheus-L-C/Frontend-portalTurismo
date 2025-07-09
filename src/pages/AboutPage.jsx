import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SobreCard from "../components/SobreCard"


const AboutPage = () => {
    return (
        <>
        <div className="flex flex-col min-h-screen bg-cover bg-center">

            <Navbar/>
            <div>
                <div>
                    <SobreCard />
                </div>
            </div>
            <Footer/>
            </div> 
        </>
    )
}
    export default AboutPage;