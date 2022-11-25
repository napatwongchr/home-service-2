import { Button, Container, Flex } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
const Footer = (props) => {
  const {
    setPage,
    page,
    subService,
    pickDate,
    pickTime,
    homeAddress,
    summaryAddress,
    setStatus
  } = props;
  const [disable, setDisable] = useState(true);
  useEffect(() => {
    subService.map((item) => {
      if (
        item.count !== 0 &&
        pickDate &&
        pickTime &&
        homeAddress &&
        summaryAddress
      ) {
        if (
          summaryAddress.district === "" ||
          summaryAddress.province === "" ||
          summaryAddress.subdistrict === ""
        ) {
          setDisable(true);
        } else {
          setDisable(false);
        }
      } else if (item.count !== 0) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    });
  }, [subService, pickDate, pickTime, homeAddress, summaryAddress]);

  return (
    <Container
      maxW={"100vw"}
      bg={"utility.white"}
      boxShadow={"lg"}
      pos="fixed"
      bottom={0}
      centerContent
      borderTop="1px"
      borderColor="gray.300"
      zIndex={1}
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
          variant={"primary"}
          // disabled={disable ? true : false}
          px="40px"
          py="20px"
          rightIcon={<ChevronRightIcon />}
          onClick={() => {
            if (page < 3) {
              setPage(page + 1);
              setDisable(true);
            }else{
              setStatus(true)
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
