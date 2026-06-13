import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Selecoes from './pages/Selecoes/Selecoes'
import Estadios from './pages/Estadios/Estadios'
import Jogos from './pages/Jogos/Jogos'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selecoes" element={<Selecoes />} />
        <Route path="/estadios" element={<Estadios />} />
        <Route path="/jogos" element={<Jogos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
