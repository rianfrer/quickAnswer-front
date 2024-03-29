import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio'
import Agendamentos from './pages/Agendamentos'
import Conversas from './pages/Conversas'
import Login from './pages/Login';
import MinhaConta from "./pages/MinhaConta";

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Login />}></Route>
          <Route path='/agendamentos' element={<Agendamentos />}></Route>
          <Route path='/conversas' element={<Conversas />}></Route>
          <Route path='/inicio' element={<Inicio />}></Route>
          <Route path='/minhaConta' element={<MinhaConta/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
