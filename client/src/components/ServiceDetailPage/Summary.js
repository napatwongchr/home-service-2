import { Container, Flex, Text } from "@chakra-ui/react";

const Summary = (props) => {
  const { subService, pickDate, pickTime, homeAddress, summaryAddress, additionalText } = props;

  return (
    <Container p="0" w='100%'>
      <Flex
        bgColor="utility.white"
        borderRadius="8px"
        p="2rem"
        direction="column"
        w="350px"
        h="fit-content"
      >
        <Text textColor="gray.700" textStyle="h3">
          สรุปรายการ
        </Text>

        {/* AddOnList */}
        <Flex borderBottom="1px" pb="1rem" direction="column" mt="1rem">
          {subService.map((subService, index) => {
            return (
              <Flex key={index} gap="0.5rem">
                <Text textColor="utility.black">
                  {subService.sub_service_name}
                </Text>
                <Text textColor="gray.900" textStyle="h4">
                  {subService.count} รายการ
                </Text>
              </Flex>
            );
          })}
        </Flex>

        {/* OrderInfomation */}
        <Flex borderBottom="1px" pb="1rem" direction="column" mt="1rem">
          <Flex justifyContent="space-between">
            <Text>วันที่</Text>
            <Text>
              {pickDate
                ? pickDate.$d.toLocaleDateString("th-TH", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                : ""}
            </Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>เวลา</Text>
            <Text>
              {pickTime
                ? `${pickTime.$d.toLocaleTimeString("th", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })} น.`
                : ""}
            </Text>
          </Flex>
          <Flex justifyContent="space-between" gap={"2rem"}>
            <Text>สถานที่</Text>
            <Flex direction="column" textAlign="right">
                <Text fontWeight="500">
                    {homeAddress ? `${homeAddress} ` : ""}
                    {summaryAddress ? `${summaryAddress.subdistrict} ${summaryAddress.district} ${summaryAddress.province}` : ""}
                </Text>
                <Text>{additionalText}</Text>
            </Flex>
          </Flex>
        </Flex>

        {/* Total */}
        <Flex justifyContent="space-between" mt="1rem">
          <Text textColor="gray.700">รวม</Text>
          <Text textColor="utility.black" fontWeight="600">
            {subService.length > 1
              ? subService.reduce((acc, cur) => {
                  return acc.sub_total_price + cur.sub_total_price;
                })
              : subService.map((subService) => subService.sub_total_price)}
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Summary;
