import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Header from '../Componentes reutilizáveis/Header'
import Sidebar from '../Componentes reutilizáveis/Sidebar'

function Main() {
  return (
    <div>
        <Outlet />
    </div>
  );
}

export default Main;
