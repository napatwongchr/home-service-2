import { Box, Button, Container, Divider, Flex, FormLabel, Image, Img, Input, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import arrow from "../../asset/image/serviceListPage/dropdown.svg";
import imageIcon from '../../asset/image/adminServiceList/imageIcon.svg';
import bathIcon from '../../asset/image/adminServiceList/bathIcon.svg';
import plusIcon from '../../asset/image/adminDashboardPage/plusIcon.svg';
import { Formik, Form, FieldArray, Field } from 'formik';
import { MyFieldInput } from '../../utils/formInput';
import * as Yup from 'yup';
import NavCreateService from "../AdminPage/NavCreateService";
import errorIcon from '../../asset/image/errorIcon.svg'
import UploadComponent from "../../utils/dragDropFile";
import useServiceCategories from "../../hooks/useServiceCategories";
import useAdminServiceLists from "../../hooks/useAdminServiceLists";
import binIcon from "../../asset/image/serviceCategory/bin-icon.svg";
import warningICon from "../../asset/image/serviceCategory/warning-icon.svg";

const EditCreateServiceList = () => {
    const formData = new FormData();
    const [serviceId, setServiceId] = useState ('')
    const [serviceName, setServiceName] = useState('');
    const [serviceCategory, setServiceCategory] = useState('');
    const [serviceImage, setServiceImage] = useState('');
    const [serviceImageSize, setServiceImageSize] = useState('');
    const [subServiceArr, setSubServiceArr] = useState([]);
    const [serviceCreatedAt, setServiceCreatedAt] = useState('');
    const [serviceUpdatedAt, setServiceUpdatedAt] = useState('');

    const { serviceCategories, getServiceCategories } = useServiceCategories()
    const { params, getServiceListById, serviceList, updateServiceListById, deleteServiceList } = useAdminServiceLists()

    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        getServiceListById(params)
        getServiceCategories();
    }, []);

    useEffect(() => {
        if (serviceList.service) {
            setServiceId(serviceList.service.service_id)
            setServiceName(serviceList.service.service_name);
            setServiceCategory(serviceList.service.service_category_name);
            setServiceImage(serviceList.service.url);
            setSubServiceArr(serviceList.subService);
            setServiceImageSize(serviceList.service.bytes)
            setServiceCreatedAt(serviceList.service.created_at)
            setServiceUpdatedAt(serviceList.service.updated_at)

        }
    }, [serviceList]);

    const initialValues = {
        serviceName: serviceName,
        serviceCategory: serviceCategory,
        serviceImage: serviceImage,
        serviceList: subServiceArr,
    };

    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={Yup.object({
                serviceName: Yup.string()
                    .required('กรุณากรอกชื่อบริการ'),
                serviceCategory: Yup.string()
                    .test("UNSELECTED", "กรุณาเลือกหมวดหมู่บริการ", value => (value && value !== 'เลือกหมวดหมู่')),
                serviceImage: Yup.mixed()
                    .required('กรุณาใส่รูปบริการ')
                    .test("FILE_SIZE", "ไฟล์รูปภาพมีขนาดใหญ่เกิน 5MB", value => (value && (value.size || serviceImageSize) <= 5000000)),
                serviceList: Yup.array().of(Yup.object({
                    sub_service_name: Yup.string().required('กรุณากรอกชื่อรายการ'),
                    price_per_unit: Yup.string().required('กรุณากรอกค่าบริการ').matches(/\d/g, 'กรุณากรอกค่าบริการเป็นตัวเลข'),
                    unit_name: Yup.string().required('กรุณากรอกหน่วยบริการ')
                }))
            })}
            onSubmit={async (values) => {
                formData.append('serviceName', (values.serviceName));
                formData.append('serviceCategory', (values.serviceCategory));
                formData.append('serviceImage', (values.serviceImage));
                formData.append('serviceList', JSON.stringify(values.serviceList));
                updateServiceListById(params, formData)
            }}
        >
            {({ values, handleSubmit, setFieldValue, errors, touched }) => (
                <Box w='100%' maxH='100%' overflow='hidden'>
                    <Form onSubmit={handleSubmit}>
                        <NavCreateService submit='ยืนยัน' to='/admin-dashboard/services'>เพิ่มบริการ</NavCreateService>
                        <Container maxW='100%' p='40px' minH='calc(100% - 3.25rem)' bg='gray.100'>
                            <Flex bg='utility.white' px='24px' py='40px' mb='20px' border='1px' borderColor='gray.200' borderRadius='8px' flexDirection='column' gap='40px'>
                                <Flex alignItems='start'>
                                    <FormLabel
                                        mt={'20px'}
                                        mb={'4px'}
                                        fontStyle='h5'
                                        color={'gray.900'}
                                        htmlFor={'serviceName'}

                                    >
                                        <Flex fontStyle={'h5'} pos='relative' top='-5px' w='205px'>
                                            <Text color={'gray.700'} >ชื่อบริการ</Text><Text color={'utility.red'}>*</Text>
                                        </Flex>
                                    </FormLabel>
                                    {errors.serviceName && touched.serviceName ? (

                                        <Flex flexDirection={'column'} pos='relative'>
                                            <Field as={Input}
                                                variant='error'
                                                id="serviceName"
                                                name="serviceName"
                                                type="text"
                                                w={'440px'} h={'44px'}
                                                value={serviceName}
                                                onChange={(e) => setFieldValue('serviceName', e.target.value)}
                                            />
                                            <Image src={errorIcon} pos='absolute' left='412px' bottom={'15px'} w={'14px'} />
                                            <Text textStyle={'b2'} color='utility.red' pos='absolute' bottom={'-30px'}>{errors.serviceName}</Text>
                                        </Flex>

                                    ) :
                                        <Flex flexDirection={'column'}>
                                            <Field as={Input}
                                                id="serviceName"
                                                name="serviceName"
                                                type="text"
                                                w={'440px'} h={'44px'}
                                                onChange={(e) => setFieldValue('serviceName', e.target.value)} />
                                        </Flex>
                                    }
                                </Flex>

                                <Flex alignItems='start' mt={'20px'}>
                                    <FormLabel
                                        mt={'20px'}
                                        mb={'4px'}
                                        fontStyle='h5'
                                        color={'gray.900'}
                                        htmlFor={'serviceCategory'}

                                    >
                                        <Flex fontStyle={'h5'} pos='relative' top='-6px' w='205px'>
                                            <Text color={'gray.700'} >หมวดหมู่</Text><Text color={'utility.red'}>*</Text>
                                        </Flex>
                                    </FormLabel>
                                    <Menu>
                                        {errors.serviceCategory && touched.serviceCategory ? (

                                            <Flex flexDirection={'column'} pos='relative'>
                                                <MenuButton as={Button} variant='secondary' borderColor={'utility.red'} w={'440px'} h={'44px'} textAlign='left' rightIcon={<Image src={arrow} />} border='1px'
                                                    pos='relative'>
                                                    <Text color={'gray.700'} textStyle='b2'>{serviceCategory} </Text>
                                                </MenuButton>
                                                <Image src={errorIcon} pos='absolute' left='412px' bottom={'15px'} w={'14px'} />
                                                <Text textStyle={'b2'} color='utility.red' pos='absolute' bottom={'-30px'}>{errors.serviceCategory}</Text>
                                            </Flex>


                                        ) :
                                            <MenuButton as={Button} variant='secondary' w={'440px'} h={'44px'} textAlign='left' rightIcon={<Image src={arrow} />} border='1px'
                                                borderColor='gray.300' pos='relative'>
                                                <Text color={'gray.700'} textStyle='b2'>{serviceCategory} </Text>
                                            </MenuButton>
                                        }

                                        <MenuList
                                            minW="0px"
                                            w='440px'
                                            py="6px"
                                            borderRadius={8}
                                            bg={'utility.white'}
                                            boxShadow={'lg'}
                                            border='none'
                                            textStyle={'b2'}
                                            color='gray.700'
                                            pos='absolute'
                                            top='-8px'
                                            zIndex={200}
                                        >
                                            {
                                                serviceCategories.map(item => {
                                                    return (
                                                        <MenuItem key={item.service_category_id} px={'16px'} h='44px' _hover={{ bg: 'gray.100' }}
                                                            color={serviceCategory === item.service_category_name ? 'blue.700' : null}
                                                            onClick={() => {
                                                                setFieldValue('serviceCategory', item.service_category_name);
                                                                setServiceCategory(item.service_category_name);
                                                            }}
                                                        >
                                                            {item.service_category_name}
                                                        </MenuItem>
                                                    )
                                                })
                                            }
                                        </MenuList>
                                    </Menu>
                                </Flex>
                                <Flex alignItems='start' mt={'20px'}>
                                    <FormLabel
                                        mt={'20px'}
                                        mb={'4px'}
                                        fontStyle='h5'
                                        color={'gray.900'}
                                    >
                                        <Flex fontStyle={'h5'} pos='relative' top='-6px' w='205px'>
                                            <Text color={'gray.700'} >รูปภาพ</Text><Text color={'utility.red'}>*</Text>
                                        </Flex>
                                    </FormLabel>
                                    <Flex flexDirection={'column'}>
                                        <UploadComponent setFieldValue={setFieldValue} />

                                        {values.serviceImage ?
                                            <Box pos='relative' overflow='hidden' display={'flex'} justifyContent='center'>
                                                <FormLabel pos='relative' display='flex' flexDirection='column' gap='12px' alignItems='center' w={'440px'} h={'180px'}
                                                    border='1px dashed' borderColor='gray.300' textStyle='b3' color='gray.700' py='35px' overflow='hidden' objectFit={'fill'} left='0px'>
                                                    {typeof values.serviceImage === 'string' ?
                                                        <Image src={values.serviceImage} alt={values.serviceName} pos='absolute' top={0} h='180px' maxW='440px' /> : <Image src={URL.createObjectURL(values.serviceImage)} alt={values.serviceImage.name} pos='absolute' top={0} h='180px' maxW='440px' />
                                                    }
                                                </FormLabel>
                                            </Box>
                                            : <FormLabel pos='relative' display='flex' flexDirection='column' gap='12px' alignItems='center' w={'440px'} h={'180px'}
                                                border='1px dashed' borderColor='gray.300' textStyle='b3' color='gray.700' py='35px' overflow='hidden' objectFit={'fill'}>

                                                <Image src={imageIcon} w='36px' />
                                                <Text display='flex'><FormLabel m='0' mr='6px' htmlFor='serviceImage' color='blue.600' cursor={'pointer'} >อัพโหลดรูปภาพ</FormLabel>หรือ ลากและวางที่นี่</Text>
                                                <Text>PNG, JPG ขนาดไม่เกิน 5MB</Text>
                                            </FormLabel>}
                                        <Flex justifyContent={'space-between'} pos='relative'>
                                            {errors.serviceImage && touched.serviceImage ? (
                                                <Text textStyle={'b2'} color='utility.red'>{errors.serviceImage}</Text>
                                            ) : <Text color={'gray.700'} textStyle='b2'>ขนาดภาพที่แนะนำ: 1440 x 225 PX</Text>
                                            }
                                            {values.serviceImage ? <Button variant={'ghost'} textStyle='button' h='15px' pos='absolute' right={0} top='10px' onClick={() => setFieldValue('serviceImage', '')}>ลบรูปภาพ</Button> : null}
                                        </Flex>
                                    </Flex>
                                </Flex>
                                <Divider />
                                <Text color={'gray.700'} textStyle={'h5'} mb='-30px'>รายการบริการย่อย</Text>

                                <FieldArray name='serviceList'>
                                    {({ remove, push }) => (
                                        <div>
                                            {values.serviceList.map((item, index) => (
                                                <Flex gap='10px' alignItems={'end'} key={index}>
                                                    <MyFieldInput
                                                        label="ชื่อรายการ"
                                                        id={`serviceList.${index}.sub_service_name`}
                                                        name={`serviceList.${index}.sub_service_name`}
                                                        type="text"
                                                        w={'440px'} h={'44px'} mt='0'

                                                    />
                                                    <MyFieldInput
                                                        label="ค่าบริการ / 1 หน่วย"
                                                        id={`serviceList.${index}.price_per_unit`}
                                                        name={`serviceList.${index}.price_per_unit`}
                                                        type="text"
                                                        w={'240px'} h={'44px'} mt='0'
                                                    />
                                                    <MyFieldInput
                                                        label="หน่วยการบริการ"
                                                        id={`serviceList.${index}.unit_name`}
                                                        name={`serviceList.${index}.unit_name`}
                                                        type="text"
                                                        w={'240px'} h={'44px'} mt='0'

                                                    />
                                                    <Img src={bathIcon} alt={bathIcon} pos='relative' top='-35px' left='-30px' />
                                                    <Button pos='relative' top='-20px' variant={'ghost'} onClick={() => values.serviceList.length > 1 && remove(index)}>ลบรายการ</Button>
                                                </Flex>
                                            ))}
                                            <Button variant={'secondary'} rightIcon={<Image src={plusIcon} />} mt='40px' px='25px'
                                                onClick={() => push({
                                                    sub_service_name: '',
                                                    price_per_unit: '',
                                                    unit_name: ''
                                                })}>
                                                เพิ่มรายการ
                                            </Button>
                                        </div>
                                    )}
                                </FieldArray>
                                <Divider />
                                <Box className="info">
                                    <Flex className="created-info" marginBottom={"2rem"}>
                                        <Text textStyle="h5" marginRight="24px" width={"205px"}>
                                            สร้างเมื่อ
                                        </Text>
                                        <Text className="created-at">
                                            {serviceCreatedAt}
                                        </Text>
                                    </Flex>
                                    <Flex className="edited-info">
                                        <Text textStyle="h5" marginRight="24px" width={"205px"}>
                                            แก้ไขล่าสุด
                                        </Text>
                                        <Text className="edited-at">
                                            {serviceUpdatedAt}
                                        </Text>
                                    </Flex>
                                </Box>
                            </Flex >
                            <Button textStyle={'button'} variant='ghost' color='gray.600' leftIcon={<Image src={binIcon} alt='binIcon' />} pos={'absolute'} right='0' mx='24px' onClick={onOpen}>
                                ลบบริการ
                            </Button>
                            <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent
                                    textAlign="center"
                                    height="fit-content"
                                    width="350px"
                                    borderRadius={"16px"}
                                >
                                    <ModalHeader marginTop="1.5rem">
                                        <Flex direction="column" alignItems={"center"}>
                                            <Image
                                                src={warningICon}
                                                alt="warning icon"
                                                width="30px"
                                                marginBottom="10px"
                                            />
                                            <Text textStyle={"h2"} color="gray.950">
                                                ยืนยันการลบรายการ?
                                            </Text>
                                        </Flex>
                                    </ModalHeader>
                                    <ModalBody maxH="fit-content" paddingTop="-15px">
                                        <Text fontWeight={300}>
                                            คุณต้องการลบรายการ '{serviceName}'
                                            ใช่หรือไม่
                                        </Text>
                                    </ModalBody>
                                    <ModalFooter alignSelf={"center"} paddingBottom={"2rem"}>
                                        <Button
                                            variant={'primary'}
                                            mr={3}
                                            onClick={() => {
                                                deleteServiceList(serviceId)
                                            }}
                                        >
                                            ลบรายการ
                                        </Button>
                                        <Button
                                            onClick={onClose}
                                            variant="secondary"
                                        >
                                            ยกเลิก
                                        </Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                        </Container >
                    </Form >
                </Box >
            )}
        </Formik >
    );
};

export default EditCreateServiceList;
