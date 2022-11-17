import { Container, Flex, Box } from "@chakra-ui/react";
import React from "react";
import SideBar from "../../components/AdminPage/SideBar";
import DetailServiceList from "../../components/AdminPage/ServiceLists/DetailServiceList";

const AdminDetailServicePage = () => {
  return (
    <Container className="adminDashboardPage" centerContent>
      <Flex w="100vw">
        <SideBar />
        <Box w="100%" maxH="100%" overflow="hidden">
          <DetailServiceList />
        </Box>
      </Flex>
    </Container>
  );
};

export default AdminDetailServicePage;
