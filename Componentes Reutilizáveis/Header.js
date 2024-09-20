import React from "react";
import '../Estilos/Header.css';

export default function Header(){
    return(
        <div className="header">
            <div className="logo">
                <p>AURA</p>
            </div>
            <div className="opcoes">
                <div>
                    <img src="https://via.placeholder.com/50" alt="User" className="fotoPerfil"/>
                    <p>Lucas William</p>
                </div>
            </div>
        </div>
    )
}
