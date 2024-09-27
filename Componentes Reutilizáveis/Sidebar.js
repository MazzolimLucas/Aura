import React from 'react';
import '../Estilos/Sidebar.css'
import {Link} from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="userInfo">
        <img src="https://via.placeholder.com/50" alt="User" />
        <h4>Lucas William</h4>          
      </div>
      <nav className='sidebarNavigation'>
        <div className='sidebarTitle'>
          <p>Menu</p>
        </div>
        <div className='paginaAlunos'>
          <Link to="/Home/Alunos" className='paginaAlunosLink primeiroLink'>Alunos</Link>
          <Link to="/Home/Avaliacoes" className='paginaAlunosLink'>Avaliações</Link>
          <Link to="/Home/Capacidades" className='paginaAlunosLink'>Capacidades</Link>
          <Link to="/Home/Critérios de Avaliação" className='paginaAlunosLink'>Criterios de Avaliação</Link>
          <Link to="/Home/Disciplinas" className='paginaAlunosLink'>Disciplinas</Link>
          <Link to="/Home/Planos de Ensino" className='paginaAlunosLink'>Planos de Ensino</Link>
          <Link to="/Home/Professores" className='paginaAlunosLink'>Professores</Link>
          <Link to="/Home/Turmas" className='paginaAlunosLink'>Turmas</Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
