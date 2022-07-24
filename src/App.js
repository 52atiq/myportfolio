import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';

import Navbar from './pages/Navbar/Navbar';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <main className='bg-slate-900'>
     <Navbar></Navbar>

    
    
   
    <Routes>
      <Route path='/' element={<Home></Home>} />
      <Route path='/about' element={ <About></About>} />
      <Route path='/portfolio' element={<Projects></Projects>} />
      <Route  path='/blog' element={<Blog></Blog>} />
   
    </Routes>

      
    </main>
  );
}

export default App;
