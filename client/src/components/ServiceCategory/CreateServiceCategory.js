import {
  Container,
  Text,
  Image,
  Flex,
  FormLabel,
  Button,
  Input,
} from "@chakra-ui/react";
import SideBar from "../AdminPage/SideBar";
import { Link } from "react-router-dom";
import useServiceCategories from "../../hooks/useServiceCategories";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "../../api/axios";
import errorIcon from "../../asset/image/errorIcon.svg";

const CreateServiceCategory = () => {
  const { createServiceCategory } = useServiceCategories();
  const initialValues = {
    categoryName: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={false}
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
        const categoryName = values.categoryName;
        if (values === null || values === " ") {
          return;
        } else {
          createServiceCategory({ categoryName });
        }
      }}
    >
      {({ handleSubmit, setFieldValue, errors, touched }) => (
        <Container bg="#F3F4F6" maxW="100%" height="100vh" padding="0px">
          <Form onSubmit={handleSubmit}>
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
                  <Text textStyle="h2" marginLeft="3rem" color="utility.black">
                    เพิ่มหมวดหมู่
                  </Text>
                  <Flex
                    className="button-group"
                    justifyContent="space-between"
                    width="12rem"
                    marginRight="5rem"
                  >
                    <Link to="/admin-dashboard/categories">
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
                    <Button width={"5.5rem"} type="submit">
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
                  height="fit-content"
                  padding={"3rem"}
                  marginTop="4rem"
                >
                  <FormLabel>
                    ชื่อหมวดหมู่ <span style={{ color: "#C82438" }}> * </span>
                  </FormLabel>
                  {errors.categoryName && touched.categoryName ? (
                    <Flex flexDirection={"column"} pos="relative">
                      <Field
                        as={Input}
                        variant="error"
                        id="categoryName"
                        name="categoryName"
                        type="text"
                        w={"440px"}
                        h={"44px"}
                        onChange={(e) =>
                          setFieldValue("categoryName", e.target.value)
                        }
                      />
                      <Image
                        src={errorIcon}
                        pos="absolute"
                        left="412px"
                        bottom={"15px"}
                        w={"14px"}
                      />
                      <Text
                        textStyle={"b2"}
                        color="utility.red"
                        pos="absolute"
                        bottom={"-30px"}
                      >
                        {errors.categoryName}
                      </Text>
                    </Flex>
                  ) : (
                    <Flex flexDirection={"column"}>
                      <Field
                        as={Input}
                        id="categoryName"
                        name="categoryName"
                        type="text"
                        w={"440px"}
                        h={"44px"}
                        onChange={(e) =>
                          setFieldValue("categoryName", e.target.value)
                        }
                      />
                    </Flex>
                  )}
                </Flex>
              </Flex>
            </Flex>
          </Form>
        </Container>
      )}
    </Formik>
  );
};

export default CreateServiceCategory;
