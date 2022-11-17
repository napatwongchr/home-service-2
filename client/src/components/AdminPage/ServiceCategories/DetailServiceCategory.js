import {
  Container,
  Text,
  Image,
  Flex,
  Button,
  Divider,
  Box,
} from "@chakra-ui/react";
import arrow from "../../../assets/image/serviceCategory/left-arrow.svg";
import { Link, useNavigate } from "react-router-dom";
import useServiceCategories from "../../../hooks/useServiceCategories";
import { useEffect } from "react";

const DetailServiceCategory = () => {
  const navigate = useNavigate();
  const { serviceCategory, getServiceCategoryById, params } =
    useServiceCategories();

  useEffect(() => {
    getServiceCategoryById(params);
  }, []);

  return (
    <Container bg="#F3F4F6" maxW="100%" height="100vh" padding="0px">
      <Flex>
        <Flex
          className="create-service-field"
          direction="column"
          alignItems="center"
          width="100vw"
          height="100vh"
        >
          <Flex
            className="create-service-category-bar"
            bg="white"
            borderBottom="1px"
            borderColor="gray.300"
            width="100%"
            height="80px"
            justify="space-between"
            alignItems="center"
          >
            <Flex
              className="left-side"
              direction="row"
              alignItems="center"
              marginLeft="3rem"
            >
              <Link to="/admin-dashboard/categories">
                <Image src={arrow} marginRight="1.5rem" />
              </Link>
              <Flex direction="column">
                <Text textStyle="b4">หมวดหมู่</Text>
                <Text
                  className="category-name"
                  textStyle="h2"
                  color="utility.black"
                >
                  {serviceCategory.service_category_name}
                </Text>
              </Flex>
            </Flex>

            <Button
              marginRight="40px"
              width="112px"
              height="44px"
              fontWeight="500"
              variant="primary"
              onClick={() => {
                navigate(
                  `/admin-dashboard/category/edit/${serviceCategory.service_category_id}`
                );
              }}
            >
              แก้ไข
            </Button>
          </Flex>
          <Box w='100%' px='40px'>
            <Flex
              className="edit-service-box"
              direction="column"
              paddingLeft="2rem"
              justify="center"
              alignItems="left"
              bg="white"
              border="1px"
              borderColor="gray.200"
              borderRadius="8px"
              width="100%"
              height="fit-content"
              padding="3rem 2rem 3rem 2rem"
              marginTop="4rem"
            >
              <Flex direction="row" padding="1rem 0 1rem 0">
                <Text textStyle="h5" textColor="gray.700" marginRight="10rem">
                  ชื่อหมวดหมู่
                </Text>
                <Text
                  className="category-name"
                  textStyle="b1"
                  color="utility.black"
                >
                  {serviceCategory.service_category_name}
                </Text>
              </Flex>
              <Divider padding="1rem" w="95.5%" borderColor="gray.300" />
              <Box className="info" margin="3rem 0 1.3rem 0">
                <Flex className="created-info" marginBottom="2rem">
                  <Text
                    textStyle="h5"
                    textColor="gray.700"
                    marginRight="10rem"
                    width="5rem"
                  >
                    สร้างเมื่อ
                  </Text>
                  <Text className="created-at" textColor="gray.900">
                    {serviceCategory.created_at}
                  </Text>
                </Flex>
                <Flex className="edited-info">
                  <Text
                    textStyle="h5"
                    textColor="gray.700"
                    marginRight="10rem"
                    width="5rem"
                  >
                    แก้ไขล่าสุด
                  </Text>
                  <Text className="edited-at" textColor="gray.900">
                    {serviceCategory.updated_at}
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default DetailServiceCategory;
