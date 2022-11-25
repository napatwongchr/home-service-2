import { Container, Flex, Text, Divider } from "@chakra-ui/react";

const Summary = (props) => {
  const { subService, pickDate, pickTime, homeAddress, summaryAddress, additionalText } = props;

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
          {subService.map((subService, index) => {
            return (
              <Flex key={index} gap="2rem" alignItems="center" justify="space-between" >
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
          {pickDate ? (
            <>
              <Divider color='gray.300' width="301px" />
              <Flex justifyContent="space-between">
                <Text fontWeight="300px" color="gray.700" >วันที่</Text>
                <Text color="utility.black" fontWeight="400">
                  {pickDate
                    ? pickDate.$d.toLocaleDateString("th-TH", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                    : ""}
                </Text>
              </Flex>
            </>
          ) : null}
          {pickTime ? (
            <>
              <Flex justifyContent="space-between">
                <Text fontWeight="300px" color="gray.700" >เวลา</Text>
                <Text color="utility.black" fontWeight="400">
                  {pickTime
                    ? `${pickTime.$d.toLocaleTimeString("th", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })} น.`
                    : ""}
                </Text>
              </Flex>
            </>
          ) : null}
          {homeAddress || summaryAddress ? (<>
            <Flex justifyContent="space-between" direction="column" width="inherit" overflowWrap={"break-word"}>
              <Flex direction="row" textAlign="right" color="utility.black" fontWeight="400" gap="1rem">
                <Text fontWeight="300px" color="gray.700" whiteSpace="nowrap" >สถานที่</Text>
                <Text>
                  {homeAddress ? `${homeAddress} ` : ""}
                  {summaryAddress ? `${summaryAddress.subdistrict} ${summaryAddress.district} ${summaryAddress.province}` : ""}
                </Text>
              </Flex>
              {additionalText ? (
                <Flex justifyContent="space-between" mt="0.5rem" textAlign="right" color="utility.black"  >
                  <Text fontWeight="300px" color="gray.700" whiteSpace="nowrap">หมายเหตุ</Text>
                  <Text width="75%">{additionalText}</Text>
                </Flex>
              ) : null}
            </Flex>
          </>) : null}
        </Flex>
        <Divider color='gray.300' width="301px" />
        {/* Total */}
        <Flex justifyContent="space-between" mt="1rem">
          <Text textColor="gray.700" fontSize="1rem" fontWeight="400">รวม</Text>
          <Text textColor="utility.black" fontWeight="600" fontSize="1rem">
            {subService.length > 1
              ? subService.reduce((acc, cur) => {
                return acc + cur.sub_total_price
              }, 0)
              : subService.map((subService) => subService.sub_total_price)} ฿
          </Text>
        </Flex>
      </Flex>
    </Container >
  );
};

export default Summary;
