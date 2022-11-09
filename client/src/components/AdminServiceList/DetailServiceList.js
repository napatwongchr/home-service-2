import {
  Container,
  Text,
  Image,
  Flex,
  Button,
  Divider,
  Box,
} from "@chakra-ui/react";
import SideBar from "../AdminPage/SideBar";
import arrow from "../../asset/image/serviceCategory/left-arrow.svg";
import ล้างแอร์ from "../../asset/image/serviceImage/ล้างแอร์.png";
import { Link } from "react-router-dom";
import useAdminServiceLists from "../../hooks/useAdminServiceLists";
import { useEffect } from "react";

const DetailServiceList = () => {
  const { serviceList, getServiceListById, params } = useAdminServiceLists();

  useEffect(() => {
    getServiceListById(params);
  }, []);

  return (
    <Container bg="#F3F4F6" maxW="100%" height="100vh" paddingLeft="0px">
      <Flex>
        <SideBar />
        <Flex
          className="create-service-field"
          direction="column"
          alignItems={"center"}
          width="100vw"
          height="100vh"
        >
          <Flex
            className="create-service-category-bar"
            bg="white"
            borderBottom={"1px"}
            borderColor="gray.300"
            width="100%"
            height={"80px"}
            justify={"space-between"}
            alignItems="center"
          >
            <Flex
              className="left-side"
              direction="row"
              alignItems={"center"}
              marginLeft="3rem"
            >
              <Link to="/admin-dashboard/service">
                <Image src={arrow} marginRight="1.5rem" />
              </Link>

              <Flex direction={"column"}>
                <Text textStyle="b4">บริการ</Text>
                <Text
                  className="category-name"
                  textStyle="h2"
                  color="utility.black"
                >
                  ล้างแอร์
                </Text>
              </Flex>
            </Flex>
            <Flex
              className="button-group"
              justifyContent="space-between"
              width="12rem"
              marginRight="5rem"
            >
              <Link to="/admin-dashboard/category/edit">
                <Button width={"5.5rem"} onSubmit={{}}>
                  แก้ไข
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Flex
            className="edit-service-input"
            direction={"column"}
            paddingLeft={"2rem"}
            paddingTop="26px"
            paddingBottom="26px"
            alignItems={"left"}
            bg="white"
            border="1px"
            borderColor="gray.200"
            borderRadius={"8px"}
            width={"1120px"}
            height="988px"
            marginTop="4rem"
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
                ล้างแอร์
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
                บริการทั่วไป
              </Text>
            </Flex>

            <Flex direction={"row"} fontStyle={"h5"} marginBottom="40px">
              <Text color={"gray.700"} w="205px">
                รูปภาพ
              </Text>
              <Image
                w="300px"
                h="200px"
                borderRadius="8px"
                src={ล้างแอร์}
                alt="ภาพล้างแอร์"
              />
            </Flex>

            <Divider w="1056px" />

            <Box marginTop="40px" marginBottom="40px">
              <Flex direction={"column"}>
                <Text color={"gray.700"} textStyle={"h5"} marginBottom="40px">
                  รายการบริการย่อย
                </Text>
                <Flex
                  direction={"row"}
                  gap="10px"
                  alignItems={"end"}
                  color="#646C80"
                  marginBottom="32px"
                >
                  <Flex direction={"column"}>
                    <Text marginBottom="4px" w="488px">ชื่อรายการ</Text>
                    <Text textStyle="b1" color={"utility.black"}>
                      9,000 - 18,000 BTU, แบบติดผนัง
                    </Text>
                  </Flex>
                  <Flex direction={"column"}>
                    <Text marginBottom="4px" w="252px">หน่วยการบริการ</Text>
                    <Text textStyle="b1" color={"utility.black"}>
                      เครื่อง
                    </Text>
                  </Flex>
                  <Flex direction={"column"}>
                    <Text marginBottom="4px" w="240px">ค่าบริการ / 1 หน่วย</Text>
                    <Text textStyle="b1" color={"utility.black"}>
                      800.00
                    </Text>
                  </Flex>
                </Flex>

                <Flex
                  direction={"row"}
                  gap="10px"
                  alignItems={"end"}
                  color="#646C80"
                  marginBottom="32px"
                >
                  <Flex direction={"column"}>
                    <Text marginBottom="4px" w="488px">ชื่อรายการ</Text>
                    <Text textStyle="b1" color={"utility.black"}>
                      9,000 - 18,000 BTU, แบบติดผนัง
                    </Text>
                  </Flex>
                  <Flex direction={"column"}>
                    <Text marginBottom="4px" w="252px">หน่วยการบริการ</Text>
                    <Text textStyle="b1" color={"utility.black"}>
                      เครื่อง
                    </Text>
                  </Flex>
                  <Flex direction={"column"}>
                    <Text marginBottom="4px" w="240px">ค่าบริการ / 1 หน่วย</Text>
                    <Text textStyle="b1" color={"utility.black"}>
                      800.00
                    </Text>
                  </Flex>
                </Flex>

                <Flex
                  direction={"row"}
                  gap="10px"
                  alignItems={"end"}
                  color="#646C80"
                  marginBottom="32px"
                >
                  <Flex direction={"column"}>
                    <Text marginBottom="4px" w="488px">ชื่อรายการ</Text>
                    <Text textStyle="b1" color={"utility.black"}>
                      9,000 - 18,000 BTU, แบบติดผนัง
                    </Text>
                  </Flex>
                  <Flex direction={"column"}>
                    <Text marginBottom="4px" w="252px">หน่วยการบริการ</Text>
                    <Text textStyle="b1" color={"utility.black"}>
                      เครื่อง
                    </Text>
                  </Flex>
                  <Flex direction={"column"}>
                    <Text marginBottom="4px" w="240px">ค่าบริการ / 1 หน่วย</Text>
                    <Text textStyle="b1" color={"utility.black"}>
                      800.00
                    </Text>
                  </Flex>
                </Flex>

                <Flex
                  direction={"row"}
                  gap="10px"
                  alignItems={"end"}
                  color="#646C80"
                >
                  <Flex direction={"column"}>
                    <Text marginBottom="4px" w="488px">ชื่อรายการ</Text>
                    <Text textStyle="b1" color={"utility.black"}>
                      9,000 - 18,000 BTU, แบบติดผนัง
                    </Text>
                  </Flex>
                  <Flex direction={"column"}>
                    <Text marginBottom="4px" w="252px">หน่วยการบริการ</Text>
                    <Text textStyle="b1" color={"utility.black"}>
                      เครื่อง
                    </Text>
                  </Flex>
                  <Flex direction={"column"}>
                    <Text marginBottom="4px" w="240px">ค่าบริการ / 1 หน่วย</Text>
                    <Text textStyle="b1" color={"utility.black"}>
                      800.00
                    </Text>
                  </Flex>
                </Flex>

              </Flex>
            </Box>

            <Divider w="1056px" />

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
                  12/02/2022 10:30PM
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
                  12/02/2022 10:30PM
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default DetailServiceList;
