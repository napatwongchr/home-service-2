import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import SideBar from "../../components/AdminPage/SideBar";
import DetailServiceList from "../../components/AdminPage/ServiceLists/DetailServiceList";

const AdminDetailServicePage = () => {
  return (
    <Container className="adminDashboardPage" centerContent>
      <Flex w="100vw" h="100vh">
        <SideBar />
        <DetailServiceList />
      </Flex>
    </Container>
  );
};

export default AdminDetailServicePage;
