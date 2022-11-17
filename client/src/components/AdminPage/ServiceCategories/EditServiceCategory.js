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
import arrow from "../../../assets/image/serviceCategory/left-arrow.svg";
import binIcon from "../../../assets/image/serviceCategory/bin-icon.svg";
import warningICon from "../../../assets/image/serviceCategory/warning-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useServiceCategories from "../../../hooks/useServiceCategories.js";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "../../../api/axios";
import errorIcon from "../../../assets/image/errorIcon.svg";

const EditServiceCategory = () => {
  const {
    serviceCategory,
    getServiceCategoryById,
    updateServiceCategoryById,
    deleteServiceCategory,
    params,
  } = useServiceCategories();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [categoryName, setCategoryName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getServiceCategoryById(params);
  }, []);

  useEffect(() => {
    if (serviceCategory) {
      setCategoryName(serviceCategory.service_category_name);
    }
  }, [serviceCategory]);

  const initialValues = {
    categoryName: categoryName,
  };

  return (
    <Formik
      enableReinitialize={true}
      validateOnChange={false}
      initialValues={initialValues}
      validationSchema={Yup.object({
        categoryName: Yup.string()
          .test(
            "Unique Category",
            "ชื่อหมวดหมู่นี้ถูกใช้งานแล้ว กรุณาเปลี่ยนชื่อหมวดหมู่",
            function (value) {
              return new Promise((resolve, reject) => {
                axios
                  .get(`/service/category?categoryName=${value}`)
                  .then((res) => {
                    if (res.data.data.length >= 1) {
                      resolve(false);
                    } else {
                      resolve(true);
                    }
                  })
                  .catch((error) => {
                    resolve(false);
                  });
              });
            }
          )
          .required("กรุณากรอกชื่อหมวดหมู่"),
      })}
      onSubmit={async (values) => {
        const newCategoryName = values.categoryName;
        if (newCategoryName === null || newCategoryName === " ") {
          return;
        } else {
          updateServiceCategoryById(params, { categoryName: newCategoryName });
        }
      }}
    >
      {({ handleSubmit, setFieldValue, errors, touched }) => (
        <Container bg="#F3F4F6" maxW="100%" height="100vh" padding="0px">
          <Form onSubmit={handleSubmit}>
            <Flex>
              <Flex
                className="create-service-field"
                direction="column"
                alignItems="center"
                width="100vw"
                height="100vh"
              >
                <Flex
                  className="create-service-category-bar"
                  bg="white"
                  borderBottom="1px"
                  borderColor="gray.300"
                  width="100%"
                  height="80px"
                  justify="space-between"
                  alignItems="center"
                >
                  <Flex
                    className="left-side"
                    direction="row"
                    alignItems="center"
                    marginLeft="3rem"
                  >
                    <Link to="/admin-dashboard/categories">
                      <Image src={arrow} marginRight="1.5rem" />
                    </Link>
                    <Flex direction="column">
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
                  <Flex className="button-group" marginRight="40px" gap="20px">
                    <Button
                      bg="white"
                      variant="secondary"
                      width="112px"
                      height="44px"
                      onClick={() => {
                        navigate(
                          `/admin-dashboard/category/view/${serviceCategory.service_category_id}`
                        );
                      }}
                    >
                      ยกเลิก
                    </Button>
                    <Button
                      variant="primary"
                      width="112px"
                      height="44px"
                      type="submit"
                    >
                      ยืนยัน
                    </Button>
                  </Flex>
                </Flex>
                <Box w="100%" px="40px">
                  <Flex
                    className="edit-service-box"
                    direction="column"
                    justify="center"
                    bg="white"
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="8px"
                    width="100%"
                    height="fit-content"
                    padding="3rem 2rem 3rem 2rem"
                    marginTop="4rem"
                  >
                    <Flex direction="row" alignItems="center">
                      <FormLabel marginRight="10rem">
                        ชื่อหมวดหมู่
                        <span style={{ color: "#C82438" }}>*</span>
                      </FormLabel>
                      {errors.categoryName && touched.categoryName ? (
                        <Flex flexDirection="column" pos="relative">
                          <Field
                            as={Input}
                            textColor="utility.red"
                            variant="error"
                            id="categoryName"
                            name="categoryName"
                            type="text"
                            width="440px"
                            height="44px"
                            onChange={(e) =>
                              setFieldValue("categoryName", e.target.value)
                            }
                          />
                          <Image
                            src={errorIcon}
                            pos="absolute"
                            left="412px"
                            bottom="15px"
                            w="14px"
                          />
                          <Text
                            textStyle="b2"
                            color="utility.red"
                            pos="absolute"
                            bottom="-30px"
                          >
                            {errors.categoryName}
                          </Text>
                        </Flex>
                      ) : (
                        <Flex flexDirection="column">
                          <Field
                            as={Input}
                            textColor="utility.black"
                            id="categoryName"
                            name="categoryName"
                            type="text"
                            w="440px"
                            h="44px"
                            onChange={(e) =>
                              setFieldValue("categoryName", e.target.value)
                            }
                          />
                        </Flex>
                      )}
                    </Flex>
                    <Divider
                      padding="1.5rem"
                      w="95.5%"
                      borderColor="gray.300"
                    />
                    <Box className="info" marginTop="3rem">
                      <Flex className="created-info" marginBottom="2rem">
                        <Text textStyle="h5" marginRight="10rem" width="5rem">
                          สร้างเมื่อ
                        </Text>
                        <Text className="created-at" textColor="gray.900">
                          {serviceCategory.created_at}
                        </Text>
                      </Flex>
                      <Flex className="edited-info">
                        <Text textStyle="h5" marginRight="10rem" width="5rem">
                          แก้ไขล่าสุด
                        </Text>
                        <Text className="edited-at" textColor="gray.900">
                          {serviceCategory.updated_at}
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                  <Flex
                    className="delete-category"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpen();
                    }}
                    marginTop="1.5rem"
                    marginLeft="82%"
                    textColor="gray.600"
                    fontWeight="600"
                    justifyContent={"end"}
                  >
                    <Image src={binIcon} paddingRight="10px" />
                    <button style={{ textDecoration: "underline" }}>
                      ลบหมวดหมู่
                    </button>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent
                textAlign="center"
                height="fit-content"
                width="350px"
                borderRadius="16px"
                marginTop="15rem"
              >
                <ModalHeader marginTop="1.5rem">
                  <Flex direction="column" alignItems="center">
                    <Image
                      src={warningICon}
                      alt="warning icon"
                      width="30px"
                      marginBottom="10px"
                    />
                    <Text textStyle="h2" color="gray.950">
                      ยืนยันการลบรายการ?
                    </Text>
                  </Flex>
                </ModalHeader>
                <ModalBody maxH="fit-content" paddingTop="-15px">
                  <Text fontWeight="300">
                    คุณต้องการลบรายการ '{serviceCategory.service_category_name}'
                    <br />
                    ใช่หรือไม่
                  </Text>
                </ModalBody>
                <ModalFooter alignSelf="center" paddingBottom="2.5rem">
                  <Button
                    width="112px"
                    height="44px"
                    fontWeight="500"
                    marginRight="15px"
                    onClick={() => {
                      deleteServiceCategory(
                        serviceCategory.service_category_id
                      );
                      navigate("/admin-dashboard/categories");
                    }}
                  >
                    ลบรายการ
                  </Button>
                  <Button
                    onClick={onClose}
                    variant="secondary"
                    width="112px"
                    height="44px"
                    fontWeight="500"
                  >
                    ยกเลิก
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Form>
        </Container>
      )}
    </Formik>
  );
};

export default EditServiceCategory;
