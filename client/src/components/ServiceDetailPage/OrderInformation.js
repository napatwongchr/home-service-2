import {
    Container,
    Text,
    Flex,
    Input,
    FormLabel
} from "@chakra-ui/react";
import { DatePicker, TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { ThailandAddressTypeahead, ThailandAddressValue } from "react-thailand-address-typeahead";
import { useState } from 'react'
import styled from "styled-components";

// styling suggestion box
const StyledContainer = styled.div`
   .suggestion-container {
     border: 1px solid;
     border-radius: 8px;
     border-color: #CCD0D7;
     overflow: hidden;
     margin-top: 1rem;
     position: absolute;
     background-color: white;
     z-index: 1;
   }
   .address-option {
     cursor: pointer;
     padding: 5px;
     &:hover {
       background-color: #CCD0D7;
     }
   }
 `


const OrderInformation = () => {
    dayjs.extend(customParseFormat);

    // value of date & time picker
    const [pickDate, setPickDate] = useState(null);
    const [pickTime, setPickTime] = useState(null);

    // value of address - home address คือช่องที่อยู่ / address ที่ได้มาจะเป็น object มี 4 keys (district, postalCode, province, subdistrict)
    const [homeAddress, setHomeAddress] = useState("");
    const [address, setAddress] = useState(ThailandAddressValue.empty())

    // value of additional text
    const [additionalText, setAdditionalText] = useState("");

    // disable days / times
    const disabledDate = (current) => {
        return current && current < dayjs().add(-1, 'day');
    };

    const disabledDateTime = () => ({ disabledHours: () => [1, 2, 3, 4, 5, 19, 20, 21, 22, 23, 0] });


    return (
        <Container maxW="1440px" px="200px" minH="calc(100vh - 320px)" my='32px'>
            <Flex direction="column" bg="utility.white" textStyle="h5" textColor="gray.900" width="100%" height="fit-content" py="1rem" border="1px" borderColor="gray.200" borderRadius="8px">
                <Text textStyle="h3" textColor="gray.700" paddingLeft="1.5rem" paddingTop="1rem">กรอกข้อมูลบริการ</Text>
                <Flex className="picker" direction="row" py="2rem" >
                    <Flex className="date-picker" px="1.5rem" direction="column">
                        <Text marginBottom="0.5rem">
                            วันที่สะดวกใช้บริการ
                            <span style={{ color: "#C82438" }}>*</span>
                        </Text>
                        <DatePicker
                            format="DD MMMM YYYY"
                            value={pickDate}
                            onChange={(date, dateString) => {
                                setPickDate(date, dateString)
                                console.log(date, dateString)
                            }}
                            disabledDate={disabledDate}
                            placeholder="กรุณาเลือกวันที่"
                            style={{ width: "331px", height: "44px", fontFamily: "Prompt", borderRadius: "8px" }}
                        />
                    </Flex>
                    <Flex className="time-picker" direction="column">
                        <Text marginBottom="0.5rem">
                            เวลาที่สะดวกใช้บริการ<span style={{ color: "#C82438" }}>*</span>
                        </Text>
                        <TimePicker defaultValue={dayjs().add(1, 'hour')}
                            format="HH:mm"
                            value={pickTime}
                            onChange={(time, timeString) => {
                                setPickTime(time, timeString)
                                console.log(time, timeString)
                            }}
                            showNow={false}
                            disabledTime={disabledDateTime}
                            placeholder="กรุณาเลือกเวลา"
                            style={{ width: "331px", height: "44px", fontFamily: "inherit", borderRadius: "8px" }}
                        />
                    </Flex>
                </Flex>

                <Flex className="address-info" direction="column">
                    <StyledContainer>
                        <ThailandAddressTypeahead value={address}
                            onValueChange={
                                (address) => {
                                    setAddress(address)
                                    // console.log(address)
                                }}>
                            <Flex px="1.5rem" alignItems="center" marginBottom="2rem">
                                <Flex className="ที่อยู่" marginRight="1.5rem" direction="column" >
                                    <FormLabel htmlFor="home-address" marginBottom="0.5rem">ที่อยู่<span style={{ color: "#C82438" }}>*</span></FormLabel>
                                    <Input
                                        id="home-address"
                                        value={homeAddress}
                                        onChange={(e) => { setHomeAddress(e.target.value) }}
                                        width="331px"
                                        height="44px"
                                        borderRadius="8px"
                                        placeholder="กรุณากรอกที่อยู่" />
                                </Flex>
                                <Flex className="ตำบล" direction="column">
                                    <Text marginBottom="0.5rem">แขวง / ตำบล<span style={{ color: "#C82438" }}>*</span></Text>
                                    <ThailandAddressTypeahead.SubdistrictInput
                                        placeholder="เลือกแขวง / ตำบล"
                                        style={{
                                            width: "331px",
                                            height: "44px",
                                            fontFamily: "inherit",
                                            borderRadius: "8px",
                                            border: "1px solid",
                                            borderColor: "#CCD0D7",
                                            paddingLeft: "1rem",
                                        }}
                                    />
                                </Flex>
                            </Flex>
                            <Flex px="1.5rem" alignItems="center" >
                                <Flex className="เขต / อำเภอ" marginRight="1.5rem" direction="column" >
                                    <Text marginBottom="0.5rem">เขต / อำเภอ<span style={{ color: "#C82438" }}>*</span></Text>
                                    <ThailandAddressTypeahead.DistrictInput
                                        placeholder="เลือกเขต / อำเภอ"
                                        style={{
                                            width: "331px",
                                            height: "44px",
                                            fontFamily: "inherit",
                                            borderRadius: "8px",
                                            border: "1px solid",
                                            borderColor: "#CCD0D7",
                                            paddingLeft: "1rem",
                                        }}
                                    />
                                </Flex>
                                <Flex className="จังหวัด" direction="column" >
                                    <Text marginBottom="0.5rem">จังหวัด<span style={{ color: "#C82438" }}>*</span></Text>
                                    <ThailandAddressTypeahead.ProvinceInput
                                        placeholder="เลือกจังหวัด"
                                        style={{
                                            width: "331px",
                                            height: "44px",
                                            fontFamily: "inherit",
                                            borderRadius: "8px",
                                            border: "1px solid",
                                            borderColor: "#CCD0D7",
                                            paddingLeft: "1rem",
                                        }}
                                    />
                                </Flex>
                            </Flex>
                            <ThailandAddressTypeahead.Suggestion
                                containerProps={{ className: "suggestion-container" }}
                                optionItemProps={{ className: "address-option" }}
                            />
                        </ThailandAddressTypeahead>
                    </StyledContainer>
                    <Flex>
                    </Flex>
                </Flex>
                <Flex px="1.5rem" py="2rem" direction="column">
                    <FormLabel
                        htmlFor="additional-text"
                        marginBottom="0.5rem">
                        ระบุข้อมูลเพิ่มเติม
                    </FormLabel>
                    <Input
                        type="text"
                        id="additional-text"
                        value={additionalText}
                        onChange={(e) => { setAdditionalText(e.target.value) }}
                        height="92px" borderRadius="8px"
                        placeholder="กรุณาระบุข้อมูลเพิ่มเติม"
                    />
                </Flex>
            </Flex>
        </Container>
    )
}

export default OrderInformation;