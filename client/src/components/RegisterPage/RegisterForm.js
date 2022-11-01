import React from 'react';
import { Container, Flex, Input, Text } from '@chakra-ui/react';
import { Formik, Field, Form } from 'formik';

const RegisterForm = () => {

    return (
        <Container maxW={'100%'} maxH={'100%'} bg='gray.100' py={'52px'} centerContent>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <Flex flexDirection={'column'} w={614} h={832} bg='utility.white' borderRadius={'8px'} px={'87px'} py={'30px'}>
                        <Text textStyle={'h1'} color='blue.950' textAlign={'center'}>ลงทะเบียน</Text>
                        <label htmlFor="fullName">ชื่อ - นามสกุล*</label>
                        <Field id="fullName" name="fullName" placeholder="กรุณากรอกชื่อ นามสกุล">

                        </Field>

                        <label htmlFor="lastName">Last Name</label>
                        <Field id="lastName" name="lastName" placeholder="Doe" />

                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                        />
                        <button type="submit">Submit</button>
                    </Flex >
                </Form>
            </Formik>

        </Container>

    )
}

export default RegisterForm