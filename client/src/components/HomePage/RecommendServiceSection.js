import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import priceTag from "../../assets/image/homePage/Group.svg";
const RecommendServiceSection = () => {
  const navigate = useNavigate();

  return (
    <Container
      className="recommendService"
      maxW="100vw"
      bg="gray.100"
      centerContent
    >
      <Container maxW="1440px">
        <Text
          textStyle="h1"
          color="blue.950"
          mb="42px"
          mt="80px"
          textAlign={"center"}
        >
          บริการยอดฮิตของเรา
        </Text>
        <Box w="100%">
          <Flex gap="37px" justifyContent={"center"}>
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
                src={require("../../assets/image/serviceImage/ทำความสะอาดทั่วไป.png")}
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
              <Button
                textStyle="button"
                color="blue.600"
                variant="ghost"
                px={0}
                bottom={"5px"}
                mx="24px"
              >
                เลือกบริการ
              </Button>
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
                src={require("../../assets/image/serviceImage/ล้างแอร์.png")}
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
              <Button
                textStyle="button"
                color="blue.600"
                variant="ghost"
                px={0}
                bottom={"5px"}
                mx="24px"
              >
                เลือกบริการ
              </Button>
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
                src={require("../../assets/image/serviceImage/ซ่อมเครื่องซักผ้า.png")}
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
              <Button
                textStyle="button"
                color="blue.600"
                variant="ghost"
                px={0}
                bottom={"5px"}
                mx="24px"
              >
                เลือกบริการ
              </Button>
            </Box>
          </Flex>
        </Box>
        <Flex justifyContent={"center"}>
          <Link to={"/service-list"}>
            <Button
              role="click"
              textStyle="h5"
              px="24px"
              py="10px"
              mt="70px"
              mb="175px"
              variant="primary"
            >
              ดูบริการทั้งหมด
            </Button>
          </Link>
        </Flex>
      </Container>
    </Container>
  );
};

export default RecommendServiceSection;
