import { Container, Flex, Box } from "@chakra-ui/react";
import React from "react";
import NavDashBoard from "../../components/AdminPage/NavDashboard";
import SideBar from "../../components/AdminPage/SideBar";
import ViewServiceCategory from "../../components/ServiceCategory/ViewServiceCategory";

const adminDashboardPage = () => {
  return (
    <Container className="adminDashboardPage" centerContent>
      <Flex w="100vw">
        <SideBar />
        <Box w="100%" maxH="100%" overflow="hidden">
          <NavDashBoard>หมวดหมู่</NavDashBoard>
          <ViewServiceCategory />
        </Box>
      </Flex>
    </Container>
  );
};

export default adminDashboardPage;
