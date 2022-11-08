import { Container, Flex, Box } from '@chakra-ui/react';
import React from 'react';
import NavDashBoard from '../../components/AdminPage/NavDashboard';
import SideBar from '../../components/AdminPage/SideBar';
import AdminServiceList from '../../components/AdminServiceList/AdminServiceList';

const adminServiceListPage = () => {
    return (
        <Container className='adminDashboardPage' centerContent>
            <Flex w='100vw'>
                <SideBar />
                <Box w='100%' maxH='100%' overflow='hidden'>
                    <NavDashBoard>
                        บริการ
                    </NavDashBoard>
                    <AdminServiceList/>
                </Box>
            </Flex>
        </Container >

    )
}

export default adminServiceListPage