import { Container, Flex, Box } from "@chakra-ui/react";
import SideBar from "../../components/AdminPage/SideBar";
import ViewServiceCategory from "../../components/AdminPage/ServiceCategories/ViewServiceCategory";
import NavDashBoard from "../../components/AdminPage/NavDashboard";
import { useState } from "react";

const AdminDashboardPage = () => {
  const [searchCategoryName, setSearchCategoryName] = useState("");
  return (
    <Container className="adminDashboardPage" centerContent>
      <Flex w="100vw">
        <SideBar />
        <Box w="100%" maxH="100%" overflow="hidden">
          <NavDashBoard
            to="/admin-dashboard/category/create"
            setSearchCategoryName={setSearchCategoryName}
            searchCategoryName={searchCategoryName}
          >
            หมวดหมู่
          </NavDashBoard>
          <ViewServiceCategory searchCategoryName={searchCategoryName} />
        </Box>
      </Flex>
    </Container>
  );
};

export default AdminDashboardPage;
