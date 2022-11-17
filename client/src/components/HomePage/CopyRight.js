import { Flex, Text, Link, Container, Box } from "@chakra-ui/react";

const CopyRight = () => {
  return (
    <Container maxW="100vw" bg="gray.100" centerContent>
      <Container maxW="1440px">
        <Box w='100%'>
          <Flex justifyContent="space-between" h="42px" px='160px'>
            <Flex alignItems="center" flexGrow="1">
              <Text color="gray.500" fontWeight="400" fontSize="12px">
                copyright © 2021 HomeServices.com All rights reserved
              </Text>
            </Flex>
            <Flex
              alignItems="center"
              width="24.5rem"
              justifyContent="space-between"
            >
              <Link color="gray.700" textStyle="b3">
                เงื่อนไขและข้อตกลงการใช้งานเว็บไซต์
              </Link>
              <Link color="gray.700" textStyle="b3">
                นโยบายความเป็นส่วนตัว
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Container>
  );
};

export default CopyRight;
