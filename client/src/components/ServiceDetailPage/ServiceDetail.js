import { useEffect, useState } from "react";
import NavComponent from "../HomePage/Nav";
import useAdminServiceLists from "../../hooks/useAdminServiceLists";
import { Container, Divider, Flex, Icon, Img, Spinner, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import BannerService from "../ServiceList/BannerService";
import addOnListIcon from "../../assets/image/serviceDetail/addOnList.svg";
import informationIcon from "../../assets/image/serviceDetail/information.svg";
import paymentIcon from "../../assets/image/serviceDetail/payment.svg";
import AddOnList from "./AddOn";

const ServiceDetail = () => {
  const { serviceList, getServiceListById, params, loading } =
    useAdminServiceLists();

    let [ subService, setSubService ] = useState([])


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
              pos='relative'
            >
              <Flex flexDirection={"column"} gap="12px" zIndex={'2'}>
                <Img src={addOnListIcon} alt="addOnListIcon" h="40px" />
                <Text textStyle={"h5"}>รายการ</Text>
              </Flex>
              <Flex flexDirection={"column"} gap="12px" zIndex={'2'}>
                <Img src={informationIcon} alt="informationIcon" h="40px" />
                <Text textStyle={"h5"}>กรอกข้อมูลบริการ</Text>
              </Flex>
              <Flex flexDirection={"column"} gap="12px" zIndex={'2'}>
                <Img src={paymentIcon} alt="paymentIcon" h="40px" />
                <Text textStyle={"h5"}>ชำระเงิน</Text>
              </Flex>
              <Flex pos='absolute' w='580px' top='40px'>
            <Divider  w='50%'/>
            <Divider  w='50%'/>
              </Flex>
            </Flex>
            <AddOnList subService={subService} setSubService={setSubService} serviceList={serviceList}/>
          </Container>
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
