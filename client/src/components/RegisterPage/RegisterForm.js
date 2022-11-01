import React from 'react';
import { Container, Flex, Link, Text } from '@chakra-ui/react';
import { Formik, Field, Form } from 'formik';
import './registerPage.css'

const RegisterForm = () => {

    return (
        <Container maxW={'100%'} maxH={'100%'} bg='gray.100' py={'52px'} centerContent>
            <Formik
                initialValues={{
                    fullName: '',
                    phoneNumber: '',
                    password: '',
                    email: '',
                    acceptTerm: ''
                }}
                onSubmit={async (values) => {
                    console.log(values);
                }}
            >
                <Form>
                    <Flex flexDirection={'column'} w={614} bg='utility.white' borderRadius={'8px'} px={'87px'} py={'30px'}>
                        <Text textStyle={'h1'} color='blue.950' textAlign={'center'}>ลงทะเบียน</Text>
                        <label htmlFor="fullName">
                            ชื่อ - นามสกุล<span className='star'>*</span>
                            <Field id="fullName" name="fullName" placeholder="กรุณากรอกชื่อ นามสกุล" />
                        </label>
                        <label htmlFor="phoneNumber">
                            เบอร์โทรศัพท์<span className='star'>*</span>
                            <Field id="phoneNumber" name="phoneNumber" placeholder="กรุณากรอกเบอร์โทรศัพท์" />
                        </label>
                        <label htmlFor="email">
                            อีเมล<span className='star'>*</span>
                            <Field id="email" name="email" placeholder="กรุณากรอกอีเมล" />
                        </label>
                        <label htmlFor="password">
                            รหัสผ่าน<span className='star'>*</span>
                            <Field id="password" name="password" placeholder="กรุณากรอกรหัสผ่าน" />
                        </label>
                        <Flex my={'45px'}>

                            <Field id='checkbox' type="checkbox" name="acceptTerm" />
                            <label htmlFor='checkbox' />
                            <Text ml={'16px'} >{`ยอมรับ `}
                                <Link textStyle='button' color='blue.600' textDecoration={'underline'} _hover={{ color: 'blue.400' }} _active={{ color: 'blue.600' }}>ข้อตกลงและเงื่อนไข</Link>
                                <span>{` และ `}</span>
                                <Link textStyle='button' color='blue.600' textDecoration={'underline'} _hover={{ color: 'blue.400' }} _active={{ color: 'blue.600' }}>นโยบายความเป็นส่วนตัว </Link>
                            </Text>
                        </Flex>
                        <button id='btnRegister' type="submit">ลงทะเบียน</button>
                    </Flex >
                </Form>
            </Formik >

        </Container >

    )
}

export default RegisterForm