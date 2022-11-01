import { Flex, Box, Button, Image, Text } from '@chakra-ui/react'


const NavComponent = () =>{

    return (
        <Flex alignItems="center" height="80px" justifyContent="space-between">
            <Flex alignItems="center">
                <Flex ml="161px" >
                    <Image src={require("../asset/image/NavComponent/house-logo.png")} alt="house-logo" />
                    <Text color="blue.600" fontWeight="500" fontSize="24px">HomeServices</Text>
                </Flex>
                <Box ml="20">
                    <Text fontSize="16px" textStyle="h5" fontWeight="600" color="utility.black">บริการของเรา</Text>
                </Box>
            </Flex>
            <Flex mr="184px">
                <Button colorScheme='teal' variant='outline' borderColor="blue.600" fontWeight="500" fontSize="16px" color="blue.500">
                    เข้าสู่ระบบ
                </Button>
            </Flex>
        </Flex>
    )
}

export default NavComponent;