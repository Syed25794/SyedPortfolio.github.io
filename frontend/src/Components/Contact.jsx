import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  Text,
  Spinner,
  Alert
} from "@chakra-ui/react";
import { useState } from "react";
import { VscDebugDisconnect } from "react-icons/vsc";
import { Element } from "react-scroll";
import axios from 'axios';

export const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading,setIsLoading]=useState(false);
  // const [flags,setFlags]=useState({
  //   isLoading:false,
  //   isName:false,
  //   isEmail:false,
  //   isMessage:false
  // });
  const handleInputs = async () => {
    setIsLoading(true);
    const message = state;
    // if( message.name === "" ){
    //   // setFlags({...flags, isName:true});
    // }
    // if( message.email === "" ){
    //   // setFlags({...flags, isEmail:true});
    // }
    // if( message.message === "" ){
    //   // setFlags({...flags,isMessage:true});
    // }

    try {
      axios({
        method: 'post',
        url: 'https://messageapi-8t04.onrender.com/message/create',
        data: {
          message
        }
      }).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
      
      // let res = fetch("https://messageapi-8t04.onrender.com/message/create",{
      //   method:"POST",
      //   mode:"no-cors",
      //   headers:{"Content-Type":"application/json"},
      //   body:JSON.stringify(message)
      // })
      // .then((res)=>{res.json()})
      // .then((d)=>{console.log(d);setIsLoading(false)})
      // .catch((err)=>{console.log(err)})
      // setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
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
              { isLoading ? <Spinner m={4} /> : null }
            </Button>
          </Box>
        </Box>
      </Flex>
    </Element>
  );
};
