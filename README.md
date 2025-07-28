# 🖥️ Frontend‑PortalTurismo

Interface frontend desenvolvida com **React.js** e **Vite**, organizada para um portal turístico com navegação, formulários, simulação de frete e métodos de pagamento.

---

## 🧭 Sumário

- [Visão Geral](#visão-geral)  
- [Estrutura de Pastas](#estrutura-de-pastas)  
- [Pré‑requisitos](#pré-requisitos)  
- [Instalação](#instalação)  
- [Scripts Disponíveis](#scripts-disponíveis)  
- [Como Usar](#como-usar)  
- [Componentes Detalhados](#componentes-detalhados)  
- [Configurações de Ambiente](#configurações-de-ambiente)  
- [Possíveis Melhorias](#possíveis-melhorias)  
- [Contribuição](#contribuição)  
- [Licença](#licença)

---

## Visão Geral

Este frontend conecta-se ao backend do PortalTurismo e oferece:

- Navegação entre páginas com header e footer
- Formulários de login, registro e contato
- Simulação de frete via CEP
- Seleção de forma de pagamento
- Histórico de pedidos com paginação
- Design responsivo com React + Vite ([turn0search2])

---

## Estrutura de Pastas

frontend-portalTurismo/
├── public/
│ └── index.html
├── src/
│ ├── assets/ # Imagens, ícones, SVGs
│ ├── components/ # Componentes reutilizáveis
│ │ ├── body.jsx
│ │ ├── navbar.jsx
│ │ ├── footer.jsx
│ │ ├── hero.jsx
│ │ ├── carousel.jsx
│ │ ├── cardService.jsx
│ │ ├── contactForm.jsx
│ │ ├── loginForm.jsx
│ │ ├── registerForm.jsx
│ │ ├── freteCalculator.jsx
│ │ ├── FPagamentos.jsx
│ │ ├── OrderHistory.jsx
│ │ ├── Pagination.jsx
│ │ └── zoom.jsx
│ ├── pages/ # Telas da aplicação (ex: Home, Sobre etc.)
│ ├── App.jsx # Componente principal com rotas
│ ├── main.jsx # Entrypoint do React / Vite
│ └── index.css # Estilos globais
├── vite.config.js # Configuração do bundler Vite
├── package.json
└── README.md