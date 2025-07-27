import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleGetOperation } from "../config/handleGetOperation";
import toast from "react-hot-toast";

const Home = () => {
  const navigate = useNavigate();

  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      navigate("/login");
    }

    const checkAuth = async () => {
      const response = await handleGetOperation("/auth/verify/1");
      // setLoading(true);

      console.log(response);

      if (response.status === 200) {
        toast.success(response.response.data.message || "Authentication successful!");
        // setLoading(false);
      } else {
        toast.error(response.response.data.error || "Authentication failed!");
        navigate("/login");
        // setLoading(false)
      }
    };

    checkAuth();
  }, []);

  // if (loading) {
  //   return <>Loading....</>;
  // }
  return <div>Home</div>;
};

export default Home;
