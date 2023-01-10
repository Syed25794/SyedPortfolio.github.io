import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  Text,
  Spinner,
  Alert,
} from "@chakra-ui/react";
import { useState } from "react";
import { VscDebugDisconnect } from "react-icons/vsc";
import { Element } from "react-scroll";
import axios from "axios";

export const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [flags, setFlags] = useState({
    isLoading: false,
    isName: false,
    isEmail: false,
    isMessage: false,
  });
  const handleInputs = async () => {
    const message = state;
    if (message.name === "") {
      setFlags({ ...flags, isName: true });
    }
    if (message.email === "") {
      setFlags({ ...flags, isEmail: true });
    }
    if (message.message === "") {
      setFlags({ ...flags, isMessage: true });
    }
    if (flags.isName || flags.isEmail || flags.isMessage) {
      console.log("Do Nothing");
    } else {
      try {
        axios({
          method: "post",
          url: "https://messageapi-8t04.onrender.com/message/create",
          data: {
            message,
          },
        })
          .then((res) => {
            console.log(res);
            setFlags({ ...flags, isLoading: false });
          })
          .catch((err) => {
            console.log(err);
            setFlags({ ...flags, isLoading: false });
          });
      } catch (error) {
        setFlags({ ...flags, isLoading: false });
        console.log(error);
      }
    }

    setState({
      name: "",
      email: "",
      message: "",
    });
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
    console.log(state);
  };
  return (
    <Element name="contact">
      <Flex
        direction={["column", "row", "row"]}
        id="contact"
        justifyContent="center"
        alignContent="center"
      >
        <Box
          boxShadow="rgb(127,127,127) 0px 5px 15px"
          mx={["40px", "25px", "50px"]}
          p={["10px", "15px", "25px"]}
          borderRadius="8px"
          justifyContent="center"
        >
          <Box color="white" textAlign="center" mb={6}>
            <Heading fontSize={["2xl", "3xl", "3xl"]} fontWeight="500">
              Connect With Me
            </Heading>
            <Icon w="50px" h="50px" mt={3} as={VscDebugDisconnect} />
          </Box>
          <Box p={5}>
            <Text marginBottom={2}>Name</Text>
            <Input
              isRequired
              name="name"
              value={state.name}
              onChange={handleChange}
              w={["225px", "225px", "250px"]}
            />
            {flags.isName ? <Alert>Please Enter Name</Alert> : null}
          </Box>
          <Box p={5}>
            <Text marginBottom={2}>Email</Text>
            <Input
              name="email"
              value={state.email}
              onChange={handleChange}
              w={["225px", "225px", "250px"]}
            />
            {flags.isEmail ? <Alert>Please Enter Email Address</Alert> : null}
          </Box>
          <Box p={5}>
            <Text marginBottom={2}>Message</Text>
            <Input
              name="message"
              value={state.message}
              onChange={handleChange}
              w={["225px", "225px", "250px"]}
            />
            {flags.isMessage ? <Alert>Please Enter Message</Alert> : null}
          </Box>
          <Box
            marginLeft={["45px", "35px", "55px"]}
            alignItems="center"
            border="1px solid red"
          >
            {flags.isLoading ? (
              <Spinner m={4} />
            ) : (
              <Button
                onClick={() => handleInputs()}
                border="1px solid #34d399"
                bg="#10af7a"
                _hover={{ background: "#34d399" }}
                color="white"
              >
                Connect With Me
              </Button>
            )}
          </Box>
        </Box>
      </Flex>
    </Element>
  );
};
