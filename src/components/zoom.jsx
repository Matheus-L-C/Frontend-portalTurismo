import React, { useState } from "react";
import QRCode from 'react-qr-code';

const FreteCalculator = () => {
  const [metodoSelecionado, setMetodoSelecionado] = useState("pix");
  const [zoomed, setZoomed] = useState(false);

  // Função para alternar o estado de zoom
  const toggleZoom = () => {
    setZoomed(!zoomed);
  };

  return (
    <div className="max-w-5xl mx-auto mt-20 bg-white p-6 rounded shadow relative">
      {/* Se for PIX, exibir chave PIX e QRCode */}
      {metodoSelecionado === "pix" && (
        <div className="bg-gray-100 p-4 rounded shadow-md mt-4">
          <p className="text-sm mb-2 text-gray-800">Chave PIX (CNPJ):</p>
          <div className="flex items-center justify-between bg-white p-2 border rounded">
            <span className="text-gray-600 text-sm truncate">
              12.345.678/0001-99
            </span>
            <button
              onClick={(e) => {
                e.preventDefault(); // Evita o envio do formulário
                navigator.clipboard.writeText("12.345.678/0001-99");
                alert("Chave PIX copiada!");
              }}
              className="ml-2 text-blue-600 hover:underline text-sm"
            >
              Copiar
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-800">Escaneie o QR Code abaixo para efetuar o pagamento:</p>
            
            {/* QR Code com efeito de zoom */}
            <div
              onClick={toggleZoom} // Função para alternar o zoom
              className={`cursor-pointer transition-transform duration-300 ${
                zoomed ? 'scale-150' : 'scale-100'
              }`}
            >
              <QRCode value="12.345.678/0001-99" size={128} />
            </div>

            {/* Overlay escuro quando o QR Code estiver ampliado */}
            {zoomed && (
              <div
                onClick={toggleZoom} // Fecha o zoom ao clicar no fundo
                className="absolute inset-0 bg-black bg-opacity-50 z-10"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FreteCalculator;
