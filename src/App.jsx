
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import GinPage from './pages/ginpage/GinPage'
import VodkaPage from './pages/vodkapage/VodkaPage'
import RumPage from './pages/rumpage/RumPage'
import ScotchPage from './pages/scotchpage/ScotchPage'
import NonAlc from './pages/nonalc/NonAlc'
import Random from './pages/random/Random'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/gin' element={<GinPage/>}/>
      <Route path='/vodka' element={<VodkaPage/>} />
      <Route path='/rum' element={<RumPage/>} />
      <Route path='/random' element={<Random/>} />
      <Route path='/scotch' element={<ScotchPage/>} />
      <Route path='/nonAlc' element={<NonAlc/>} />
    </Routes>

    </>
  )
}

export default App
