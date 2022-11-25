import { useEffect, useState } from "react";
import NavComponent from "../HomePage/Nav";
import useAdminServiceLists from "../../hooks/useAdminServiceLists";
import {
  Button,
  Container,
  Divider,
  Flex,
  Icon,
  Img,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon, CheckCircleIcon } from "@chakra-ui/icons";
import BannerService from "../ServiceList/BannerService";
import addOnListIcon from "../../assets/image/serviceDetail/addOnList.svg";
import addOnListIconSuccess from "../../assets/image/serviceDetail/addOnListSucess.svg";
import informationIcon from "../../assets/image/serviceDetail/information.svg";
import informationProcessIcon from "../../assets/image/serviceDetail/informationProcess.svg";
import informationSuccessIcon from "../../assets/image/serviceDetail/informationSuccess.svg";
import paymentIcon from "../../assets/image/serviceDetail/payment.svg";
import paymentProcessIcon from "../../assets/image/serviceDetail/paymentProcess.svg";
import AddOnList from "./AddOn";
import Summary from "./Summary";
import OrderInformation from "./OrderInformation";
import {
  ThailandAddressTypeahead,
  ThailandAddressValue,
} from "react-thailand-address-typeahead";
import OrderPayment from "./OrderPayment";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
const ServiceDetail = () => {
  const { serviceList, getServiceListById, params, loading } =
    useAdminServiceLists();
  const [subService, setSubService] = useState([]);
  const [page, setPage] = useState(1);
  const [pickDate, setPickDate] = useState(null);
  const [pickTime, setPickTime] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExp, setCardExp] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [status, setStatus] = useState(false);

  // value of address - home address คือช่องที่อยู่ / address ที่ได้มาจะเป็น object มี 4 keys (district, postalCode, province, subdistrict)
  const [homeAddress, setHomeAddress] = useState("");

  // value of additional text
  const [additionalText, setAdditionalText] = useState("");
  const [summaryAddress, setSummaryAddress] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    getServiceListById(params);
  }, []);
  return (
    <>
      <NavComponent />

      {status ? (
        <Container
          maxW={"100%"}
          minH="calc(100vh - 80px)"
          bg="gray.100"
          py={"52px"}
          centerContent
        >
          <Flex
            flexDirection={"column"}
            w={614}
            h={"100%"}
            bg="utility.white"
            borderRadius={"8px"}
            py="50px"
            px="60px"
            justify="center"
            alignItems={"center"}
            gap="20px"
          >
            <CheckCircleIcon boxSize={"64px"} color="green.900" />
            <Text textStyle={"h1"} color="gray.950">
              ชำระเงินเรียบร้อย !
            </Text>
            <Flex
              pb="1rem"
              direction="column"
              mt="1rem"
              gap="1rem"
              whiteSpace="nowrap"
              w="100%"
            >
              {subService.map((subService, index) => {
                return (
                  <Flex
                    key={index}
                    alignItems="center"
                    justify="space-between"
                    fontSize="14px"
                    textColor="utility.black"
                    fontWeight={'500'}
                  >
                    <Text>{subService.sub_service_name}</Text>
                    <Text>{subService.count} รายการ</Text>
                  </Flex>
                );
              })}
            </Flex>
            <Divider color="gray.200" />
            <Flex
              justifyContent="space-between"
              w="100%"
              fontSize="14px"
              textColor="utility.black"
            >
              <Text fontWeight="300px" color="gray.700">
                วันที่
              </Text>
              <Text color="utility.black" fontWeight="500">
                {pickDate
                  ? pickDate.$d.toLocaleDateString("th-TH", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  : ""}
              </Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              w="100%"
              fontSize="14px"
              textColor="utility.black"
            >
              <Text fontWeight="300px" color="gray.700">
                เวลา
              </Text>
              <Text color="utility.black" fontWeight="500">
                {pickTime
                  ? `${pickTime.$d.toLocaleTimeString("th", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })} น.`
                  : ""}
              </Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              direction="column"
              w="100%"
              fontSize="14px"
              textColor="utility.black"
              overflowWrap={"break-word"}
            >
              <Flex
                direction="row"
                textAlign="right"
                color="utility.black"
                fontWeight="500"
                gap="1rem"
                justifyContent={'space-between'}
              >
                <Text fontWeight="300px" color="gray.700" whiteSpace="nowrap">
                  สถานที่
                </Text>
                <Text>
                  {homeAddress ? `${homeAddress} ` : ""}
                  {summaryAddress
                    ? `${summaryAddress.subdistrict} ${summaryAddress.district} ${summaryAddress.province}`
                    : ""}
                </Text>
              </Flex>
              {additionalText ? (
                <Flex
                  justifyContent="space-between"
                  mt="0.5rem"
                  textAlign="right"
                  color="utility.black"
                >
                  <Text fontWeight="300px" color="gray.700" whiteSpace="nowrap">
                    หมายเหตุ
                  </Text>
                  <Text width="75%">{additionalText}</Text>
                </Flex>
              ) : null}
            </Flex>
            <Divider color="gray.300" mt="10px" />
            {/* Total */}
            <Flex justifyContent="space-between" mt="1rem" w="100%">
              <Text textColor="gray.700" fontSize="1rem" fontWeight="500">
                รวม
              </Text>
              <Text textColor="utility.black" fontWeight="600" fontSize="1rem">
                {subService.length > 1
                  ? subService.reduce((acc, cur) => {
                      return acc + cur.sub_total_price;
                    }, 0)
                  : subService.map(
                      (subService) => subService.sub_total_price
                    )}{" "}
                ฿
              </Text>
            </Flex>
            <Button w='100%' mt='10px'>เช็ครายการซ่อม</Button>
          </Flex>
        </Container>
      ) : serviceList.service && !loading ? (
        <Container maxW="100%" minH="calc(100vh - 90px)" p="0" bg="gray.100">
          <BannerService url={serviceList.service.url} />
          <Container maxW="1440px" px="160px" pos="relative">
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
              <Text
                textStyle={"h5"}
                cursor="pointer"
                onClick={() => {
                  navigate(`/service-list`);
                }}
              >
                บริการของเรา
              </Text>
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
              borderColor="gray.300"
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
          <Container maxW="1440px" px="160px" my="32px">
            <Flex gap="35px" h="100%" mt='20px'>
              {page === 1 ? (
                <>
                  <AddOnList
                    subService={subService}
                    setSubService={setSubService}
                    serviceList={serviceList}
                  />

                  <Summary subService={subService} />
                </>
              ) : page === 2 ? (
                <>
                  <OrderInformation
                    pickDate={pickDate}
                    setPickDate={setPickDate}
                    pickTime={pickTime}
                    setPickTime={setPickTime}
                    summaryAddress={summaryAddress}
                    setSummaryAddress={setSummaryAddress}
                    setHomeAddress={setHomeAddress}
                    additionalText={additionalText}
                    setAdditionalText={setAdditionalText}
                    ThailandAddressTypeahead={ThailandAddressTypeahead}
                    ThailandAddressValue={ThailandAddressValue}
                  />
                  <Summary
                    subService={subService}
                    pickDate={pickDate}
                    pickTime={pickTime}
                    homeAddress={homeAddress}
                    summaryAddress={summaryAddress}
                    additionalText={additionalText}
                  />
                </>
              ) : page === 3 ? (
                <>
                  <OrderPayment
                    setCardNumber={setCardNumber}
                    cardNumber={cardNumber}
                    setCardName={setCardName}
                    cardName={cardName}
                    setCardExp={setCardExp}
                    cardExp={cardExp}
                    setCardCVC={setCardCVC}
                    cardCVC={cardCVC}
                  />
                  <Summary
                    subService={subService}
                    pickDate={pickDate}
                    pickTime={pickTime}
                    homeAddress={homeAddress}
                    summaryAddress={summaryAddress}
                    additionalText={additionalText}
                  />
                </>
              ) : null}
            </Flex>
          </Container>

          <Footer
            setPage={setPage}
            page={page}
            subService={subService}
            pickDate={pickDate}
            pickTime={pickTime}
            homeAddress={homeAddress}
            summaryAddress={summaryAddress}
            setStatus={setStatus}
          >
            {page === 3 ? "ยืนยันการชำระเงิน" : "ดำเนินการต่อ"}
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
