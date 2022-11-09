import binIcon from "../../asset/image/serviceCategory/bin-icon.svg";
import editIcon from "../../asset/image/serviceCategory/edit-icon.svg";
import warningICon from "../../asset/image/serviceCategory/warning-icon.svg";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "../AdminPage/SideBar";
import {
  Container,
  Image,
  Text,
  Flex,
  Badge,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import filterCategory from "../../utils/filterCategory";
import useAdminServiceLists from "../../hooks/useAdminServiceLists.js";
// import { serviceList } from "../../asset/model/serviceList";

const AdminServiceList = () => {
  const navigate = useNavigate();
  const {
    serviceLists,
    getServiceLists,
    params,
    deleteServiceList,
  } = useAdminServiceLists();
  const [listSearch, setListSearch] = useState("");
  const [listName, setListName] = useState("");
  const [ListUniqueId, setListUniqueId] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    getServiceLists();
  }, []);
  console.log(serviceLists);

  const { handleColorText, handleColorButton } = filterCategory;
  return (
    <Container maxW="100%" p="40px" h="calc(100% - 3.25rem)" bg="gray.100">
            <TableContainer
              maxW="100%"
              border={"1px"}
              borderColor="gray.200"
              borderRadius="10px"
              bg="utility.white"
            >
              <Table variant="simple">
                <Thead>
                  <Tr bg={"gray.100"}>
                    <Th
                      fontWeight="400"
                      fontSize={"14px"}
                      lineHeight="21px"
                      textAlign={"center"}
                    >
                      ลำดับ
                    </Th>
                    <Th fontWeight="400" fontSize="14px" lineHeight="21px">
                      ชื่อบริการ
                    </Th>
                    <Th fontWeight="400" fontSize="14px" lineHeight="21px">
                      ชื่อหมวดหมู่
                    </Th>
                    <Th fontWeight="400" fontSize="14px" lineHeight="21px">
                      สร้างเมื่อ
                    </Th>
                    <Th fontWeight="400" fontSize="14px" lineHeight="21px">
                      แก้ไขล่าสุด
                    </Th>
                    <Th
                      fontWeight="400"
                      textAlign="center"
                      textTransform="none"
                      fontSize="14px"
                      lineHeight="21px"
                    >
                      Action
                    </Th>
                  </Tr>
                </Thead>
                {serviceLists.map((item, index) => {
                  return (
                    <Tbody bg="#FFFFFF">
                      <Tr>
                        <Td textAlign={"center"}>{index+1}</Td>
                        <Td>{item.service_name}</Td>
                        <Td>
                          <Badge
                            borderRadius="8px"
                            px="10px"
                            py="4px"
                            bg={handleColorButton(item.type)}
                          >
                            <Text
                              textStyle="b4"
                              color={handleColorText(item.type)}
                            >
                              {item.service_category}
                            </Text>
                          </Badge>
                        </Td>
                        <Td>{item.created_at}</Td>
                        <Td>{item.updated_at}</Td>
                        <Td className="action-button">
                          <Flex justifyContent={"space-evenly"}>
                            <button className="delete-button" onClick={onOpen}>
                              <Image src={binIcon} alt="bin icon" />
                            </button>
                            <button className="edit-button">
                              <Image src={editIcon} alt="edit icon" />
                            </button>
                          </Flex>
                        </Td>
                      </Tr>
                    </Tbody>
                  );
                })}
              </Table>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                  textAlign="center"
                  height="250px"
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
                  <ModalBody maxH="30px" paddingTop="-15px">
                    {/* {serviceList.map((item, index) => {
            return ( */}
                    <Text fontWeight={300}>
                      คุณต้องการลบรายการ "ล้างแอร์" ใช่หรือไม่
                    </Text>
                    {/* );
          })} */}
                  </ModalBody>
                  <ModalFooter alignSelf={"center"}>
                    <Button colorScheme="blue" mr={3}>
                      ลบรายการ
                    </Button>
                    <Button
                      onClick={onClose}
                      variant="ghost"
                      color="blue.600"
                      border={"1px"}
                      borderColor={"blue.600"}
                    >
                      ยกเลิก
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </TableContainer>
    </Container>
  );
};

export default AdminServiceList;
