import React from "react";
import { Box, Text, Container, Image, Center } from "@chakra-ui/react";
import house from "../asset/image/contact-section/house1.svg";
import "./contact.css";

const Quote = () => {
  return (
    <Container
      className="contact-banner"
      bg="blue.600"
      maxWidth="100%"
      centerContent
    >
      <Box width="1440px" pos='relative' h="284px" overflow={'hidden'}>
        <Center h="284px">
          <Text textStyle={'h3'} color='utility.white' textAlign={'center'}>
            เพราะเราคือช่าง ผู้ให้บริการเรื่องบ้านอันดับ 1 แบบครบวงจร โดยทีมช่างมืออาชีพมากกว่า 100 ทีม <br />
            สามารถตอบโจทย์ด้านการบริการเรื่องบ้านของคุณ และสร้าง <br />
            ความสะดวกสบายในการติดต่อกับทีมช่าง ได้ทุกที่ ทุกเวลา ตลอด 24 ชม. <br />
            มั่นใจ ช่างไม่ทิ้งงาน พร้อมรับประกันคุณภาพงาน
          </Text>
        </Center>
        <Image
          className="house-pic"
          alt="house"
          src={house}
          w='320px'
          h='320px'
          pos='absolute'
          right={-10}
          bottom={-10}
        />

      </Box>
    </Container >
  );
};

export default Quote;
