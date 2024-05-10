import React from 'react'
import { BrowserRouter,Route, Routes} from 'react-router-dom'
import App from './App'
import PokeDescription from './components/PokeDescription'


const Base = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/pokemon/:id' element={<PokeDescription />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Base