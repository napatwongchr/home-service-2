import React from 'react';
import { Container, Flex, Link, Text } from '@chakra-ui/react';
import { useFormik } from 'formik';
import './registerPage.css'

const RegisterForm = () => {
    const validate = values => {
        const errors = {};

        if (!values.fullName) {
            errors.fullName = 'กรุณากรอกชื่อ นามสกุล';
        } else if (values.fullName.split(' ').length !== 2) {
            errors.fullName = 'กรุณาเว้นวรรคระหว่างชื่อ และนามสกุล'
        }

        if (!values.phoneNumber) {
            errors.phoneNumber = 'กรุณากรอกเบอร์โทรศัพท์';
        } else if (/\D/.test(values.phoneNumber)) {
            errors.phoneNumber = 'กรุณากรอกตัวเลข 0-9';
        } else if (!/[0-9]{10}/.test(values.phoneNumber)) {
            errors.phoneNumber = 'กรุณาตรวจสอบเบอร์โทรอีกครั้ง';
        } else if (/[0-9]{11,}/.test(values.phoneNumber)) {
            errors.phoneNumber = 'กรุณาตรวจสอบเบอร์โทรอีกครั้ง';
        }

        if (!values.email) {
            errors.email = 'กรุณากรอกอีเมล';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'กรุณาตรวจสอบอีเมลอีกครั้ง';
        }

        if (!values.password) {
            errors.password = 'กรุณากรอกรหัสผ่าน';
        } else if (!/[\w\W]{15,}/.test(values.password)) {
            errors.password = 'รหัสผ่านควรมีความยาวอย่างน้อย 15 ตัวอักษร';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            fullName: '',
            phoneNumber: '',
            email: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <Container maxW={'100%'} maxH={'100%'} bg='gray.100' py={'52px'} centerContent>
            <form onSubmit={formik.handleSubmit}>
                <Flex flexDirection={'column'} w={614} bg='utility.white' borderRadius={'8px'} px={'87px'} py={'30px'}>
                    <Text textStyle={'h1'} color='blue.950' textAlign={'center'}>ลงทะเบียน</Text>

                    {formik.touched.fullName && formik.errors.fullName ? (
                        <>
                            <label htmlFor="fullName" >ชื่อ - นามสกุล<span className='star'>*</span></label>
                            <input
                                className='error'
                                id="fullName"
                                name="fullName"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.fullName}
                                placeholder="กรุณากรอกชื่อ นามสกุล"
                            />
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.3996 6.99961C13.3996 10.5342 10.5342 13.3996 6.99961 13.3996C3.46499 13.3996 0.599609 10.5342 0.599609 6.99961C0.599609 3.46499 3.46499 0.599609 6.99961 0.599609C10.5342 0.599609 13.3996 3.46499 13.3996 6.99961ZM7.79961 10.1996C7.79961 10.6414 7.44144 10.9996 6.99961 10.9996C6.55778 10.9996 6.19961 10.6414 6.19961 10.1996C6.19961 9.75778 6.55778 9.39961 6.99961 9.39961C7.44144 9.39961 7.79961 9.75778 7.79961 10.1996ZM6.99961 2.99961C6.55778 2.99961 6.19961 3.35778 6.19961 3.79961V6.99961C6.19961 7.44144 6.55778 7.79961 6.99961 7.79961C7.44144 7.79961 7.79961 7.44144 7.79961 6.99961V3.79961C7.79961 3.35778 7.44144 2.99961 6.99961 2.99961Z" fill="#B80000" />
                            </svg>
                            <Text>{formik.errors.fullName}
                            </Text>
                        </>
                    ) : (
                        <>
                            <label htmlFor="fullName" >ชื่อ - นามสกุล<span className='star'>*</span></label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.fullName}
                                placeholder="กรุณากรอกชื่อ นามสกุล"
                            />
                        </>
                    )}

                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (

                        <>
                            <label htmlFor="phoneNumber">เบอร์โทรศัพท์<span className='star'>*</span> </label>
                            <input
                                className='error'
                                id="phoneNumber"
                                name="phoneNumber"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phoneNumber}
                                placeholder="กรุณากรอกเบอร์โทรศัพท์"
                            />
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.3996 6.99961C13.3996 10.5342 10.5342 13.3996 6.99961 13.3996C3.46499 13.3996 0.599609 10.5342 0.599609 6.99961C0.599609 3.46499 3.46499 0.599609 6.99961 0.599609C10.5342 0.599609 13.3996 3.46499 13.3996 6.99961ZM7.79961 10.1996C7.79961 10.6414 7.44144 10.9996 6.99961 10.9996C6.55778 10.9996 6.19961 10.6414 6.19961 10.1996C6.19961 9.75778 6.55778 9.39961 6.99961 9.39961C7.44144 9.39961 7.79961 9.75778 7.79961 10.1996ZM6.99961 2.99961C6.55778 2.99961 6.19961 3.35778 6.19961 3.79961V6.99961C6.19961 7.44144 6.55778 7.79961 6.99961 7.79961C7.44144 7.79961 7.79961 7.44144 7.79961 6.99961V3.79961C7.79961 3.35778 7.44144 2.99961 6.99961 2.99961Z" fill="#B80000" />
                            </svg>
                            <Text>{formik.errors.phoneNumber}
                            </Text>
                        </>
                    ) : (
                        <>
                            <label htmlFor="phoneNumber">เบอร์โทรศัพท์<span className='star'>*</span> </label>
                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phoneNumber}
                                placeholder="กรุณากรอกเบอร์โทรศัพท์"
                            />
                        </>
                    )}


                    {formik.touched.email && formik.errors.email ? (
                        <>
                            <label htmlFor="email">อีเมล<span className='star'>*</span></label>
                            <input
                                className='error'
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                placeholder="กรุณากรอกอีเมล"
                            />
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.3996 6.99961C13.3996 10.5342 10.5342 13.3996 6.99961 13.3996C3.46499 13.3996 0.599609 10.5342 0.599609 6.99961C0.599609 3.46499 3.46499 0.599609 6.99961 0.599609C10.5342 0.599609 13.3996 3.46499 13.3996 6.99961ZM7.79961 10.1996C7.79961 10.6414 7.44144 10.9996 6.99961 10.9996C6.55778 10.9996 6.19961 10.6414 6.19961 10.1996C6.19961 9.75778 6.55778 9.39961 6.99961 9.39961C7.44144 9.39961 7.79961 9.75778 7.79961 10.1996ZM6.99961 2.99961C6.55778 2.99961 6.19961 3.35778 6.19961 3.79961V6.99961C6.19961 7.44144 6.55778 7.79961 6.99961 7.79961C7.44144 7.79961 7.79961 7.44144 7.79961 6.99961V3.79961C7.79961 3.35778 7.44144 2.99961 6.99961 2.99961Z" fill="#B80000" />
                            </svg>
                            <Text>{formik.errors.email}
                            </Text>
                        </>
                    ) : (
                        <>
                            <label htmlFor="email">อีเมล<span className='star'>*</span></label>
                            <input
                                className='success'
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                placeholder="กรุณากรอกอีเมล"
                            />
                        </>
                    )}


                    {formik.touched.password && formik.errors.password ? (
                        <>
                            <label htmlFor="password">รหัสผ่าน<span className='star'>*</span></label>
                            <input
                                className='error'
                                id="password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                placeholder="กรุณากรอกรหัสผ่าน"
                            />
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.3996 6.99961C13.3996 10.5342 10.5342 13.3996 6.99961 13.3996C3.46499 13.3996 0.599609 10.5342 0.599609 6.99961C0.599609 3.46499 3.46499 0.599609 6.99961 0.599609C10.5342 0.599609 13.3996 3.46499 13.3996 6.99961ZM7.79961 10.1996C7.79961 10.6414 7.44144 10.9996 6.99961 10.9996C6.55778 10.9996 6.19961 10.6414 6.19961 10.1996C6.19961 9.75778 6.55778 9.39961 6.99961 9.39961C7.44144 9.39961 7.79961 9.75778 7.79961 10.1996ZM6.99961 2.99961C6.55778 2.99961 6.19961 3.35778 6.19961 3.79961V6.99961C6.19961 7.44144 6.55778 7.79961 6.99961 7.79961C7.44144 7.79961 7.79961 7.44144 7.79961 6.99961V3.79961C7.79961 3.35778 7.44144 2.99961 6.99961 2.99961Z" fill="#B80000" />
                            </svg>
                            <Text>{formik.errors.password}
                            </Text>
                        </>
                    ) : (
                        <>
                            <label htmlFor="password">รหัสผ่าน<span className='star'>*</span></label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                placeholder="กรุณากรอกรหัสผ่าน"
                            />
                        </>
                    )}

                    <Flex mt={'20px'} mb={'40px'} alignItems='center'>
                        <input
                            id='checkbox'
                            type="checkbox"
                            name="acceptTerms"
                            value={formik.values.acceptTerms}
                        />
                        <label htmlFor="checkbox">
                            <Text ml={'16px'} >{`ยอมรับ `}
                                <Link textStyle='button' color='blue.600' textDecoration={'underline'} _hover={{ color: 'blue.400' }} _active={{ color: 'blue.600' }}>ข้อตกลงและเงื่อนไข</Link>
                                <span>{` และ `}</span>
                                <Link textStyle='button' color='blue.600' textDecoration={'underline'} _hover={{ color: 'blue.400' }} _active={{ color: 'blue.600' }}>นโยบายความเป็นส่วนตัว </Link>
                            </Text>
                        </label>
                    </Flex>

                    <button id='btnRegister' type="submit">ลงทะเบียน</button>
                </Flex>
            </form>
        </Container >

    );
}

export default RegisterForm