import React, { useContext, useState, useEffect, useRef } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import { dataTable } from "./QuanLyPhimTableData";

export default function QuanLyPhim() {
  const [data, setData] = useState([
    {
      key: "1",
      maPhim: "John Brown",
      tenPhim: 32,
      hinhAnh: "New York No. 1 Lake Park, New York No. 1 Lake Park",
      moTa: "New York No. 1 Lake Park, New York No. 1 Lake Park",
      ngayKhoiChieu: "New York No. 1 Lake Park, New York No. 1 Lake Park",
      handle: (
        <>
          <button className="edit">Sửa</button>
          <button className="delete">Xóa</button>
        </>
      ),
    },
    {
      key: "1",
      maPhim: "John Brown",
      tenPhim: 32,
      hinhAnh: "New York No. 1 Lake Park, New York No. 1 Lake Park",
      moTa: "New York No. 1 Lake Park, New York No. 1 Lake Park",
      ngayKhoiChieu: "New York No. 1 Lake Park, New York No. 1 Lake Park",
      handle: (
        <>
          <button className="edit">Sửa</button>
          <button className="delete">Xóa</button>
        </>
      ),
    },
    {
      key: "1",
      maPhim: "John Brown",
      tenPhim: 32,
      hinhAnh: "New York No. 1 Lake Park, New York No. 1 Lake Park",
      moTa: "New York No. 1 Lake Park, New York No. 1 Lake Park",
      ngayKhoiChieu: "New York No. 1 Lake Park, New York No. 1 Lake Park",
      handle: (
        <>
          <button className="edit">Sửa</button>
          <button className="delete">Xóa</button>
        </>
      ),
    },
  ]);

  const renderCol = () => {
    return dataTable.columns.map((col, i) => {
      return col;
    });
  };

  return (
    <div>
      <h1>QUẢN LÝ PHIM</h1>
      <Table columns={renderCol()} dataSource={data} />
    </div>
  );
}
