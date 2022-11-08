import React from 'react';
import { useField } from 'formik';
import { Flex, Text, Input, FormLabel, Image, Checkbox, Box } from '@chakra-ui/react';
import errorIcon from '../asset/image/errorIcon.svg'
const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            {meta.touched && meta.error ? (
                <Flex flexDirection={'column'} alignContent='start' mb='20px'>
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
                    <Box pos='relative'>
                        <Input variant={'error'} {...field} {...props} />
                        <Image src={errorIcon} pos='absolute' top='13px' left='412px' bottom={'29px'} w={'14px'} />
                        <Text fontStyle={'b4'} color='utility.red' pos='absolute' bottom={'-30px'}>{meta.error}</Text>
                    </Box>
                </Flex>
            ) :
                <Flex flexDirection={'column'} alignContent='start' mb='20px'>
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
                    <Flex mb={'0px'} alignItems='center' justifyContent={'center'} pos='relative'>
                        <Checkbox type="checkbox" {...field} {...props} />
                        <FormLabel htmlFor="checkbox">
                            {children}
                        </FormLabel>
                        <Text fontStyle={'b4'} color='utility.red' pos='absolute' top='42px' left='0px'>{meta.error}</Text>
                    </Flex>
                </>
            ) :
                <Flex alignItems='center' justifyContent={'center'}>
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