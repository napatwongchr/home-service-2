import { Box, Text, Flex, Button, Image, Container } from "@chakra-ui/react";
import { useEffect } from "react";
import priceTag from "../../assets/image/homePage/priceTag.svg";

const AddOnList = (props) => {
  const { subService, setSubService, serviceList } = props;
  const subServiceList = serviceList.subService;

  useEffect(() => {
    setSubService(
      subServiceList.map((subService) => {
        subService.count = 0;
        return { ...subService };
      })
    );
  }, []);

  const handleIncrease = (subServiceId) => {
    setSubService(
      subService.map((subService) => {
        if (subService.sub_service_id === subServiceId) {
          subService.count += 1;
        }
        return { ...subService };
      })
    );
  };

  const handleDecrease = (subServiceId) => {
    setSubService(
      subService.map((subService) => {
        if (subService.sub_service_id === subServiceId) {
          subService.count < 1
            ? (subService.count = 0)
            : (subService.count -= 1);
        }
        return { ...subService };
      })
    );
  };

  return (
    <>
      <Container maxW="1440px" px="200px" minH="calc(100vh - 320px)" my='32px'>
        <Box bg="utility.white" borderRadius="8px" p="2rem" border="1px" borderColor="gray.200">
          <Text textStyle="h3" textColor="gray.700">
            เลือกรายการบริการ{props.serviceList.service.service_name}
          </Text>
          {subService.map((subService, index) => {
            return (
              <Flex
                key={index}
                justifyContent="space-between"
                borderBottom="2px"
                borderBottomColor="gray.300"
                mt="2.5rem"
                mb="2rem"
                pb="2rem"
              >
                <Flex direction="column">
                  <Text textStyle="h3" textColor="utility.black">
                    {subService.sub_service_name}
                  </Text>
                  <Flex gap="10px">
                    <Image src={priceTag} w="13" />
                    <Text textColor="gray.700">
                      {subService.price_per_unit} ฿ / {subService.unit_name}
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
                      handleDecrease(subService.sub_service_id);
                    }}
                  >
                    -
                  </Button>

                  <Text textStyle="h5">{subService.count}</Text>

                  <Button
                    variant="secondary"
                    fontSize="4xl"
                    fontWeight="hairline"
                    onClick={() => {
                      handleIncrease(subService.sub_service_id);
                    }}
                  >
                    +
                  </Button>
                </Flex>
              </Flex>
            );
          })}
        </Box>
      </Container>
    </>
  );
};

export default AddOnList;
