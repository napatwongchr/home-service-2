import {
  Container,
  Text,
  Image,
  Flex,
  Button,
  Divider,
  Box,
  Spinner,
} from "@chakra-ui/react";
import arrow from "../../../assets/image/serviceCategory/left-arrow.svg";
import { Link } from "react-router-dom";
import useAdminServiceLists from "../../../hooks/useAdminServiceLists";
import { useEffect, useState } from "react";

const DetailServiceList = () => {
  const [serviceId, setServiceId] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [serviceCategory, setServiceCategory] = useState("");
  const [serviceImage, setServiceImage] = useState("");
  const [subServiceArr, setSubServiceArr] = useState([]);
  const [serviceCreateAt, setServiceCreateAt] = useState("");
  const [serviceUpdateAt, setServiceUpdateAt] = useState("");
  const { serviceList, getServiceListById, params, loading } =
    useAdminServiceLists();

  useEffect(() => {
    getServiceListById(params);
  }, []);

  useEffect(() => {
    if (serviceList.service) {
      setServiceId(serviceList.service.service_id);
      setServiceName(serviceList.service.service_name);
      setServiceCategory(serviceList.service.service_category_name);
      setServiceImage(serviceList.service.url);
      setSubServiceArr(serviceList.subService);
      setServiceCreateAt(serviceList.service.created_at);
      setServiceUpdateAt(serviceList.service.updated_at);
    }
  }, [serviceList]);

  return (
    <Container
      bg="#F3F4F6"
      maxW="100%"
      height={"100vh"}
      padding="0"
      overflow={"scroll"}
    >
      <Flex
        className="create-service-field"
        direction="column"
        alignItems={"start"}
      >
        <Flex
          className="create-service-bar"
          bg="white"
          borderBottom={"1px"}
          borderColor="gray.300"
          width="100%"
          height={"80px"}
          justify={"space-between"}
          padding="2rem"
          alignItems="center"
        >
          <Flex
            className="left-side"
            direction="row"
            alignItems={"center"}
            // marginLeft="3rem"
          >
            <Link to="/admin-dashboard/services">
              <Image src={arrow} marginRight="1.5rem" />
            </Link>

            <Flex direction={"column"}>
              <Text textStyle="b4">บริการ</Text>
              <Text
                className="category-name"
                textStyle="h2"
                color="utility.black"
              >
                {serviceName}
              </Text>
            </Flex>
          </Flex>
          <Flex
            className="button-group"
            justifyContent="space-between"
            // width="12rem"
            // marginRight="5rem"
          >
            <Link to={`/admin-dashboard/service/edit/${serviceId}`}>
              <Button width={"5.5rem"}>แก้ไข</Button>
            </Link>
          </Flex>
        </Flex>
        {serviceList.service && !loading ? (
          <Box w="100%" h="100%" px="40px">
            <Flex
              className="edit-service-input"
              direction={"column"}
              paddingLeft="2rem"
              justify="center"
              bg="white"
              border="1px"
              borderColor="gray.200"
              borderRadius="8px"
              width="100%"
              height="fit-content"
              padding="3rem 2rem 3rem 2rem"
              marginY="40px"
            >
              <Flex direction={"row"} fontStyle={"h5"} marginBottom="32px">
                <Text color={"gray.700"} w="205px">
                  ชื่อบริการ
                </Text>
                <Text
                  className="category-name"
                  textStyle="b1"
                  color={"utility.black"}
                >
                  {serviceName}
                </Text>
              </Flex>

              <Flex direction={"row"} fontStyle={"h5"} marginBottom="50px">
                <Text color={"gray.700"} w="205px">
                  หมวดหมู่
                </Text>
                <Text
                  className="category-name"
                  textStyle="b1"
                  color={"utility.black"}
                >
                  {serviceCategory}
                </Text>
              </Flex>

              <Flex direction={"row"} fontStyle={"h5"} marginBottom="40px">
                <Text color={"gray.700"} w="205px">
                  รูปภาพ
                </Text>
                <Image src={serviceImage} maxW="440px" />
              </Flex>

              <Divider w="100%" />

              <Box marginTop="40px">
                <Flex direction={"column"}>
                  <Text color={"gray.700"} textStyle={"h5"} marginBottom="40px">
                    รายการบริการย่อย
                  </Text>
                  {subServiceArr.map((item, index) => {
                    return (
                      <Flex
                        direction={"row"}
                        gap="10px"
                        alignItems={"end"}
                        color="#646C80"
                        marginBottom="32px"
                        key={index}
                      >
                        <Flex direction={"column"}>
                          <Text marginBottom="4px" w="488px">
                            ชื่อรายการ
                          </Text>
                          <Text textStyle="b1" color={"utility.black"}>
                            {item.sub_service_name}
                          </Text>
                        </Flex>
                        <Flex direction={"column"}>
                          <Text marginBottom="4px" w="252px">
                            หน่วยการบริการ
                          </Text>
                          <Text textStyle="b1" color={"utility.black"}>
                            {item.unit_name}
                          </Text>
                        </Flex>
                        <Flex direction={"column"}>
                          <Text marginBottom="4px" w="240px">
                            ค่าบริการ / 1 หน่วย
                          </Text>
                          <Text textStyle="b1" color={"utility.black"}>
                            {item.price_per_unit.toLocaleString()}
                          </Text>
                        </Flex>
                      </Flex>
                    );
                  })}
                </Flex>
              </Box>

              <Divider w="1356px" />

              <Box className="info" marginTop="3rem">
                <Flex className="created-info" marginBottom={"2rem"}>
                  <Text
                    textStyle="h5"
                    marginRight="5rem"
                    width={"5rem"}
                    color={"gray.700"}
                  >
                    สร้างเมื่อ
                  </Text>
                  <Text
                    className="created-at"
                    textStyle="b1"
                    color={"utility.black"}
                  >
                    {serviceCreateAt}
                  </Text>
                </Flex>
                <Flex className="edited-info">
                  <Text
                    textStyle="h5"
                    marginRight="5rem"
                    width={"5rem"}
                    color={"gray.700"}
                  >
                    แก้ไขล่าสุด
                  </Text>
                  <Text
                    className="edited-at"
                    textStyle="b1"
                    color={"utility.black"}
                  >
                    {serviceUpdateAt}
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        ) : (
          <Container
            maxW="100%"
            minH="calc(100vh - 97px)"
            p="40px"
            bg="gray.100"
            display="flex"
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Container>
        )}
      </Flex>
    </Container>
  );
};

export default DetailServiceList;
