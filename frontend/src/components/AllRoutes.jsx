import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Signup } from './Signup'
import { Profile } from './Profile'
import { Login } from './Login'
import { CalculateBMI } from './CalculateBMI'
import { Logout } from './Logout'
import { History } from './History'
import PrivateRoute from './PrivateRoute'


export const AllRoutes = () => {

    
  return (
  
    <Routes>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/getProfile' element={<PrivateRoute><Profile /></PrivateRoute>} />
    <Route path='/calculateBMI' element={<PrivateRoute><CalculateBMI /></PrivateRoute>}/>
    <Route path='/getCalculation' element={<PrivateRoute><History /></PrivateRoute>}/>
    <Route path='/logout' element={<Logout />}/>

  
    </Routes>

  )
}
