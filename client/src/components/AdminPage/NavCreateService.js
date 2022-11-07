import { Text, Flex, Button } from "@chakra-ui/react";

const NavCreateService = (props) => {
    return (
        <Flex h='80px' w='100%' bg='utility.white' borderBottom='1px' borderColor='gray.100' justifyContent='space-between' alignItems='center' px='40px' >
            <Text textStyle='h2' color='utility.black'>{props.children}</Text>
            <Flex pos='relative' gap='24px' >
                <Button variant='secondary' w='112px' h='44px'>ยกเลิก</Button>
                <Button variant='primary' w='112px' h='44px'>สร้าง</Button>
            </Flex >
        </Flex >
    );
};

export default NavCreateService;
