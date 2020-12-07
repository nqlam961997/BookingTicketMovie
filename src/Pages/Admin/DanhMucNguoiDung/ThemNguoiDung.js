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
  const [error, setError] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDT: "",
    hoTen: "",
    maLoaiNguoiDung: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name, type, pattern } = e.target;
    let errorMsg = "";

    if (value.trim() === "") {
      errorMsg = name + " không được để trống";
    }
    if (type === "number" || type === "email") {
      const regex = new RegExp(pattern);

      if (!regex.test(value)) {
        errorMsg = name + " không đúng định dạng";
      }
    }
    let values = { ...user, [name]: value };
    let errors = { ...error, [name]: errorMsg };

    setUser(values);
    setError(errors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(await themNguoiDungAdminApiAction(user));
  };

  const renderButton = () => {
    let valid = true;
    for (let item in error) {
      if (error[item] !== "") {
        valid = false;
      }
    }
    if (valid) {
      return (
        <button type="submit" className="themNguoiDung">
          Thêm người dùng
        </button>
      );
    } else {
      return (
        <button type="submit" className="themNguoiDung disabled" disabled>
          Thêm người dùng
        </button>
      );
    }
  };

  return (
    <div>
      <h1>THÊM NGƯỜI DÙNG</h1>
      <form className="container-form userForm" onSubmit={handleSubmit}>
        <div className="thongTin">
          <div className="form-group">
            <p>Họ tên</p>
            <input name="hoTen" id="trainler" onChange={handleChange} />
            <p className="text-error">{error?.hoTen}</p>
          </div>

          <div className="form-group">
            <p>Tài khoản</p>
            <input name="taiKhoan" id="tenPhim" onChange={handleChange} />
            <p className="text-error">{error?.taiKhoan}</p>
          </div>

          <div className="form-group">
            <p>Mật khẩu</p>
            <input name="matKhau" id="moTa" onChange={handleChange} />
            <p className="text-error">{error?.matKhau}</p>
          </div>

          <div className="form-group">
            <p>Số điện thoại</p>
            <input
              name="soDt"
              id="moTa"
              onChange={handleChange}
              type="number"
              pattern="^[0-9]+$"
            />
            <p className="text-error">{error?.soDt}</p>
          </div>

          <div className="form-group">
            <p>Email</p>
            <input
              name="email"
              id="moTa"
              onChange={handleChange}
              type="email"
              pattern='^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))+$'
            />
            <p className="text-error">{error?.email}</p>
          </div>

          <div className="form-group">
            <p>Loại người dùng</p>
            <select name="maLoaiNguoiDung" onChange={handleChange}>
              <option>Chọn loại người dùng</option>
              <option value="KhachHang">Khách hàng</option>
              <option value="QuanTri">Quản trị</option>
            </select>
            <p className="text-error">{error?.maLoaiNguoiDung}</p>
          </div>

          {/* <button type="submit" className="themNguoiDung">
            Thêm người dùng
          </button> */}
          {renderButton()}
        </div>
      </form>
    </div>
  );
}
