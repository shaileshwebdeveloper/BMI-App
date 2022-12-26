import { Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './AuthContextProvider'


export const Navbar = () => {

  const { isAuth, setIsAuth, toggleAuth } = useContext(AuthContext);


//  console.log(isAuth, 'isAuth')
  

  
 
    
  return (   
    <Flex justifyContent={'space-around'} bg='teal' p='1rem' color={'white'}>
      <Link to='/calculateBMI'>BMI</Link>
      <Link to='/getCalculation'>HISTORY</Link>
      <Link to='/getProfile'>PROFILE</Link>
      <Link to='/signup'>SIGNUP</Link>
      {isAuth ? <Link  to='/logout'>LOGOUT</Link> : <Link to='/login'>LOGIN</Link>}
    </Flex>
  )
}
