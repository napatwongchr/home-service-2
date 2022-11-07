import { Box, Container, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import house from '../../asset/image/homePage/house-logo.svg';
import categoryIcon from '../../asset/image/sideBar/categoryIcon.svg';
const SideBar = () => {

    return (
        <Container w='240px' h='100vh' bg='blue.950' py='32px'>
            <Box w='100%' h='46px' bg='blue.100' display='flex' justifyContent='center' alignItems='center' gap='6px' borderRadius='12px' px='12px' mx='auto' mb='32px'>
                <Img src={house} w='26px' />
                <Text fontWeight='500' fontSize='20px' color='blue.600' pos='relative' top='1px'>HomeServices</Text>
            </Box>
            <Flex w='100%' gap='20px' bg='utility.red'>
                <Img src={categoryIcon} />
                <Text textStyle='h5' color='utility.white'>หมวดหมู่</Text>
            </Flex>
        </Container>
    )
}

export default SideBar