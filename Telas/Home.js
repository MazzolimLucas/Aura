import { Link, Outlet, Route, Routes } from 'react-router-dom';
import '../Estilos/Home.css';
import Header from '../Componentes reutilizáveis/Header'
import Sidebar from '../Componentes reutilizáveis/Sidebar'
import TeladeConsulta from './TeladeConsulta';

function Home() {
  
return (
    <div className="Home">
       <Header/>
       <Outlet/>
       <Sidebar/>
    </div>
  );
}

export default Home;

