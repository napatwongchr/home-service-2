import { Box, Text, Flex, Button, Image } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import priceTag from '../../assets/image/homePage/priceTag.svg'
import useAdminServiceLists from "../../hooks/useAdminServiceLists"

const AddOnList = (props) =>{

    let subServiceList = props.serviceList.subService
    const { subService, setSubService } = props

    useEffect( ()=>{
        setSubService(subServiceList.map( subService => {
            subService.count = 0
            return {...subService}
        }))
    },[])

    const handleIncrese = (subServiceId) =>{
        setSubService(subService.map( subService => {
            if(subService.sub_service_id === subServiceId){ subService.count+=1 }
            return {...subService}
        }))
    }

    const handleDecrese = ( subServiceId ) =>{
        setSubService(subService.map( subService => {
            if(subService.sub_service_id === subServiceId){
                subService.count < 1 ? subService.count = 0 :  subService.count -=1 
            }
            return { ...subService }
        }))
    }
    

    return (
        <>
            <Box bg="utility.white" borderRadius="8px" p="2rem" mt="2rem">
                <Text textStyle="h3" textColor="gray.700">เลือกรายการบริการ{props.serviceList.service.service_name}</Text>
                {subService.map((subService, index) => {
                    
                    return (
                        <Flex key={index} justifyContent="space-between"borderBottom="2px" borderBottomColor="gray.300" mt="2.5rem" mb="2rem" pb="2rem">
                            <Flex direction="column">
                                <Text textStyle="h3" textColor="utility.black">{subService.sub_service_name}</Text>
                                <Flex gap="10px">
                                    <Image src={priceTag} w="13"/>
                                    <Text textColor="gray.700">{subService.price_per_unit} ฿ / {subService.unit_name}</Text>
                                </Flex>
                            </Flex>
                            
                            <Flex alignItems="center" justifyContent="space-between" w="150px">
                                <Button 
                                variant="secondary" 
                                fontSize="4xl" 
                                fontWeight="hairline"
                                onClick={()=>{
                                    handleDecrese(subService.sub_service_id)
                                }}
                                >-</Button>

                                    <Text textStyle="h5">{subService.count}</Text>

                                <Button 
                                variant="secondary" 
                                fontSize="4xl" 
                                fontWeight="hairline"
                                onClick={()=>{
                                    handleIncrese(subService.sub_service_id)
                                }}
                                >+</Button>
                            </Flex>

                        </Flex>
                    )
                })}
            </Box>
        </>
    )
}

export default AddOnList