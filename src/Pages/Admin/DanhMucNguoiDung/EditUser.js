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
    const { value, name } = e.target;
    console.log(name, value);
    setUser({ ...user, [name]: value });
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

  return (
    <div>
      <h1>CHỈNH SỬA NGƯỜI DÙNG</h1>

      <form className="container-form userForm" onSubmit={handleSubmit}>
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
            <input name="soDt" value={user.soDt} onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>Email</p>
            <input name="email" value={user.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>Loại người dùng</p>
            <select name="maLoaiNguoiDung" onChange={handleChange}>
              <option>Chọn loại người dùng</option>
              <option value="KhachHang">Khách hàng</option>
              <option value="QuanTri">Quản trị</option>
            </select>
          </div>
          <>
            <button className="update" type="submit">
              Cập nhật
            </button>{" "}
            <button className="cancel" onClick={handleCancle}>
              Hủy bỏ
            </button>
          </>
        </div>
      </form>
    </div>
  );
}
