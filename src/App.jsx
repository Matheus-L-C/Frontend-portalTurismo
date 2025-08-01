
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import ServicePage from "./pages/ServicePage"
import ContactPage from "./pages/ContactPage"
import AboutPage from "./pages/AboutPage"
import RegisterPage from "./pages/registerPage"
import LoginPage from "./pages/loginPage"


function app () {


    return (
      <Router>
       <Routes>
        {/*rota raiz do projeto e estrutura padrão de escrita*/}
        <Route path="/" element={<Home/>} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        

       </Routes>
      </Router> 
    )
}


export default app