import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import priceTag from "../../assets/image/homePage/Group.svg";
import useAdminServiceLists from "../../hooks/useAdminServiceLists";
import filterCategory from "../../utils/filterCategory";
const RecommendServiceSection = () => {
  const navigate = useNavigate();
  const { getServiceLists, serviceLists } = useAdminServiceLists();
  const { handleColorButton, handleColorText } = filterCategory;
  const input = undefined
  useEffect(() => {
    getServiceLists({ input });
  }, []);

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
            {
              serviceLists.service && serviceLists.service.slice(0, 3).map((item) => {
                return (
                  <Box
                    w="349px"
                    h="369px"
                    bg="utility.white"
                    overflow="hidden"
                    border="1px"
                    borderColor="gray.300"
                    borderRadius="8px"
                    key={item.service_id}
                  >
                    <Box
                      h="200px"
                      overflow={"hidden"}
                      display="flex"
                      alignItems={"center"}
                      justifyContent="center"
                    >
                      <Image src={item.url} alt={null} h="200px" />
                    </Box>
                    <Badge
                      borderRadius="10%"
                      px="10px"
                      py="4px"
                      bg={handleColorButton(item.service_category_name)}
                      mx="24px"
                      mt="16px"
                      mb="8px"
                    >
                      <Text
                        textStyle="b4"
                        color={handleColorText(item.service_category_name)}
                      >
                        {item.service_category_name}
                      </Text>
                    </Badge>
                    <Text textStyle="h2" color="gray.950" mx="24px" mb="4px">
                      {item.service_name}
                    </Text>
                    <Flex mx="24px" mb="22px">
                      <Image src={priceTag} />
                      <Text
                        className="price"
                        textStyle="b3"
                        color="gray.700"
                        ml="8px"
                      >
                        ค่าบริการประมาณ{" "}
                        {item.min === item.max
                          ? item.min
                          : `${item.min} - ${item.max}`}{" "}
                        ฿
                      </Text>
                    </Flex>
                    <Button
                      textStyle="button"
                      color="blue.600"
                      variant="ghost"
                      px={0}
                      bottom={"5px"}
                      mx="24px"
                      onClick={() => {
                        navigate(
                          `/service/${item.service_id}`
                        );
                      }}
                    >
                      เลือกบริการ
                    </Button>
                  </Box>
                );
              })}
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
