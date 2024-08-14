// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import MyContext from "../../context/MyContext";
// let APIURL = import.meta.env.VITE_API_URL;
// export function useLoggedIn() {
//   const { setUser } = useContext(MyContext);
//   useEffect(function () {
//     async function getAllTours() {
//       const res = await axios.get(`${APIURL}`, {
//         withCredentials: true, // This will include the cookies in the request
//       });
//       console.log("RESPONSE FROM AUTH COCNTROLLER", res);

//       const currUser = res?.data;
//       setUser(currUser);
//     }

//     getAllTours();
//   }, []);

//   return { isLoading, user };
// }
