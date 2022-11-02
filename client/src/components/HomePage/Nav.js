import { Flex, Box, Button, Image, Text, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavComponent = () => {
  return (
    <Container
      className="navBar"
      maxW={"100%"}
      bg={"utility.white"}
      centerContent
    >
      <Flex
        alignItems="center"
        height="80px"
        w={"1440px"}
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Link to={"/"}>
            <Flex ml="161px">
              <Image
                src={require("../../asset/image/homePage/house-logo.png")}
                alt="house-logo"
              />
              <Text color="blue.600" fontWeight="500" fontSize="24px">
                HomeServices
              </Text>
            </Flex>
          </Link>
          <Box ml="20">
            <Text
              fontSize="16px"
              textStyle="h5"
              fontWeight="600"
              color="utility.black"
            >
              บริการของเรา
            </Text>
          </Box>
        </Flex>
        <Flex mr="184px">
          <Link to={"/login"}>
            <Button
              colorScheme="teal"
              variant="outline"
              borderColor="blue.600"
              fontWeight="500"
              fontSize="16px"
              color="blue.500"
              _hover={{ borderColor: "blue.400", color: "blue.400" }}
              _active={{ borderColor: "blue.800", color: "blue.800" }}
            >
              เข้าสู่ระบบ
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default NavComponent;
