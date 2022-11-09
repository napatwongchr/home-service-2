import { Container, Flex } from '@chakra-ui/react';
import React from 'react';
import SideBar from '../../components/AdminPage/SideBar';
import EditServiceList from '../../components/AdminServiceList/EditServiceList';

const AdminEditService = () => {
    return (
        <Container className='adminDashboardPage' centerContent>
            <Flex w='100vw'>
                <SideBar />
                <EditServiceList />
            </Flex>
        </Container >

    )
}

export default AdminEditService