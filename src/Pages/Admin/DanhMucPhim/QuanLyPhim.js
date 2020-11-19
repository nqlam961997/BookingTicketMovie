import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
// import { dataTable } from "./QuanLyPhimTableData";
import { useDispatch, useSelector } from "react-redux";
import {
  layDanhSachPhimApiAction,
  layThongTinPhimAdminApiAction,
  xoaPhimApiAction,
} from "../../../Redux/actions/AdminAction/QuanLyPhimAdminAction";
import { history } from "../../../Util/history";

export default function QuanLyPhim() {
  const { dsPhim } = useSelector((state) => state.QuanLyPhimAdminReducer);
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      key: "name",
      render: (text) => <a>{text}</a>,
      width: 100,
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      key: "age",
      width: 200,
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "address 1",
      ellipsis: true,
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      key: "address 2",
      ellipsis: true,
    },
    {
      title: "Ngày khởi chiếu",
      dataIndex: "ngayKhoiChieu",
      key: "address 3",
      ellipsis: true,
    },
    {
      title: "",
      dataIndex: "handle",
      key: "address 4",
      render: (record, action) => {
        return (
          <>
            <button className="edit" onClick={() => handleEdit(action.maPhim)}>
              Sửa
            </button>
            <button
              className="delete"
              onClick={() => handleDelete(action.maPhim)}
            >
              Xóa
            </button>
          </>
        );
      },
    },
  ];

  const dsPhimData = dsPhim.map((phim, i) => {
    return {
      key: i,
      maPhim: phim.maPhim,
      tenPhim: phim.tenPhim,
      hinhAnh: <img src={phim.hinhAnh} alr="" width={70} height={80} />,
      moTa: phim.moTa,
      ngayKhoiChieu: phim.ngayKhoiChieu,
    };
  });

  useEffect(() => {
    dispatch(layDanhSachPhimApiAction());
  }, [dsPhim]);

  const handleDelete = (maPhim) => {
    dispatch(xoaPhimApiAction(maPhim));
  };

  const handleEdit = async (maPhim) => {
    dispatch(await layThongTinPhimAdminApiAction(maPhim));
    history.push("/admin/editphim");
  };

  return (
    <div>
      <h1>DANH SÁCH PHIM</h1>
      <Table columns={columns} dataSource={dsPhimData} />
    </div>
  );
}
