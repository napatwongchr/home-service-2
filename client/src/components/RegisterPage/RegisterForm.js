import React from 'react';
import { Container, Flex, Link, Text } from '@chakra-ui/react';
import { Formik, Form, } from 'formik';
<<<<<<< HEAD
import * as Yup from 'yup';
import { useAuth } from '../../contexts/authentication'
import { MyTextInput, MyCheckbox } from '../../utils/formInput'
import './registerPage.css';
=======
import * as Yup from 'yup'; import './registerPage.css'
// import { validate } from '../../utils/validation'
import { useAuth } from '../../contexts/authentication'
import { MyTextInput, MyCheckbox } from '../../utils/formInput'
>>>>>>> 217065bd677e83e17bf769ced5b01e5390a47289

const RegisterForm = () => {
    const { register } = useAuth()
    return (
<<<<<<< HEAD
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
                                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{16,}$/, 'รหัสผ่านต้องมีความยาวอย่างน้อย 16 ตัวอักษร และมีทั้งตัวอักษรภาษาอังกฤษตัวเล็ก และตัวใหญ่ '),
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
=======
        <Container maxW={'100%'} maxH={'100%'} bg='gray.100' py={'52px'} centerContent>
            <Flex flexDirection={'column'} w={614} bg='utility.white' borderRadius={'8px'} px={'87px'} py={'30px'}>
                <Text textStyle={'h1'} color='blue.950' textAlign={'center'}>ลงทะเบียน</Text>
                <Formik
                    initialValues={{
                        fullName: '',
                        phoneNumber: '',
                        email: '',
                        password: '',
                        acceptedTerms: false,
                    }}
                    // validate
                    validationSchema={Yup.object({
                        fullName: Yup.string()
                            .required('กรุณากรอกชื่อ นามสกุล'),
                        phoneNumber: Yup.string()
                            .required('กรุณากรอกเบอร์โทรศัพท์')
                            .matches(/^[0-9]{10}$/, 'Test'),
                        email: Yup.string()
                            .email('กรุณาตรวจสอบอีเมลอีกครั้ง')
                            .required('กรุณากรอกอีเมล'),
                        password: Yup.string()
                            .required('กรุณากรอกรหัสผ่าน')
                            .min(15, 'รหัสผ่านควรมีความยาวอย่างน้อย 15 ตัวอักษร'),
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
                            id="fullName"
                            name="fullName"
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
        </Container >
>>>>>>> 217065bd677e83e17bf769ced5b01e5390a47289
    );
}

export default RegisterForm