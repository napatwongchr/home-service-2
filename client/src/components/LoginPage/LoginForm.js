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
import { Formik, Field, Form } from "formik";

const LoginForm = () => {
  return (
    <Container
      maxW={"100%"}
      maxH={"100%"}
      bg="gray.100"
      py={"52px"}
      centerContent
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
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
            <label htmlFor="email">อีเมล*</label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="กรุณากรอกอีเมล"
              marginBottom="1rem"
            />

            <label htmlFor="password">รหัสผ่าน*</label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="กรุณากรอกรหัสผ่าน"
              marginBottom="2rem"
            />

            <Button
              type="submit"
              bg="blue.600"
              color={"white"}
              textStyle="h5"
              fontWeight={"500"}
              height="44px"
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
              leftIcon={<Image src={facebookLogo} />}
              bg="white"
              border={"1px"}
              borderColor="blue.600"
              color={"blue.600"}
              textAlign="center"
              height="44px"
            >
              เข้าสู่ระบบด้วย Facebook
            </Button>
            <Text align={"center"} marginTop="2rem">
              ยังไม่มีบัญชีผู้ใช้ HomeService?{" "}
              <Link
                color="blue.600"
                href="/register"
                fontWeight={"600"}
                textDecoration={"underline"}
              >
                ลงทะเบียน
              </Link>
            </Text>
          </Flex>
        </Form>
      </Formik>
    </Container>
  );
};

export default LoginForm;
