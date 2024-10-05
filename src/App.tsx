import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login';

function App() {

  const [pageNr, setPage] = useState(0);

  return (
    <>
      {
        pageNr==0 ? <Home setPage={setPage} pageNr={pageNr} /> :
        pageNr==1 ? <Login setPage={setPage} /> :
        'Error'
      }
    </>
  )
}

export default App
