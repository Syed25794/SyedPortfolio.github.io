import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { VscDebugDisconnect } from "react-icons/vsc";
import { Element } from "react-scroll";

export const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleInputs = () => {
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
              name="name"
              value={state.name}
              onChange={handleChange}
              w={["225px", "225px", "250px"]}
            />
          </Box>
          <Box p={5}>
            <Text marginBottom={2}>Email</Text>
            <Input
              name="email"
              value={state.email}
              onChange={handleChange}
              w={["225px", "225px", "250px"]}
            />
          </Box>
          <Box p={5}>
            <Text marginBottom={2}>Message</Text>
            <Input
              name="message"
              value={state.message}
              onChange={handleChange}
              w={["225px", "225px", "250px"]}
            />
          </Box>
          <Box marginLeft={["55px", "45px", "65px"]}>
            <Button
              onClick={() => handleInputs()}
              border="1px solid #34d399"
              bg="#10af7a"
              _hover={{ background: "#34d399" }}
              color="white"
            >
              Connect With Me
            </Button>
          </Box>
        </Box>
      </Flex>
    </Element>
  );
};
