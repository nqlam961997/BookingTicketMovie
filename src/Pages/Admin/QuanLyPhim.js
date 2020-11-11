import React, { useContext, useState, useEffect, useRef } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import { dataTable } from "./QuanLyPhimTableData";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachPhimApiAction } from "../../Redux/actions/AdminAction/QuanLyPhimAction";

export default function QuanLyPhim() {
  const { dsPhim } = useSelector((state) => state.QuanLyPhimReducer);
  const dispatch = useDispatch();

  const dsPhimData = dsPhim.map((phim, i) => {
    return {
      key: i,
      maPhim: phim.maPhim,
      tenPhim: phim.tenPhim,
      hinhAnh: <img src={phim.hinhAnh} alr="" width={70} height={80} />,
      moTa: phim.moTa,
      ngayKhoiChieu: phim.ngayKhoiChieu,
      handle: (
        <>
          <button className="edit">Sửa</button>
          <button className="delete">Xóa</button>
        </>
      ),
    };
  });
  console.log("ds phim data ->", dsPhimData);

  // setData([(data = dsPhimData)]);

  useEffect(async () => {
    dispatch(await layDanhSachPhimApiAction());
  }, []);

  const renderCol = () => {
    return dataTable.columns.map((col, i) => {
      return col;
    });
  };

  return (
    <div>
      <h1>QUẢN LÝ PHIM</h1>
      <Table columns={renderCol()} dataSource={dsPhimData} />
    </div>
  );
}
