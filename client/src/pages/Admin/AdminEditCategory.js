import { Container, Flex, Box } from "@chakra-ui/react";
import SideBar from "../../components/AdminPage/SideBar";
import EditServiceCategory from "../../components/AdminPage/ServiceCategories/EditServiceCategory";


const AdminEditCategoryPage = () => {
    return (
        <Container centerContent>
            <Flex w="100vw">
                <SideBar />
                <Box w="100%" maxH="100%" overflow="hidden">
                    <EditServiceCategory />
                </Box>
            </Flex>
        </Container>
    )
}


export default AdminEditCategoryPage;