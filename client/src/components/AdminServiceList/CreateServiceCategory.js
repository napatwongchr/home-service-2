import { Button, Container, Flex, FormLabel, Image, Input, Menu, MenuButton, MenuItem, MenuList, Text, } from "@chakra-ui/react";
import { useState } from "react";
import arrow from "../../asset/image/serviceListPage/dropdown.svg";
import imageIcon from '../../asset/image/adminServiceList/imageIcon.svg';
import plusIcon from '../../asset/image/adminDashboardPage/plusIcon.svg';
import { Formik, Form, FieldArray } from 'formik';
import { MyFieldInput } from '../../utils/formInput'
const CreateServiceList = () => {
  const [category, setCategory] = useState('เลือกหมวดหมู่');
  const initialValues = {
    serviceList: [
      {
        name: '',
        price: '',
        unit: ''
      },
    ],
  };
  return (
    <Container maxW='100%' p='40px' h='calc(100% - 3.25rem)' bg='gray.100'>
      <Flex bg='utility.white' px='24px' py='40px' border='1px' borderColor='gray.200' borderRadius='8px' flexDirection='column' gap='40px'>
        <Flex alignItems='center'>
          <FormLabel
            mt={'20px'}
            mb={'4px'}
            fontStyle='h5'
            color={'gray.900'}
            htmlFor={'serviceName'}

          >
            <Flex fontStyle={'h5'} pos='relative' top='-6px' w='205px'>
              <Text color={'gray.700'} >ชื่อบริการ</Text><Text color={'utility.red'}>*</Text>
            </Flex>
          </FormLabel>
          <Input
            label="serviceName"
            id="serviceName"
            name="serviceName"
            type="text"
            w={'440px'} h={'44px'} />
        </Flex>
        <Flex alignItems='center'>
          <FormLabel
            mt={'20px'}
            mb={'4px'}
            fontStyle='h5'
            color={'gray.900'}
            htmlFor={'serviceName'}

          >
            <Flex fontStyle={'h5'} pos='relative' top='-6px' w='205px'>
              <Text color={'gray.700'} >หมวดหมู่</Text><Text color={'utility.red'}>*</Text>
            </Flex>
          </FormLabel>
          <Menu>
            <MenuButton as={Button} variant='dropdown' w={'440px'} h={'44px'} textAlign='left' rightIcon={<Image src={arrow} />} border='1px'
              borderColor='gray.300' pos='relative'>
              <Text color={'gray.700'} textStyle='b2'>{category} </Text>
            </MenuButton>
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
            >
              <MenuItem px={'16px'} h='44px' _hover={{ bg: 'gray.100' }}
                color={category === 'บริการทั้งหมด' ? 'blue.700' : null}
                onClick={() => {
                  setCategory('บริการทั้งหมด')
                }}
              >
                บริการทั้งหมด
              </MenuItem>
              <MenuItem px={'16px'} h='44px' _hover={{ bg: 'gray.100' }}
                color={category === 'บริการทั่วไป' ? 'blue.700' : null}
                onClick={() => {
                  setCategory('บริการทั่วไป')
                }}
              >
                บริการทั่วไป
              </MenuItem>
              <MenuItem px={'16px'} h='44px' _hover={{ bg: 'gray.100' }}
                color={category === 'บริการห้องครัว' ? 'blue.700' : null}
                onClick={() => {
                  setCategory('บริการห้องครัว')
                }}
              >
                บริการห้องครัว
              </MenuItem>
              <MenuItem px={'16px'} h='44px' _hover={{ bg: 'gray.100' }}
                color={category === 'บริการห้องน้ำ' ? 'blue.700' : null}
                onClick={() => {
                  setCategory('บริการห้องน้ำ')
                }}
              >
                บริการห้องน้ำ
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Flex alignItems='start' mb={'30px'}>
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
          <Input
            label="serviceImage"
            id="serviceImage"
            name="serviceImage"
            type="file"
            w={'440px'} h={'180px'}
            border='1px dashed'
            pos='relative'
            display='none'
            accept="image/png, image/jpeg" />
          <FormLabel pos='relative' display='flex' flexDirection='column' gap='12px' alignItems='center' w={'440px'} h={'180px'}
            border='1px dashed' borderColor='gray.300' textStyle='b3' color='gray.700' py='35px'>

            <Image src={imageIcon} w='36px' />
            <Text display='flex'><FormLabel m='0' mr='6px' htmlFor='serviceImage' color='blue.600' cursor={'pointer'} >อัพโหลดรูปภาพ</FormLabel>หรือ ลากและวางที่นี่</Text>
            <Text>PNG, JPG ขนาดไม่เกิน 5MB</Text>
            <Text color={'gray.700'} textStyle='b3' fontSize='12px' pos='absolute' bottom={-8} left={0} >ขนาดภาพที่แนะนำ: 1440 x 225 PX</Text>
          </FormLabel>
        </Flex>
        <hr />
        <Text color={'gray.700'} textStyle={'h5'} mb='-30px'>รายการบริการย่อย</Text>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ values }) => (
            <Form>
              <FieldArray name='serviceList'>
                {({ insert, remove, push }) => (
                  <div>
                    {values.serviceList.map((item, index) => (
                      <Flex gap='10px' alignItems={'end'} key={index}>
                        {/* <Flex flexDirection={'column'}>
                          <FormLabel htmlFor={`serviceList.${index}.name`}>ชื่อรายการ</FormLabel>
                          <Field as={Input} name={`serviceList.${index}.name`} type="text" />
                        </Flex> */}
                        <MyFieldInput
                          label="ชื่อรายการ"
                          id={`serviceList.${index}.name`}
                          name={`serviceList.${index}.name`}
                          type="text"
                          w={'440px'} h={'44px'} mt='0'
                        />
                        <MyFieldInput
                          label="ค่าบริการ / 1 หน่วย"
                          id={`serviceList.${index}.price`}
                          name={`serviceList.${index}.price`}
                          type="text"
                          w={'240px'} h={'44px'} mt='0'
                        />
                        <MyFieldInput
                          label="หน่วยการบริการ"
                          id={`serviceList.${index}.unit`}
                          name={`serviceList.${index}.unit`}
                          type="text"
                          w={'240px'} h={'44px'} mt='0'
                        />
                        <Button variant={'ghost'} color='gray.400' onClick={() => values.serviceList.length > 1 && remove(index)}>ลบรายการ</Button>
                      </Flex>
                    ))}
                    <Button variant={'secondary'} rightIcon={<Image src={plusIcon} />} mt='40px' px='25px'
                      onClick={() => push({
                        name: '',
                        price: '',
                        unit: ''
                      })}>
                      เพิ่มรายการ
                    </Button>
                  </div>
                )}
              </FieldArray>
            </Form>
          )}

        </Formik>

        {/* <Form> */}

        {/* <Flex gap='10px' alignItems={'end'}>
              <MyTextInput
                label="ชื่อรายการ"
                id="serviceList"
                name="serviceList"
                type="text"
                w={'440px'} h={'44px'} mt='0'
              />
              <MyTextInput
                label="ค่าบริการ / 1 หน่วย"
                id="price"
                name="price"
                type="text"
                w={'240px'} h={'44px'} mt='0'
              />
              <MyTextInput
                label="หน่วยการบริการ"
                id="unit"
                name="unit"
                type="text"
                w={'240px'} h={'44px'} mt='0'
              />
              <Button variant={'ghost'} color='gray.400'>ลบรายการ</Button>
            </Flex>
            <Button variant={'secondary'} rightIcon={<Image src={plusIcon} />} mt='40px' px='25px'>เพิ่มรายการ</Button> */}
        {/* </Form> */}

      </Flex >
    </Container >
  );
};

export default CreateServiceList;
