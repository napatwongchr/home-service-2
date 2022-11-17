import React from "react";
import { Box, Text, Container, Image } from "@chakra-ui/react";
import house from "../../asset/image/homePage/house1.svg";

const Quote = () => {
  return (
    <Container
      className="contact-banner"
      bg="blue.600"
      maxWidth="100vw"
      pos='relative'
      centerContent
    >
      <Container maxW='1440px'>
        <Box width="100%" display={'flex'} justifyContent='center' alignItems={'center'} h="284px">
          <Text textStyle={'h3'} color='utility.white' textAlign={'center'} w='810px' lineHeight={'45px'}>
            เพราะเราคือช่าง ผู้ให้บริการเรื่องบ้านอันดับ 1 แบบครบวงจร โดยทีมช่างมืออาชีพมากกว่า 100 ทีม <br />
            สามารถตอบโจทย์ด้านการบริการเรื่องบ้านของคุณ และสร้าง <br />
            ความสะดวกสบายในการติดต่อกับทีมช่าง ได้ทุกที่ ทุกเวลา ตลอด 24 ชม. <br />
            มั่นใจ ช่างไม่ทิ้งงาน พร้อมรับประกันคุณภาพงาน
          </Text>
          <Image
            className="house-pic"
            alt="house"
            src={house}
            w='320px'
            h='320px'
            pos='absolute'
            right={0}
            bottom={0}
            sx={{ mixBlendMode: "screen" }}
          />
        </Box>
      </Container>
    </Container >
  );
};

export default Quote;
