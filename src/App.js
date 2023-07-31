// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes } from "react-router-dom";
import { Suspense } from 'react';

import AdminTemplate from './pages/AdminTemplate';
import HomeTemplate from './pages/HomeTemplate';
import HomePage from './pages/HomeTemplate/HomePage';
import AboutPage from './pages/HomeTemplate/AboutPage';
import ListMoviePage from './pages/HomeTemplate/ListMoviePage';
import Dashboard from './pages/AdminTemplate/Dashboard';
import AddUser from './pages/AdminTemplate/AddUser';

import renderRoutes from './routes';

function App() {
  return (

    <Suspense fallback={<div>Loading...</div>}>
      < BrowserRouter >
        <Routes>
          {renderRoutes()}
        </Routes>
      </ BrowserRouter >
    </Suspense>

  );
}

export default App;
