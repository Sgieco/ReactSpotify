import React from "react";
import "../assets/css/sideBar.css"
import logo from "../assets/images/logo-sidebar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideBar(){
    return(
        <div>
            <div className="main font">
                <a href="/"><img src={logo} alt="Logo" className="logo"/></a>
                <ul className="list1">
                    <li><a href="/"><FontAwesomeIcon icon="fa-solid fa-house" /><p>Inicio</p></a></li>
                    <li><a href="/"><p>Buscar</p></a></li>
                    <li><a href="/"><p>Tu bliblioteca</p></a></li>
                </ul>

                <ul className="list2">
                    <li><a href="/"><p>Crear lista</p></a></li>
                    <li><a href="/"><p>Tus me gusta</p></a></li>
                </ul>

                <a href="https://www.spotify.com/ar/legal/cookies-policy/" target="_blank" className="cookies"><p className="cookies">Cookies</p></a> {/*//AGREGAR EVENTO DE SUBRAYAR CUANDO SE PASA POR ARRIBA */}

                <div className="lenguaje-box">
                    <button>Español de España</button> {/* // AGREGAR VENTANA MODAL CON IDIOMAS (UN COMPONENTE A PARTE) */}
                </div>
            </div>
        </div>
    )
}

export default SideBar;