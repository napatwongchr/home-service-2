import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../api/axios";

const useServiceCategories = () => {
  const navigate = useNavigate();
  const [serviceCategories, setServiceCategories] = useState([]);
  const [serviceCategory, setServiceCategory] = useState("");
  const params = useParams();

  const getServiceCategories = async (input) => {
    try {
      let results;
      if (input) {
        const { searchCategoryName } = input;
        const params = new URLSearchParams();
        params.append("categoryName", searchCategoryName);
        results = await axios.get(
          `/service/category?${params.toString()}`
        );
      } else {
        results = await axios.get(`/service/category`);
      }
      setServiceCategories(results.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getServiceCategoryById = async (params) => {
    try {
      const result = await axios.get(
        `/service/category?categoryId=${params.categoryId}`
      );
      setServiceCategory(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createServiceCategory = async (data) => {
    try {
      await axios.post(`/service/category`, data);
      navigate("/admin-dashboard/categories");
    } catch (error) {
      console.log(error);
    }
  };

  const updateServiceCategoryById = async (params, data) => {
    try {
      await axios.put(
        `/service/category?categoryId=${params.categoryId}`,
        data
      );
      navigate("/admin-dashboard/categories");
    } catch (error) {
      console.error(error);
    }
  };

  const deleteServiceCategory = async (categoryId) => {
    try {
      await axios.delete(`/service/category?categoryId=${categoryId}`);
      const newCategories = serviceCategories.filter((category) => {
        return category.service_category_id !== categoryId;
      });
      setServiceCategories(newCategories);
      window.location.reload(false);
      navigate("/admin-dashboard/categories");
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
