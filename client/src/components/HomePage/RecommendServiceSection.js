import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import priceTag from "../../asset/image/homePage/Group.svg";
const RecommendServiceSection = () => {
  return (
    <Container
      className="recommendService"
      maxW="100%"
      bg="gray.100"
      centerContent
    >
      <Flex>
        <Center w="1440px" mb="42px" mt="80px">
          <Text textStyle="h1" color="blue.950">
            บริการยอดฮิตของเรา
          </Text>
        </Center>
      </Flex>
      <Flex>
        <Center w="1440px">
          <Grid templateColumns="repeat(3, 1fr)" gap="37px">
            <Box
              w="349px"
              h="369px"
              bg="utility.white"
              overflow="hidden"
              border="1px"
              borderColor="gray.300"
              borderRadius="8px"
            >
              <Image
                src={require("../../asset/image/serviceImage/ทำความสะอาดทั่วไป.png")}
                alt="ทำความสะอาดทั่วไป"
                h="200px"
                w="100%"
              />
              <Badge
                borderRadius="10%"
                px="10px"
                py="4px"
                bg="blue.100"
                mx="24px"
                mt="16px"
                mb="8px"
              >
                <Text textStyle="b4" color="blue.800">
                  บริการทั่วไป
                </Text>
              </Badge>
              <Text textStyle="h2" color="gray.950" mx="24px" mb="4px">
                ทำความสะอาดทั่วไป
              </Text>
              <Flex mx="24px" mb="22px">
                <Image src={priceTag} />
                <Text textStyle="b3" color="gray.700" ml="8px">
                  ค่าบริการประมาณ 500.00 - 1,000.00 ฿
                </Text>
              </Flex>
              <Text
                textStyle="button"
                color="blue.600"
                textDecoration="underline"
                mx="24px"
              >
                เลือกบริการ
              </Text>
            </Box>
            <Box
              w="349px"
              h="369px"
              bg="utility.white"
              overflow="hidden"
              border="1px"
              borderColor="gray.300"
              borderRadius="8px"
            >
              <Image
                src={require("../../asset/image/serviceImage/ล้างแอร์.png")}
                alt={null}
                h="200px"
                w="100%"
              />
              <Badge
                borderRadius="10%"
                px="10px"
                py="4px"
                bg="blue.100"
                mx="24px"
                mt="16px"
                mb="8px"
              >
                <Text textStyle="b4" color="blue.800">
                  บริการทั่วไป
                </Text>
              </Badge>
              <Text textStyle="h2" color="gray.950" mx="24px" mb="4px">
                ล้างแอร์
              </Text>
              <Flex mx="24px" mb="22px">
                <Image src={priceTag} />
                <Text textStyle="b3" color="gray.700" ml="8px">
                  ค่าบริการประมาณ 500.00 - 1,000.00 ฿
                </Text>
              </Flex>
              <Text
                textStyle="button"
                color="blue.600"
                textDecoration="underline"
                mx="24px"
              >
                เลือกบริการ
              </Text>
            </Box>
            <Box
              w="349px"
              h="369px"
              bg="utility.white"
              overflow="hidden"
              border="1px"
              borderColor="gray.300"
              borderRadius="8px"
            >
              <Image
                src={require("../../asset/image/serviceImage/ซ่อมเครื่องซักผ้า.png")}
                alt={null}
                h="200px"
                w="100%"
              />
              <Badge
                borderRadius="10%"
                px="10px"
                py="4px"
                bg="blue.100"
                mx="24px"
                mt="16px"
                mb="8px"
              >
                <Text textStyle="b4" color="blue.800">
                  บริการทั่วไป
                </Text>
              </Badge>
              <Text textStyle="h2" color="gray.950" mx="24px" mb="4px">
                ซ่อมเครื่องซักผ้า
              </Text>
              <Flex mx="24px" mb="22px">
                <Image src={priceTag} />
                <Text textStyle="b3" color="gray.700" ml="8px">
                  ค่าบริการประมาณ 500.00 ฿
                </Text>
              </Flex>
              <Text
                textStyle="button"
                color="blue.600"
                textDecoration="underline"
                mx="24px"
              >
                เลือกบริการ
              </Text>
            </Box>
          </Grid>
        </Center>
      </Flex>
      <Flex>
        <Center w="1440px">
          <Link to={"/service-list"}>
            <Button
              role="click"
              bg="blue.600"
              textStyle="h5"
              color="utility.white"
              px="24px"
              py="10px"
              mt="70px"
              mb="175px"
              _hover={{ bg: "blue.500" }}
              _active={{ bg: "blue.800" }}
            >
              ดูบริการทั้งหมด
            </Button>
          </Link>
        </Center>
      </Flex>
    </Container>
  );
};

export default RecommendServiceSection;
