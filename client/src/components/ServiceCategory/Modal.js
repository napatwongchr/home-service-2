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
import warningICon from "../../asset/image/serviceCategory/warning-icon.svg";

const AlertModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
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
            คุณต้องการลบรายการ {props.children} ใช่หรือไม่
          </Text>
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
  );
};

export default AlertModal;
