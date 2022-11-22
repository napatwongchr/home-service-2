import { Button, Container, Flex } from "@chakra-ui/react";
import {ChevronLeftIcon} from "chakra-ui/icons"
const Footer = () => {

  return (
    <Container
      maxW={"100vw"}
      bg={"utility.white"}
      boxShadow={"lg"}
      pos='fixed'
      bottom={0}
      centerContent
    >
      <Container maxW='1440px' px='200px' as={Flex} justifyContent='space-between'>
            <Button variant='secondary' px='40px' py='20px' leftIcon={<ChevronLeftIcon/>}>ย้อนกลับ</Button>
            <Button variant='primary' px='40px' py='20px'>ยืนยันการชำระเงิน</Button>
      </Container>
    </Container >
  );
};

export default Footer;
