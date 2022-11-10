import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../api/axios";

const useAdminServiceLists = () => {
  const navigate = useNavigate();
  const [serviceLists, setServiceLists] = useState([]);
  const [serviceList, setServiceList] = useState([]);
  const params = useParams();

  const getServiceLists = async () => {
    try {
      const results = await axios.get(`/service`);
      setServiceLists(results.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getServiceListById = async (params) => {

    try {
      const result = await axios.get(
        `/service?serviceId=${params.serviceId}`
      );
      setServiceList(result.data.data);
      console.log(serviceList);
    } catch (error) {
      console.log(error);
    }
  };

  const createServiceList = async (data) => {
    try {
      await axios.post('/service', data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      navigate('/admin-dashboard/services')
    } catch (error) {
      console.log(error);
    }
  };

  const updateServiceListById = async (params, data) => {
    try {
      await axios.put(`/service?serviceId=${params.serviceId}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      navigate('/admin-dashboard/services')
    } catch (error) {
      console.error(error);
    }
  };

  const deleteServiceList = async (params) => {
    try {
      await axios.delete(
        `/service?serviceId=${params.serviceId}`
      );
      navigate('/admin-dashboard/services')
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
