import "./loginPage.css";
import React from "react";
import facebookLogo from "../../asset/image/loginpage/facebook-logo.svg";
import {
  Container,
  Flex,
  Input,
  Text,
  Button,
  Divider,
  Stack,
  Image,
  Link,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../contexts/authentication.js";

const LoginForm = () => {
  const { login } = useAuth();

  return (
    <Container
      maxW={"100%"}
      height="100vh"
      bg="gray.100"
      py={"52px"}
      centerContent
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().required("ใส่อีเมลด้วย"),
          password: Yup.string().required("ใส่รหัสผ่านด้วย"),
        })}
        onSubmit={(values) => {
          console.log(values);
          login(values);
        }}
      >
        {(formik) => (
          <Form>
            <Flex
              flexDirection={"column"}
              w={614}
              h={600}
              bg="utility.white"
              borderRadius={"8px"}
              px={"87px"}
              py={"30px"}
              justify="center"
            >
              <Text textStyle={"h1"} color="blue.950" textAlign={"center"}>
                เข้าสู่ระบบ
              </Text>
              <label htmlFor="email">
                อีเมล <span className="star">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                {...formik.getFieldProps("email")}
                placeholder="กรุณากรอกอีเมล"
              />
              {formik.touched.email && formik.errors.password ? (
                <div className="text-error">{formik.errors.email}</div>
              ) : null}
              <label htmlFor="password">
                รหัสผ่าน <span className="star">*</span>
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                {...formik.getFieldProps("password")}
                placeholder="กรุณากรอกรหัสผ่าน"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-error">{formik.errors.password}</div>
              ) : null}
              <Button
                type="submit"
                bg="blue.600"
                color={"white"}
                textStyle="h5"
                fontWeight={"500"}
                height="44px"
                marginTop="2.5rem"
                _hover={{ bg: "blue.500" }}
                _active={{ bg: "blue.800" }}
              >
                เข้าสู่ระบบ
              </Button>

              <Stack direction="row" p={7} align={"center"}>
                <Divider />
                <Text whiteSpace={"nowrap"} textStyle="b3">
                  หรือลงชื่อเข้าใช้ผ่าน
                </Text>
                <Divider />
              </Stack>
              <Button
                type="submit"
                leftIcon={<Image src={facebookLogo} />}
                bg="white"
                border={"1px"}
                borderColor="blue.600"
                color={"blue.600"}
                textAlign="center"
                height="44px"
                _hover={{ borderColor: "blue.400", color: "blue.400" }}
                _active={{ borderColor: "blue.800", color: "blue.800" }}
              >
                เข้าสู่ระบบด้วย Facebook
              </Button>
              <Text align={"center"} marginTop="2rem">
                ยังไม่มีบัญชีผู้ใช้ HomeService?{" "}
                <Link
                  color="blue.600"
                  href="/register"
                  fontWeight={"600"}
                  _hover={{ color: "blue.400" }}
                  _active={{ color: "blue.800" }}
                  textDecoration={"underline"}
                >
                  ลงทะเบียน
                </Link>
              </Text>
            </Flex>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginForm;
