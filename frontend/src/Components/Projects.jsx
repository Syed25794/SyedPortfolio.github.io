import { Text, Heading, Box, Link, Image, Flex,Icon } from "@chakra-ui/react";
import data from "../db.json";
import {FaHtml5 ,FaCss3Alt,FaReact} from 'react-icons/fa';
import { TbBrandJavascript} from 'react-icons/tb';
import { SiRedux , SiCodeproject } from "react-icons/si";
import { Element } from 'react-scroll';


const TechStackCard=({name})=>{
  let icons=null;
  switch(name){
      case "HTML":
          icons=FaHtml5;
          break;
      case "CSS":
          icons=FaCss3Alt;
          break;
      case "JavaScript":
          icons=TbBrandJavascript;
          break;
      case "React":
          icons=FaReact;
          break;
      case "Redux":
          icons=SiRedux;
          break;
      default :
          icons="";
  }
  return (
      <Box _hover={{bg:"#34d399",color:"color"}} mx={2} textAlign="center" w='60px' h='60px' bg='#1f2937' color='white'  border='1px solid white' borderRadius={10} >
          <Icon  mt={1} w="50px" h="50px" as={icons} />
      </Box>
  )
}

const ProjectCard = (props) => {
  return (
    <Flex  direction={['column','column','column']}  boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px" w={['300px','350px','450px']} h={['700px','600px','570px']} margin='auto' borderRadius={18} textAlign='center'>
      <Box m={[1,2,4]}>
        <Image borderRadius={18} src={props.img} name="photo" />
      </Box>
      <Heading m={1} color='white' fontWeight='400'  fontSize={['md','lg','2xl']} >{props.title}</Heading>
      <Text>{props.description}</Text>
      <Heading size='md' my={2} color='white' fontWeight='400'  fontSize={['md','lg','2xl']}>Tech-Stack</Heading>
        <Flex  gap={2} wrap='wrap' justifyContent="center">
          {props['tech'].map((elem,index)=>{
            return <TechStackCard key={index} name={elem} />}
            )}
        </Flex>
      <Flex marginTop={3} justifyContent='center' gap={4} >
        <Link href={props.github}><Box bg='#10af7a' _hover={{background:"#34d399"}} color='white' maxW='90px' p='8px 20px 8px 20px' borderRadius={6} fontSize='18px'>Repo</Box></Link>
        <Link href={props.live}><Box bg='#10af7a' _hover={{background:"#34d399"}} color='white' maxW='90px' p='8px 20px 8px 20px' borderRadius={6} fontSize='18px'>Live</Box></Link>
      </Flex>
    </Flex>
  );
};

export const Projects = () => {
  return (
    <Element  name="projects">
      <Box fontFamily='inherit' boxShadow ='rgb(127,127,127) 0px 5px 15px' mx={['15px','25px','50px']} my='180px' p={['10px','15px','25px']} borderRadius='8px'>
          <Box color='white' textAlign='center' mb={6}>
            <Heading fontWeight='500'  fontSize={['2xl','3xl','3xl']} >Some of my best projects</Heading>
          <Icon w="50px" h="50px" mt={3}  as={SiCodeproject} />
        </Box>
        <Box>
        <Flex wrap='wrap' gap={6} direction={['column','row','row']} justifyContent={"space-around"}>
          {data.projects.map((project,index) => {
            return <ProjectCard key={project.title} {...project} />;
          })}
        </Flex>
        </Box>
      </Box>
    </Element>
  );
};
