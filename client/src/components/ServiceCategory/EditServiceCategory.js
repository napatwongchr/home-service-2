import {
  Container,
  Text,
  Image,
  Flex,
  FormLabel,
  Button,
  Divider,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import SideBar from "../AdminPage/SideBar";
import arrow from "../../asset/image/serviceCategory/left-arrow.svg";
import binIcon from "../../asset/image/serviceCategory/bin-icon.svg";
import warningICon from "../../asset/image/serviceCategory/warning-icon.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useServiceCategories from "../../hooks/useServiceCategories.js";

const EditServiceCategory = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [categoryName, setCategoryName] = useState();
  const {
    serviceCategory,
    getServiceCategoryById,
    updateServiceCategoryById,
    params,
  } = useServiceCategories();

  useEffect(() => {
    getServiceCategoryById(params);
  }, []);

  useEffect(() => {
    if (serviceCategory) {
      setCategoryName(serviceCategory.service_category_name);
    }
  }, [serviceCategory]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateServiceCategoryById(params, { categoryName });
  };

  return (
    <Container bg="#F3F4F6" maxW="100%" height="100vh" paddingLeft="0px">
      <Flex>
        <SideBar />
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
            <Flex
              className="left-side"
              direction="row"
              alignItems={"center"}
              marginLeft="3rem"
            >
              <Link to="/admin-dashboard">
                <Image src={arrow} marginRight="1.5rem" />
              </Link>

              <Flex direction={"column"}>
                <Text textStyle="b4">หมวดหมู่</Text>
                <Text
                  className="category-name"
                  textStyle="h2"
                  color="utility.black"
                >
                  {serviceCategory.service_category_name}
                </Text>
              </Flex>
            </Flex>
            <Flex
              className="button-group"
              justifyContent="space-between"
              width="12rem"
              marginRight="5rem"
            >
              <Link to="/admin-dashboard">
                <Button
                  bg="white"
                  color="blue.600"
                  border="1px"
                  borderColor="blue.600"
                  width={"5.5rem"}
                >
                  ยกเลิก
                </Button>
              </Link>
              <Button width={"5.5rem"} onClick={handleSubmit}>
                ยืนยัน
              </Button>
            </Flex>
          </Flex>
          <Flex
            className="edit-service-input"
            direction={"column"}
            paddingLeft={"2rem"}
            justify="center"
            alignItems={"left"}
            bg="white"
            border="1px"
            borderColor="gray.200"
            borderRadius={"8px"}
            width={"1120px"}
            height="304px"
            marginTop="4rem"
          >
            <Flex direction={"row"}>
              <FormLabel>
                ชื่อหมวดหมู่ <span style={{ color: "#C82438" }}> * </span>
              </FormLabel>
              <Input
                value={categoryName}
                onChange={(event) => {
                  setCategoryName(event.target.value);
                }}
                width={"433px"}
                marginLeft="7rem"
              />
            </Flex>
            <Divider padding={"1rem"} />
            <Box className="info" marginTop="3rem">
              <Flex className="created-info" marginBottom={"2rem"}>
                <Text textStyle="h5" marginRight="5rem" width={"5rem"}>
                  สร้างเมื่อ
                </Text>
                <Text className="created-at">{serviceCategory.created_at}</Text>
              </Flex>
              <Flex className="edited-info">
                <Text textStyle="h5" marginRight="5rem" width={"5rem"}>
                  แก้ไขล่าสุด
                </Text>
                <Text className="edited-at">{serviceCategory.updated_at}</Text>
              </Flex>
            </Box>
          </Flex>
          <Flex
            className="delete-category"
            onClick={onOpen}
            marginTop="1rem"
            marginLeft="62rem"
          >
            <Image src={binIcon} paddingRight={"1rem"} />
            <button style={{ textDecoration: "underline" }}>ลบหมวดหมู่</button>
          </Flex>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          textAlign="center"
          height="250px"
          width="350px"
          borderRadius={"16px"}
        >
          <ModalHeader marginTop="1.5rem">
            <Flex direction="column" alignItems={"center"}>
              <Image
                src={warningICon}
                alt="warning icon"
                width="30px"
                marginBottom="10px"
              />
              <Text textStyle={"h2"} color="gray.950">
                ยืนยันการลบรายการ?
              </Text>
            </Flex>
          </ModalHeader>
          <ModalBody maxH="30px" paddingTop="-15px">
            <Text fontWeight={300}>คุณต้องการลบรายการ "..." ใช่หรือไม่</Text>
          </ModalBody>
          <ModalFooter alignSelf={"center"}>
            <Button colorScheme="blue" mr={3}>
              ลบรายการ
            </Button>
            <Button
              onClick={onClose}
              variant="ghost"
              color="blue.600"
              border={"1px"}
              borderColor={"blue.600"}
            >
              ยกเลิก
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default EditServiceCategory;
