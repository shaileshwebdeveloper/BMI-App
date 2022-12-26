import { Box, Table, TableContainer, Td, Text, Th, Tr } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

export const History = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getCalculation", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((r) => console.log(setData(r.data.history)));
  }, []);

  // console.log("Data", data);

  return (
    <Box>
       <br />
      <Text fontWeight={"bold"} fontSize={"2rem"}>
        MY BMS HISTORY
      </Text>
      <br />
      <TableContainer>
        <Table style={{ width: "100%" }} variant="simple" bg='#004a4a'
        color='white'>
          <Tr style={{ border: "1px solid black" }} bg='#acd1d1'>
            <Th color={'black'} fontSize='1rem'>Height</Th>
            <Th color={'black'} fontSize='1rem'>Weight</Th>
            <Th color={'black'} fontSize='1rem'>BMI</Th>
            <Th color={'black'} fontSize='1rem'>Created At</Th>
            <Th color={'black'} fontSize='1rem'>Updated At</Th>
          </Tr>
          {data.map((item) => (
            <Tr>
              <Td>{item.height}</Td>
              <Td>{item.weight}</Td>
              <Td>{item.BMI.toFixed(2)}</Td>
              <Td>{item.createdAt}</Td>
              <Td>{item.updatedAt}</Td>
            </Tr>
          ))}
        </Table>
      </TableContainer>
    </Box>
  );
};
