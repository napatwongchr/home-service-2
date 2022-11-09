import { Container, Flex, Box } from '@chakra-ui/react';
import React from 'react';
import NavDashBoard from '../../components/AdminPage/NavDashboard';
import SideBar from '../../components/AdminPage/SideBar';
import DetaiServiceCategory from '../../components/AdminServiceList/DetailServiceCategory';

const adminDetaiServicePage = () => {
    return (
        <Container className='adminDashboardPage' centerContent>
            <Flex w='100vw'>
                <SideBar />
                <Box w='100%' maxH='100%' overflow='hidden'>
                    <NavDashBoard>
                        บริการ
                    </NavDashBoard>
                    <DetaiServiceCategory/>
                </Box>
            </Flex>
        </Container >

    )
}

export default adminDetaiServicePage