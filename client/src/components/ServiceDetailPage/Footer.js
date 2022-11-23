import { Button, Container, Flex } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
const Footer = (props) => {
  const { setPage, page } = props;
  return (
    <Container
      maxW={"100vw"}
      bg={"utility.white"}
      boxShadow={"lg"}
      pos="fixed"
      bottom={0}
      centerContent
    >
      <Container
        maxW="1440px"
        px="200px"
        py="24px"
        as={Flex}
        justifyContent="space-between"
      >
        <Button
          variant="secondary"
          px="40px"
          py="20px"
          leftIcon={<ChevronLeftIcon />}
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          ย้อนกลับ
        </Button>
        <Button
          variant="primary"
          px="40px"
          py="20px"
          rightIcon={<ChevronRightIcon />}
          onClick={() => {
            if (page < 3) {
              setPage(page + 1);
            }
          }}
        >
          {props.children}
        </Button>
      </Container>
    </Container>
  );
};

export default Footer;
