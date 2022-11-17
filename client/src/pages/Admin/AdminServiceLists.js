import { Container, Flex, Box } from "@chakra-ui/react";
import React from "react";
import NavDashBoard from "../../components/AdminPage/NavDashboard";
import SideBar from "../../components/AdminPage/SideBar";
import ServiceList from "../../components/AdminPage/ServiceLists/ViewServiceList";

const adminServiceListPage = () => {
  return (
    <Container className="adminDashboardPage" centerContent>
      <Flex w="100vw">
        <SideBar />
        <Box w="100%" maxH="100%" overflow="hidden">
          <NavDashBoard to="/admin-dashboard/service/create">
            บริการ
          </NavDashBoard>
          <ServiceList />
        </Box>
      </Flex>
    </Container>
  );
};

export default adminServiceListPage;
