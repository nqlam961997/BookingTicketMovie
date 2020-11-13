import React, { useState } from "react";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import { themPhimMoiApiAction } from "../../../Redux/actions/AdminAction/QuanLyPhimAction";

export default function ThemPhim() {
  const [state, setState] = useState({
    hinhAnh: {},
    maPhim: "",
    tenPhim: "",
    trailer: "",
    moTa: "",
    maNhom: "GP01",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    let target = e.target;
    if (target.name === "hinhAnh") {
      setState({ ...state, hinhAnh: e.target.files[0] });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };
  // console.log(state);

  const handleSubmit = async (e) => {
    e.preventDefault();
    var form_data = new FormData();
    for (var key in state) {
      form_data.append(key, state[key]);
    }
    // console.log("hinhanh ->", form_data.get("hinhAnh"));
    dispatch(await themPhimMoiApiAction(form_data));
  };

  return (
    <div>
      <h1>THÊM PHIM</h1>
      <form className="container-form" onSubmit={handleSubmit}>
        <div className="thongTin">
          <div className="form-group">
            <p>Mã nhóm</p>
            <input
              name="maNhom"
              value="GP01"
              onChange={handleChange}
              disabled
            />
          </div>

          <div className="form-group">
            <p>Mã phim</p>
            <input
              type="number"
              name="maPhim"
              id="maPhim"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <p>Tên phim</p>
            <input name="tenPhim" id="tenPhim" onChange={handleChange} />
          </div>

          <div className="form-group">
            <p>Trailer</p>
            <input name="trailer" onChange={handleChange} />
          </div>
        </div>

        <div className="upHinh">
          <div className="form-group">
            <p>Hình ảnh</p>
            <input type="file" name="hinhAnh" onChange={handleChange} />
          </div>
        </div>

        <button className="themPhim">Thêm phim</button>
      </form>
    </div>
  );
}

{
  /* <div className="form-group">
        <div className="form-text">
          <p>Tên phim</p>
        </div>
        <input name="tenPhim" />
      </div>

      <div className="form-group">
        <p>Bí danh</p>
        <input name="biDanh" />
      </div>

      

       */
}
