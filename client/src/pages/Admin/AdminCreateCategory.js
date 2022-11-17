import { Container, Flex, Box } from "@chakra-ui/react";
import SideBar from "../../components/AdminPage/SideBar";
import CreateServiceCategory from "../../components/AdminPage/ServiceCategories/CreateServiceCategory";


const AdminCreateCategoryPage = () => {
    return (
        <Container centerContent>
            <Flex w="100vw">
                <SideBar />
                <Box w="100%" maxH="100%" overflow="hidden">
                    <CreateServiceCategory />
                </Box>
            </Flex>
        </Container>
    )
}


export default AdminCreateCategoryPage;