import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ContactForm from "../components/contactForm";

    const ContactPage = () => {
        return(
            <>
            <div className="flex flex-col min-h-screen bg-cover bg-center">

            <Navbar/>
            <div>
                <div>
                    <ContactForm/>
                </div>
            </div>
            <Footer/>
            </div> 
            </>
        )
    }
    export default ContactPage;