import { Container, Flex, Text, Divider } from "@chakra-ui/react";

const Summary = (props) => {
  const { summary } = props;
  return (
    <Container p="0" w='100%'>
      <Flex
        bgColor="utility.white"
        border="1px solid"
        borderColor="#D8D8D8"
        borderRadius="8px"
        p="1.5rem"
        direction="column"
        w="350px"
        h="fit-content"
        position="sticky"
        top="110px"
      >
        <Text textColor="gray.700" textStyle="h3">
          สรุปรายการ
        </Text>

        {/* AddOnList */}
        <Flex pb="1rem" direction="column" mt="1rem" gap="1rem" w="18.5rem" whiteSpace="nowrap">
          {summary?.data.subServices && summary.data.subServices.map((subService, index) => {
            return (
              <Flex key={index} alignItems="center" justify="space-between" >
                <Text textColor="utility.black" fontSize="14px">
                  {subService.sub_service_name}
                </Text>
                <Text textColor="gray.900" fontWeight="300" fontSize="14px">
                  {subService.count} รายการ
                </Text>
              </Flex>
            );
          })}
        </Flex>
        {/* OrderInfomation */}
        <Flex pb="1rem" direction="column" gap="1rem" fontSize="14px">
          {summary.data.date ? (
            <>
              <Divider color='gray.300' width="301px" />
              <Flex justifyContent="space-between">
                <Text fontWeight="300px" color="gray.700" >วันที่</Text>
                <Text color="utility.black" fontWeight="400">
                  {summary.data.date}
                </Text>
              </Flex>
            </>
          ) : null}
          {summary.data.time && summary.data.time !== 'undefined' ? (
            <>
              <Flex justifyContent="space-between">
                <Text fontWeight="300px" color="gray.700" >เวลา</Text>
                <Text color="utility.black" fontWeight="400">
                  {summary.data.time} น.
                </Text>
              </Flex>
            </>
          ) : null}
          {summary.data.address.homeAddress !== "" || summary.data.address.subdistrict !== "" || summary.data.address.district !== "" || summary.data.address.province !== "" ? (<>
            <Flex justifyContent="space-between" direction="row" width="inherit" overflowWrap={"break-word"} textAlign="right">

              <Text fontWeight="300px" color="gray.700" whiteSpace="nowrap" >สถานที่</Text>
              <Text>
                {summary.data.address.homeAddress ? `${summary.data.address.homeAddress} ` : ""}
                {summary.data.address.subdistrict ? `${summary.data.address.subdistrict} ` : ""}
                {summary.data.address.district ? `${summary.data.address.district} ` : ""}
                {summary.data.address.province ? `${summary.data.address.province} ` : ""}

              </Text>
            </Flex>
          </>) : null}
        </Flex>
        {
          summary.data.additionalText ? (
            <Flex justifyContent="space-between" textAlign="right" color="utility.black" mb={"1rem"}>
              <Text fontWeight="300px" color="gray.700" whiteSpace="nowrap">หมายเหตุ</Text>
              <Text width="75%">{summary.data.additionalText}</Text>
            </Flex>
          ) : null
        }
        <Divider color='gray.300' width="301px" />
        {/* Total */}
        <Flex justifyContent="space-between" mt="1rem">
          <Text textColor="gray.700" fontSize="1rem" fontWeight="400">รวม</Text>
          <Text textColor="utility.black" fontWeight="600" fontSize="1rem">
            {summary.data.totalPrice.toLocaleString()} ฿
          </Text>
        </Flex>
      </Flex >
    </Container >
  );
};

export default Summary;
