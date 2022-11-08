import binIcon from "../../asset/image/serviceCategory/bin-icon.svg";
import editIcon from "../../asset/image/serviceCategory/edit-icon.svg";
import warningICon from "../../asset/image/serviceCategory/warning-icon.svg";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

import {
  Text,
  Flex,
  Image,
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
  Container,
} from "@chakra-ui/react";
import useServiceCategories from "../../hooks/useServiceCategories.js";

const ViewServiceCategory = () => {
  const navigate = useNavigate();
  const { serviceCategories, getServiceCategories, params } =
    useServiceCategories();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    getServiceCategories();
  }, []);

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
              <Th fontWeight="400" width="10px" fontSize={"14px"}>
                ลำดับ
              </Th>
              <Th fontWeight="400" fontSize={"14px"}>
                ชื่อหมวดหมู่
              </Th>
              <Th fontWeight="400" fontSize={"14px"}>
                สร้างเมื่อ
              </Th>
              <Th fontWeight="400" fontSize={"14px"}>
                แก้ไขล่าสุด
              </Th>
              <Th
                fontWeight="400"
                textAlign={"center"}
                textTransform="none"
                fontSize={"14px"}
              >
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody className="categoty-box">
            {serviceCategories.map((item) => {
              return (
                <Tr
                  className="categoty-lists"
                  height={"88"}
                  key={item.service_category_id}
                >
                  <Td className="sequence" textAlign={"center"}>
                    {item.service_category_id}
                  </Td>
                  <Td className="category-name">
                    <button
                      onClick={() => {
                        navigate(
                          `/admin-dashboard/category/view/${item.service_category_id}`
                        );
                      }}
                    >
                      {item.service_category_name}
                    </button>
                  </Td>
                  <Td className="created-at">{item.created_at}</Td>
                  <Td className="edited-at">{item.updated_at}</Td>
                  <Td className="action-button">
                    <Flex justifyContent={"space-evenly"}>
                      <button className="delete-button" onClick={onOpen}>
                        <Image src={binIcon} alt="bin icon" />
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
                              <Text fontWeight={300}>
                                คุณต้องการลบรายการ {item.service_category_name}
                                ใช่หรือไม่
                              </Text>
                            </ModalBody>
                            <ModalFooter alignSelf={"center"}>
                              <Button
                                onClick={() => {}}
                                colorScheme="blue"
                                mr={3}
                              >
                                ลบรายการ
                              </Button>
                              <Button
                                onClick={onClose}
                                variant="ghost"
                                color="blue.600"
                                border={"1px"}
                                borderColor={"blue.600"}
                                textDecoration="none"
                              >
                                ยกเลิก
                              </Button>
                            </ModalFooter>
                          </ModalContent>
                        </Modal>
                      </button>
                      <button className="edit-button">
                        <Link to="/admin-dashboard/category/edit">
                          <Image src={editIcon} alt="edit icon" />
                        </Link>
                      </button>
                    </Flex>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ViewServiceCategory;
