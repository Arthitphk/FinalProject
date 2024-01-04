import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'

function App() {
  return (
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<NotFound/>}/>
   </Routes>
  )
}


function WrappedApp() {
  return (
    <HashRouter>
      <App/>
    </HashRouter>
  )
}

export default WrappedApp
