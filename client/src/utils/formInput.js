import React from "react";
import { Field, useField } from "formik";
import {
  Flex,
  Text,
  Input,
  FormLabel,
  Image,
  Checkbox,
  Box,
} from "@chakra-ui/react";
import errorIcon from "../assets/image/errorIcon.svg";
const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {meta.touched && meta.error ? (
        <Flex flexDirection={"column"} alignContent="start" mb="20px">
          <FormLabel
            mt={"20px"}
            mb={"4px"}
            textStyle="h5"
            color={"gray.900"}
            htmlFor={props.id || props.name}
          >
            <Flex textStyle={"h5"}>
              <Text color={"gray.900"}>{label}</Text>
              <Text color={"utility.red"}>*</Text>
            </Flex>
          </FormLabel>
          <Box pos="relative">
            <Input variant={"error"} {...field} {...props} />
            <Image
              src={errorIcon}
              pos="absolute"
              top="13px"
              left="412px"
              bottom={"29px"}
              w={"14px"}
            />
            <Text
              fontStyle={"b4"}
              color="utility.red"
              pos="absolute"
              bottom={"-30px"}
            >
              {meta.error}
            </Text>
          </Box>
        </Flex>
      ) : (
        <Flex flexDirection={"column"} alignContent="start" mb="20px">
          <FormLabel
            mt={"20px"}
            mb={"4px"}
            textStyle="h5"
            color={"gray.900"}
            htmlFor={props.id || props.name}
          >
            <Flex textStyle={"h5"}>
              <Text color={"gray.900"}>{label}</Text>
              <Text color={"utility.red"}>*</Text>
            </Flex>
          </FormLabel>
          <Input
            variant={meta.touched ? "success" : "default"}
            {...field}
            {...props}
          />
        </Flex>
      )}
    </>
  );
};

const MyFieldInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {meta.touched && meta.error ? (
        <Flex flexDirection={"column"} justifyContent="start" mb="20px">
          <FormLabel
            mt={"20px"}
            mb={"4px"}
            textStyle="h5"
            color={"gray.700"}
            htmlFor={props.id || props.name}
          >
            <Flex textStyle={"h5"}>
              <Text color={"gray.700"}>{label}</Text>
              <Text color={"utility.red"}>*</Text>
            </Flex>
          </FormLabel>
          <Box position={"relative"}>
            <Field as={Input} variant={"error"} {...field} {...props} />
            <Image
              src={errorIcon}
              pos="absolute"
              left={`calc(${props.w} - 25px)`}
              bottom={"16px"}
              w={"14px"}
              zIndex={10}
            />
            <Text
              textStyle={"b2"}
              color="utility.red"
              pos={"absolute"}
              bottom="-30px"
              left={"10px"}
            >
              {meta.error}
            </Text>
          </Box>
        </Flex>
      ) : (
        <Flex flexDirection={"column"} justifyContent="start" mb="20px">
          <FormLabel
            mt={"20px"}
            mb={"4px"}
            textStyle="h5"
            color={"gray.700"}
            htmlFor={props.id || props.name}
          >
            <Flex textStyle={"h5"}>
              <Text color={"gray.700"}>{label}</Text>
              <Text color={"utility.red"}>*</Text>
            </Flex>
          </FormLabel>
          <Field
            as={Input}
            variant={meta.touched ? "success" : "default"}
            {...field}
            {...props}
          />
        </Flex>
      )}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      {meta.touched && meta.error ? (
        <>
          <Flex
            mb={"0px"}
            alignItems="center"
            justifyContent={"center"}
            pos="relative"
          >
            <Checkbox type="checkbox" {...field} {...props} />
            <FormLabel htmlFor="checkbox">{children}</FormLabel>
            <Text
              fontStyle={"b4"}
              color="utility.red"
              pos="absolute"
              top="42px"
              left="0px"
            >
              {meta.error}
            </Text>
          </Flex>
        </>
      ) : (
        <Flex alignItems="center" justifyContent={"center"}>
          <Checkbox type="checkbox" {...field} {...props} />
          <FormLabel htmlFor="checkbox">{children}</FormLabel>
        </Flex>
      )}
    </>
  );
};

export { MyTextInput, MyFieldInput, MyCheckbox };
