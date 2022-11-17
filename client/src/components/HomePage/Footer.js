import { Flex, Box, Image, Text, Container } from "@chakra-ui/react";
import houseLogo from "../../assets/image/homePage/house-logo.svg";
import phoneLogo from "../../assets/image/homePage/phone-logo.svg";
import mailLogo from "../../assets/image/homePage/mail-logo.svg";

const Footer = () => {
  return (
    <Container className="footerContact" maxW={"100vw"} centerContent>
      <Box maxW="1440px">
        <Flex
          alignItems="center"
          height="151px"
          justifyContent="space-between"
          w={"100%"}
          px="160px"
        >
          <Flex alignItems="center">
            <Flex>
              <Image src={houseLogo} alt="house-logo" marginRight="10px" />
              <Text color="blue.600" fontWeight="500" fontSize="24px">
                HomeServices
              </Text>
            </Flex>
            <Box ml="20" mr="40px">
              <Text textStyle="h4" color="utility.black" marginBottom="0.4rem">
                บริษัท โฮมเซอร์วิสเซส จำกัด
              </Text>
              <Text textStyle="b3" color="gray.800">
                452 ซอย สุขุมวิท 79 แขวงพรโขนงเหนือ เขตวัฒนา กรุงเทพมหานคร 10260
              </Text>
            </Box>
          </Flex>
          <Box>
            <Flex alignItems="center" marginBottom="0.4rem">
              <Image src={phoneLogo} alt="phone-logo" mr="1rem" />
              <Text textStyle="b1">080-540-6357</Text>
            </Flex>
            <Flex alignItems="center">
              <Image src={mailLogo} alt="mail-logo" mr="1rem" />
              <Text>contact@homeservices.co</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Footer;
