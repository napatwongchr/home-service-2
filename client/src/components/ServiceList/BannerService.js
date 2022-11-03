import { Container, Text, Box, Flex, Center } from "@chakra-ui/react";
import React from "react";
import bannerCoverImage from "../../asset/image/serviceListPage/WeService.jpg";

const BannerService = () => {
  return (
    <Container
      className="bannerService"
      p={0}
      maxW="100%"
      h={240}
      overflow="hidden"
      centerContent
    >
      <Flex>
        <Box
          w={'100vw'}
          h="240px"
          bgSize="100%"
          objectFit={'contain'}
          bgImage={bannerCoverImage}
          bgPosition="center"
        >
          <Box>
            <Center>
              <Text
                mt="64px"
                w={188}
                h="43px"
                textStyle="h1"
                fontWeight="500"
                fontSize={32}
                lineHeight="48px"
                color="#ffffff"
              >
                บริการของเรา
              </Text>
            </Center>

            <Center>
              <Text
                mt="17px"
                w={464}
                h="48px"
                textStyle="h2"
                fontWeight="400"
                fontSize={16}
                lineHeight="24px"
                color="#ffffff"
                textAlign={"center"}
              >
                ซ่อมเครื่องใช้ไฟฟ้า ซ่อมแอร์ ทำความสะอาดบ้าน และอื่น ๆ อีกมากมาย
                โดยพนักงานแม่บ้าน และช่างมืออาชีพ
              </Text>
            </Center>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default BannerService;
