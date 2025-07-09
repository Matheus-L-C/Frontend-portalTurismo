import React from "react";
import Footer from "../components/footer";
import FreteCalculator from "../components/freteCalculator";
import Navbar from "../components/navbar";



const LocationPage = () => {
    return (
        <>
        <div className="flex flex-col min-h-screen bg-cover bg-center">

            <Navbar/>
            <div>
                <div>
                    <FreteCalculator/>
                
                </div>
            </div>
            <Footer/>
            </div> 
        </>
    )
}
    export default LocationPage;