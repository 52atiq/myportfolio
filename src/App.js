import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';

import Hero from './pages/Hero/Hero';
import Home from './pages/Home/Home';

import Navbar from './pages/Navbar/Navbar';

function App() {
  return (
    <main className='bg-slate-900'>
     <Navbar></Navbar>

     <Hero></Hero>
    
   
    <Routes>
      <Route path='/' element={<Home></Home>} />
      <Route path='/about' element={ <About></About>} />
   
    </Routes>

      
    </main>
  );
}

export default App;
