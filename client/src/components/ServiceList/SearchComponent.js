import React from "react";
import { useState } from "react";
import arrow from "../../asset/image/serviceListPage/dropdown.svg";
import glass from "../../asset/image/serviceListPage/magnifying-glass.svg";
import {
  Container,
  Box,
  Text,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Button,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";

const SearchSection = (props) => {
  const {
    input,
    setInput,
    category,
    setCategory,
    order,
    setOrder,
    sliderValue,
    setSliderValue,
    setPriceTouched,
  } = props;
  const [toggle, setToggle] = useState(false);

  return (
    <Container
      className="search-bar"
      maxW="100vw"
      height="84px"
      border="1px"
      borderColor="gray.100"
      centerContent
    >
      <Container maxW="1440px" h="100%">
        <Stack
          direction="row"
          justify="space-evenly"
          alignItems="center"
          h="100%"
          w="100%px"
        >
          <Box className="search-input">
            <Flex align="center">
              <InputGroup>
                <InputLeftElement
                  children={<Image src={glass} alt="magnifying glass" />}
                  marginLeft="2px"
                />
                <Input
                  placeholder="ค้นหาบริการ..."
                  type="text"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                  border="1px"
                  borderRadius="8px"
                  borderColor="gray.300"
                  _focus={{ borderColor: "blue.600" }}
                />
              </InputGroup>
            </Flex>
          </Box>

          <Box className="filter-section">
            <Flex alignItems="center">
              <Box className="category" mr="20px">
                <Menu>
                  <Text
                    fontSize="12px"
                    ml="15px"
                    color="gray.700"
                    pos="relative"
                    top={"6px"}
                    zIndex={"10"}
                    left={"2px"}
                  >
                    หมวดหมู่บริการ
                  </Text>

                  <Menu>
                    <MenuButton
                      as={Button}
                      variant="dropdown"
                      w="150px"
                      textAlign="left"
                      rightIcon={<Image src={arrow} />}
                      onClick={() => setToggle(false)}
                    >
                      {category}
                    </MenuButton>
                    <MenuList
                      minW="0px"
                      w="180px"
                      py="6px"
                      borderRadius={8}
                      bg={"utility.white"}
                      boxShadow={"lg"}
                      border="none"
                      textStyle={"b3"}
                    >
                      <MenuItem
                        px={"14px"}
                        _hover={{ bg: "gray.100" }}
                        color={category === "บริการทั้งหมด" ? "blue.700" : null}
                        onClick={() => {
                          setCategory("บริการทั้งหมด");
                        }}
                      >
                        บริการทั้งหมด
                      </MenuItem>
                      <MenuItem
                        px={"14px"}
                        _hover={{ bg: "gray.100" }}
                        color={category === "บริการทั่วไป" ? "blue.700" : null}
                        onClick={() => {
                          setCategory("บริการทั่วไป");
                        }}
                      >
                        บริการทั่วไป
                      </MenuItem>
                      <MenuItem
                        px={"14px"}
                        _hover={{ bg: "gray.100" }}
                        color={
                          category === "บริการห้องครัว" ? "blue.700" : null
                        }
                        onClick={() => {
                          setCategory("บริการห้องครัว");
                        }}
                      >
                        บริการห้องครัว
                      </MenuItem>
                      <MenuItem
                        px={"14px"}
                        _hover={{ bg: "gray.100" }}
                        color={category === "บริการห้องน้ำ" ? "blue.700" : null}
                        onClick={() => {
                          setCategory("บริการห้องน้ำ");
                        }}
                      >
                        บริการห้องน้ำ
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Menu>
              </Box>
              <Box
                className="price"
                borderLeft="1px"
                borderColor="gray.300"
                alignItems="center"
                pl="10px"
                mr="20px"
                w="140px"
              >
                <Menu>
                  <Text
                    fontSize="12px"
                    ml="15px"
                    color="gray.700"
                    pos="relative"
                    top={"6px"}
                    zIndex={"10"}
                    left={"2px"}
                  >
                    ราคา
                  </Text>
                  <Menu>
                    <MenuButton
                      as={Button}
                      variant="dropdown"
                      w="100%"
                      textAlign="left"
                      rightIcon={<Image src={arrow} />}
                      onClick={() => {
                        setToggle(!toggle);
                      }}
                    >
                      {sliderValue[0]}-{sliderValue[1]}฿
                    </MenuButton>
                    {toggle && (
                      <Container
                        height="120px"
                        width="250px"
                        padding="10px"
                        borderRadius={8}
                        bg={"utility.white"}
                        pos="absolute"
                        boxShadow={"lg"}
                        top={410}
                      >
                        <MenuItem
                          _hover={{
                            background: "none",
                          }}
                          _focus={{
                            background: "none",
                          }}
                        >
                          <Stack height="100px" width="inherit">
                            <Text>
                              {sliderValue[0]}-{sliderValue[1]}฿
                            </Text>
                            <RangeSlider
                              height="2rem"
                              defaultValue={[sliderValue[0], sliderValue[1]]}
                              min={0}
                              max={5000}
                              step={20}
                              onChangeEnd={(val) => {
                                setSliderValue(val);
                              }}
                              onChange={() => setPriceTouched(true)}
                              justifyContent="space-between"
                              display="flex"
                            >
                              <RangeSliderTrack bg="#CCD0D7">
                                <RangeSliderFilledTrack bg="blue.500" />
                              </RangeSliderTrack>

                              <RangeSliderThumb
                                boxSize={4}
                                index={0}
                                bg="blue.700"
                              />
                              <Text marginTop="1rem" color="blue.700">
                                {sliderValue[0]}
                              </Text>
                              <RangeSliderThumb
                                boxSize={4}
                                index={1}
                                bg="blue.700"
                              />
                              <Text marginTop="1rem" color="blue.700">
                                {sliderValue[1]}
                              </Text>
                            </RangeSlider>
                          </Stack>
                        </MenuItem>
                      </Container>
                    )}
                  </Menu>
                </Menu>
              </Box>
              <Box
                className="sort-by"
                borderLeft="1px"
                borderColor="gray.300"
                alignItems="center"
                pl="10px"
                w="250px"
                mr="10px"
              >
                <Menu>
                  <Text
                    fontSize="12px"
                    ml="15px"
                    color="gray.700"
                    pos="relative"
                    top={"6px"}
                    zIndex={"10"}
                    left={"2px"}
                  >
                    เรียงตาม
                  </Text>

                  <Menu>
                    <MenuButton
                      as={Button}
                      variant="dropdown"
                      w="100%"
                      textAlign="left"
                      rightIcon={<Image src={arrow} />}
                      onClick={() => setToggle(false)}
                    >
                      {order}
                    </MenuButton>
                    <MenuList
                      minW="0px"
                      w="100%"
                      py="6px"
                      borderRadius={8}
                      bg={"utility.white"}
                      boxShadow={"lg"}
                      border="none"
                      textStyle={"b3"}
                    >
                      <MenuItem
                        px={"14px"}
                        _hover={{ bg: "gray.100" }}
                        color={order === "บริการแนะนำ" ? "blue.700" : null}
                        onClick={() => {
                          setOrder("บริการแนะนำ");
                        }}
                      >
                        บริการแนะนำ
                      </MenuItem>
                      <MenuItem
                        px={"14px"}
                        _hover={{ bg: "gray.100" }}
                        color={order === "บริการยอดนิยม" ? "blue.700" : null}
                        onClick={() => {
                          setOrder("บริการยอดนิยม");
                        }}
                      >
                        บริการยอดนิยม
                      </MenuItem>
                      <MenuItem
                        px={"14px"}
                        _hover={{ bg: "gray.100" }}
                        color={
                          order === "ตามตัวอักษร (Ascending)"
                            ? "blue.700"
                            : null
                        }
                        onClick={() => {
                          setOrder("ตามตัวอักษร (Ascending)");
                        }}
                      >
                        ตามตัวอักษร (Ascending)
                      </MenuItem>
                      <MenuItem
                        px={"14px"}
                        _hover={{ bg: "gray.100" }}
                        color={
                          order === "ตามตัวอักษร (Descending"
                            ? "blue.700"
                            : null
                        }
                        onClick={() => {
                          setOrder("ตามตัวอักษร (Descending)");
                        }}
                      >
                        ตามตัวอักษร (Descending)
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Menu>
              </Box>
              <Button
                textStyle="h5"
                w="5rem"
                onClick={() =>
                  props.setSubmitButton(!props.submitButton)
                }
              >
                ค้นหา
              </Button>
            </Flex>
          </Box>
        </Stack>
      </Container>
    </Container>
  );
};

export default SearchSection;
