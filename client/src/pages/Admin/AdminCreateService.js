import { Container, Flex } from '@chakra-ui/react';
import React from 'react';
import SideBar from '../../components/AdminPage/SideBar';
import CreateServiceList from '../../components/AdminPage/ServiceLists/CreateServiceList';

const AdminCreateService = () => {
    return (
        <Container className='adminDashboardPage' centerContent>
            <Flex w='100vw'>
                <SideBar />
                <CreateServiceList />
            </Flex>
        </Container >

    )
}

export default AdminCreateService