import { Button, Container, Flex, Image, Text, Center } from "@chakra-ui/react";
import creditCard from "../.././assets/image/serviceDetail/creditCard.svg";
import { Formik, Form } from "formik";
import { MyTextInput } from "../../utils/formInput";
import * as Yup from "yup";
import React from "react";
import { useState } from "react";

const OrderPayment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardExp, setCardExp] = useState("");
  const [cardCVC, setCardCVC] = useState("");
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
    const str = e.target.value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (str.length < 17) {
      setCardNumber(str);
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
    const str = e.target.value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (str.length < 5) {
      setCardExp(str);
    }
  };

  const handleCardCVC = (e) => {
    const str = e.target.value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (str.length < 4) {
      setCardCVC(str);
    }
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        cardNo: cardNumber,
        nameOnCard: "",
        expiredDate: cardExp,
        cvcCVV: cardCVC,
      }}
      validationSchema={Yup.object({
        cardNo: Yup.string()
          .min(16, "กรุณาตรวจสอบเลขบัตรเคตดิตอีกครั้ง")
          .required("กรุณากรอกหมายเลขบัตรเครดิต"),
        nameOnCard: Yup.string().required("กรุณากรอกชื่อบนบัตร"),

        expiredDate: Yup.string()
          .required("กรุณากรอก เดือน/ปี ตามลำดับ")
          .min(4, "กรุณาตรวจสอบวันหมดอายุของบัตรอีกครั้ง"),
        cvcCVV: Yup.string()
          .min(3, "กรุณาตรวจสอบเลข CVC/CVV อีกครั้ง")
          .required("กรุณากรอก CVC/CVV อีกครัง"),
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
        >
          <Form>
            <Flex
              w="735px"
              h="598px"
              bg="utility.white"
              display="flex"
              flexDirection={"column"}
              borderRadius="8px"
              border="1px"
              color="gray.300"
              pt="24px"
              px="24px"
            >
              <Flex mb="22px">
                <Text
                  textStyles={"h3"}
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
                    label="วันหมดอายุ"
                    id="expiredDate"
                    name="expiredDate"
                    placeholder="MM/YY"
                    value={addSlash(cardExp)}
                    onChange={(e) => handleCardExp(e)}
                  />
                </Flex>

                <Flex className="CVC/CVV" flexDirection={"column"} w="331px">
                  <MyTextInput
                    label="รหัส CVC / CVV"
                    id="cvcCVV"
                    name="cvcCVV"
                    type="password"
                    placeholder="xxx"
                    value={cardCVC}
                    onChange={(e) => handleCardCVC(e)}
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
