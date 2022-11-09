import { Text, Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavCreateService = (props) => {
    return (
        <Flex h='80px' w='100%' bg='utility.white' borderBottom='1px' borderColor='gray.100' justifyContent='space-between' alignItems='center' px='40px' >
            <Text textStyle='h2' color='utility.black'>{props.children}</Text>
            <Flex pos='relative' gap='24px' >
                <Link to={props.to}>
                    <Button variant='secondary' w='112px' h='44px'>ยกเลิก</Button>
                </Link>
                <Button variant='primary' w='112px' h='44px' type="submit">{props.submit}</Button>
            </Flex >
        </Flex >
    );
};

export default NavCreateService;
