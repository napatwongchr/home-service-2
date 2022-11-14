import binIcon from "../../asset/image/serviceCategory/bin-icon.svg";
import editIcon from "../../asset/image/serviceCategory/edit-icon.svg";
import warningICon from "../../asset/image/serviceCategory/warning-icon.svg";
import searchIcon from "../../asset/image/adminDashboardPage/searchIcon.svg";

import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  Text,
  Flex,
  Image,
  Table,
  Input,
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
  const { serviceCategories, getServiceCategories, deleteServiceCategory } =
    useServiceCategories();

  const [categoryName, setCategoryName] = useState("");
  const [categoryUniqueId, setCategoryUniqueId] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [searchCategoryName, setSearchCategoryName] = useState("");

  useEffect(() => {
    getServiceCategories({ searchCategoryName });
  }, [serviceCategories, searchCategoryName]);

  return (
    <Container maxW="100%" height="100%" bg="gray.100" padding={"0"}>
      <Flex direction="column" alignItems={"center"} maxW="100vw" h="100%">
        <Flex
          h="80px"
          w="100%"
          bg="utility.white"
          borderBottom="1px"
          borderColor="gray.100"
          justifyContent="space-between"
          alignItems="center"
          px="40px"
        >
          <Text textStyle="h2" color="utility.black">
            หมวดหมู่
          </Text>
          <Flex pos="relative" gap="24px">
            <Image
              src={searchIcon}
              pos="absolute"
              left="19px"
              top="13px"
              zIndex={2}
            />
            <Input
              borderRadius="8px"
              placeholder={`ค้นหาหมวดหมู่...`}
              w="350px"
              h="44px"
              pl="50px"
              value={searchCategoryName}
              onChange={(e) => {
                setSearchCategoryName(e.target.value);
              }}
            />

            <Link to="/admin-dashboard/category/create">
              <Button w="165px" h="44px">
                เพิ่มหมวดหมู่
              </Button>
            </Link>
          </Flex>
        </Flex>

        <TableContainer
          width="85%"
          border={"1px"}
          borderColor="gray.200"
          borderRadius="10px"
          bg="utility.white"
          marginTop="2rem"
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
              {serviceCategories.map((item, index) => {
                return (
                  <Tr
                    className="categoty-lists"
                    height={"88"}
                    key={item.service_category_id}
                  >
                    <Td className="sequence" textAlign={"center"}>
                      {index + 1}
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
                        <button
                          className="delete-button"
                          onClick={() => {
                            setCategoryName(`${item.service_category_name}`);
                            setCategoryUniqueId(
                              `${item.service_category_id}  `
                            );
                            onOpen();
                          }}
                        >
                          <Image src={binIcon} alt="bin icon" />
                          <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent
                              textAlign="center"
                              height="250px"
                              width="fit-content"
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
                                  คุณต้องการลบรายการ '{categoryName}' ใช่หรือไม่
                                </Text>
                              </ModalBody>
                              <ModalFooter alignSelf={"center"}>
                                <Button
                                  onClick={() => {
                                    deleteServiceCategory(categoryUniqueId);
                                    onClose();
                                  }}
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
                        <button
                          className="edit-button"
                          onClick={() => {
                            navigate(
                              `/admin-dashboard/category/edit/${item.service_category_id}`
                            );
                          }}
                        >
                          <Image src={editIcon} alt="edit icon" />
                        </button>
                      </Flex>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Container>
  );
};

export default ViewServiceCategory;
