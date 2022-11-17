import React from "react";
import { Flex, Text, Container, Image } from "@chakra-ui/react";
import male from "../../asset/image/homePage/male.svg";
import house from "../../asset/image/homePage/house1.svg";

const ContactSection = () => {
  return (
    <Container
      className="contact-banner"
      bg="blue.600"
      maxWidth="100vw"
      h="378px"
      centerContent
      px={0}
      overflow="hidden"
    >
      <Container maxW="1440px" p="0">
        <Flex w="100%">
          <Image src={male} alt="male-holding-tools-box" height="fit-content" />
          <Flex direction="column" width="100%">
            <Text
              textStyle="h1"
              fontSize="40px"
              color="white"
              marginLeft="7rem"
              marginTop="4rem"
            >
              มาร่วมเป็นพนักงานซ่อม
              <br />
              กับ HomeServices
            </Text>
            <Text
              textStyle="h3"
              color="white"
              marginTop="1.5rem"
              marginLeft="7rem"
            >
              เข้ารับการฝึกอบรมที่ได้มาตรฐาน ฟรี!
              <br />
              และยังได้รับค่าตอบแทนที่มากขึ้นกว่าเดิม
            </Text>
            <Text
              textStyle="h1"
              color="white"
              marginTop="1.5rem"
              marginLeft="7rem"
              whiteSpace="nowrap"
            >
              ติดต่อมาที่อีเมล: job@homeservices.co
            </Text>
          </Flex>
          <Image
            className="house-pic"
            alt="house"
            src={house}
            pos="relative"
            top={"5px"}
            sx={{ mixBlendMode: "screen" }}
          />
        </Flex>
      </Container>
    </Container>
  );
};

export default ContactSection;
