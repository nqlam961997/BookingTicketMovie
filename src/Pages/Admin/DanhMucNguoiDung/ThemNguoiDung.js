import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { themNguoiDungAdminApiAction } from "../../../Redux/actions/AdminAction/QuanLyNguoiDungAdminAction";

export default function ThemNguoiDung() {
  const [user, setUser] = useState({
    hoTen: "",
    taiKhoan: "",
    matKhau: "",
    soDt: "",
    email: "",
    maLoaiNguoiDung: "",
    maNhom: "GP07",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
    console.log(value, name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(await themNguoiDungAdminApiAction(user));
    // console.log(user);
  };

  return (
    <div>
      <h1>THÊM NGƯỜI DÙNG</h1>
      <form className="container-form userForm" onSubmit={handleSubmit}>
        <div className="thongTin">
          <div className="form-group">
            <p>Họ tên</p>
            <input name="hoTen" id="trainler" onChange={handleChange} />
          </div>

          <div className="form-group">
            <p>Tài khoản</p>
            <input name="taiKhoan" id="tenPhim" onChange={handleChange} />
          </div>

          <div className="form-group">
            <p>Mật khẩu</p>
            <input name="matKhau" id="moTa" onChange={handleChange} />
          </div>

          <div className="form-group">
            <p>Số điện thoại</p>
            <input name="soDt" id="moTa" onChange={handleChange} />
          </div>

          <div className="form-group">
            <p>Email</p>
            <input name="email" id="moTa" onChange={handleChange} />
          </div>

          <div className="form-group">
            <p>Loại người dùng</p>
            <select name="maLoaiNguoiDung" onChange={handleChange}>
              <option>Chọn loại người dùng</option>
              <option value="KhachHang">Khách hàng</option>
              <option value="QuanTri">Quản trị</option>
            </select>
          </div>

          <button className="themNguoiDung">Thêm người dùng</button>
        </div>
      </form>
    </div>
  );
}
