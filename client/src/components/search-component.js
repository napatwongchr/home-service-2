import React from "react";
import { useState } from "react";
import arrow from "../asset/image/search-section/dropdown.svg";
import glass from "../asset/image/search-section/magnifying-glass.svg";
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
    <Container className="search-bar" maxW="100%" height="84px" border="1px">
      <Flex justify="space-evenly" height="100%" align="center">
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
                borderColor="#CCD0D7"
              />
            </InputGroup>
          </Flex>
        </Box>

        <Stack
          className="filter-section"
          direction="row"
          align="center"
          height="100%"
        >
          <Box className="category" padding="1rem">
            <Text>หมวดหมู่บริการ</Text>
            <Select
              border="none"
              icon={<Image src={arrow} maxWidth="10px" />}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option default value="general-services">
                บริการทั้งหมด
              </option>
              <option default value="general-services">
                บริการทั่วไป
              </option>
              <option value="kitchen-services">บริการห้องครัว</option>
              <option value="restrooom-services">บริการห้องน้ำ</option>
            </Select>
          </Box>
          <hr />
          <Box className="price" width="180px" alignItems="center">
            <Menu>
              <Text>ราคา</Text>
              <MenuButton
                as={Button}
                rightIcon={<Image src={arrow} />}
                width="180px"
                textAlign="left"
                bg="white"
                _hover
              >
                0-2000฿
              </MenuButton>
              <MenuList
                height="100px"
                width="250px"
                padding="10px"
                display="flex"
                alignItems="center"
              >
                <MenuItem>
                  <RangeSlider
                    defaultValue={[0, 240]}
                    min={0}
                    max={2000}
                    step={30}
                    onChangeEnd={(val) => setSliderValue(val)}
                    display="flex"
                    justifyContent="space-between"
                  >
                    <RangeSliderTrack bg="#CCD0D7">
                      <RangeSliderFilledTrack bg="blue.500" />
                    </RangeSliderTrack>
                    <RangeSliderThumb boxSize={4} index={0} bg="blue.700" />
                    <Text marginTop="40px" color="blue.700">
                      {sliderValue[0]}
                    </Text>
                    <RangeSliderThumb boxSize={4} index={1} bg="blue.700" />
                    <Text marginTop="40px" color="blue.700">
                      {sliderValue[1]}
                    </Text>
                  </RangeSlider>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box className="sort-by">
            <Text>เรียงตาม </Text>
            <Select border="none" icon={<Image src={arrow} maxWidth="10px" />}>
              <option value="recommended-services">บริการแนะนำ</option>
              <option value="popular-services">บริการยอดนิยม</option>
              <option value="ascending">ตามตัวอักษร (Ascending)</option>
              <option value="descending">ตามตัวอักษร (Descending)</option>
            </Select>
          </Box>
          <Button bg="blue.600" textColor="white" textStyle="h5">
            ค้นหา
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default SearchSection;
