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
  const [category, setCategory] = useState('บริการทั้งหมด');
  const [order, setOrder] = useState('ตามตัวอักษร (Ascending)')
  const [sliderValue, setSliderValue] = useState([0, 2000]);
  const [alphabetSearch, setAlphabetSearch] = "";

  const [toggle, setToggle] = useState(false);
  const [toggleCategory, setToggleCategory] = useState(false)
  const [toggleOrder, setToggleOrder] = useState(false)
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
              <Menu>
                <Text fontSize="12px" ml="15px" color="gray.700">
                  หมวดหมู่บริการ
                </Text>
                <MenuButton
                  as={Button}
                  rightIcon={<Image src={arrow} />}
                  textAlign="left"
                  height="22px"
                  bg="white"
                  w="150px"
                  fontStyle={'h5'}
                  color='gray.950'
                  onClick={() => {
                    setToggleCategory(!toggleCategory)
                    setToggle(false)
                    setToggleOrder(false)
                  }}
                  pos='relative'
                >
                  {category}
                </MenuButton>
                {toggleCategory &&
                  <Container width="180px" px={0}
                    py="6px" borderRadius={8} bg={'utility.white'} pos='absolute' boxShadow={'lg'} top={410}>
                    <Flex
                      w={"100%"}
                      h={"35px"}
                      alignItems={"center"}
                      p="14px"
                      _hover={{ bg: "gray.100" }}
                      _active={{ bg: "gray.200" }}
                      onClick={() => {
                        setCategory('บริการทั้งหมด')
                        setToggleCategory(false)
                        setToggleOrder(false)
                      }}
                    >

                      <Text textStyle={"b3"} color={category === 'บริการทั้งหมด' ? 'blue.700' : null}>บริการทั้งหมด</Text>
                    </Flex>
                    <Flex
                      w={"100%"}
                      h={"35px"}
                      alignItems={"center"}
                      p="14px"
                      _hover={{ bg: "gray.100" }}
                      _active={{ bg: "gray.200" }}
                      onClick={() => {
                        setCategory('บริการทั่วไป')
                        setToggleCategory(false)
                      }}
                    >

                      <Text textStyle={"b3"} color={category === 'บริการทั่วไป' ? 'blue.700' : null}>บริการทั่วไป</Text>                    </Flex>
                    <Flex
                      w={"100%"}
                      h={"35px"}
                      alignItems={"center"}
                      p="14px"
                      _hover={{ bg: "gray.100" }}
                      _active={{ bg: "gray.200" }}
                      onClick={() => {
                        setCategory('บริการห้องครัว')
                        setToggleCategory(false)
                      }}
                    >

                      <Text textStyle={"b3"} color={category === 'บริการห้องครัว' ? 'blue.700' : null}>บริการห้องครัว</Text>
                    </Flex>
                    <Flex
                      w={"100%"}
                      h={"35px"}
                      alignItems={"center"}
                      p="14px"
                      _hover={{ bg: "gray.100" }}
                      _active={{ bg: "gray.200" }}
                      onClick={() => {
                        setCategory('บริการห้องน้ำ')
                        setToggleCategory(false)
                      }}
                    >

                      <Text textStyle={"b3"} color={category === 'บริการห้องน้ำ' ? 'blue.700' : null} >บริการห้องน้ำ</Text>
                    </Flex>

                  </Container>
                }
              </Menu>
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
                  fontStyle={'h5'}
                  color='gray.950'
                  onClick={() => {
                    setToggle(!toggle)
                    setToggleCategory(false)
                    setToggleOrder(false)
                  }}
                  pos='relative'
                >
                  {sliderValue[0]}-{sliderValue[1]}฿
                </MenuButton>
                {toggle &&
                  <Container height="120px" width="250px" padding="10px" borderRadius={8} bg={'utility.white'} pos='absolute' boxShadow={'lg'} top={410}>
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
                  </Container>
                }
              </Menu>
            </Box>
            <Box className="sort-by"
              borderLeft="1px"
              borderColor="gray.300"
              alignItems="center"
              pl="10px"
              w="250px"
              mr="10px">
              <Menu>
                <Text fontSize="12px" ml="15px" color="gray.700">
                  หมวดหมู่บริการ
                </Text>
                <MenuButton
                  as={Button}
                  rightIcon={<Image src={arrow} />}
                  textAlign="left"
                  height="22px"
                  bg="white"
                  w="100%"
                  fontStyle={'h5'}
                  color='gray.950'
                  onClick={() => {
                    setToggleCategory(false)
                    setToggle(false)
                    setToggleOrder(!toggleOrder)
                  }}
                  pos='relative'
                >
                  {order}
                </MenuButton>
                {toggleOrder &&
                  <Container width="200px" px={0}
                    py="6px" borderRadius={8} bg={'utility.white'} pos='absolute' boxShadow={'lg'} top={410}>
                    <Flex
                      w={"100%"}
                      h={"35px"}
                      alignItems={"center"}
                      p="14px"
                      _hover={{ bg: "gray.100" }}
                      _active={{ bg: "gray.200" }}
                      onClick={() => {
                        setOrder('บริการแนะนำ')
                        setToggleOrder(false)
                      }}
                    >

                      <Text textStyle={"b3"} color={order === 'บริการแนะนำ' ? 'blue.700' : null}>บริการแนะนำ</Text>
                    </Flex>
                    <Flex
                      w={"100%"}
                      h={"35px"}
                      alignItems={"center"}
                      p="14px"
                      _hover={{ bg: "gray.100" }}
                      _active={{ bg: "gray.200" }}
                      onClick={() => {
                        setOrder('บริการยอดนิยม')
                        setToggleOrder(false)
                      }}
                    >

                      <Text textStyle={"b3"} color={order === 'บริการยอดนิยม' ? 'blue.700' : null}>บริการยอดนิยม</Text>                    </Flex>
                    <Flex
                      w={"100%"}
                      h={"35px"}
                      alignItems={"center"}
                      p="14px"
                      _hover={{ bg: "gray.100" }}
                      _active={{ bg: "gray.200" }}
                      onClick={() => {
                        setOrder('ตามตัวอักษร (Ascending)')
                        setToggleOrder(false)
                      }}
                    >

                      <Text textStyle={"b3"} color={order === 'ตามตัวอักษร (Ascending)' ? 'blue.700' : null}>ตามตัวอักษร (Ascending)</Text>
                    </Flex>
                    <Flex
                      w={"100%"}
                      h={"35px"}
                      alignItems={"center"}
                      p="14px"
                      _hover={{ bg: "gray.100" }}
                      _active={{ bg: "gray.200" }}
                      onClick={() => {
                        setOrder('ตามตัวอักษร (Descending)')
                        setToggleOrder(false)
                      }}
                    >

                      <Text textStyle={"b3"} color={order === 'ตามตัวอักษร (Descending)' ? 'blue.700' : null} >ตามตัวอักษร (Descending)</Text>
                    </Flex>

                  </Container>
                }
              </Menu>
            </Box>
            <Button bg="blue.600" textColor="white" textStyle="h5" w="5rem" _hover={{ bg: "blue.500" }} _active={{ bg: "blue.950" }}>
              ค้นหา
            </Button>
          </Flex>
        </Box>
      </Stack >
    </Container >
  );
};

export default SearchSection;
