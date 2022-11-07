import { Box, Container, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import house from '../../asset/image/homePage/house-logo.svg';
import logoutIcon from '../../asset/image/homePage/logoutPic.svg';
import categoryIcon from '../../asset/image/adminDashboardPage/categoryIcon.svg';
import serviceIcon from '../../asset/image/adminDashboardPage/serviceIcon.svg';
import codeIcon from '../../asset/image/adminDashboardPage/codeIcon.svg';
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authentication";
const SideBar = () => {
    const { logout } = useAuth()
    return (
        <Container w='240px' h='100vh' bg='blue.950' py='32px' px='0' display='flex' flexDirection='column' justifyContent='space-between' m='0'>
            <Flex flexDirection='column'>
                <Link to='/'>
                    <Box w='192px' h='46px' bg='blue.100' display='flex' justifyContent='center' alignItems='center' gap='6px' borderRadius='12px' px='12px' mx='24px' mb='32px'>
                        <Img src={house} w='26px' />
                        <Text fontWeight='500' fontSize='20px' color='blue.600' pos='relative' top='1px'>HomeServices</Text>
                    </Box>
                </Link>
                <Flex w='100%' h='54px' gap='20px' px='28px' alignItems='center' bg='blue.950' _hover={{ bg: 'blue.900' }}>
                    <Img src={categoryIcon} w='16px' />
                    <Text textStyle='h5' color='utility.white'>หมวดหมู่</Text>
                </Flex>
                <Flex w='100%' h='54px' gap='20px' px='28px' alignItems='center' bg='blue.950' _hover={{ bg: 'blue.900' }}>
                    <Img src={serviceIcon} w='16px' />
                    <Text textStyle='h5' color='utility.white'>บริการ</Text>
                </Flex>
                <Flex w='100%' h='54px' gap='20px' px='28px' alignItems='center' bg='blue.950' _hover={{ bg: 'blue.900' }}>
                    <Img src={codeIcon} w='16px' />
                    <Text textStyle='h5' color='utility.white'>Promotion Code</Text>
                </Flex>
            </Flex>

            <Flex w='100%' h='54px' gap='20px' px='28px' alignItems='center' bg='blue.950' _hover={{ bg: 'blue.900' }} onClick={() => logout()}>
                <Img src={logoutIcon} w='18px' />
                <Text fontWeight='400' fontSize='16px' color='utility.white'>ออกจากระบบ</Text>
            </Flex>
        </Container>
    )
}

export default SideBar