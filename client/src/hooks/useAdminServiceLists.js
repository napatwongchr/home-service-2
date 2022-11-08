// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const useAdminServiceLists = () => {
//   const navigate = useNavigate();
//   const [adminServiceLists, setAdminServiceList] = useState([]);

//   const getAdminServiceLists = async () => {
//     try {
//       const results = await axios.get(`http://localhost:4000/service/category`);
//       setAdminServiceList(results.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return {
//     adminServiceLists,
//     getAdminServiceLists,
//   };
// };

// export default useAdminServiceLists;