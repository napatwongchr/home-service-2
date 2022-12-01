import { Container, Flex, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import NavDashBoard from "../../components/AdminPage/NavDashboard";
import SideBar from "../../components/AdminPage/SideBar";
import ServiceList from "../../components/AdminPage/ServiceLists/ViewServiceList";

const AdminServiceListPage = () => {
  const [ input, setInput ] = useState("")
  return (
    <Container className="adminDashboardPage" centerContent>
      <Flex w="100vw">
        <SideBar />
        <Box w="100%" maxH="100%" overflow="hidden">
          <NavDashBoard to="/admin-dashboard/service/create" setInput={setInput}>
            บริการ
          </NavDashBoard>
          <ServiceList input={input} />
        </Box>
      </Flex>
    </Container>
  );
};

export default AdminServiceListPage;
