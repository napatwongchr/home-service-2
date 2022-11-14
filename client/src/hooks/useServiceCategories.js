import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const useServiceCategories = () => {
  const navigate = useNavigate();
  const [serviceCategories, setServiceCategories] = useState([]);
  const [serviceCategory, setServiceCategory] = useState("");
  const params = useParams();

  const getServiceCategories = async (input) => {
    try {
      const params = new URLSearchParams();
      params.append("categoryName", input.searchCategoryName);
      const results = await axios.get(
        `http://localhost:4000/service/category?${params.toString()}`
      );
      setServiceCategories(results.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getServiceCategoryById = async (params) => {
    try {
      const result = await axios.get(
        `http://localhost:4000/service/category?categoryId=${params.categoryId}`
      );
      setServiceCategory(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createServiceCategory = async (data) => {
    try {
      await axios.post(`http://localhost:4000/service/category`, data);
      navigate("/admin-dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const updateServiceCategoryById = async (params, data) => {
    try {
      await axios.put(
        `http://localhost:4000/service/category?categoryId=${params.categoryId}`,
        data
      );
      navigate("/admin-dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const deleteServiceCategory = async (categoryId) => {
    try {
      await axios.delete(
        `http://localhost:4000/service/category?categoryId=${categoryId}`
      );
      const newCategories = serviceCategories.filter((category) => {
        return category.service_category_id !== categoryId;
      });
      setServiceCategories(newCategories);
      navigate("/admin-dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return {
    serviceCategories,
    getServiceCategories,
    serviceCategory,
    getServiceCategoryById,
    params,
    createServiceCategory,
    updateServiceCategoryById,
    deleteServiceCategory,
  };
};

export default useServiceCategories;
