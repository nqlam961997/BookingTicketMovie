import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import {
  themPhimMoiApiAction,
  updatePhimApiAction,
} from "../../../Redux/actions/AdminAction/QuanLyPhimAdminAction";
import { CANCLE_UPDATE } from "../../../Redux/constants/AdminConst/QuanLyPhimAdminConst";
import { history } from "../../../Util/history";

export default function ThemPhim() {
  const [state, setState] = useState({
    hinhAnh: {},
    maPhim: "",
    tenPhim: "",
    trailer: "",
    moTa: "",
    maNhom: "GP07",
  });

  const dispatch = useDispatch();

  const { thongTinPhim, updateFilm } = useSelector(
    (state) => state.QuanLyPhimAdminReducer
  );

  const handleChange = (e) => {
    let target = e.target;
    if (target.name === "hinhAnh") {
      setState({ ...state, hinhAnh: e.target.files[0] });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    for (let key in state) {
      form_data.append(key, state[key]);
    }
    // console.log("hinhanh ->", form_data.get("hinhAnh"));
    dispatch(await themPhimMoiApiAction(form_data));
  };

  // const handleUpdate = async (e) => {
  //   e.preventDefault();
  //   let form_data = new FormData();
  //   for (let key in state) {
  //     form_data.append(key, state[key]);
  //   }
  //   dispatch(await updatePhimApiAction(form_data));
  // };

  return (
    <div>
      <h1>THÊM PHIM</h1>
      <form className="container-form">
        <div className="thongTin">
          <div className="form-group">
            <p>Tên phim</p>
            <input
              name="tenPhim"
              id="tenPhim"
              value={state.state?.tenPhim}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <p>Trailer</p>
            <input name="trailer" id="trainler" onChange={handleChange} />
          </div>

          <div className="form-group">
            <p>Mô tả</p>
            <input name="moTa" id="moTa" onChange={handleChange} />
          </div>
        </div>

        <div className="upHinh">
          <div className="form-group">
            <p>Hình ảnh</p>
            <input type="file" name="hinhAnh" onChange={handleChange} />
          </div>
        </div>

        <button className="themPhim" onClick={handleAdd}>
          Thêm phim
        </button>
      </form>
    </div>
  );
}
