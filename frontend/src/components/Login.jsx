import React, { useContext } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Box, Button, FormLabel, Input } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthContextProvider'

export const Login = () => {

    const navigate =  useNavigate()

    const { isAuth, setIsAuth, toggleAuth } = useContext(AuthContext);

     

     const [payload, setPayload] = useState({
         name : '',
         email : '',
         password : ''
     })

    //  const [data, setData] = useState([])

     const handleChange = (e) => {
       const {name, value} = e.target   
       
       setPayload({...payload, [name] : value})
     }
   
     const handleSubmit = () => {

    //    setData([...data, payload])
         axios.post('https://bmi-backend-gw0m.onrender.com/login', payload)
         .then(r =>  localStorage.setItem('token', r.data.token),
            setIsAuth(true), 
          navigate('/calculateBMI'))
     }

    const {email, password} = payload

    //  console.log('data', data)

    
   

  return (
    <>
 <Box w="20%" m="auto" p="1rem">
 

      <FormLabel>Email</FormLabel>
      <Input
        type="email"
        name="email"
        value={email}
        id=""
        placeholder="Type your email"
        onChange={handleChange}
      />

       <br />
       <br />

      <FormLabel>Password</FormLabel>
      <Input
        type="password"
        name="password"
        value={password}
        id=""
        placeholder="Type your password"
        onChange={handleChange}
      />
       <br />
       <br />
     <Button colorScheme='teal' variant='outline' onClick={handleSubmit}>Submit</Button>
    </Box>
    </>
  )
}
