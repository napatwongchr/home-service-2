/* eslint-disable react-hooks/exhaustive-deps */
import binIcon from "../../../asset/image/serviceCategory/bin-icon.svg";
import editIcon from "../../../asset/image/serviceCategory/edit-icon.svg";
import warningICon from "../../../asset/image/serviceCategory/warning-icon.svg";
import searchIcon from "../../../asset/image/adminDashboardPage/searchIcon.svg";
import whitePlusIcon from "../../../asset/image/adminDashboardPage/whitePlusIcon.svg";
import { useNavigate } from "react-router-dom";
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
  Box,
} from "@chakra-ui/react";
import useServiceCategories from "../../../hooks/useServiceCategories.js";

const ViewServiceCategory = () => {
  const navigate = useNavigate();
  const { serviceCategories, getServiceCategories, deleteServiceCategory } =
    useServiceCategories();
  const [categoryName, setCategoryName] = useState("");
  const [categoryUniqueId, setCategoryUniqueId] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchCategoryName, setSearchCategoryName] = useState("");

  useEffect(() => {
    getServiceCategories({
      searchCategoryName,
    });
  }, [searchCategoryName]);

  return (
    <Container maxW="100%" height="100%" bg="#F3F4F6" padding="0">
      <Flex direction="column" alignItems={"center"} maxW="100vw" h="100%">
        <Flex
          h="80px"
          w="100%"
          bg="utility.white"
          borderBottom="1px"
          borderColor="gray.300"
          justifyContent="space-between"
          alignItems="center"
          px="5rem"
        >
          <Text textStyle="h2" color="utility.black">
            หมวดหมู่
          </Text>
          <Flex pos="relative" gap="24px">
            <Image
              src={searchIcon}
              zIndex={2}
              pos="absolute"
              left="19px"
              top="13px"
            />
            <Input
              borderRadius="8px"
              placeholder="ค้นหาหมวดหมู่..."
              textStyle="b2"
              w="350px"
              h="44px"
              pl="50px"
              value={searchCategoryName}
              onChange={(e) => {
                setSearchCategoryName(e.target.value);
              }}
            />

            <Button
              w="165px"
              h="44px"
              fontWeight="500"
              onClick={() => {
                navigate(`/admin-dashboard/category/create`);
              }}
              rightIcon={<Image src={whitePlusIcon} alt="plus icon" />}
            >
              เพิ่มหมวดหมู่
            </Button>
          </Flex>
        </Flex>
        <Box width="100%" px="40px">
          <TableContainer
            width="100%"
            border="1px"
            borderColor="gray.200"
            borderRadius="10px"
            bg="utility.white"
            my="40px"
          >
            <Table variant="simple">
              <Thead>
                <Tr bg="gray.100">
                  <Th
                    fontWeight="400"
                    width="15px"
                    textColor="gray.700"
                    fontSize="14px"
                  >
                    ลำดับ
                  </Th>
                  <Th fontWeight="400" textColor="gray.700" fontSize="14px">
                    ชื่อหมวดหมู่
                  </Th>
                  <Th
                    fontWeight="400"
                    width="20rem"
                    textColor="gray.700"
                    fontSize="14px"
                  >
                    สร้างเมื่อ
                  </Th>
                  <Th fontWeight="400" textColor="gray.700" fontSize="14px">
                    แก้ไขล่าสุด
                  </Th>
                  <Th
                    fontWeight="400"
                    textAlign="center"
                    textTransform="none"
                    textColor="gray.700"
                    fontSize="14px"
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
                      height="88px"
                      key={item.service_category_id}
                      textStyle="b2"
                      textColor="black"
                      fontWeight="300"
                    >
                      <Td className="sequence" textAlign="center">
                        {index + 1}
                      </Td>
                      <Td className="category-name">
                        <button
                          style={{ fontWeight: "300" }}
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
                        <Flex justifyContent="space-evenly">
                          <button
                            className="delete-button"
                            onClick={() => {
                              setCategoryName(`${item.service_category_name}`);
                              setCategoryUniqueId(
                                `${item.service_category_id}`
                              );
                              onOpen();
                            }}
                          >
                            <Image src={binIcon} alt="bin icon" />
                            <Modal isOpen={isOpen} onClose={onClose}>
                              <ModalOverlay />
                              <ModalContent
                                textAlign="center"
                                height="fit-content"
                                width="350px"
                                borderRadius="16px"
                                marginTop="15rem"
                              >
                                <ModalHeader marginTop="1.5rem">
                                  <Flex direction="column" alignItems="center">
                                    <Image
                                      src={warningICon}
                                      alt="warning icon"
                                      width="30px"
                                      marginBottom="10px"
                                    />
                                    <Text textStyle="h2" color="gray.950">
                                      ยืนยันการลบรายการ?
                                    </Text>
                                  </Flex>
                                </ModalHeader>
                                <ModalBody
                                  maxH="fit-content"
                                  paddingTop="-15px"
                                >
                                  <Text fontWeight="300">
                                    คุณต้องการลบรายการ '{categoryName}'
                                    <br />
                                    ใช่หรือไม่
                                  </Text>
                                </ModalBody>
                                <ModalFooter
                                  alignSelf="center"
                                  paddingBottom="2.5rem"
                                >
                                  <Button
                                    onClick={() => {
                                      deleteServiceCategory(categoryUniqueId);
                                      onClose();
                                    }}
                                    width="112px"
                                    height="44px"
                                    fontWeight="500"
                                    marginRight="15px"
                                  >
                                    ลบรายการ
                                  </Button>
                                  <Button
                                    onClick={onClose}
                                    variant="secondary"
                                    width="112px"
                                    height="44px"
                                    fontWeight="500"
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
        </Box>
      </Flex>
    </Container>
  );
};

export default ViewServiceCategory;
