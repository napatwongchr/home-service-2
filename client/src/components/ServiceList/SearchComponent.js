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
  Select,
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

const SearchSection = () => {
  const [input, setInput] = useState("");
  const [category, setCategory] = "";
  const [sliderValue, setSliderValue] = useState(0);
  const [alphabetSearch, setAlphabetSearch] = "";

  return (
    <Container
      className="search-bar"
      maxW="100%"
      height="84px"
      border="1px"
      borderColor="gray.100"
      centerContent
    >
      <Stack
        direction="row"
        justify="space-evenly"
        alignItems="center"
        h="100%"
        w='1440px'
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
                  console.log(input);
                }}
                border="1px"
                borderRadius="8px"
                borderColor="gray.300"
                _focus={{ borderColor: 'blue.600' }}
              />
            </InputGroup>
          </Flex>
        </Box>

        <Box className="filter-section">
          <Flex alignItems="center">
            <Box className="category" mr="20px">
              <Text fontSize="12px" ml="15px" color="gray.700">
                หมวดหมู่บริการ
              </Text>
              <Select
                border="none"
                textStyle="h5"
                height="22px"
                icon={<Image src={arrow} maxWidth="10px" />}
                value={category}
                _hover={{
                  background: "#EFEFF2",
                }}
              >
                <option value="general-services">บริการทั้งหมด</option>
                <option value="general-services">บริการทั่วไป</option>
                <option value="kitchen-services">บริการห้องครัว</option>
                <option value="restrooom-services">บริการห้องน้ำ</option>
              </Select>
            </Box>

            <Box
              className="price"
              borderLeft="1px"
              borderColor="gray.300"
              alignItems="center"
              pl="10px"
              mr="20px"
            >
              <Menu>
                <Text fontSize="12px" ml="15px" color="gray.700">
                  ราคา
                </Text>
                <MenuButton
                  as={Button}
                  rightIcon={<Image src={arrow} />}
                  textAlign="left"
                  height="22px"
                  bg="white"
                  w="150px"
                >
                  0-2000฿
                </MenuButton>
                <MenuList height="120px" width="250px" padding="10px">
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
                        defaultValue={[0, 240]}
                        min={0}
                        max={2000}
                        step={20}
                        onChangeEnd={(val) => setSliderValue(val)}
                        justifyContent="space-between"
                        display="flex"
                      >
                        <RangeSliderTrack bg="#CCD0D7">
                          <RangeSliderFilledTrack bg="blue.500" />
                        </RangeSliderTrack>

                        <RangeSliderThumb boxSize={4} index={0} bg="blue.700" />
                        <Text marginTop="1rem" color="blue.700">
                          {sliderValue[0]}
                        </Text>
                        <RangeSliderThumb boxSize={4} index={1} bg="blue.700" />
                        <Text marginTop="1rem" color="blue.700">
                          {sliderValue[1]}
                        </Text>
                      </RangeSlider>
                    </Stack>
                  </MenuItem>
                </MenuList>
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
              <Text fontSize="12px" ml="15px" color="gray.700">
                เรียงตาม
              </Text>
              <Select
                border="none"
                textStyle="h5"
                height="22px"
                icon={<Image src={arrow} maxWidth="10px" />}
                value={alphabetSearch}
                _hover={{
                  background: "#EFEFF2",
                }}
              >
                <option value="recommended-service">บริการแนะนำ</option>
                <option value="popular-service">บริการยอดนิยม</option>
                <option value="ascending-search">
                  ตามตัวอักษร (Ascending)
                </option>
                <option value="descending-search">
                  ตามตัวอักษร (Descending)
                </option>
              </Select>
            </Box>
            <Button bg="blue.600" textColor="white" textStyle="h5" w="5rem" _hover={{ bg: "blue.500" }} _active={{ bg: "blue.950" }}>
              ค้นหา
            </Button>
          </Flex>
        </Box>
      </Stack>
    </Container>
  );
};

export default SearchSection;
