import React from "react";
import CardService from "./cardService";
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

import cristoredentor from "../assets/imagens/cristoredentor.png"
import ilha from "../assets/imagens/ilha.png"
import castelo from "../assets/imagens/castelo.png"
import torreeiffel from "../assets/imagens/torreeiffel.png"
import montanha from "../assets/imagens/montanha.png"
import praia from "../assets/imagens/praia.png"

 const tourist_places = [
    {Image: cristoredentor, title: "Cristo redentor", description: " Ponto turistico religioso "},
    {Image: torreeiffel, title: "Torre eiffel", description: " Ponto turistico historico "},
    {Image: montanha, title: "Montanhas", description: " Ponto turistico para caminhadas "},
    {Image: castelo, title: "Castelo", description: " Ponto turistico historico "},
    {Image: ilha, title: "Ilha", description: " Ponto turistico para relachar e explorar "},
    {Image: praia, title: "Praia", description: " Ponto turistico para diverção "},
]  



// Componente funcional Carousel que renderiza o carrossel dos pontos turísticos
const Carousel = () => {
 
    return (
        <>
            {/* Container principal com z-index alto para sobreposição */}
            <div className=" relative z-10 ">
                {/* Título principal da seção */}
                <h1 className=" text-3xl font-bold text-center mt-32 text-black drop-shadow-lg">
                    Pontos turísticos locais mais visitados
                </h1>
 
                <div>
                    {/* Condicional para verificar se há mais de 3 pontos turísticos */}
                    {tourist_places.length > 3 ? (
                        // Caso tenha mais de 3, exibe o Swiper configurado para mostrar 2 ou 3 cards conforme a largura da tela
                        <Swiper
                            slidesPerView={2}  // Número inicial de slides visíveis
                            spaceBetween={20}  // Espaçamento entre os slides
                            loop={true}        // Faz o carrossel loopar infinitamente
                            breakpoints={{     // Configuração responsiva dos slides por view e espaçamento
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {/* Mapeia cada ponto turístico para um slide */}
                            {tourist_places.map((place, index) => (
                                <SwiperSlide key={index}>
                                    {/* Renderiza o card do ponto turístico */}
                                    <CardService
                                        img={place.Image}
                                        alt={place.description}
                                        titulo={place.title}
                                        descricao={place.description}
                                        link="#"
                                        botao="Saiba Mais"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        // Caso tenha 3 ou menos pontos turísticos, configura o Swiper para mostrar menos cards
                        <Swiper
                            slidesPerView={2}  // Número inicial de slides visíveis
                            spaceBetween={20}  // Espaçamento entre os slides
                            loop={true}        // Loop infinito
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,  // Em telas pequenas mostra só 1 slide
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 2,  // Em telas maiores mostra 2 slides
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {tourist_places.map((place, index) => (
                                <SwiperSlide key={index}>
                                    <CardService
                                        img={place.Image}
                                        alt={place.description}
                                        titulo={place.title}
                                        descricao={place.description}
                                        link="#"
                                        botao="Saiba Mais"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
 
                    )}
                </div>
            </div>
        </>
    )
}
 
export default Carousel  // Exporta o componente para uso externo
 
 