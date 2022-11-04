import React from 'react';
import { useField } from 'formik';
import { Flex, Text, Input, FormLabel, Image, Checkbox } from '@chakra-ui/react';
import errorIcon from '../asset/image/errorIcon.svg'
const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            {meta.touched && meta.error ? (
                <Flex flexDirection={'column'}>
                    <FormLabel
                        mt={'20px'}
                        mb={'4px'}
                        fontStyle='h5'
                        color={'gray.900'}
                        htmlFor={props.id || props.name}

                    >
                        <Flex fontStyle={'h5'}>
                            <Text color={'gray.900'}>{label}</Text><Text color={'utility.red'}>*</Text>
                        </Flex>
                    </FormLabel>
                    <Input variant={'error'} {...field} {...props} />
                    <Image src={errorIcon} pos='relative' left='412px' bottom={'29px'} w={'14px'} />
                    <Text fontStyle={'b4'} color='utility.red'>{meta.error}</Text>
                </Flex>
            ) :
                <Flex flexDirection={'column'}>
                    <FormLabel
                        mt={'20px'}
                        mb={'4px'}
                        fontStyle='h5'
                        color={'gray.900'}
                        htmlFor={props.id || props.name}

                    >
                        <Flex fontStyle={'h5'}>
                            <Text color={'gray.900'}>{label}</Text><Text color={'utility.red'}>*</Text>
                        </Flex>
                    </FormLabel>
                    <Input variant={meta.touched ? 'success' : 'default'} {...field} {...props} />
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
                        <Checkbox type="checkbox" {...field} {...props} />
                        <FormLabel htmlFor="checkbox">
                            {children}
                        </FormLabel>
                    </Flex>
                    <Text fontStyle={'b4'} color='utility.red'>{meta.error}</Text>
                </>
            ) :
                <Flex mt={'20px'} alignItems='center' justifyContent={'center'}>
                    <Checkbox type="checkbox" {...field} {...props} />
                    <FormLabel htmlFor="checkbox">
                        {children}
                    </FormLabel>
                </Flex>
            }

        </ >


    );
};

export { MyTextInput, MyCheckbox }