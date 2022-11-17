import { Container, Flex, Box } from "@chakra-ui/react";
import SideBar from "../../components/AdminPage/SideBar";
import DetailServiceCategory from "../../components/AdminPage/ServiceCategories/DetailServiceCategory";


const AdminDetailCategoryPage = () => {
    return (
        <Container centerContent>
            <Flex w="100vw">
                <SideBar />
                <Box w="100%" maxH="100%" overflow="hidden">
                    <DetailServiceCategory />
                </Box>
            </Flex>
        </Container>
    )
}


export default AdminDetailCategoryPage;