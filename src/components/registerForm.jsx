import React, { useState } from "react";
import axios from 'axios'
 
 
 
const RegisterForm = () => {
    const [nome, setName] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
 
    const handleSubmit = async (e) => {
        e.preventDefault();
 
        try {
            const response = await axios.post("https://backend-portalturismo-78ow.onrender.com/api/users", {
                name: nome,
                email,
                password: senha
            });
 
            alert("Usuário cadastrado com sucesso!!" + `nome: ${response.data.name} email: ${response.data.email}`)
 
            window.location.href = "/login"
        } catch (error) {
            if (error.response) {
                alert("Erro ao cadastrar usuário")
            } else {
                alert("Erro ao conectar ao servidor")
            }
        }
 
 
 
    };
 
    return (
        <>
 
 
            <div className="bg-white p-8 rounded-2x1 shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6"> Cadastro</h2>
                <form onSubmit={handleSubmit}>
                    <div> {/* campo para entrada de nome */}
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Nome</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={nome}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                            placeholder="Digite seu nome" />
                    </div>
                    <div>
                        <label>E-mail</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                            placeholder="Digite seu E-mail" />
                    </div>
                    <div>
                        <label>Senha</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base mb-3"
                            placeholder="Digite sua Senha" />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-b-lg hover:bg-blue-300 transition">
                        Cadastrar</button>
                </form>
            </div>
        </>
    )
}
 
export default RegisterForm;
 