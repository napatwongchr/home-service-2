import { useEffect, useState } from "react";
import NavComponent from "../HomePage/Nav";
import useAdminServiceLists from "../../hooks/useAdminServiceLists";
import {
  Container,
  Divider,
  Flex,
  Icon,
  Img,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import BannerService from "../ServiceList/BannerService";
import addOnListIcon from "../../assets/image/serviceDetail/addOnList.svg";
import addOnListIconSuccess from "../../assets/image/serviceDetail/addOnListSucess.svg";
import informationIcon from "../../assets/image/serviceDetail/information.svg";
import informationProcessIcon from "../../assets/image/serviceDetail/informationProcess.svg";
import informationSuccessIcon from "../../assets/image/serviceDetail/informationSuccess.svg";
import paymentIcon from "../../assets/image/serviceDetail/payment.svg";
import paymentProcessIcon from "../../assets/image/serviceDetail/paymentProcess.svg";
import AddOnList from "./AddOn";
import OrderInformation from "./OrderInformation";
import OrderPayment from "./OrderPayment";
import Footer from "./Footer";
const ServiceDetail = () => {
  const { serviceList, getServiceListById, params, loading } =
    useAdminServiceLists();
  const [subService, setSubService] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getServiceListById(params);
  }, []);
  return (
    <>
      <NavComponent />
      {serviceList.service && !loading ? (
        <Container maxW="100%" minH="calc(100vh)" p="0" bg="gray.100">
          <BannerService url={serviceList.service.url} />
          <Container maxW="1440px" px="200px" pos="relative">
            <Flex
              px="32px"
              py="20px"
              gap="10px"
              alignItems={"center"}
              mt="-130px"
              bg="utility.white"
              borderRadius="8px"
              pos="absolute"
              border="1px"
              borderColor="gray.200"
            >
              <Text textStyle={"h5"}>บริการของเรา</Text>
              <Icon as={ChevronRightIcon} />
              <Text textStyle={"h1"} color="blue.600">
                {serviceList.service.service_name}
              </Text>
            </Flex>
            <Flex
              px="32px"
              py="20px"
              gap="10px"
              w="100%"
              mt="-50px"
              justifyContent={"space-evenly"}
              alignItems={"center"}
              bg="utility.white"
              borderRadius="8px"
              border="1px"
              borderColor="gray.200"
              pos="relative"
            >
              <Flex flexDirection={"column"} gap="12px" zIndex={"2"}>
                <Img
                  src={page === 1 ? addOnListIcon : addOnListIconSuccess}
                  alt="addOnListIcon"
                  h="40px"
                />
                <Text textStyle={"h5"} color={"blue.500"}>
                  รายการ
                </Text>
              </Flex>
              <Flex flexDirection={"column"} gap="12px" zIndex={"2"}>
                <Img
                  src={
                    page === 1
                      ? informationIcon
                      : page === 2
                      ? informationProcessIcon
                      : informationSuccessIcon
                  }
                  alt="informationIcon"
                  h="40px"
                />
                <Text
                  textStyle={"h5"}
                  color={page === 1 ? "gray.300" : "blue.500"}
                >
                  กรอกข้อมูลบริการ
                </Text>
              </Flex>
              <Flex flexDirection={"column"} gap="12px" zIndex={"2"}>
                <Img
                  src={page === 3 ? paymentProcessIcon : paymentIcon}
                  alt="paymentIcon"
                  h="40px"
                />
                <Text
                  textStyle={"h5"}
                  color={page === 3 ? "blue.500" : "gray.300"}
                >
                  ชำระเงิน
                </Text>
              </Flex>
              <Flex pos="absolute" w="580px" top="40px">
                <Divider
                  w="50%"
                  borderColor={page === 1 ? "gray.300" : "blue.500"}
                />
                <Divider
                  w="50%"
                  borderColor={page === 3 ? "blue.500" : "gray.300"}
                />
              </Flex>
            </Flex>
          </Container>
          {page === 1 ? (
            <AddOnList
              subService={subService}
              setSubService={setSubService}
              serviceList={serviceList}
            />
          ) : page === 2 ? (
            <OrderInformation />
          ) : page === 3 ? (
            <OrderPayment/>
          ) : null}

          <Footer setPage={setPage} page={page}>
            ดำเนินการต่อ
          </Footer>
        </Container>
      ) : (
        <Container
          maxW="100%"
          minH="calc(100vh - 97px)"
          p="40px"
          bg="gray.100"
          display="flex"
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Container>
      )}
    </>
  );
};

export default ServiceDetail;
