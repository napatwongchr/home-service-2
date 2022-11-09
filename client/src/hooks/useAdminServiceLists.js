import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const useAdminServiceLists = () => {
  const navigate = useNavigate();
  const [serviceLists, setServiceLists] = useState([]);
  const [serviceList, setServiceList] = useState([]);
  const params = useParams();

  const getServiceLists = async () => {
    try {
      const results = await axios.get(`http://localhost:4000/service`);
      setServiceLists(results.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getServiceListById = async (params) => {

    try {
      const result = await axios.get(
        `http://localhost:4000/service?serviceId=${params.serviceId}`
      );
      setServiceList(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createServiceList = async (data) => {
    try {
      await axios.post(`http://localhost:4000/service`, data);
      navigate("/admin-dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const updateServiceListById = async (params, data) => {
    try {
      await axios.put(
        `http://localhost:4000/service?serviceId=${params.service_id}`,
        data
      );
      navigate("/admin-dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const deleteServiceList = async (serviceid) => {
    try {
      await axios.delete(
        `http://localhost:4000/service?serviceid=${serviceid}`
      );
      const newLists = serviceLists.filter((service) => {
        return service.service_id !== serviceid;
      });
      setServiceLists(newLists);
      navigate("/admin-dashboard");
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
