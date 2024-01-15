


import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import DragDrop from './components/DragDrop';
import Layout from './components/Layout';

function App() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/page1' element={<DragDrop/>}/>
   </Routes>
  )
}

export default App
