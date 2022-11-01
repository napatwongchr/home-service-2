import { Flex, Text, Link, Container } from '@chakra-ui/react'


const CopyRight = () => {
    return (
        <Container maxW='100%' bg="gray.100" centerContent>
            <Flex justifyContent="space-between" w="1440px" h="42px" >
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
        </Container>
    )
}

export default CopyRight;