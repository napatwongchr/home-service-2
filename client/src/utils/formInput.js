import React from 'react';
import { useField } from 'formik';
import { Flex, Text } from '@chakra-ui/react';

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            {meta.touched && meta.error ? (
                <Flex flexDirection={'column'}>
                    <label htmlFor={props.id || props.name}>{label}<span className='star'>*</span></label>
                    <input className="error" {...field} {...props} />
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.3996 6.99961C13.3996 10.5342 10.5342 13.3996 6.99961 13.3996C3.46499 13.3996 0.599609 10.5342 0.599609 6.99961C0.599609 3.46499 3.46499 0.599609 6.99961 0.599609C10.5342 0.599609 13.3996 3.46499 13.3996 6.99961ZM7.79961 10.1996C7.79961 10.6414 7.44144 10.9996 6.99961 10.9996C6.55778 10.9996 6.19961 10.6414 6.19961 10.1996C6.19961 9.75778 6.55778 9.39961 6.99961 9.39961C7.44144 9.39961 7.79961 9.75778 7.79961 10.1996ZM6.99961 2.99961C6.55778 2.99961 6.19961 3.35778 6.19961 3.79961V6.99961C6.19961 7.44144 6.55778 7.79961 6.99961 7.79961C7.44144 7.79961 7.79961 7.44144 7.79961 6.99961V3.79961C7.79961 3.35778 7.44144 2.99961 6.99961 2.99961Z" fill="#B80000" />
                    </svg>
<<<<<<< HEAD
                    <Text className='text-error'>{meta.error}</Text>
=======
                    <Text>{meta.error}</Text>
>>>>>>> 217065bd677e83e17bf769ced5b01e5390a47289
                </Flex>
            ) :
                <Flex flexDirection={'column'}>
                    <label htmlFor={props.id || props.name}>{label}<span className='star'>*</span></label>
                    <input className="text-input" {...field} {...props} />
                </Flex>
            }
        </>
    );
};

const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <>
            {meta.touched && meta.error ? (
                <>
                    <Flex mt={'20px'} mb={'0px'} alignItems='center' justifyContent={'center'}>
                        <input type="checkbox" {...field} {...props} />
                        <label htmlFor="checkbox">
                            {children}
                        </label>
                    </Flex>
<<<<<<< HEAD
                    <Text className='text-error'>{meta.error}</Text>
=======
                    <Text>{meta.error}</Text>
>>>>>>> 217065bd677e83e17bf769ced5b01e5390a47289
                </>
            ) :
                <Flex mt={'20px'} alignItems='center' justifyContent={'center'}>
                    <input type="checkbox" {...field} {...props} />
                    <label htmlFor="checkbox">
                        {children}
                    </label>
                </Flex>
            }

        </ >


    );
};

export { MyTextInput, MyCheckbox }