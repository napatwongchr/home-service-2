import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useServiceCategories = () => {
  const navigate = useNavigate();
  const [serviceCategories, setServiceCategories] = useState([]);

  const getServiceCategories = async () => {
    try {
      const results = await axios.get(`http://localhost:4000/service/category`);
      setServiceCategories(results.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    serviceCategories,
    getServiceCategories,
  };
};

export default useServiceCategories;
