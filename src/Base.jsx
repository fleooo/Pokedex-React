import React from 'react'
import { BrowserRouter,Route, Routes,useParams } from 'react-router-dom'
import App from './App'
import PokeDescription from './components/PokeDescription'

function DescriptionPage() {
  
  let {id} = useParams();
}
const Base = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/pokemon/:id' element={<PokeDescription/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Base