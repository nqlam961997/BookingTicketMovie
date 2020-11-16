import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachNguoiDungApiAction } from "../../../Redux/actions/AdminAction/QuanLyNguoiDungAction";

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
            <button className="edit">Sửa</button>
            <button className="delete">Xóa</button>
          </>
        );
      },
    },
  ];

  useEffect(async () => {
    dispatch(await layDanhSachNguoiDungApiAction());
  }, []);

  const { dsNguoiDung } = useSelector((state) => state.QuanLyNguoiDungReducer);
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

  return (
    <>
      <h1>DANH SÁCH NGƯỜI DÙNG</h1>
      <Table columns={columns} dataSource={dsNguoiDungData} />
    </>
  );
}
