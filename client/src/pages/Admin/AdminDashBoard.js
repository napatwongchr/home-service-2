import { Container, Flex, Box } from "@chakra-ui/react";
import SideBar from "../../components/AdminPage/SideBar";
import ViewServiceCategory from "../../components/AdminPage/ServiceCategories/ViewServiceCategory";

const AdminDashboardPage = () => {
  return (
    <Container className="adminDashboardPage" centerContent>
      <Flex w="100vw" h="100vh">
        <SideBar />
        <Box w="100%" maxH="100%" overflow="hidden">
          <ViewServiceCategory />
        </Box>
      </Flex>
    </Container>
  );
};

export default AdminDashboardPage;