import { Flex, Box, Button, Image, Text, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authentication";
import notification from "../../asset/image/homePage/notification.svg";
import userPrc from "../../asset/image/homePage/user.svg";
import order from "../../asset/image/homePage/order.svg";
import history from "../../asset/image/homePage/history.svg";
import logoutPic from "../../asset/image/homePage/logoutPic.svg";
import { useState } from "react";
const NavComponent = () => {
  const { isAuthenticated, state, logout } = useAuth();
  console.log(state);
  // const user = state.user;
  const [toggle, setToggle] = useState(false);

  return (
    <Container
      className="navBar"
      maxW={"100%"}
      bg={"utility.white"}
      boxShadow={"lg"}
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
          {isAuthenticated ? (
            <>
              <Flex alignItems={"center"} position="relative">
                <Text fontStyle={"h3"}>
                  {/* {user.firstname} {user.lastname} */}
                </Text>
                <Image
                  src="https://st4.depositphotos.com/11634452/41441/v/600/depositphotos_414416674-stock-illustration-picture-profile-icon-male-icon.jpg"
                  alt="profile picture"
                  w={"40px"}
                  borderRadius={"999px"}
                  mx={"12px"}
                  onClick={() => setToggle(!toggle)}
                />
                <Image src={notification} w={"40px"} borderRadius={"999px"} />
              </Flex>
              {toggle && (
                <Container
                  bg={"utility.white"}
                  position="absolute"
                  w={"180px"}
                  borderRadius={"8px"}
                  boxShadow="lg"
                  top={"80px"}
                  zIndex="100"
                  px={0}
                  py="6px"
                >
                  <Flex
                    w={"100%"}
                    h={"35px"}
                    alignItems={"center"}
                    p="14px"
                    _hover={{ bg: "gray.100" }}
                    _active={{ bg: "gray.200" }}
                  >
                    <Image src={userPrc} mr={"15px"} />
                    <Text textStyle={"b3"}>ข้อมูลผู้ใช้งาน</Text>
                  </Flex>
                  <Flex
                    w={"100%"}
                    h={"35px"}
                    alignItems={"center"}
                    p="14px"
                    _hover={{ bg: "gray.100" }}
                    _active={{ bg: "gray.200" }}
                  >
                    <Image src={order} mr={"15px"} />
                    <Text textStyle={"b3"}>รายการคำสั่งซ่อม</Text>
                  </Flex>
                  <Flex
                    w={"100%"}
                    h={"35px"}
                    alignItems={"center"}
                    p="14px"
                    _hover={{ bg: "gray.100" }}
                    _active={{ bg: "gray.200" }}
                  >
                    <Image src={history} mr={"15px"} />
                    <Text textStyle={"b3"}>ประวัติการซ่อม</Text>
                  </Flex>
                  <Flex
                    w={"100%"}
                    h={"35px"}
                    alignItems={"center"}
                    p="14px"
                    _hover={{ bg: "gray.100" }}
                    _active={{ bg: "gray.200" }}
                    onClick={() => logout()}
                  >
                    <Image
                      src={logoutPic}
                      mr={"15px"}
                      left="3px"
                      pos={"relative"}
                    />
                    <Text textStyle={"b3"}>ออกจากระบบ</Text>
                  </Flex>
                </Container>
              )}
            </>
          ) : (
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
          )}
        </Flex>
      </Flex>
    </Container>
  );
};

export default NavComponent;
