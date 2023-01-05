import { Box,Link, Heading, Icon} from "@chakra-ui/react";
import { BsDownload } from "react-icons/bs";
import { Element } from 'react-scroll';

export const Resume=()=>{
    return (
        <Element name='resume'>
            <Box margin="auto" justifyContent='center' my='90px' boxShadow ='rgb(127,127,127) 0px 5px 15px' w={['250px','300px','450px']} height={['300px','300px','400px']} >
                <Box textAlign='center' color='white' p={['10px','15px','25px']} >
                    <Heading fontWeight='500'  fontSize={['xl','2xl','2xl']} >Download Resume</Heading>
                    <Icon w="40px" h="40px" mt={3}  as={BsDownload} />
                </Box>
                <Box marginTop='20px' alignItems='center' textAlign='center' margin='auto' w='200px'>
                    <Box marginTop='30px' bg='#10af7a' _hover={{background:"#34d399"}} color='white' w='200px' p='8px 20px 8px 20px' borderRadius={6} fontSize='18px' download><Link  href='./Portfolio.pdf' download={true}>Download Resume</Link></Box>
                    <Box marginTop='30px' bg='#10af7a' _hover={{background:"#34d399"}} color='white' w='200px' p='8px 20px 8px 20px' borderRadius={6} fontSize='18px'><Link target="_blank" href='https://drive.google.com/file/d/1fa8CTWOXEmGO-y5mtrBLlIEezJKu243d/view' >See My Resume</Link></Box>
                </Box>
            </Box>
        </Element>
    )
};