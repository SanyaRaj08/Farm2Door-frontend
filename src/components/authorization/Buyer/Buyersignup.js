import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon} from '@chakra-ui/icons';

const Buyersignup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const navigate = useNavigate();


  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [picLoading, setPicLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = async () => {
    setPicLoading(true);
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Passwords Do Not Match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/createuser",
        {
          name,
          email,
          password,
        },
        config
      );
      
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setPicLoading(false);
    //   navigate('/Chats');
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
    }
  };


  return (
    <VStack spacing="5px">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          placeholder="Enter Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      
      <FormControl isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup size="md">
        <Input
          value={password}
          pr="4.5rem"
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          {showPassword ? (
            <ViewOffIcon
              h="1.75rem"
              w="1.75rem"
              cursor="pointer"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <ViewIcon
              h="1.75rem"
              w="1.75rem"
              cursor="pointer"
              onClick={togglePasswordVisibility}
            />
          )}
        </InputRightElement>
      </InputGroup>
    </FormControl>



    <FormControl isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup size="md">
        <Input
          value={password}
          pr="4.5rem"
          type={showPassword ? "text" : "password"}
          placeholder="Confirm password"
          onChange={(e) => setConfirmpassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          {showPassword ? (
            <ViewOffIcon
              h="1.75rem"
              w="1.75rem"
              cursor="pointer"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <ViewIcon
              h="1.75rem"
              w="1.75rem"
              cursor="pointer"
              onClick={togglePasswordVisibility}
            />
          )}
        </InputRightElement>
      </InputGroup>
    </FormControl>
      
      <Button
        // colorScheme="green"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={picLoading}
        bg="#e8c897"
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Buyersignup;
