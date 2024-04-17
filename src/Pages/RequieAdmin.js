import React from "react";

import Loading from "../Components/Loading/Loading";

import { Navigate, useLocation } from "react-router-dom";
import { UseAdmin } from "../hooks";


const RequieAdmin = ({ children }) => {


  let location = useLocation();

  
  return children;
};

export default RequieAdmin;
