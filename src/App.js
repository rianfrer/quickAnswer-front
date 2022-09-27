import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio'
import Agendamentos from './pages/Agendamentos'
import Conversas from './pages/Conversas'
import Login from './pages/Login'

function App() {



  return (
    <>
      <Login />
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Inicio />}></Route>
          <Route path='/agendamentos' element={<Agendamentos />}></Route>
          <Route path='/conversas' element={<Conversas />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
