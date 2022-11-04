import { Badge, Box, Button, Center, Container, Flex, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { serviceData } from '../../asset/model/serviceData';
import priceTag from '../../asset/image/homePage/Group.svg'
import filterCategory from '../../utils/filterCategory';
const AllServiceSection = () => {
    const { handleColorButton, handleColorText } = filterCategory

    return (
        <Container className='recommendService' maxW='100%' bg='gray.100' centerContent>
            <Flex>
                <Center w='1440px' mt='80px' mb='121px'>
                    <Grid templateColumns='repeat(3, 1fr)' columnGap='37px' rowGap='48px'>
                        {
                            serviceData.map((item, index) => {
                                return (
                                    <Box w='349px' h='369px' bg='utility.white' overflow='hidden' border='1px' borderColor='gray.300' borderRadius='8px' key={index}>
                                        <Image src={item.image} alt={null} h='200px' w='100%' />
                                        <Badge borderRadius='10%' px='10px' py='4px' bg={handleColorButton(item.type)} mx='24px' mt='16px' mb='8px'>
                                            <Text textStyle='b4' color={handleColorText(item.type)}>{item.type}</Text>
                                        </Badge>
                                        <Text textStyle='h2' color='gray.950' mx='24px' mb='4px'>{item.name}</Text>
                                        <Flex mx='24px' mb='22px'>
                                            <Image src={priceTag} />
                                            <Text className='price' textStyle='b3' color='gray.700' ml='8px'>ค่าบริการประมาณ {item.price} ฿</Text>
                                        </Flex>
                                        <Button
                                            textStyle="button"
                                            color="blue.600"
                                            variant='ghost'
                                            px={0}
                                            bottom={'5px'}
                                            mx="24px"
                                        >
                                            เลือกบริการ
                                        </Button>
                                    </Box>
                                )
                            })
                        }
                    </Grid>
                </Center>
            </Flex>
        </Container >

    )
}

export default AllServiceSection


