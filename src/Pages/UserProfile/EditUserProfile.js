import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { capNhatUser } from "../../Redux/actions/QuanLyNguoiDungAction";
import { history } from "../../Util/history";

export default function EditUserProfile() {
  const [userEdit, setUserEdit] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDT: "",
    hoTen: "",
    maNhom: "GP07",
    maLoaiNguoiDung: "KhachHang",
  });

  const { thongTinUser } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setUserEdit({
      ...userEdit,
      taiKhoan: thongTinUser?.taiKhoan,
      matKhau: thongTinUser?.matKhau,
      email: thongTinUser?.email,
      soDT: thongTinUser?.soDT,
      hoTen: thongTinUser?.hoTen,
    });
  }, [thongTinUser]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUserEdit({ ...userEdit, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(await capNhatUser(userEdit));
    history.push("/thongtintaikhoan/profile");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Col className="col-user" xl={8} sm={24}>
          <h1 className="text-user">CẬP NHẬT THÔNG TIN CÁ NHÂN</h1>

          <Row className="thongTin">
            <Col className="col-user1" xl={8}>
              <h2>Họ và tên:</h2>
            </Col>

            <Col xl={12} className="col-user2">
              {/* <h2>{userProfile.hoTen}</h2> */}
              <input
                type="text"
                name="hoTen"
                value={userEdit.hoTen}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Row className="thongTin">
            <Col className="col-user1" xl={8}>
              <h2>Tài khoản:</h2>
            </Col>

            <Col xl={12} className="col-user2">
              {/* <h2>{userProfile.taiKhoan}</h2> */}
              <input
                type="text"
                name="taiKhoan"
                value={userEdit.taiKhoan}
                disabled
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Row className="thongTin">
            <Col className="col-user1" xl={8}>
              <h2>Mật khẩu:</h2>
            </Col>

            <Col xl={12} className="col-user2">
              {/* <h2>{userProfile.email}</h2> */}
              <input
                type="text"
                name="matKhau"
                value={userEdit.matKhau}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Row className="thongTin">
            <Col className="col-user1" xl={8}>
              <h2>Số ĐT:</h2>
            </Col>

            <Col xl={12} className="col-user2">
              {/* <h2>{userProfile.soDT}</h2> */}
              <input
                type="text"
                name="soDT"
                value={userEdit.soDT}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Row className="thongTin">
            <Col className="col-user1" xl={8}>
              <h2>Email:</h2>
            </Col>

            <Col xl={12} className="col-user2">
              {/* <h2>{userProfile.email}</h2> */}
              <input
                type="text"
                name="email"
                value={userEdit.email}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Col className="col-user1">
            {/* <h2>{userProfile.email}</h2> */}
            <button className="edit" type="submit">
              Cập nhật
            </button>
          </Col>
        </Col>
      </Row>
    </form>
  );
}
