import React, { useState } from "react";
// import facebookLogo from "../../asset/image/loginpage/facebook-logo.svg";
import {
  Container,
  Flex,
  Text,
  Button,
  // Divider,
  // Stack,
  // Image,
  Link,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../contexts/authentication.js";
import { MyTextInput } from "../../utils/formInput.js";
import axios from "../../api/axios.js";

const LoginForm = () => {
  const { login } = useAuth();
  const [checkEmail, setCheckEmail] = useState("");
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
          email: Yup.string()
            .required("กรุณากรอกอีเมล")
            .email("กรุณาตรวจสอบอีเมลอีกครั้ง")
            .test(
              "Email not found",
              "กรุณาตรวจสอบอีเมลอีกครั้ง",
              function (value) {
                return new Promise((resolve, reject) => {
                  axios
                    .get(`/users?email=${value}`)
                    .then((res) => {
                      if (res.data.data) {
                        setCheckEmail(value);
                        resolve(true);
                      } else {
                        resolve(false);
                      }
                    })
                    .catch((error) => {
                      resolve(false);
                    });
                });
              }
            ),
          password: Yup.string()
            .test(
              "password in not valid",
              "กรุณาตรวจสอบรหัสผ่านอีกครั้ง",
              function (value) {
                return new Promise((resolve, reject) => {
                  axios
                    .get(`/users?password=${value}&email=${checkEmail}`)
                    .then((res) => {
                      if (res.data.msg === "email is blank") {
                        resolve(true);
                      } else if (res.data.msg === "password is invalid") {
                        resolve(false);
                      } else if (res.data.msg === "success") {
                        resolve(true);
                      }
                    })
                    .catch((error) => {
                      resolve(false);
                    });
                });
              }
            )
            .required("กรุณากรอกรหัสผ่าน"),
        })}
        onSubmit={(values) => {
          login(values);
        }}
      >
        <Form>
          <Flex
            flexDirection={"column"}
            w={614}
            h={"100%"}
            bg="utility.white"
            borderRadius={"8px"}
            px={"87px"}
            py={"30px"}
            justify="center"
          >
            <Text textStyle={"h1"} color="blue.950" textAlign={"center"}>
              เข้าสู่ระบบ
            </Text>

            <MyTextInput
              label="อีเมล"
              id="email"
              name="email"
              type="email"
              placeholder="กรุณากรอกอีเมล"
              autoComplete="username"
              w={"440px"}
              h={"44px"}
            />

            <MyTextInput
              label="รหัสผ่าน"
              id="password"
              name="password"
              type="password"
              placeholder="กรุณากรอกรหัสผ่าน"
              autoComplete="current-password"
              w={"440px"}
              h={"44px"}
            />
            <Button
              type="submit"
              textStyle="h5"
              height="44px"
              marginTop="2.5rem"
            >
              เข้าสู่ระบบ
            </Button>

            {/* <Stack direction="row" p={7} align={"center"}>
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
              </Button> */}
            <Text align={"center"} marginTop="2rem">
              ยังไม่มีบัญชีผู้ใช้ HomeService?{" "}
              <Button variant="ghost" p={0} fontWeight={"600"}>
                <Link href="/register">ลงทะเบียน</Link>
              </Button>
            </Text>
          </Flex>
        </Form>
      </Formik>
    </Container>
  );
};

export default LoginForm;
