import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { USER_LOGIN } from "../../Util/Config";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinTaiKhoanActionApi } from "../../Redux/actions/QuanLyNguoiDungAction";
import { history } from "../../Util/history";

export default function ThongTinTaiKhoan() {
  const dispatch = useDispatch();

  let userProfile = JSON.parse(localStorage.getItem(USER_LOGIN));
  let { thongTinUser } = useSelector((state) => state.QuanLyNguoiDungReducer);

  useEffect(async () => {
    let userFile = {};
    userFile.taiKhoan = userProfile.taiKhoan;
    dispatch(await layThongTinTaiKhoanActionApi(userFile));
  }, [thongTinUser]);

  const handleEdit = async (userProfile) => {
    let user = {};
    user.taiKhoan = userProfile;
    dispatch(await layThongTinTaiKhoanActionApi(user));
    history.push("/thongtintaikhoan/editprofile");
  };

  return (
    <Row>
      <Col className="col-user" xl={8} sm={24}>
        <h1 className="text-user">THÔNG TIN CÁ NHÂN</h1>

        <Row className="thongTin">
          <Col className="col-user1" xl={8}>
            <h2>Họ và tên:</h2>
          </Col>

          <Col className="col-user2" xl={12}>
            <h2>{thongTinUser?.hoTen}</h2>
          </Col>
        </Row>

        <Row className="thongTin">
          <Col className="col-user1" xl={8}>
            <h2>Tài khoản:</h2>
          </Col>

          <Col className="col-user2" xl={12}>
            <h2>{thongTinUser?.taiKhoan}</h2>
          </Col>
        </Row>

        <Row className="thongTin">
          <Col className="col-user1" xl={8}>
            <h2>Số điện thoại:</h2>
          </Col>

          <Col className="col-user2" xl={12}>
            <h2>{thongTinUser?.soDT}</h2>
          </Col>
        </Row>

        <Row className="thongTin">
          <Col className="col-user1" xl={8}>
            <h2>Email:</h2>
          </Col>

          <Col className="col-user2" xl={12}>
            <h2>{thongTinUser?.email}</h2>
          </Col>
        </Row>

        <Col className="btn-edit">
          <button
            className="edit"
            onClick={() => handleEdit(userProfile.taiKhoan)}
          >
            Chỉnh sửa
          </button>
        </Col>
      </Col>
    </Row>
  );
}
