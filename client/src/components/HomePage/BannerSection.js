import {
  Button,
  Text,
  Box,
  Image,
  Flex,
  Container
} from "@chakra-ui/react";
import React from "react";
import bigbro from "../../asset/image/homePage/browithblueshirt.svg";

const Banner = () => {
  return (
    <Container className="banner" maxW="100%" bg="#E7EEFF" centerContent>
      <Flex>
        <Box w={1440} h={540} pos="relative">
          <Box w={767} h="96px" mt={78} ml={162}>
            <Text
              textStyle="h2"
              fontWeight="700"
              fontSize={64}
              lineHeight="96px"
              color="#1852D6"
            >
              เรื่องบ้าน...ให้เราช่วยดูแลคุณ
            </Text>
          </Box>

          <Box w={543} h="64px" ml={162}>
            <Text
              textStyle="h2"
              fontWeight="600"
              fontSize={42}
              lineHeight="64px"
              color="#000000"
            >
              “สะดวก ราคาคุ้มค่า เชื่อถือได้”
            </Text>
          </Box>

          <Box w={515} h="72px" mt={39} ml={162}>
            <Text
              textStyle="h2"
              fontWeight="400"
              fontSize={24}
              lineHeight="36px"
              color="#646C80"
            >
              ซ่อมเครื่องใช้ไฟฟ้า ซ่อมแอร์ ทำความสะอาดบ้าน โดยพนักงานแม่บ้าน
              และช่างมืออาชีพ
            </Text>
          </Box>

          <Button
            w={191}
            h="54px"
            mt={47}
            ml={162}
            variant='primary'
          >
            <Text textStyle="h2" color="#FFFFFF">
              เช็คราคาบริการ
            </Text>
          </Button>

          <Box pos="absolute" right="110px" bottom="0">
            <Image src={bigbro} alt="technician"></Image>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Banner;
