import { Container, Flex, Box } from '@chakra-ui/react';
import React from 'react';
import NavCreateService from '../../components/AdminPage/NavCreateService';
import SideBar from '../../components/AdminPage/SideBar';
import CreateServiceList from '../../components/AdminServiceList/CreateServiceCategory';

const AdminCreateService = () => {
    return (
        <Container className='adminDashboardPage' centerContent>
            <Flex w='100vw'>
                <SideBar />
                <Box w='100%' maxH='100%' overflow='hidden'>
                    <NavCreateService>
                        เพิ่มบริการ
                    </NavCreateService>
                    <CreateServiceList />
                </Box>
            </Flex>
        </Container >

    )
}

export default AdminCreateService