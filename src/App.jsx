import React from 'react'
import Signup from './components/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import{ Provider} from "react-redux"
import { store } from './utils/store';
const App = () => {
  return (
    <>
     <Provider store={store}>
      <BrowserRouter basename="/">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
     </BrowserRouter>
     </Provider>
    </>
  )
}

export default App