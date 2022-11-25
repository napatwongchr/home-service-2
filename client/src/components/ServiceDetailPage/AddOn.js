import { Box, Text, Flex, Button, Image, Container, Divider } from "@chakra-ui/react";
import { useEffect } from "react";
import priceTag from "../../assets/image/homePage/priceTag.svg";

const AddOnList = (props) => {
  const { subService, setSubService, serviceList } = props;
  const subServiceList = serviceList.subService;

  useEffect(() => {
    setSubService(
      subServiceList.map((subService) => {
        subService.count = 0;
        subService.sub_total_price = 0;
        return { ...subService };
      })
    );
  }, []);

  const handleIncrese = (subServiceId) => {
    setSubService(
      subService.map((subService) => {
        if (subService.sub_service_id === subServiceId) {
          subService.count += 1;
          subService.sub_total_price += subService.price_per_unit;
        }
        return { ...subService };
      })
    );
  };

  const handleDecrese = (subServiceId) => {
    setSubService(
      subService.map((subService) => {
        if (subService.sub_service_id === subServiceId) {
          subService.count < 1
            ? (subService.count = 0)
            : (subService.count -= 1);
          subService.sub_total_price < subService.price_per_unit
            ? (subService.sub_total_price = 0)
            : (subService.sub_total_price -= subService.price_per_unit);
        }
        return { ...subService };
      })
    );
  };


  return (
    <Container maxW="735px" p={0} mb='100px'>
      <Box bg="utility.white" borderRadius="8px" p="2rem" w="735px" border="1px solid"
        borderColor="gray.300">
        <Text textStyle="h3" textColor="gray.700" >
          เลือกรายการบริการ{props.serviceList.service.service_name}
        </Text>
        {subService.map((subServiceObj, index) => {
          return (
            <Flex direction={"column"}
              key={index}
            >
              {index !== 0 ? (
                <Divider color='gray.300' width="98%" />
              ) : null}

              <Flex
                justifyContent="space-between"
                mt="2.5rem"
                pb="2rem"
              >
                <Flex direction="column">
                  <Text textStyle="h3" textColor="utility.black" fontWeight="500">
                    {subServiceObj.sub_service_name}
                  </Text>
                  <Flex gap="10px">
                    <Image src={priceTag} w="13" />
                    <Text textColor="gray.700">
                      {subServiceObj.price_per_unit} ฿ / {subServiceObj.unit_name}
                    </Text>
                  </Flex>
                </Flex>

                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  w="150px"
                >
                  <Button
                    variant="secondary"
                    fontSize="4xl"
                    fontWeight="hairline"
                    onClick={() => {
                      handleDecrese(subServiceObj.sub_service_id);
                    }}
                  >
                    -
                  </Button>
                  <Text textStyle="h5">{subServiceObj.count}</Text>
                  <Button
                    variant="secondary"
                    fontSize="4xl"
                    fontWeight="hairline"
                    onClick={() => {
                      handleIncrese(subServiceObj.sub_service_id);
                    }}
                  >
                    +
                  </Button>
                </Flex>
              </Flex>

            </Flex>
          );
        })}
      </Box>
    </Container>
  );
};

export default AddOnList;
