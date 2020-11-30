import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  layDanhSachNguoiDungApiAction,
  layThongTinNguoiDung,
  xoaNguoiDung,
} from "../../../Redux/actions/AdminAction/QuanLyNguoiDungAdminAction";
import { history } from "../../../Util/history";

export default function QuanLyNguoiDung() {
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Họ và tên",
      dataIndex: "hoTen",
      key: "name",
      render: (text) => <a>{text}</a>,
      width: 150,
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "age",
      width: 200,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "address 1",
      witdh: 300,
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDt",
      key: "address 2",
    },
    {
      title: "Mật khẩu",
      dataIndex: "matKhau",
      key: "address 3",
    },
    {
      title: "Loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      key: "address 4",
    },
    {
      title: "",
      dataIndex: "handle",
      key: "address 5",
      render: (record, action) => {
        return (
          <>
            <button
              className="edit"
              onClick={() => handleUser(action.taiKhoan)}
            >
              Sửa
            </button>
            <button
              className="delete"
              onClick={() => handleDelete(action.taiKhoan)}
            >
              Xóa
            </button>
          </>
        );
      },
    },
  ];

  const { dsNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungAdminReducer
  );
  const dsNguoiDungData = dsNguoiDung.map((nguoiDung, i) => {
    return {
      key: i,
      hoTen: nguoiDung.hoTen,
      taiKhoan: nguoiDung.taiKhoan,
      email: nguoiDung.email,
      soDt: nguoiDung.soDt,
      matKhau: nguoiDung.matKhau,
      maLoaiNguoiDung: nguoiDung.maLoaiNguoiDung,
    };
  });

  const [user, setUser] = useState({ taiKhoan: "" });

  useEffect(async () => {
    dispatch(await layDanhSachNguoiDungApiAction());
  }, []);

  const handleDelete = async (taiKhoan) => {
    dispatch(await xoaNguoiDung(taiKhoan));
  };

  const handleUser = async (tk) => {
    setUser({ taiKhoan: tk });
    console.log("tai khoan handleUser ->", user);
    // dispatch(await layThongTinNguoiDung(user));
    // history.push("/admin/chinhsuauser");
  };

  return (
    <>
      <h1>DANH SÁCH NGƯỜI DÙNG</h1>
      <Table columns={columns} dataSource={dsNguoiDungData} />
    </>
  );
}
