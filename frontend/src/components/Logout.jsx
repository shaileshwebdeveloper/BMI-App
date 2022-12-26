import { Box, Button} from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthContextProvider';

export const Logout = () => {

  const { isAuth, setIsAuth, toggleAuth } = useContext(AuthContext)
  
  const token =  localStorage.getItem('token')
  const navigate = useNavigate()


  const handleSubmit = () => {
      localStorage.removeItem('token')
      setIsAuth(false)
      navigate('/login')
  }


  

  return (
    <Box>
       <br />
       <Button colorScheme='teal' variant='outline' onClick={handleSubmit}>Logout</Button>
    </Box>

  )
}
