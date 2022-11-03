import React, { useState } from 'react';
import { Container, Flex, Link, Text } from '@chakra-ui/react';
import { Formik, Form, } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../contexts/authentication'
import { MyTextInput, MyCheckbox } from '../../utils/formInput'
import axios from '../../api/axios';
import './registerPage.css';

const RegisterForm = () => {
    const { register } = useAuth()
    const [msg, setMsg] = useState('')

    return (
        <Container maxW={'100%'} minH={'100%'} py={'52px'} bg={'gray.100'} centerContent>
            <Flex flexDirection={'column'} w={614} bg='utility.white' borderRadius={'8px'} px={'87px'} py={'30px'}>
                <Text textStyle={'h1'} color='blue.950' textAlign={'center'}>ลงทะเบียน</Text>
                <Formik
                    initialValues={{
                        fullname: '',
                        phoneNumber: '',
                        email: '',
                        password: '',
                        acceptedTerms: false,
                    }}
                    // validate
                    validationSchema={Yup.object({
                        fullname: Yup.string()
                            .required('กรุณากรอกชื่อ นามสกุล'),
                        phoneNumber: Yup.string()
                            .required('กรุณากรอกเบอร์โทรศัพท์')
                            .matches(/^[0-9]{10}$/, 'กรุณาตรวจสอบเบอร์โทรศัพท์'),
                        email: Yup.string()
                            .email('กรุณาตรวจสอบอีเมลอีกครั้ง')
                            .required('กรุณากรอกอีเมล')
                            .test('Unique Email', msg,
                                async function (value) {
                                    try {
                                        const response = await axios.get(`/users?email=${value}`)
                                        if (response.data.data[0]) {
                                            setMsg('อีเมลนี้มีคนใช้แล้ว กรุณาเปลี่ยนอีเมลใหม่')
                                        } else {
                                            setMsg('')
                                        }
                                    }
                                    catch (err) {
                                        console.log(err);
                                    }
                                }
                            )
                        ,
                        password: Yup.string()
                            .required('กรุณากรอกรหัสผ่าน')
                            .min(16, 'รหัสผ่านต้องมีความยาวอย่างน้อย 16 ตัวอักษร')
                            .matches(/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d\W]{16,}$/, 'รหัสผ่านต้องมีตัวอักษรภาษาอังกฤกตัวเล็กและตัวใหญ่รวมอยู่ด้วย'),
                        acceptedTerms: Yup.boolean()
                            .oneOf([true], 'กรุณาอ่านรายละเอียด และยอมรับข้อตกลง'),
                    })}
                    onSubmit={(values) => {
                        register(values);
                    }}
                >
                    <Form>
                        <MyTextInput
                            label="ชื่อ - นามสกุล"
                            id="fullname"
                            name="fullname"
                            type="text"
                            placeholder="กรุณากรอกชื่อ นามสกุล"
                        />
                        <MyTextInput
                            label="เบอร์โทรศัพท์"
                            id="phoneNumber"
                            name="phoneNumber"
                            type="string"
                            placeholder="กรุณากรอกเบอร์โทรศัพท์"
                        />

                        <MyTextInput
                            label="เบอร์โทรศัพท์"
                            id="phoneNumber"
                            name="phoneNumber"
                            type="string"
                            placeholder="กรุณากรอกเบอร์โทรศัพท์"
                            w={'440px'} h={'44px'}
                        />

                        <MyTextInput
                            label="อีเมล"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="กรุณากรอกอีเมล"
                            autoComplete="username"
                            w={'440px'} h={'44px'}
                        />

                        <MyTextInput
                            label="รหัสผ่าน"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="กรุณากรอกรหัสผ่าน"
                            autoComplete="current-password"
                            w={'440px'} h={'44px'}
                        />

                        <MyCheckbox
                            id='checkbox'
                            name="acceptedTerms"
                        >
                            <Flex mt={'8px'} ml={'16px'} alignItems={'center'} gap={'3px'}>{`ยอมรับ `}
                                <Link textStyle='button'>
                                    <Button variant='ghost' p={0}>
                                        ข้อตกลงและเงื่อนไข
                                    </Button>
                                </Link>
                                <span>{` และ `}</span>
                                <Link textStyle='button'>
                                    <Button variant='ghost' p={0}>
                                        นโยบายความเป็นส่วนตัว
                                    </Button>
                                </Link>
                            </Flex>
                        </MyCheckbox>
                        <Button type='submit' w='440px' h='44px' mt='30px' mb='25px'>ลงทะเบียน</Button>
                    </Form>
                </Formik>
            </Flex>
        </Container>
    );
}

export default RegisterForm