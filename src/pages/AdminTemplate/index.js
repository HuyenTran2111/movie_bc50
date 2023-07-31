import React, { Component, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from './_component/Navbar';
import { actTryLogin } from './AuthPage/duck/actions';
import { useDispatch } from 'react-redux';


export default function AdminTemplate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actTryLogin(navigate));
  }, [])
// kiểm tra có login vào hệ thống chưa?
if(!localStorage.getItem("UserAdmin")){
  // chuyển lại trang đăng nhập
  return <Navigate to="/auth" replace />
};


return (
<div>
  <Navbar />
  <Outlet />
</div>
)
}


