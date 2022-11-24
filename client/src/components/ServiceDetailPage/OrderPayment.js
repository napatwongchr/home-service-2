import { Button, Container, Flex, Image, Text, Center } from "@chakra-ui/react";
import creditCard from "../.././assets/image/serviceDetail/creditCard.svg";
import { Formik, Form } from "formik";
import { MyTextInput } from "../../utils/formInput";
import * as Yup from "yup";
import React from "react";
import { useState } from "react";

const OrderPayment = () => {
  // const [payment, setpayment] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExp, setCardExp] = useState("");
  const addGaps = (str) => {
    let v = str.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    let matches = v.match(/\d{4,16}/g);
    let match = (matches && matches[0]) || "";
    let parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return str;
    }
  };

  const handleCardNumber = (e) => {
    if (e.target.value.length < 20) {
      setCardNumber(e.target.value);
    }
  };

  const addSlash = (str) => {
    let v = str.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    let matches = v.match(/\d{2,4}/g);
    let match = (matches && matches[0]) || "";
    let parts = [];

    for (let i = 0, len = match.length; i < len; i += 2) {
      parts.push(match.substring(i, i + 2));
    }

    if (parts.length) {
      return parts.join("/");
    } else {
      return str;
    }
  };

  const handleCardExp = (e) => {
    if (e.target.value.length < 6) {
      setCardExp(e.target.value);
    }
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        cardNo: cardNumber,
        nameOnCard: "",
        expiredDate: cardExp,
        cvcCVV: "",
      }}
      validationSchema={Yup.object({
        cardNo: Yup.string()
          .min(19, "กรุณาตรวจสอบเลขบัตรเคตดิตอีกครั้ง")
          .required("กรุณากรอกหมายเลขบัตรเครดิต"),
        nameOnCard: Yup.string().required("กรุณากรอกชื่อบนบัตร"),
        expiredDate: Yup.string()
          .required("กรุณากรอก เดือน/ปี ตามลำดับ")
          .min(5, "กรุณาตรวจสอบวันหมดอายุของบัตรอีกครั้ง")
          ,
        cvcCVV: Yup.string()
          .matches(/^[0-9]{3}$/, "กรุณาตรวจสอบ CVC/CVV อีกครั้ง")
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
                  placeholder="กรุณากรอกหมายเลขบัตรเครดิต"
                  value={addGaps(cardNumber)}
                  onChange={(e) => handleCardNumber(e)}
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
                className="expired date CVC/CVV"
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
                    // type="number"
                    placeholder="MM/YY"
                    value={addSlash(cardExp)}
                    onChange={(e) => handleCardExp(e)}
                    // regex="{/\d/, /\d/, '/', /\d/, /\d/}"
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
