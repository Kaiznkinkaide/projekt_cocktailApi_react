
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import ProductGallery from './pages/productGallery/ProductGallery'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/drinks/:categories' element={<ProductGallery/>}/>
    </Routes>

    </>
  )
}

export default App
