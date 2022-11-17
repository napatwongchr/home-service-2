import { Box, Container, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import house from "../../assets/image/homePage/house-logo.svg";
import logoutIcon from "../../assets/image/homePage/logoutPic.svg";
import categoryIcon from "../../assets/image/adminDashboardPage/categoryIcon.svg";
import serviceIcon from "../../assets/image/adminDashboardPage/serviceIcon.svg";
import codeIcon from "../../assets/image/adminDashboardPage/codeIcon.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authentication";
const SideBar = () => {
  const { logout } = useAuth();
  return (
    <Container maxH='100vh' maxW="240px" p='0'>
      <Container
        maxW="240px"
        h="100%"
        bg="blue.950"
        py="32px"
        px="0"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        m="0"
      >
        <Box>
          <Link to="/">
            <Box
              w="192px"
              h="46px"
              bg="blue.100"
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="6px"
              borderRadius="12px"
              px="12px"
              mx="auto"
              mb="32px"
            >
              <Img src={house} w="26px" />
              <Text
                fontWeight="500"
                fontSize="20px"
                color="blue.600"
                pos="relative"
                top="1px"
              >
                HomeServices
              </Text>
            </Box>
          </Link>
          <Link to="/admin-dashboard/categories">
            <Flex
              w="100%"
              h="54px"
              gap="20px"
              px="28px"
              alignItems="center"
              bg="blue.950"
              _hover={{ bg: "blue.900" }}
            >
              <Img src={categoryIcon} w="16px" />
              <Text textStyle="h5" color="utility.white">
                หมวดหมู่
              </Text>
            </Flex>
          </Link>
          <Link to="/admin-dashboard/services">
            <Flex
              w="100%"
              h="54px"
              gap="20px"
              px="28px"
              alignItems="center"
              bg="blue.950"
              _hover={{ bg: "blue.900" }}
            >
              <Img src={serviceIcon} w="16px" />
              <Text textStyle="h5" color="utility.white">
                บริการ
              </Text>
            </Flex>
          </Link>
          <Link>
            <Flex
              w="100%"
              h="54px"
              gap="20px"
              px="28px"
              alignItems="center"
              bg="blue.950"
              _hover={{ bg: "blue.900" }}
            >
              <Img src={codeIcon} w="16px" />
              <Text textStyle="h5" color="utility.white">
                Promotion Code
              </Text>
            </Flex>
          </Link>
        </Box>
        <Flex
          w="100%"
          h="54px"
          gap="20px"
          px="28px"
          alignItems="center"
          bg="blue.950"
          _hover={{ bg: "blue.900" }}
          onClick={() => logout()}
        >
          <Img src={logoutIcon} w="18px" />
          <Text fontWeight="400" fontSize="16px" color="utility.white">
            ออกจากระบบ
          </Text>
        </Flex>
      </Container>
    </Container>
  );
};

export default SideBar;
