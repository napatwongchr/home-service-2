import { Container, Flex, Box } from '@chakra-ui/react';
import React from 'react';
import NavDashBoard from '../../components/AdminPage/NavDashboard';
import SideBar from '../../components/AdminPage/SideBar';


const adminDashboardPage = () => {
    return (
        <Container className='adminDashboardPage' centerContent>
            <Flex>
                <SideBar />
                <Box>

                    <NavDashBoard>
                        หมวดหมู่
                    </NavDashBoard>
                </Box>
            </Flex>
        </Container >

    )
}

export default adminDashboardPage