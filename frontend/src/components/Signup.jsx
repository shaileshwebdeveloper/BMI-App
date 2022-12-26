import React from "react";
import { useState } from "react";
import axios from "axios";
import { Box, Button, FormLabel, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {

  const navigate =  useNavigate()

  const [payload, setPayload] = useState({
    name: "",
    email: "",
    password: "",
  });

  //  const [data, setData] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPayload({ ...payload, [name]: value });
  };

  const handleSubmit = () => {
    //    setData([...data, payload])
    axios
      .post("http://localhost:3001/signup", payload)
      .then((r) => console.log(r.data),
       navigate('/login'));
  };

  const { name, email, password } = payload;

  //  console.log('data', data)

  return (
    <Box w="20%" m="auto" p="1rem">
      <FormLabel>Name</FormLabel>
      <Input
        type="text"
        name="name"
        value={name}
        id=""
        placeholder="Type your name"
        onChange={handleChange}
      />
     
       <br />
       <br />

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
  );
};
