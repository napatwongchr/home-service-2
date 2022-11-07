import { Container, Flex } from '@chakra-ui/react';
import React from 'react';
import NavDashBoard from '../../components/AdminPage/NavDashboard';
import SideBar from '../../components/AdminPage/SideBar';


const adminDashboardPage = () => {
    return (
        <Container className='adminDashboardPage' display='flex' w='1920px' m='0' p='0'>
            <SideBar />
            <NavDashBoard />
        </Container >

    )
}

export default adminDashboardPage