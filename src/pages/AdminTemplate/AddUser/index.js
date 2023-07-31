import React, { useState } from 'react';
import { actAddUser } from './duck/actions';
import { useDispatch } from 'react-redux';

export default function AddUser() {

  const dispatch = useDispatch();

  const [ state, setState ] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP03",
    maLoaiNguoiDung: "KhachHang",
    hoTen: "",
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    dispatch(actAddUser(state));
  };
  
  return (
    <div className='container'>
      <div classNme='row'>
        <div className='col-sm-6 mx-auto'>
          <h3>AddUser</h3>

          <form onSubmit={handleAddUser}>
            <div className="form-group">
              <label>Tài khoản</label>
              <input type="text" name="taiKhoan" id className="form-control" placeholder onChange={handleOnchange}/>
            </div>
            <div className="form-group">
              <label>Mật khẩu</label>
              <input type="text" name="matKhau" id className="form-control" placeholder onChange={handleOnchange} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="text" name="email" id className="form-control" placeholder onChange={handleOnchange} />
            </div>
            <div className="form-group">
              <label>Số điện thoại</label>
              <input type="text" name="soDt" id className="form-control" placeholder onChange={handleOnchange} />
            </div>
            {/* <div className="form-group">
              <label>Mã nhóm</label>
              <input type="text" name="maNhom" id className="form-control" placeholder onChange={handleOnchange} />
            </div> */}
            <div className="form-group">
              <label>Mã loại người dùng</label>
              <select className='form-control' name="maLoaiNguoiDung" id="" onChange={handleOnchange} >
                <option value="KhachHang">Khách hàng</option>
                <option value="QuanTri">Quản trị</option>
              </select>
            </div>
            <div className="form-group">
              <label>Họ tên</label>
              <input type="text" name="hoTen" id className="form-control" placeholder onChange={handleOnchange} />
            </div>
            <button className='btn btn-success'>Add User</button>

          </form>
        </div>
      </div>
    </div>
  )
}




