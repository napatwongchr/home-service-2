import React from 'react';
import { Container, Flex, Link, Text } from '@chakra-ui/react';
import { Formik, Field, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import './registerPage.css'

const RegisterForm = () => {

    const validate = values => {
        const errors = {};

        if (!values.fullName) {
            errors.fullName = 'Required';
        } else if (values.fullName.length > 15) {
            errors.fullName = 'Must be 15 characters or less';
        }

        if (!values.phoneNumber) {
            errors.phoneNumber = 'Required';
        } else if (values.phoneNumber.length > 20) {
            errors.phoneNumber = 'Must be 20 characters or less';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            fullName: '',
            phoneNumber: '',
            email: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="fullName">First Name</label>
            <input
                id="fullName"
                name="fullName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
                <div>{formik.errors.fullName}</div>
            ) : null}

            <label htmlFor="phoneNumber">Last Name</label>
            <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div>{formik.errors.phoneNumber}</div>
            ) : null}

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}

            <button type="submit">Submit</button>
        </form>
    );


}

export default RegisterForm