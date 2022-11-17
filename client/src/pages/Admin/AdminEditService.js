import { Container, Flex } from '@chakra-ui/react';
import React from 'react';
import SideBar from '../../components/AdminPage/SideBar';
import EditServiceList from '../../components/AdminPage/ServiceLists/EditServiceList';

const AdminEditService = () => {
    return (
        <Container className='adminEditService' centerContent>
            <Flex w='100vw' h='100vh'>
                <SideBar />
                <EditServiceList />
            </Flex>
        </Container >

    )
}

export default AdminEditService