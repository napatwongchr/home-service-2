import { Flex, Box, Button, Image, Text, Container, MenuItem, MenuList, Menu, MenuButton, Avatar } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authentication";
import notification from "../../assets/image/homePage/notification.svg";
// import userPrc from "../../assets/image/homePage/user.svg";
import order from "../../assets/image/homePage/order.svg";
import history from "../../assets/image/homePage/history.svg";
import houseLogo from "../../assets/image/homePage/house-logo.svg";
import logoutPic from "../../assets/image/homePage/logoutPic.svg";
import bell from "../../assets/image/homePage/bell.svg";
import { useState } from "react";
const NavComponent = () => {
  const { isAuthenticated, logout } = useAuth();
  const user = JSON.parse(window.localStorage.getItem("user"));
  const [toggle, setToggle] = useState(false);
  const navigator = useNavigate()

  return (
    <Container
      className="navBar"
      maxW={"100vw"}
      bg={"utility.white"}
      boxShadow={"lg"}
      centerContent
      pos='sticky'
      top='0'
      zIndex={'200'}
    >
      <Container maxW='1440px' px='160px'>
        <Flex
          alignItems="center"
          height="80px"
          w={"100%"}
          justifyContent="space-between"
        >
          <Flex alignItems="center">
            <Link to={"/"}>
              <Flex>
                <Image src={houseLogo} alt="house-logo" />
                <Text
                  color="blue.600"
                  fontWeight="500"
                  fontSize="24px"
                  alignSelf={"center"}
                  marginLeft="10px"
                >
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
          <Flex>
            {isAuthenticated ? (
              <>
                <Flex alignItems={"center"} position="relative">
                  <Text fontStyle={"h3"}>
                    {user.firstname + " " + user.lastname}
                  </Text>
                  <Menu>
                    <MenuButton as={Button} variant='dropdown' _hover={{ bg: 'none' }} minW="0px" w='100%px' onClick={() => setToggle(false)}>
                      <Avatar name={user.firstname} src={bell} size={'40px'} onClick={() => setToggle(!toggle)} />
                    </MenuButton>
                    <MenuList
                      minW="0px"
                      w='100%'
                      py="6px"
                      borderRadius={8}
                      bg={'utility.white'}
                      boxShadow={'lg'}
                      border='none'
                      textStyle={'b3'}
                    >
                      {/* <MenuItem px={'14px'} _hover={{ bg: 'gray.100' }}>
                        <Image src={userPrc} mr={"15px"} />
                        <Text textStyle={"b3"}>ข้อมูลผู้ใช้งาน</Text>
                      </MenuItem> */}
                      <MenuItem px={'14px'} _hover={{ bg: 'gray.100' }} onClick={() => navigator(`/order-history/${user.id}`)}>
                        <Image src={order} mr={"15px"} />
                        <Text textStyle={"b3"}>รายการคำสั่งซ่อม</Text>
                      </MenuItem>
                      {/* <MenuItem px={'14px'} _hover={{ bg: 'gray.100' }}>
                        <Image src={history} mr={"15px"} pos={'relative'} left={'-2px'} />
                        <Text textStyle={"b3"}>ประวัติการซ่อม</Text>
                      </MenuItem> */}
                      {
                        user.role === 'admin' ?
                          <Link to='/admin-dashboard/categories'>
                            <MenuItem px={'14px'} _hover={{ bg: 'gray.100' }}>
                              <Image src={history} mr={"15px"} pos={'relative'} left={'-2px'} />
                              <Text textStyle={"b3"}>Admin Dashboard</Text>
                            </MenuItem>
                          </Link>
                          : null
                      }

                      <MenuItem px={'14px'} _hover={{ bg: 'gray.100' }} borderTop='1px' borderColor='gray.300' onClick={() => logout()}>
                        <Image
                          src={logoutPic}
                          mr={"15px"}
                          pos={'relative'}
                          left={'1px'}
                        />
                        <Text textStyle={"b3"}>ออกจากระบบ</Text>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                  <Image src={notification} w={"40px"} borderRadius={"999px"} />
                </Flex>
              </>
            ) : (
              <Link to={"/login"}>
                <Button
                  colorScheme="teal"
                  fontWeight="500"
                  fontSize="16px"
                  variant='secondary'
                >
                  เข้าสู่ระบบ
                </Button>
              </Link>
            )}
          </Flex>
        </Flex >
      </Container>
    </Container >
  );
};

export default NavComponent;
