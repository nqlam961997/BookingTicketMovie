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

    console.log(target.files);

    if (target.value.trim() === "") {
      errorMsg = target.name + " không được để trống";
    }
    let values = { ...state, [target.name]: target.value };
    let errors = { ...error, [target.name]: errorMsg };

    if (target.name === "hinhAnh") {
      setState({ ...state, hinhAnh: e.target.files[0] });
    } else {
      setState(values);
      setError(errors);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    for (let key in state) {
      form_data.append(key, state[key]);
    }
    // console.log("hinhanh ->", form_data.get("hinhAnh"));
    dispatch(await themPhimMoiApiAction(form_data));
  };

  const renderButton = () => {
    let valid = true;
    for (let item in error) {
      if (error[item] !== "") {
        valid = false;
      }
    }
    if (valid) {
      return (
        <button type="submit" className="themPhim">
          Thêm phim
        </button>
      );
    } else {
      return (
        <button type="submit" className="themPhim disabled" disabled>
          Thêm phim
        </button>
      );
    }
  };

  return (
    <div>
      <h1>THÊM PHIM</h1>
      <form className="container-form" onSubmit={handleSubmit}>
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
        {renderButton()}
      </form>
    </div>
  );
}
