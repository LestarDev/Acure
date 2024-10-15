import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Regulamin from './pages/Regulamin/Regulamin';

function App() {

  const [pageNr, setPage] = useState(0);

  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={
        pageNr==0 ? <Home setPage={setPage} pageNr={pageNr} /> :
        pageNr==1 ? <Login setPage={setPage} /> :
        ''
       } />
       <Route path='/regulamin/' element={<Regulamin setPage={setPage} />} />
       
     </Routes>
    </BrowserRouter>
  )
}

export default App
