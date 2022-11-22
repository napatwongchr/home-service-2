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

    // value of address
    const [val, setVal] = useState(ThailandAddressValue.empty())

    // value of date picker
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    // disable days / times
    const disabledDate = (current) => {
        return current && current < dayjs().add(-1, 'day');
    };

    const disabledDateTime = () => ({ disabledHours: () => [1, 2, 3, 4, 5, 19, 20, 21, 22, 23, 0] });


    return (
        <Container bg="#F3F4F6" maxW="100%" height="100vh" padding="0px" centerContent>
            <Flex direction="column" bg="utility.white" textStyle="h5" textColor="gray.900" width="735px" height="fit-content" py="1rem" border="1px" borderColor="#D8D8D8" borderRadius="8px">
                <Text textStyle="h3" textColor="gray.700" paddingLeft="1.5rem" paddingTop="1rem">กรอกข้อมูลบริการ</Text>
                <Flex className="picker" direction="row" py="2rem" >
                    <Flex className="date-picker" px="1.5rem" direction="column">
                        <Text marginBottom="0.5rem">
                            วันที่สะดวกใช้บริการ
                            <span style={{ color: "#C82438" }}>*</span>
                        </Text>
                        <DatePicker
                            format="DD MMMM YYYY"
                            onChange={onChange}
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
                            // onChange={onChange}
                            showNow={false}
                            disabledTime={disabledDateTime}
                            placeholder="กรุณาเลือกเวลา"
                            style={{ width: "331px", height: "44px", fontFamily: "inherit", borderRadius: "8px" }}
                        />
                    </Flex>
                </Flex>

                <Flex className="address-info" direction="column">
                    <StyledContainer>
                        <ThailandAddressTypeahead value={val} onValueChange={(val) => setVal(val)}>
                            <Flex px="1.5rem" alignItems="center" marginBottom="2rem">
                                <Flex className="ที่อยู่" marginRight="1.5rem" direction="column" >
                                    <Text marginBottom="0.5rem">ที่อยู่<span style={{ color: "#C82438" }}>*</span></Text>
                                    <Input width="331px" height="44px" borderRadius="8px" placeholder="กรุณากรอกที่อยู่" />
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
                        // onChange={(e) => { console.log(e.target.value) }}
                        height="92px" borderRadius="8px"
                        placeholder="กรุณาระบุข้อมูลเพิ่มเติม"
                    />
                </Flex>
            </Flex>
        </Container>
    )
}

export default OrderInformation;