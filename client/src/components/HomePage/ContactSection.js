import React from "react";
import { Flex, Box, Text, Container, Image } from "@chakra-ui/react";
import male from "../../asset/image/homePage/male.svg";
import house from "../../asset/image/homePage/house1.svg";

const ContactSection = () => {
  return (
    <Container
      className="contact-banner"
      bg="blue.600"
      maxWidth="100%"
      h="378px"
      centerContent
    >
      <Box width="1440px">
        <Flex>
          <Image
            src={male}
            alt="male-holding-tools-box"
            height="fit-content"
            marginLeft="-1rem"
          />
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
            marginRight="-1rem"
            marginBottom="-1rem"
            sx={{ mixBlendMode: "screen" }}
          />
        </Flex>
      </Box>
    </Container>
  );
};

export default ContactSection;
