import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import male from "../contact-section-svg/male.svg";
import house from "../contact-section-svg/house1.svg";
import "./contact.css";

const ContactSection = () => {
  return (
    <section className="contact-banner">
      <Box bg="blue.600" width="1440px" height="378px">
        <Flex justify="space-between">
          <img src={male} alt="male-holding-tools-box" />
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
              fontSize="20px"
              fontWeight="400"
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
              fontSize="32px"
              color="white"
              marginTop="1.5rem"
              marginLeft="7rem"
            >
              ติดต่อมาที่อีเมล: job@homeservices.co
            </Text>
          </Flex>
          <img className="house-pic" alt="house" src={house} />
        </Flex>
      </Box>
    </section>
  );
};

export default ContactSection;
