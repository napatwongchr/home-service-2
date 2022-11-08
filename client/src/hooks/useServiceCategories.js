import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const useServiceCategories = () => {
  const navigate = useNavigate();
  const [serviceCategories, setServiceCategories] = useState([]);
  const [serviceCategory, setServiceCategory] = useState([]);
  const params = useParams();

  const getServiceCategories = async () => {
    try {
      const params = new URLSearchParams();
      const results = await axios.get(
        `http://localhost:4000/service/category?${params.toString()}`
      );
      setServiceCategories(results.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getServiceCategoryById = async (params) => {
    try {
      const result = await axios.get(
        `http://localhost:4000/service/category?categoryId=${params.categoryId}`
      );
      console.log(result);
      setServiceCategory(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    serviceCategories,
    getServiceCategories,
    serviceCategory,
    getServiceCategoryById,
    params,
  };
};

export default useServiceCategories;
