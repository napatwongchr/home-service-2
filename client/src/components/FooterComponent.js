import { Flex, Box, Image, Text, Link } from '@chakra-ui/react'


const FooterComponent = () =>{

    return (
        <>
            <Flex alignItems="center" height="80px" justifyContent="space-between" w="1440px">
                <Flex alignItems="center">
                    <Flex ml="161px" >
                        <Image src={require("../asset/image/NavComponent/house-logo.png")} alt="house-logo" />
                        <Text color="blue.600" fontWeight="500" fontSize="24px">HomeServices</Text>
                    </Flex>
                    <Box ml="20">
                        <Text fontSize="16px" textStyle="h5" fontWeight="600" color="utility.black">บริษัท โฮมเซอร์วิสเซส จำกัด</Text>
                        <Text color="gray.800" fontWeight="400" fontSize="14px">452 ซอย สุขุมวิท 79 แขวงพรโขนงเหนือ เขตวัฒนา กรุงเทพมหานคร 10260</Text>
                    </Box>
                </Flex>
                <Box mr="184px">
                    <Flex alignItems="center"> 
                        <Image src={require("../asset/image/FooterConponent/phone.png")} height="15px" width="15px" mr="16px" />
                        <Text fontWeight="400" fontSize="16px" color="gray.800">080-540-6357</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Image src={require("../asset/image/FooterConponent/letter.png")} height="15px" mr="16px"/>
                        <Text>contact@homeservices.co</Text>
                    </Flex>
                </Box>
            </Flex>

            <Flex justifyContent="space-between"  w="1440px" h="42px" bg="gray.100">
                <Flex alignItems="center" flexGrow="1">
                    <Text color="gray.500" fontWeight="400" fontSize="12px" ml="160px">
                        copyright © 2021 HomeServices.com All rights reserved
                    </Text>
                </Flex>

                <Flex alignItems="center" justifyContent="space-evenly" flexGrow="1">
                    <Link color="gray.700" fontWeight="400" fontSize="14px">เงื่อนไขและข้อตกลงการใช้งานเว็บไซต์</Link>
                    <Link color="gray.700" fontWeight="400" fontSize="14px">นโยบายความเป็นส่วนตัว</Link>
                </Flex>
            </Flex>
        </>
        
    )
}

export default FooterComponent;