import React, { useState } from "react";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { themPhimMoiApiAction } from "../../../Redux/actions/AdminAction/QuanLyPhimAdminAction";

export default function ThemPhim() {
  const [state, setState] = useState({
    hinhAnh: {},
    maPhim: "",
    tenPhim: "",
    trailer: "",
    moTa: "",
    maNhom: "GP07",
  });
  const [error, setError] = useState({
    hinhAnh: "",
    maPhim: "",
    tenPhim: "",
    trailer: "",
    moTa: "",
  });
  const dispatch = useDispatch();

  const { thongTinPhim, updateFilm } = useSelector(
    (state) => state.QuanLyPhimAdminReducer
  );

  const handleChange = (e) => {
    let target = e.target;
    let errorMsg = "";
    let values = { ...state, [target.name]: target.value };
    let errors = { ...error, [target.name]: errorMsg };
    console.log(target.files);

    if (target.value.trim() === "") {
      errorMsg = target.name + " không được để trống";
    }

    if (target.type === "file") {
      if (target.files === null) {
        errorMsg = target.name + " không được bỏ trông";
      }
    }

    if (target.name === "hinhAnh") {
      setState({ ...state, hinhAnh: e.target.files[0] });
    } else {
      setState(values);
      setError(errors);
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

  return (
    <div>
      <h1>THÊM PHIM</h1>
      <form className="container-form">
        <div className="thongTin">
          <div className="form-group">
            <p>Tên phim</p>
            <input name="tenPhim" id="tenPhim" onChange={handleChange} />
            <p className="text-error">{error?.tenPhim}</p>
          </div>

          <div className="form-group">
            <p>Trailer</p>
            <input name="trailer" id="trainler" onChange={handleChange} />
            <p className="text-error">{error?.trailer}</p>
          </div>

          <div className="form-group">
            <p>Mô tả</p>
            <input name="moTa" id="moTa" onChange={handleChange} />
            <p className="text-error">{error?.moTa}</p>
          </div>
        </div>

        <div className="upHinh">
          <div className="form-group">
            <p>Hình ảnh</p>
            <input type="file" name="hinhAnh" onChange={handleChange} />
            <p className="text-error">{error?.hinhAnh}</p>
          </div>
        </div>

        <button className="themPhim" onClick={handleAdd}>
          Thêm phim
        </button>
      </form>
    </div>
  );
}
