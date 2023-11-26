import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

const Buyer_Home = () => {
  return (
    <ChakraProvider>
      <Box display="flex">
        <Box display="flex" flexDirection="column" bg="#e8c897" color="#665039" fontWeight="bold" fontSize="2xl">
          <Box>
            Home
          </Box>
          <Box>
            Cart
          </Box>
          <Box>
            Account
          </Box>
        </Box>
        <Box></Box>
      </Box>
    </ChakraProvider>
  );
};

export default Buyer_Home;
