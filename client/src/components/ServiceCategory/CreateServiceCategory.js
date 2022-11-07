import {
  Container,
  Text,
  Flex,
  FormLabel,
  Button,
  Input,
} from "@chakra-ui/react";

const CreateServiceCategory = () => {
  return (
    <Container bg="#F3F4F6" maxW="100%" height="100vh" paddingLeft="0px">
      <Flex
        className="create-service-field"
        direction="column"
        alignItems={"center"}
        width="100vw"
        height="100vh"
      >
        <Flex
          className="create-service-category-bar"
          bg="white"
          borderBottom={"1px"}
          borderColor="gray.300"
          width="100%"
          height={"80px"}
          justify={"space-between"}
          alignItems="center"
        >
          <Text textStyle="h2" marginLeft="3rem" color="utility.black">
            เพิ่มหมวดหมู่
          </Text>
          <Flex
            className="button-group"
            justifyContent="space-between"
            width="12rem"
            marginRight="5rem"
          >
            <Button
              bg="white"
              color="blue.600"
              border="1px"
              borderColor="blue.600"
              width={"5.5rem"}
            >
              ยกเลิก
            </Button>
            <Button width={"5.5rem"} onSubmit={{}}>
              สร้าง
            </Button>
          </Flex>
        </Flex>
        <Flex
          className="create-service-input"
          direction={"row"}
          justify="left"
          paddingLeft={"2rem"}
          alignItems={"center"}
          bg="white"
          border="1px"
          borderColor="gray.200"
          borderRadius={"8px"}
          width={"1120px"}
          height="124px"
          marginTop="4rem"
        >
          <FormLabel>
            ชื่อหมวดหมู่ <span style={{ color: "#C82438" }}> * </span>
          </FormLabel>
          <Input width={"433px"} marginLeft="7rem" />
        </Flex>
      </Flex>
    </Container>
  );
};

export default CreateServiceCategory;
