import {
    Container,
    Text,
    Textarea,
    Flex,
    Input,
    FormLabel
} from "@chakra-ui/react";
import { DatePicker, TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useState } from 'react'
import styled from "styled-components";
import "../ServiceDetailPage/OrderInformation.css"

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
       background-color: #EFEFF2;
     }
   }
 `


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
        ThailandAddressValue
     } = props

    // value of address - home address คือช่องที่อยู่ / address ที่ได้มาจะเป็น object มี 4 keys (district, postalCode, province, subdistrict)
    const [address, setAddress] = useState(ThailandAddressValue.empty())

    const handleSetAaddress = (address) =>{
        setSummaryAddress({
            district : address.district,
            postalCode : address.postalCode,
            province : address.province,
            subdistrict : address.subdistrict
        })
    }

    // disable days / times
    const disabledDate = (current) => {
        return current && current < dayjs().add(-1, 'day');
    };


    const disabledDateTime = () => ({ disabledHours: () => [1, 2, 3, 4, 5, 19, 20, 21, 22, 23, 0] });


    return (
        <Container maxW="735px" p={0}>
            <Flex direction="column" bg="utility.white" textStyle="h5" textColor="gray.900" width="100%" height="fit-content" py="1rem" border="1px" borderColor="gray.300" borderRadius="8px">
                <Text textStyle="h3" textColor="gray.700" paddingLeft="1.5rem" paddingTop="1rem">กรอกข้อมูลบริการ</Text>
                <Flex className="picker" direction="row" py="2rem" >
                    <Flex className="date-picker" px="1.5rem" direction="column">
                        <Text marginBottom="0.5rem">
                            วันที่สะดวกใช้บริการ
                            <span style={{ color: "#C82438" }}>*</span>
                        </Text>
                        <DatePicker
                            className="picker"
                            format="DD MMMM YYYY"
                            value={pickDate}
                            onChange={(date, dateString) => {
                                setPickDate(date, dateString)
                            }}
                            disabledDate={disabledDate}
                            placeholder="กรุณาเลือกวันที่"
                            style={{ width: "331px", height: "44px", fontFamily: "Prompt", fontSize: "16px", borderRadius: "8px" }}
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
                                    handleSetAaddress(address)
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
                                        className="address-input"
                                    />
                                </Flex>
                            </Flex>
                            <Flex px="1.5rem" alignItems="center" >
                                <Flex className="เขต / อำเภอ" marginRight="1.5rem" direction="column" >
                                    <Text marginBottom="0.5rem">เขต / อำเภอ<span style={{ color: "#C82438" }}>*</span></Text>
                                    <ThailandAddressTypeahead.DistrictInput
                                        className="address-input"
                                        placeholder="เลือกเขต / อำเภอ"

                                    />
                                </Flex>
                                <Flex className="จังหวัด" direction="column" >
                                    <Text marginBottom="0.5rem">จังหวัด<span style={{ color: "#C82438" }}>*</span></Text>
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
                    <Flex>
                    </Flex>
                </Flex>
                <Flex px="1.5rem" py="2rem" direction="column">
                    <FormLabel
                        htmlFor="additional-text"
                        marginBottom="0.5rem">
                        ระบุข้อมูลเพิ่มเติม
                    </FormLabel>
                    <Textarea
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