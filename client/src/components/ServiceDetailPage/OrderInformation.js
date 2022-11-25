import {
  Container,
  Text,
  Textarea,
  Flex,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import { DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useState } from "react";
import styled from "styled-components";
import "./OrderInformation.css";

// styling suggestion box
const StyledContainer = styled.div`
  .suggestion-container {
    border-radius: 8px;
    overflow: hidden;
    margin-top: 1rem;
    position: absolute;
    background-color: white;
    z-index: 1;
    box-shadow: 2px 2px 24px rgba(23, 51, 106, 0.12);
  }
  .address-option {
    cursor: pointer;
    padding: 10px;
    &:hover {
      background-color: #efeff2;
    }
  }
`;

const OrderInformation = (props) => {
  dayjs.extend(customParseFormat);

  // value of date & time picker
  const {
    pickDate,
    setPickDate,
    pickTime,
    setPickTime,
    homeAddress,
    setHomeAddress,
    setSummaryAddress,
    additionalText,
    setAdditionalText,
    ThailandAddressTypeahead,
    ThailandAddressValue,
  } = props;

  // value of address - home address คือช่องที่อยู่ / address ที่ได้มาจะเป็น object มี 4 keys (district, postalCode, province, subdistrict)
  const [address, setAddress] = useState(ThailandAddressValue.empty());

  const handleSetAaddress = (address) => {
    setSummaryAddress({
      district: address.district,
      postalCode: address.postalCode,
      province: address.province,
      subdistrict: address.subdistrict,
    });
  };

  // disable days
  const disabledDate = (current) => {
    return current && current < dayjs().add(-1, "day");
  };

  // find disable times
  var toArray = require("dayjs/plugin/toArray");
  dayjs.extend(toArray);
  let ranged = [];
  const findDisableTime = () => {
    let now = dayjs().startOf("hour").add(1, "hour").toArray();
    for (let i = now[3]; i >= 0; i--) {
      ranged.push(i);
    }
    return ranged;
  };

  findDisableTime();

  const disabledDateTime = () => ({ disabledHours: () => [...ranged] });

  return (
    <Container maxW="735px" p={0} mb='100px'>
      <Flex
        direction="column"
        bg="utility.white"
        textStyle="h5"
        textColor="gray.900"
        width="735px"
        height="fit-content"
        p="32px"
        border="1px"
        borderColor="gray.200"
        borderRadius="8px"
      >
        <Text textStyle="h3" textColor="gray.700">
          กรอกข้อมูลบริการ
        </Text>
        <Flex
          className="picker"
          direction="row"
          py="2rem"
          justifyContent={"space-between"}
        >
          <Flex className="date-picker" direction="column" w="49%">
            <Text marginBottom="0.5rem">
              วันที่สะดวกใช้บริการ
              <span style={{ color: "#C82438" }}>*</span>
            </Text>
            <DatePicker
              className="picker"
              format="DD MMMM YYYY"
              value={pickDate}
              onChange={(date, dateString) => {
                setPickDate(date, dateString);
              }}
              disabledDate={disabledDate}
              placeholder="กรุณาเลือกวันที่"
              style={{
                height: "44px",
                fontFamily: "Prompt",
                fontSize: "16px",
                borderRadius: "8px",
              }}
            />
          </Flex>
          <Flex className="time-picker" direction="column" w="49%">
            <Text marginBottom="0.5rem">
              เวลาที่สะดวกใช้บริการ<span style={{ color: "#C82438" }}>*</span>
            </Text>
            <TimePicker
              defaultValue={dayjs().add(1, "hour")}
              format="HH:mm"
              value={pickTime}
              onChange={(time, timeString) => {
                setPickTime(time, timeString);
              }}
              showNow={false}
              disabledTime={disabledDateTime}
              placeholder="กรุณาเลือกเวลา"
              style={{
                height: "44px",
                fontFamily: "inherit",
                borderRadius: "8px",
              }}
            />
          </Flex>
        </Flex>

        <Flex className="address-info" direction="column">
          <StyledContainer>
            <ThailandAddressTypeahead
              value={address}
              onValueChange={(address) => {
                setAddress(address);
                handleSetAaddress(address);
              }}
            >
              <Flex
                alignItems="center"
                marginBottom="2rem"
                justifyContent={"space-between"}
              >
                <Flex className="ที่อยู่" w="49%" direction="column">
                  <FormLabel htmlFor="home-address" marginBottom="0.5rem">
                    ที่อยู่<span style={{ color: "#C82438" }}>*</span>
                  </FormLabel>
                  <Input
                    id="home-address"
                    value={homeAddress}
                    onChange={(e) => {
                      setHomeAddress(e.target.value);
                    }}
                    height="44px"
                    borderRadius="8px"
                    placeholder="กรุณากรอกที่อยู่"
                  />
                </Flex>
                <Flex className="ตำบล" direction="column" w="49%">
                  <Text marginBottom="0.5rem">
                    แขวง / ตำบล<span style={{ color: "#C82438" }}>*</span>
                  </Text>
                  <ThailandAddressTypeahead.SubdistrictInput
                    placeholder="เลือกแขวง / ตำบล"
                    className="address-input"
                  />
                </Flex>
              </Flex>
              <Flex alignItems="center" justifyContent={'space-between'}>
                <Flex className="เขต / อำเภอ" w="49%" direction="column">
                  <Text marginBottom="0.5rem">
                    เขต / อำเภอ<span style={{ color: "#C82438" }}>*</span>
                  </Text>
                  <ThailandAddressTypeahead.DistrictInput
                    className="address-input"
                    placeholder="เลือกเขต / อำเภอ"
                  />
                </Flex>
                <Flex className="จังหวัด" direction="column" w='49%'>
                  <Text marginBottom="0.5rem">
                    จังหวัด<span style={{ color: "#C82438" }}>*</span>
                  </Text>
                  <ThailandAddressTypeahead.ProvinceInput
                    className="address-input"
                    placeholder="เลือกจังหวัด"
                  />
                </Flex>
              </Flex>
              <ThailandAddressTypeahead.Suggestion
                containerProps={{ className: "suggestion-container" }}
                optionItemProps={{ className: "address-option" }}
              />
            </ThailandAddressTypeahead>
          </StyledContainer>
          <Flex></Flex>
        </Flex>
        <Flex py="2rem" direction="column" w='100%'>
          <FormLabel htmlFor="additional-text" marginBottom="0.5rem">
            ระบุข้อมูลเพิ่มเติม
          </FormLabel>
          <Textarea
            type="text"
            color="gray.700"
            id="additional-text"
            value={additionalText}
            onChange={(e) => {
              setAdditionalText(e.target.value);
            }}
            height="92px"
            borderRadius="8px"
            placeholder="กรุณาระบุข้อมูลเพิ่มเติม"
          />
        </Flex>
      </Flex>
    </Container>
  );
};

export default OrderInformation;
