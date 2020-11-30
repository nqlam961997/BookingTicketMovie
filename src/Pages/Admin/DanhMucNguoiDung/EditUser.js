import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function EditUser() {
  const { thongTinUser } = useSelector(
    (state) => state.QuanLyNguoiDungAdminReducer
  );

  const [user, setUser] = useState({
    hoTen: "",
    taiKhoan: "",
    matKhau: "",
    soDt: "",
    email: "",
    maLoaiNguoiDung: "",
    maNhom: "GP07",
  });

  useEffect(() => {
    setUser({
      ...user,
      hoTen: thongTinUser?.hoTen,
      taiKhoan: thongTinUser?.taiKhoan,
      matKhau: thongTinUser?.matKhau,
      soDt: thongTinUser?.soDt,
      email: thongTinUser?.email,
    });
  }, [thongTinUser]);

  return (
    <div>
      <h1>CHỈNH SỬA NGƯỜI DÙNG</h1>

      <form className="container-form userForm">
        <div className="thongTin">
          <div className="form-group">
            <p>Họ tên</p>
            <input name="hoTen" value={user.hoTen} />
          </div>
          <div className="form-group">
            <p>Tài khoản</p>
            <input name="taiKhoan" value={user.taiKhoan} />
          </div>
          <div className="form-group">
            <p>Mật khẩu</p>
            <input name="matKhau" value={user.matKhau} />
          </div>
          <div className="form-group">
            <p>Số điện thoại</p>
            <input name="soDt" value={user.soDt} />
          </div>
          <div className="form-group">
            <p>Email</p>
            <input name="email" value={user.email} />
          </div>
          <div className="form-group">
            <p>Loại người dùng</p>
            <select name="maLoaiNguoiDung">
              <option>Chọn loại người dùng</option>
              <option value="KhachHang">Khách hàng</option>
              <option value="QuanTri">Quản trị</option>
            </select>
          </div>
          <>
            <button className="update">Cập nhật</button>{" "}
            <button className="cancel">Hủy bỏ</button>
          </>
        </div>
      </form>
    </div>
  );
}
