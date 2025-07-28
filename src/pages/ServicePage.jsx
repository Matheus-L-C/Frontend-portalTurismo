import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Fundo09 from "../assets/imagens/fundo09.png"
import Carousel from "../components/carousel";

const ServicePage = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-cover bg-center">

                <Navbar />
                <div>
                    <Hero img={Fundo09} titulo="Portal de Serviços" paragrafo="Venha conhecer os mais variedades de serviços e ofertas" rota="#" botao="saiba mais" />
                </div>
                <div><Carousel/></div>
                <Footer />
            </div>
            
        </>
                     
                )
                   } 
export default ServicePage;                     
