import React from 'react';
import { Container, Flex, Link, Text } from '@chakra-ui/react';
import { Formik, Form, } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../contexts/authentication'
import { MyTextInput, MyCheckbox } from '../../utils/formInput'
import './registerPage.css';

const RegisterForm = () => {
    const { register } = useAuth()
    return (
        <div className='bg-register'>
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
                                .required('กรุณากรอกอีเมล'),
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
                                label="อีเมล"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="กรุณากรอกอีเมล"
                                autoComplete="username"
                            />

                            <MyTextInput
                                label="รหัสผ่าน"
                                id="password"
                                name="password"
                                type="password"
                                placeholder="กรุณากรอกรหัสผ่าน"
                                autoComplete="current-password"
                            />



                            <MyCheckbox
                                id='checkbox'
                                name="acceptedTerms"
                            >
                                <Text ml={'16px'} >{`ยอมรับ `}
                                    <Link textStyle='button' color='blue.600' textDecoration={'underline'} _hover={{ color: 'blue.400' }} _active={{ color: 'blue.600' }}>ข้อตกลงและเงื่อนไข</Link>
                                    <span>{` และ `}</span>
                                    <Link textStyle='button' color='blue.600' textDecoration={'underline'} _hover={{ color: 'blue.400' }} _active={{ color: 'blue.600' }}>นโยบายความเป็นส่วนตัว </Link>
                                </Text>
                            </MyCheckbox>

                            <button id='btnRegister' type="submit">ลงทะเบียน</button>
                        </Form>
                    </Formik>
                </Flex>
            </Container>
        </div>
    );
}

export default RegisterForm