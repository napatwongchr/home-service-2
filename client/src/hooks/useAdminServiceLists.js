import { List } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../api/axios";

const useAdminServiceLists = () => {
  const navigate = useNavigate();
  const [serviceLists, setServiceLists] = useState([]);
  const [serviceList, setServiceList] = useState('');
  const params = useParams();

  const getServiceLists = async (params) => {
    try {
      let results;
      if (params.priceTouched === true) {
        results = await axios.get(`/service?searchInput=${params.input}&category=${params.category}&min=${params.sliderValue[0]}&max=${params.sliderValue[1]}&sort=${params.order}`);;
      } else if (params.input !== '' || params.category) {
        results = await axios.get(`/service?searchInput=${params.input}&category=${params.category}&sort=${params.order}`);;
      }
      setServiceLists(results.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getServiceListById = async (params) => {
    try {
      const result = await axios.get(`/service?serviceId=${params.serviceId}`);
      setServiceList(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createServiceList = async (data) => {
    try {
      await axios.post("/service", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate("/admin-dashboard/services");
    } catch (error) {
      console.log(error);
    }
  };

  const updateServiceListById = async (params, data) => {
    try {
      await axios.put(`/service?serviceId=${params.serviceId}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate("/admin-dashboard/services");
    } catch (error) {
      console.error(error);
    }
  };

  const deleteServiceList = async (serviceId) => {
    try {
      await axios.delete(
        `/service?serviceId=${serviceId}`
      );
      if (serviceLists.service) {
        const newLists = serviceLists.service.filter((list) => {
          return list.service_id !== serviceId;
        });
        setServiceLists(newLists);
      }
      navigate("/admin-dashboard/services");
      window.location.reload(false);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    serviceLists,
    getServiceLists,
    serviceList,
    getServiceListById,
    params,
    createServiceList,
    updateServiceListById,
    deleteServiceList,
  };
};

export default useAdminServiceLists;
