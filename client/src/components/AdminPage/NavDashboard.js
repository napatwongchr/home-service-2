import { Button, Container, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

const NavDashBoard = () => {

    return (
        <Container w='1200px' h='80px' bg='blue.950' py='32px' px='0' display='flex' justifyContent='space-between' m={0}>
            <Flex>
                <Text>หมวดหมู่</Text>
                <Flex>
                    <Input>

                    </Input>
                    <Button> เพิ่มหมวดหมู่</Button>
                </Flex>
            </Flex>
        </Container>
    )
}

export default NavDashBoard