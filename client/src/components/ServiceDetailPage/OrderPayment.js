import { Button, Container, Flex, Image, Text, Center } from "@chakra-ui/react";
import creditCard from "../.././assets/image/serviceDetail/creditCard.svg";
import { Formik, Form } from "formik";
import { MyTextInput } from "../../utils/formInput";
import * as Yup from "yup";
import React from "react";

const OrderPayment = (props) => {
  const {
    setCardNumber,
    cardNumber,
    setCardName,
    cardName,
    setCardExp,
    cardExp,
    setCardCVC,
    cardCVC,
  } = props;
  
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

  const handleCardName = (e) => {
    const str = e.target.value.replace(/\s+/g, " ");
    if (str.length < 120) {
      setCardName(str);
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
        nameOnCard: cardName,
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
      <Container maxW="735px" p={0}>
        <Form>
          <Flex
            direction="column"
            bg="utility.white"
            textStyle="h5"
            textColor="gray.900"
            width="100%"
            height="fit-content"
            p="32px"
            border="1px"
            borderColor="gray.200"
            borderRadius="8px"
          >
            <Flex mb="22px">
              <Text textStyle="h3" textColor="gray.700">
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

            <Flex className="card no." flexDirection={"column"}>
              <MyTextInput
                label="หมายเลขบัตรเครดิต"
                id="cardNo"
                name="cardNo"
                placeholder="กรุณากรอกหมายเลขบัตรเครดิต"
                value={addGaps(cardNumber)}
                onChange={(e) => handleCardNumber(e)}
              />
            </Flex>

            <Flex className="name on card" flexDirection={"column"}>
              <MyTextInput
                label="ชื่อบนบัตร"
                id="nameOnCard"
                name="nameOnCard"
                placeholder="กรุณากรอกชื่อบนบัตร"
                value={cardName}
                onChange={(e) => handleCardName(e)}
              />
            </Flex>

            <Flex
              className="expired date CVC/CVV"
              flexDirection={"row"}
              justifyContent="space-between"
            >
              <Flex className="expired date" flexDirection={"column"} w="49%">
                <MyTextInput
                  label="วันหมดอายุ"
                  id="expiredDate"
                  name="expiredDate"
                  placeholder="MM/YY"
                  value={addSlash(cardExp)}
                  onChange={(e) => handleCardExp(e)}
                />
              </Flex>

              <Flex className="CVC/CVV" flexDirection={"column"} w="49%">
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
          </Flex>
        </Form>
      </Container>
    </Formik>
  );
};

export default OrderPayment;
