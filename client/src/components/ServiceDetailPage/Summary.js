import { Flex, Text, Box } from "@chakra-ui/react"

const Summary = (props) =>{

    const { subService, setSubService, serviceList } = props
    
    
    return (
        <>
            <Flex bgColor="utility.white" h="400px" borderRadius="8px" p="2rem" direction="column">
                <Text textColor="gray.700" textStyle="h3">สรุปรายการ</Text>

                {/* AddOnList */}
                <Flex borderBottom="1px" pb="1rem" direction="column" mt="1rem">
                    {subService.map((subService, index) => {
                        return(
                            <Flex key={index} gap="0.5rem">
                                <Text textColor="utility.black">{subService.sub_service_name}</Text>
                                <Text textColor="gray.900" textStyle="h4">{subService.count} รายการ</Text>
                            </Flex>
                        )
                    })}
                    
                    {/* Total */}
                    <Flex justifyContent="space-between">
                        <Text textColor="gray.700" >รวม</Text>
                        <Text textColor="utility.black" fontWeight="600">
                            {
                                subService.length > 1 ? subService.reduce((acc, cur) => { return acc.sub_total_price + cur.sub_total_price }) : 
                                subService.map( subService => subService.sub_total_price )
                            }
                        </Text>
                    </Flex>

                </Flex>

                
            </Flex>
        </>
    )
}

export default Summary;