import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { router } from './router'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
       {
        router.map((route,index)=>(
          <Route key={index} path={route.path} element={route.element}/>
        ))
       }
      </Routes>
    </div>
  )
}

export default App