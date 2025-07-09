import React, { useState } from "react";


const SobreCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="  bg-cover bg-center flex items-center justify-center  overflow-x-hidden "
   
    >
      <div
        className=" w-full h-200 relative  p-4 rounded-[32px] shadow-lg bg-gradient-to-b from-black to-blue-500 text-white  flex items-center justify-center  m-8 mt-8 cursor-pointer "
        onClick={toggleCard}
      >
        <h1 className="text-center text-4xl font-semibold ">
          <strong>MINHA EXPERIÊNCIA<br></br> DURANTE O PROJETO</strong><hr></hr>
        </h1>
        {isOpen && (
          <p className="text-center text-7x1 font-semibold mt-4 transition-all duration-300 ease-in-out">
            Durante esse projeto estou aprendendo muitas coisas, mas com minha
            falta de experiência está difícil lembrar<br></br> de tudo e como é feita
            cada coisa. Mesmo assim, continuo em frente, sempre sendo desafiado
            cada vez mais e<br></br> evoluindo com meus brothers.
          </p>
        )}
      </div>
    </div>
  );
};

export default SobreCard;
