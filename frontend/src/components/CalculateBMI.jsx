import React from "react";
import { useState } from "react";
import axios from "axios";
import { Box, Button, FormLabel, Input, Text } from "@chakra-ui/react";

export const CalculateBMI = () => {
  const [bmi, setBmi] = useState("");

  const [payload, setPayload] = useState({
    height: "",
    weight: "",
  });

  //  const [data, setData] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPayload({ ...payload, [name]: value });
  };

  // console.log(localStorage.getItem("token"));

  const handleSubmit = () => {
    //    setData([...data, payload])
    axios
      .post("https://bmi-backend-gw0m.onrender.com/calculateBMI", payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((r) => setBmi(r.data.msg))
      .catch((e) => console.log(e));
  };

  const { email, password } = payload;

  //  console.log('data', data)

  console.log(bmi);

  return (
    <>
      <Box w="20%" m="auto" p="1rem">
        <FormLabel>Height</FormLabel>
        <Input
          type="height"
          name="height"
          value={email}
          id=""
          placeholder="height in feet"
          onChange={handleChange}
        />
        <br />
        <br />
        <FormLabel>Weight</FormLabel>
        <Input
          type="weight"
          name="weight"
          value={password}
          id=""
          placeholder="weight in kg"
          onChange={handleChange}
        />
        <br />
        <br />
        <Button colorScheme="teal" variant="outline" onClick={handleSubmit}>
          Calculate BMI
        </Button>
      </Box>

      <Box  border='1px solid teal' w='40%' m='auto' borderRadius={'10px'}>
        {bmi ? (
          <Text color={"teal"} fontWeight="bold" fontSize={"2rem"} >
            Your BMI is {bmi.toFixed(2)}
          </Text>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};
