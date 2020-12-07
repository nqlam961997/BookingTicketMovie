import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { capNhatUserAdminActionApi } from "../../../Redux/actions/AdminAction/QuanLyNguoiDungAdminAction";
import { CANCLE_UPDATE } from "../../../Redux/const/AdminConst/QuanLyPhimAdminConst";
import { history } from "../../../Util/history";

export default function EditUser() {
  const { thongTinUser } = useSelector(
    (state) => state.QuanLyNguoiDungAdminReducer
  );

  const dispatch = useDispatch();

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

  useEffect(() => {
    setUser({
      ...user,
      hoTen: thongTinUser?.hoTen,
      taiKhoan: thongTinUser?.taiKhoan,
      matKhau: thongTinUser?.matKhau,
      soDt: thongTinUser?.soDt,
      email: thongTinUser?.email,
      maLoaiNguoiDung: thongTinUser?.maLoaiNguoiDung,
    });
  }, [thongTinUser]);

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
    dispatch(await capNhatUserAdminActionApi(user));
    history.push("/admin/quanlynguoidung");
  };

  const handleCancle = (e) => {
    e.preventDefault();
    setUser({
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      soDt: "",
      email: "",
      maLoaiNguoiDung: "",
    });
    document.getElementById("form-edit").reset();
    dispatch({
      type: CANCLE_UPDATE,
    });
    history.push("/admin/quanlynguoidung");
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
        <button type="submit" className="update">
          Cập nhật
        </button>
      );
    } else {
      return (
        <button type="submit" className="update disabled" disabled>
          Cập nhật
        </button>
      );
    }
  };

  return (
    <div>
      <h1>CHỈNH SỬA NGƯỜI DÙNG</h1>

      <form
        className="container-form userForm"
        id="form-edit"
        onSubmit={handleSubmit}
      >
        <div className="thongTin">
          <div className="form-group">
            <p>Họ tên</p>
            <input name="hoTen" value={user.hoTen} onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>Tài khoản</p>
            <input
              name="taiKhoan"
              value={user.taiKhoan}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <p>Mật khẩu</p>
            <input
              name="matKhau"
              value={user.matKhau}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <p>Số điện thoại</p>
            <input
              name="soDt"
              value={user.soDt}
              onChange={handleChange}
              type="number"
              pattern="^[0-9]+$"
            />
          </div>
          <div className="form-group">
            <p>Email</p>
            <input
              name="email"
              value={user.email}
              onChange={handleChange}
              type="email"
              pattern='^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))+$'
            />
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
          <>
            {renderButton()}{" "}
            <button className="cancel" onClick={handleCancle}>
              Hủy bỏ
            </button>
          </>
        </div>
      </form>
    </div>
  );
}
