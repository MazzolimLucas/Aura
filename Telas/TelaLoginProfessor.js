import React, { useState, useEffect } from "react";
import "../Estilos/LoginProfessor.css";
import fotoAluno from '../img/FotoAlunoSenai.jpg'
import { Link } from "react-router-dom";

export default function TelaLoginProfessor(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    useEffect(() => {
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            setEmail(data.results.email);
            setPassword(data.results[0].login.password);
        })
    }, []);

  const handleLogin = (e) => {
    // Devemos montar o sistema de modo que possamos procurar o usuário por e-mail
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <p>Ainda não tem uma conta?<a href="https://www.sesisp.org.br/"> cadastre-se</a></p>

          <label for='e-mail'>Endereço de e-mail</label>
          <input
            id="e-mail"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label for='senha'>Senha</label>
          <input
            id="senha"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="form-options">
            <Link to='/Esqueceu a Senha'>Esqueceu a Senha?</Link>
          </div>

          <button type="submit" className="login-btn" onClick={handleLogin}>Entrar</button>
        </form>
        <div className="login-image">
          <img src={fotoAluno} className="foto-logind"/>
        </div>
      </div>
    </div>
  );
};
