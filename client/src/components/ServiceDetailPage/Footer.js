import { Button, Container, Flex } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
const Footer = (props) => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const {
    setPage,
    page,
    setStatus,
    summary,
    serviceList
  } = props;
  const [disable, setDisable] = useState(true);

  const validationForm = () => {
    if (page === 1) {
      if (summary.data.total_price !== 0) {
        setDisable(false)
      } else {
        setDisable(true)
      }
    }

    if (page === 2) {
      if (summary.data.date && summary.data.date !== '' && summary.data.time && summary.data.time !== '' && summary.data.time !== 'undefined' && summary.data.address.homeAddress && summary.data.address.homeAddress !== '' && summary.data.address.district && summary.data.address.district !== '' && summary.data.address.province && summary.data.address.province !== '' && summary.data.address.subdistrict && summary.data.address.subdistrict !== '') {
        setDisable(false)
      } else {
        setDisable(true)
      }
    }
    if (page === 3) {
      if (summary.data?.payment?.cardNumber && summary.data?.payment?.cardNumber.length === 16 && summary.data?.payment?.cardName && summary.data?.payment?.cardName !== '' && summary.data?.payment?.cardExp && summary.data?.payment?.cardExp.length === 4 && summary.data?.payment?.cardCVC && summary.data?.payment?.cardCVC.length === 3) {
        setDisable(false)
      } else {
        setDisable(true)
      }
    }
  }

  const handleSubmit = async (data) => {
    try {
      data.userId = user.id
      data.serviceId = serviceList.service.service_id
      await axios.post("/orders", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    validationForm()
  }, [summary])

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
            } else if (page === 3) {
              handleSubmit(summary.data)
            }
            else {
              setStatus(true);
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
