import { Box, Flex, Icon,Link,Text } from '@chakra-ui/react';
import { TfiLinkedin } from 'react-icons/tfi';
import { BsTwitter } from 'react-icons/bs';
import { RiGithubLine } from 'react-icons/ri';

import React from 'react';

const Footer = () => {
  return (
    <Box bg='#1f2937' marginTop='55px' h={['280px','270px','200px']} paddingTop='10px'>
      <Flex direction={['column','column','row']} justifyContent='center' alignItems='center'>
        <Link target="_blank" href='https://www.linkedin.com/in/sayyad-gul-mohammad/'><Icon _hover={{ transitionDuration: "700ms", color: "#34d399"}} marginLeft='20px' w={['30px','40px','60px']} h={['30px','40px','60px']} as = {TfiLinkedin}></Icon></Link>
        <Link target="_blank" href='https://twitter.com/SayyadGulMohd'><Icon _hover={{ transitionDuration: "700ms", color: "#34d399"}} marginLeft='20px' w={['30px','40px','60px']} h={['30px','40px','60px']} as = {BsTwitter}></Icon></Link>
        <Link target="_blank" href='https://github.com/Syed25794'><Icon _hover={{ transitionDuration: "700ms", color: "#34d399"}} marginLeft='20px' w={['30px','40px','60px']} h={['30px','40px','60px']} as = {RiGithubLine}></Icon></Link>
      </Flex>
      <Box textAlign='center' marginTop='20px'>
        <Text _hover={{ transitionDuration: "700ms", color: "#34d399"}} marginLeft='20px'>+91-7037186364</Text>
        <Text _hover={{ transitionDuration: "700ms", color: "#34d399"}} marginTop='10px' marginLeft='20px'>syedgulmohammad25794@gmail.com</Text>
      </Box>
      <Box textAlign='center' marginTop='10px'>
        <Text _hover={{ transitionDuration: "700ms", color: "#34d399"}}>Designed & Built by <span style={{color:"red"}}>Sayyad Gul Mohammad</span> © 2022</Text>
      </Box>
    </Box>
  )
}

export default Footer