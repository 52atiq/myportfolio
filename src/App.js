import { Routes } from 'react-router-dom';
import './App.css';
import Hero from './pages/Hero/Hero';

import Navbar from './pages/Navbar/Navbar';

function App() {
  return (
    <main className='bg-slate-900'>
     <Navbar></Navbar>

     <Hero></Hero>
   
    <Routes>
   
    </Routes>

      
    </main>
  );
}

export default App;
