import { Flex, Box, Image, Text, Container } from '@chakra-ui/react'


const Footer = () => {
    return (
        <Container className='footerContact' w={'100%'} centerContent>
            <Flex alignItems="center" height="80px" justifyContent="space-between" w="1440px">
                <Flex alignItems="center">
                    <Flex ml="161px" >
                        <Image src={require("../../asset/image/homePage/house-logo.png")} alt="house-logo" />
                        <Text color="blue.600" fontWeight="500" fontSize="24px">HomeServices</Text>
                    </Flex>
                    <Box ml="20">
                        <Text fontSize="16px" textStyle="h5" fontWeight="600" color="utility.black">บริษัท โฮมเซอร์วิสเซส จำกัด</Text>
                        <Text color="gray.800" fontWeight="400" fontSize="14px">452 ซอย สุขุมวิท 79 แขวงพรโขนงเหนือ เขตวัฒนา กรุงเทพมหานคร 10260</Text>
                    </Box>
                </Flex>
                <Box mr="184px">
                    <Flex alignItems="center">
                        <Image src={require("../../asset/image/homePage/phone.png")} height="15px" width="15px" mr="16px" />
                        <Text fontWeight="400" fontSize="16px" color="gray.800">080-540-6357</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Image src={require("../../asset/image/homePage/letter.png")} height="15px" mr="16px" />
                        <Text>contact@homeservices.co</Text>
                    </Flex>
                </Box>
            </Flex>
        </Container>
    )
}

export default Footer;