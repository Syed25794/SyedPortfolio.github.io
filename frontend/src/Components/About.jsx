import { Box, Heading, Image, Link, Text, Flex } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Element } from 'react-scroll';
// import aos from 'aos';

export const About = () => {
  return (
    <Element name="about">
      <Flex py={12}  direction={['column','column','row']} alignItems='center' fontFamily='inherit'>
        <Box data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-delay="200" data-aos-duration="1000" paddingTop={4} boxShadow ='rgb(127,127,127) 0px 5px 15px' mx={['5px','50px']} my={['90px']} p='20px 30px 20px 30px' px={[5,10,12]} py={[5,10,22]} w={['300px','500px','800px']} justifyContent={['center','center','flex-start']} marginRight={['5px','50px','100px']} >
          <Heading color='white' fontSize={['2xl','3xl','3xl']} fontWeight='500' mt={4}>Hello ,</Heading>
          <Heading color='white' fontSize={['2xl','3xl','3xl']} fontWeight='500'>I'm Sayyad Gul Mohammad</Heading> 
          <Heading color='white' fontSize={['2xl','3xl','3xl']} fontWeight='500' >Full Stack Web Developer</Heading>
          <Text  mt={4}>Full-stack web developer with 1000+ hours of hands-on experience in Data structure and algorithm,
          JavaScript, HTML, CSS, React, and MongoDB to build user-responsive websites with team collaboration. Problem solving mindset with the ability to learn and collaborate
          with a team.</Text>
          <Flex direction={['column','row','row']}  mt={7} alignItems='center' wrap='wrap'>
            <Link as='a'  maxW='170px'  bg='#1f2937' color='white' _hover={{background:"#34d399"}} mt={['20px','20px','0px']}  mr={['0px','24px','24px']} px={8} py={2} fontSize='20px' border='1px solid #1f2937' borderRadius={6}  href='https://www.linkedin.com/in/sayyad-gul-mohammad/' isExternal>Linkedin<ExternalLinkIcon mx='2x' marginBottom={"5px"} /></Link>
            <Link as='a'  maxW='170px'  bg='#1f2937' color='white' _hover={{background:"#34d399"}} mt={['20px','20px','0px']} mr={['0px','24px','24px']} px={9} py={2} fontSize='20px' border='1px solid #1f2937' alignItems='center' borderRadius={6} href='https://github.com/Syed25794' isExternal>Github<ExternalLinkIcon mx='2px'  marginBottom={"5px"} /></Link>
            <Link as='a'  maxW='170px' mt={['20px','20px','0px']}  bg='#1f2937' color='white' _hover={{background:"#34d399"}} mr={['0px','24px','24px']} px={8} py={2} fontSize='20px' border='1px solid #1f2937' borderRadius={6}  href='https://drive.google.com/file/d/1fa8CTWOXEmGO-y5mtrBLlIEezJKu243d/view?usp=share_link' isExternal>Resume<ExternalLinkIcon mx='2x'  marginBottom={"5px"} /></Link>
          </Flex>
        </Box>
        <Box data-aos="flip-right" data-aos-delay="200" data-aos-duration="1000"  w='250px' paddingRight={3}>
          <Image paddingLeft="-2px" boxShadow='rgb(52,211,153) 0px 0px 5px 3px' borderRadius="60px" src="Image.jpg" name="Sayyad Gul Mohammad" />
        </Box>
      </Flex>
    </Element>
  );
};
