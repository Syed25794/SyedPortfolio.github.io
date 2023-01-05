import { Box,Text,Flex, Heading } from "@chakra-ui/react";
import {Icon} from '@chakra-ui/icons'
import data from './../db.json';
import {FaHtml5 ,FaCss3Alt,FaReact,FaGitAlt,FaGithub,FaPython,FaJava,FaNodeJs} from 'react-icons/fa';
import { TbBrandJavascript} from 'react-icons/tb';
import { SiMongodb ,SiPostman , SiExpress, SiRedux} from 'react-icons/si';
import {MdOutlineSettingsEthernet} from 'react-icons/md';
import { Element } from 'react-scroll';

const SkillsCard=({name})=>{
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
        case "MongoDB":
            icons=SiMongodb;
            break;
        case "Git":
            icons=FaGitAlt;
            break;
        case "Github":
            icons=FaGithub;
            break;
        case "Java":
            icons=FaJava;
            break;
        case "Python":
            icons=FaPython;
            break;
        case "Express":
            icons=SiExpress;
            break;
        case "Node.js":
            icons=FaNodeJs;
            break;
        default :
            icons=SiPostman;
    }
    return (
        <Box _hover={{bg:"#34d399",color:"white"}} textAlign="center" w='200px' h={['175px','200px','200px']} bg='#1f2937' color='white'  border='1px solid white' borderRadius={10} >
            <Icon  mt={4} w="68px" h="68px" as={icons} />
            <Text mt={4} fontFamily='inherit' fontWeight='400' fontSize={[16,18,20]}>{name}</Text>
        </Box>
    )
}

export const Skills=()=>{
    return (
        <Element name='skills'>
            <Box fontFamily='inherit' boxShadow ='rgb(127,127,127) 0px 5px 15px' mx={['15px','25px','50px']} my='40px' py={[5,10,22]} p={[5,10,22]} borderRadius='8px'>
                <Box color='white' textAlign='center' mb={6} >
                    <Heading fontWeight='500'  fontSize={['2xl','3xl','3xl']}>Skills & Technologies</Heading>
                    <Icon w="50px" h="50px" mt={3}  as={MdOutlineSettingsEthernet} />
                </Box>
                <Flex px={8} justifyContent="center" alignItems="center" wrap='wrap' gap={5} >
                    {data.skills.map((skill)=>{
                        return <SkillsCard key={skill.name} {...skill} />
                    })}
                </Flex>
            </Box>
        </Element>
    )
};