import { Button, Container, Flex, Image, Text, Center } from "@chakra-ui/react";
import creditCard from "../.././assets/image/serviceDetail/creditCard.svg";
import { Formik, Form } from "formik";
import { MyTextInput } from "../../utils/formInput";
import * as Yup from "yup";
// import { useState } from "react";

const OrderPayment = () => {
  // const [payment, setpayment] = useState("");
  return (
    <Formik
      initialValues={{
        cardNo: "",
        nameOnCard: "",
        expiredDate: "",
        cvcCVV: "",
      }}
      validationSchema={Yup.object({
        cardNo: Yup.string()
          .max(12, "เลขบัตรเครดิตต้องมีความยาวไม่เกิน 12 ตัว")
          .matches(/^[0-9]{12}$/, "กรุณากรอกหมายเลขบัตรเครดิต")
          .required("กรุณากรอกหมายเลขบัตรเครดิต"),

        nameOnCard: Yup.string().required("กรุณากรอกชื่อบนบัตร"),

        expiredDate: Yup.string()
          .max(4, "เลข เดือน/ปี ต้องมีความยาวไม่เกิน 4 ตัว")
          .matches(/^[0-9]{4}$/, "กรุณากรอก เดือน/ปี ตามลำดับ")
          .required("กรุณากรอก เดือน/ปี ตามลำดับ"),

        cvcCVV: Yup.string()
          .max(3, "เลข CVC/CVV ต้องมีความยาวไม่เกิน 3 ตัว")
          .matches(/^[0-9]{3}$/, "กรุณากรอก CVC/CVV ค่ะ")
          .required("กรุณากรอก CVC/CVV ค่ะ"),
      })}
    >
      <Container
        className="payment box"
        maxW="100%"
        minH="calc(100vh)"
        pt="45px"
        px="0"
        bg="gray.100"
      >
        <Container
          maxW="100%"
          minH="calc(100vh)"
          display={"flex"}
          flexDirection={"row"}
          px="0"
          justifyContent={"center"}
          // alignItems={"center"}
        >
          <Form>
            <Flex
              // maxW="100%"
              w="735px"
              // minH="calc(100vh)"
              h="598px"
              // p="40px"
              bg="utility.white"
              display="flex"
              flexDirection={"column"}
              borderRadius="8px"
              border="1px"
              color="gray.300"
              pt="24px"
              px="24px"
              // justifyContent={"center"}
              // alignItems={"center"}
            >
              <Flex mb="22px">
                <Text
                  //   fontStyle={"h3"}
                  fontWeight="400"
                  fontSize={"20px"}
                  lineHeight="30px"
                  textAlign={"center"}
                  textColor={"gray.700"}
                >
                  ชำระเงิน
                </Text>
              </Flex>

              <Center className="payment type" mb={"20px"}>
                <Button
                  w="686px"
                  h="86px"
                  bg="blue.100"
                  border="1px"
                  color="blue.600"
                >
                  <Center flexDirection={"column"}>
                    <Image src={creditCard} w="29.17px" h="23.33px" mb="9.83" />
                    <Text
                      w="67px"
                      h="21px"
                      fontWeight="600"
                      fontSize={"14px"}
                      lineHeight="21.17px"
                    >
                      บัตรเครดิต
                    </Text>
                  </Center>
                </Button>
              </Center>

              <Flex className="card no." flexDirection={"column"} w={"686px"}>
                <MyTextInput
                  label="หมายเลขบัตรเครดิต"
                  id="cardNo"
                  name="cardNo"
                  type="number"
                  placeholder="กรุณากรอกหมายเลขบัตรเครดิต"
                />
              </Flex>

              <Flex
                className="name on card"
                flexDirection={"column"}
                w={"686px"}
              >
                <MyTextInput
                  label="ชื่อบนบัตร"
                  id="nameOnCard"
                  name="nameOnCard"
                  type="text"
                  placeholder="กรุณากรอกชื่อบนบัตร"
                />
              </Flex>

              <Flex
                className="expired date & CVC/CVV"
                flexDirection={"row"}
                mb={"20px"}
              >
                <Flex
                  className="expired date"
                  flexDirection={"column"}
                  mr="24px"
                  w="331px"
                >
                  <MyTextInput
                    label="ชื่อบนบัตร"
                    id="expiredDate"
                    name="expiredDate"
                    type="number"
                    placeholder="MM/YY"
                  />
                </Flex>

                <Flex className="CVC/CVV" flexDirection={"column"} w="331px">
                  <MyTextInput
                    label="รหัส CVC / CVV"
                    id="cvcCVV"
                    name="cvcCVV"
                    type="password"
                    placeholder="xxx"
                  />
                </Flex>
              </Flex>

              <hr w="735px" />
            </Flex>
          </Form>
        </Container>
      </Container>
    </Formik>
  );
};

export default OrderPayment;
