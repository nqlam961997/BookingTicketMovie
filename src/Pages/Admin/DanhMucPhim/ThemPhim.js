import React, { useState } from "react";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import {
  themPhimMoiApiAction,
  updatePhimApiAction,
} from "../../../Redux/actions/AdminAction/QuanLyPhimAdminAction";

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
  // console.log(state);

  const handleAdd = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    for (let key in state) {
      form_data.append(key, state[key]);
    }
    // console.log("hinhanh ->", form_data.get("hinhAnh"));
    dispatch(await themPhimMoiApiAction(form_data));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    for (let key in state) {
      form_data.append(key, state[key]);
    }
    dispatch(await updatePhimApiAction(form_data));
  };

  return (
    <div>
      <h1>THÊM PHIM</h1>
      <form className="container-form">
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
            <p>Tên phim</p>
            <input
              name="tenPhim"
              defaultValue={thongTinPhim?.tenPhim}
              id="tenPhim"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <p>Trailer</p>
            <input
              name="trailer"
              defaultValue={thongTinPhim?.trailer}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <p>Mô tả</p>
            <input
              name="moTa"
              defaultValue={thongTinPhim?.moTa}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="upHinh">
          <div className="form-group">
            <p>Hình ảnh</p>
            <input
              type="file"
              name="hinhAnh"
              defaultValue={thongTinPhim?.hinhAnh}
              onChange={handleChange}
            />
            <img src={thongTinPhim?.hinhAnh} alt="" width={100} height={150} />
          </div>
        </div>

        {updateFilm ? (
          <button className="updatePhim" onClick={handleUpdate}>
            Cập nhật phim
          </button>
        ) : (
          <button className="themPhim" onClick={handleAdd}>
            Thêm phim
          </button>
        )}
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
