import { Box, Heading, Icon, Image, Link, Text} from '@chakra-ui/react';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Github = () => {
    return (
        <Box id='projects' boxShadow ='rgb(127,127,127) 0px 5px 15px' mx={['15px','25px','50px']} my='150px' p={['10px','15px','25px']} borderRadius='8px'>
            <Box color='white' textAlign='center' mb={6}>
                <Heading fontSize={['2xl','3xl','3xl']} fontWeight='500' >My GitHub Stats</Heading>
                <Icon w="50px" h="50px" mt={3}  as={FaGithub} />
            </Box>
            <Box margin='auto' marginTop='30px'w={['250px','350px','600px','800px']} textAlign='center'>
                <Link target="_blank" rel="noreferrer" id="cicin" href="https://github.com/syed25794">
                    <Text textAlign='center' fontSize='25px' color='white' >Github Statistics</Text>
                    <Image w={['250px','350px','600px','800px']} marginTop='10px' marginBottom='20px' src="https://github-readme-stats.vercel.app/api?username=syed25794&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117"  id="github-contributions" href="https://github.com/syed25794/github-readme-stats" alt="syed25794's Github Stats"/>
                </Link>
            </Box>
            <Box  w={['250px','350px','600px','800px']} margin='auto' marginTop='30px'>
                <Text textAlign='center' fontSize='25px' color='white' >Github Trophies</Text>
                <Image w={['250px','350px','600px','800px']} marginTop='10px' src="https://github-profile-trophy.vercel.app/?username=syed25794" alt="syed25794" />
                <Link href="https://github.com/ryo-ma/github-profile-trophy"></Link>
            </Box>
        </Box>
    )
};

export default Github;