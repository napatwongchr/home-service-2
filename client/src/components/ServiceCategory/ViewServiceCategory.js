import binIcon from "../../asset/image/serviceCategory/bin-icon.svg";
import editIcon from "../../asset/image/serviceCategory/edit-icon.svg";
import warningICon from "../../asset/image/serviceCategory/warning-icon.svg";
import { Link } from "react-router-dom";

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

const ViewServiceCategory = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            <Tr className="categoty-lists" height={"88"}>
              <Td className="sequence" textAlign={"center"}>
                1
              </Td>
              <Td className="category-name">บริการทั่วไป</Td>
              <Td className="created-at">12/02/2022 10:30PM</Td>
              <Td className="edited-at">12/02/2022 10:30PM</Td>
              <Td className="action-button">
                <Flex justifyContent={"space-evenly"}>
                  <button className="delete-button" onClick={onOpen}>
                    <Image src={binIcon} alt="bin icon" />
                  </button>
                  <button className="edit-button">
                    <Link to="/admin-dashboard/category/edit">
                      <Image src={editIcon} alt="edit icon" />
                    </Link>
                  </button>
                </Flex>
              </Td>
            </Tr>

            {/* <Tr className="categoty-lists" height={"88"}>
              <Td className="sequence" textAlign={"center"}>
                2
              </Td>
              <Td className="category-name">บริการห้องครัว</Td>
              <Td className="created-at">12/02/2022 10:30PM</Td>
              <Td className="edited-at">12/02/2022 10:30PM</Td>
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

            <Tr className="categoty-lists" height={"88"}>
              <Td className="sequence" textAlign={"center"}>
                3
              </Td>
              <Td className="category-name">บริการห้องน้ำ</Td>
              <Td className="created-at">12/02/2022 10:30PM</Td>
              <Td className="edited-at">12/02/2022 10:30PM</Td>
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
            </Tr> */}
          </Tbody>
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
              <Text fontWeight={300}>คุณต้องการลบรายการ "..." ใช่หรือไม่</Text>
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

export default ViewServiceCategory;
