import { Button, Flex, Img, Input, Text } from "@chakra-ui/react";
import React from "react";
import searchIcon from '../../asset/image/adminDashboardPage/searchIcon.svg'
const NavDashBoard = (props) => {

    return (
        <Flex w='1200px' h='80px' bg='utility.white' borderBottom='1px' borderColor='gray.100' justifyContent='space-between' alignItems='center' px='40px'>
            <Text textStyle='h2' color='utility.black'>{props.children}</Text>
            < Flex pos='relative' gap='24px' >
                <Img src={searchIcon} pos='absolute' left='19px' top='13px' />
                <Input borderRadius='8px' placeholder={`ค้นหา${props.children}...`} w='350px' h='44px' pl='50px' />
                <Button w='165px' h='44px'>เพิ่ม{props.children}</Button>
            </ Flex >

        </Flex >
    )
}

export default NavDashBoard