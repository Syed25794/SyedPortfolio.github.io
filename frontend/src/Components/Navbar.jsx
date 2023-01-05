import { CloseIcon, HamburgerIcon, Icon } from "@chakra-ui/icons";
// import { MdDarkMode } from "react-icons/md";
// import { BsFillSunFill } from "react-icons/bs";
import { useState } from "react";
import { Text, Box, Flex, Stack,Link} from "@chakra-ui/react";
import { scroller } from 'react-scroll';


const MenuItem = ({ children, location,toggle }) => {
  location=location ? {location} :"home";
  return (
    <Link to={location} 
    curser="pointer"
     _hover={{ transitionDuration: "700ms", color: "#34d399"}} onClick={()=>toggle(location)}>
      <Text fontSize="lg">{children}</Text>
  </Link>
  );
};

const Logo = () => {
  return (
    <Link _hover={{ textDecoration: "none" }} href="home" >
      <Text>Sayyad Gul Mohammad</Text>
    </Link>
  );
};

const ToggleIcon = ({ toggle, isOpen }) => {
  return (
    <Box onClick={toggle} display={["block", "block","none", "none"]}>
      {isOpen ? <Icon as={CloseIcon} w={5} h={5} /> : <Icon as={HamburgerIcon} w={8} h={8}  />}
    </Box>
  );
};

// const ToggleTheme=({ setColorMode, colorMode })=>{

//   return (
//     <Button>
//       {
//         colorMode === "light" ? <Icon as ={MdDarkMode} /> : <Icon as={BsFillSunFill} />
//       }
//     </Button>
//   )

// }

export const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);

  const Toggle = ({location}) => {
    scroller.scrollTo(location,{
      spy:true,
      smooth:true,
      offset:-100,
      duration:500,
    });
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      h={[isOpen ? "350px":"40px","40px","90px","80px"]}
      bg="#1f2937"
      as="nav"
      align="center"
      justifyContent="space-between"
      w="full"
      p={8}
      pb={[12,20,8]}
      mb={8}
      paddingTop={6}
      wrap="wrap"
      position="fixed"
      color={["white", "white", "primary.700"]}
      fontFamily='inherit'
      fontWeight='400'
      zIndex={1}
      top={0}
    >
        <Logo />
        <ToggleIcon toggle={Toggle} isOpen={isOpen} />
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          spacing={[4,8,20]}
          alignItems="center"
          paddingRight={4}
          paddingTop={[3,3,0]}
          direction={["column", "row", "row"]}
          justify={["center", "space-between", "flex-end"]}
        >
          <MenuItem children={"Home"} location={"home"}  toggle={Toggle} />
          <MenuItem children={"About"} location={"about"} toggle={Toggle} />
          <MenuItem children={"Skills"} location={"skills"} toggle={Toggle} />
          <MenuItem children={"Projects"} location={"projects"} toggle={Toggle} />
          <MenuItem children={"Resume"} location={"resume"} toggle={Toggle} />
          <MenuItem children={"Contact"} location={"contact"} toggle={Toggle} />
        </Stack>
      </Box>
    </Flex>
  );
};
