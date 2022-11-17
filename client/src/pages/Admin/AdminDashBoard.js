import { Container, Flex, Box } from "@chakra-ui/react";
import React from "react";
import SideBar from "../../components/AdminPage/SideBar";
import ViewServiceCategory from "../../components/AdminPage/ServiceCategories/ViewServiceCategory";

const adminDashboardPage = () => {
  return (
    <Container className="adminDashboardPage" centerContent>
      <Flex w="100vw">
        <SideBar />
        <Box w="100%" maxH="100%" overflow="hidden">
          <ViewServiceCategory />
        </Box>
      </Flex>
    </Container>
  );
};

export default adminDashboardPage;
