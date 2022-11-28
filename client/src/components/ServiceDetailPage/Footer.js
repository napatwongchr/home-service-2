import { Button, Container, Flex } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
const Footer = (props) => {
  const {
    setPage,
    page,
    subService,
    pickDate,
    pickTime,
    homeAddress,
    summaryAddress,
    cardNumber,
    cardName,
    cardExp,
    cardCVC,
    setStatus,
  } = props;
  const [disable, setDisable] = useState(true);
  useEffect(() => {
    // if (page === 3 && cardNumber && cardName && cardExp && cardCVC) {
    //   setDisable(false);
    // } else {
    //   setDisable(true);
    // }
    subService.map((item) => {
      if (page === 2 && pickDate && pickTime && homeAddress && summaryAddress) {
        if (
          summaryAddress.district === "" ||
          summaryAddress.province === "" ||
          summaryAddress.subdistrict === ""
        ) {
          setDisable(true);
        } else {
          setDisable(false);
        }
      } else if (page === 1 && item.count !== 0) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    });
  }, [
    subService,
    pickDate,
    pickTime,
    homeAddress,
    summaryAddress,
    cardNumber,
    cardName,
    cardExp,
    cardCVC,
  ]);

  const jsonData = {
    // userId :  user id (number),
    // serviceId : service id (number),
    appointmentDate: pickDate,
    appointmentTime: pickTime,
    address: homeAddress + summaryAddress,
    totalPrice: subService.sub_total_price,
    subService: [
      {
        sub_service_id: subService.sub_service_id,
        // quantity : quantity (number),
        sub_total_price:
          subService.length > 1
            ? subService.reduce((acc, cur) => {
                return acc + cur.sub_total_price;
              }, 0)
            : subService.map((subService) => subService.sub_total_price),
      },
      {},
    ],
  };

  console.log(jsonData);
  const handleSubmit = async (jsonData) => {
    try {
      await axios.post("/orders", JSON.stringify(jsonData));
    } catch (error) {
      console.log(error);
    }
  };

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
          disabled={disable ? true : false}
          px="40px"
          py="20px"
          rightIcon={<ChevronRightIcon />}
          onClick={() => {
            if (page < 3) {
              setPage(page + 1);
              setDisable(true);
            } else {
              setStatus(true);
            }
          }}
          onSubmit={handleSubmit}
        >
          {props.children}
        </Button>
      </Container>
    </Container>
  );
};

export default Footer;
