import {
  Box,
  Container,
  Divider,
  Flex,
  Icon,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import calender from "../../assets/image/orderHistoryPage/calender.svg";
import profile from "../../assets/image/orderHistoryPage/profile.svg";
import axios from "../../api/axios";

const HistoryLists = () => {
  const [orderLists, setOrderLists] = useState([]);
  const params = useParams();

  const getOrderLists = async (params) => {
    try {
      let results = await axios.get(`/orders?userId=${params}`);
      setOrderLists(results.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  // getOrderLists();
  useEffect(() => {
    getOrderLists(params.userId);
  }, []);

  return (
    <Container
      className="recommendService"
      maxW="100vw"
      bg="gray.100"
      centerContent
    >
      <Container maxW="1440px" px="160px" minH="calc(100vh - 272px)">
        <Box
          w="100%"
          as={Flex}
          gap="30px"
          h="100%"
          justifyContent={"space-between"}
        >
          <Box my="30px" w="250px">
            <Flex
              flexDirection={"column"}
              bg="utility.white"
              p="24px"
              w="100%"
              gap="15px"
              border="1px"
              borderColor={"gray.300"}
              borderRadius="8px"
              pos="sticky"
              top="110px"
            >
              <Text textStyle={"h3"} color="gray.700">
                บัญชีผู้ใช้
              </Text>
              <Divider />
              <Flex gap={"10px"} color="gray.950" alignItems={"center"}>
                <Icon viewBox="0 0 12 13" fill="none">
                  <path
                    d="M4.00016 1.83333H2.66683C2.31321 1.83333 1.97407 1.97381 1.72402 2.22386C1.47397 2.47391 1.3335 2.81304 1.3335 3.16667V11.1667C1.3335 11.5203 1.47397 11.8594 1.72402 12.1095C1.97407 12.3595 2.31321 12.5 2.66683 12.5H9.3335C9.68712 12.5 10.0263 12.3595 10.2763 12.1095C10.5264 11.8594 10.6668 11.5203 10.6668 11.1667V3.16667C10.6668 2.81304 10.5264 2.47391 10.2763 2.22386C10.0263 1.97381 9.68712 1.83333 9.3335 1.83333H8.00016M4.00016 1.83333C4.00016 2.18696 4.14064 2.52609 4.39069 2.77614C4.64074 3.02619 4.97987 3.16667 5.3335 3.16667H6.66683C7.02045 3.16667 7.35959 3.02619 7.60964 2.77614C7.85969 2.52609 8.00016 2.18696 8.00016 1.83333M4.00016 1.83333C4.00016 1.47971 4.14064 1.14057 4.39069 0.890524C4.64074 0.640476 4.97987 0.5 5.3335 0.5H6.66683C7.02045 0.5 7.35959 0.640476 7.60964 0.890524C7.85969 1.14057 8.00016 1.47971 8.00016 1.83333M6.00016 6.5H8.00016M6.00016 9.16667H8.00016M4.00016 6.5H4.00683M4.00016 9.16667H4.00683"
                    stroke="#1852D6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Icon>
                <Text textStyle={"b1"} color="blue.700">
                  รายการคำสั่งซ่อม
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Box my="30px" w="830px" as={Flex} flexDirection="column" gap="20px">
            {orderLists &&
              orderLists.map((item, index) => {
                return (
                  <Flex
                    bg="utility.white"
                    p="24px"
                    w="100%"
                    border="1px"
                    borderColor={"gray.300"}
                    borderRadius="8px"
                    justifyContent="space-between"
                    key={index}
                  >
                    <Flex flexDirection={"column"} gap="15px">
                      <Text textStyle={"h2"} color="utility.black">
                        คำสั่งการซ่อมรหัส : {item.order_code}
                      </Text>
                      <Flex gap={"10px"} color="gray.700" alignItems={"center"}>
                        <Image src={calender} alt="calender" />
                        <Text textStyle={"b3"}>
                          วันเวลาดำเนินการ: {item.appointment_date} เวลา{" "}
                          {item.appointment_time} น.
                        </Text>
                      </Flex>
                      <Flex gap={"10px"} color="gray.700" alignItems={"center"}>
                        <Image src={profile} alt="prifle" />
                        <Text textStyle={"b3"}>พนักงาน: {item.engineer}</Text>
                      </Flex>
                      <Text textStyle={"b1"} color="gray.700">
                        รายการ:
                      </Text>
                      <UnorderedList
                        color="utility.black"
                        textStyle={"b3"}
                        mt="-10px"
                        spacing={"5px"}
                      >
                        {item.subOrder.map((item, index) => {
                          return (
                            <ListItem key={index}>
                              {item.sub_service_name}
                            </ListItem>
                          );
                        })}
                      </UnorderedList>
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      h="100%"
                      gap="20px"
                      pos="relative"
                      top="-60px"
                    >
                      <Text textStyle={"b3"}>ราคารวม:</Text>
                      <Text textStyle={"h2"} color="gray.950">
                        {item.total_price.toLocaleString()} ฿
                      </Text>
                    </Flex>
                  </Flex>
                );
              })}
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default HistoryLists;
