import { Flex, Box, Button, Image, Text, Container } from '@chakra-ui/react'


const NavComponent = () => {
    return (
        <Container className='navBar' w={'100%'} centerContent>
            <Flex alignItems="center" height="80px" w={'1440px'} justifyContent="space-between">
                <Flex alignItems="center">
                    <Flex ml="161px" >
                        <Image src={require("../../asset/image/homePage/house-logo.png")} alt="house-logo" />
                        <Text color="blue.600" fontWeight="500" fontSize="24px">HomeServices</Text>
                    </Flex>
                    <Box ml="20">
                        <Text fontSize="16px" textStyle="h5" fontWeight="600" color="utility.black">บริการของเรา</Text>
                    </Box>
                </Flex>
                <Flex mr="184px">
                    <Button colorScheme='teal' variant='outline' borderColor="blue.600" fontWeight="500" fontSize="16px" color="blue.500" _hover={{ borderColor: "blue.400", color: "blue.400" }} _active={{ borderColor: "blue.800", color: "blue.800" }}>
                        เข้าสู่ระบบ
                    </Button>
                </Flex>
            </Flex >
        </Container>
    )
}

export default NavComponent;