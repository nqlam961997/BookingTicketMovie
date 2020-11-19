import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import {
  themPhimMoiApiAction,
  updatePhimApiAction,
} from "../../../Redux/actions/AdminAction/QuanLyPhimAdminAction";
import { CANCLE_UPDATE } from "../../../Redux/constants/AdminConst/QuanLyPhimAdminConst";
import { history } from "../../../Util/history";

export default function EditPhim() {
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

  useEffect(() => {
    setState({
      ...state,
      maNhom: thongTinPhim?.maNhom,
      maPhim: thongTinPhim?.maPhim,
      tenPhim: thongTinPhim?.tenPhim,
      trailer: thongTinPhim?.trailer,
      moTa: thongTinPhim?.moTa,
    });
  }, [thongTinPhim]);

  console.log(state);

  const handleChange = (e) => {
    let target = e.target;
    if (target.name === "hinhAnh") {
      setState({ ...state, hinhAnh: e.target.files[0] });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    for (let key in state) {
      form_data.append(key, state[key]);
    }
    dispatch(await updatePhimApiAction(form_data));
    document.getElementById("form-edit").reset();
    console.log(state);
  };

  const handleCancle = (e) => {
    e.preventDefault();
    setState({
      hinhAnh: {},
      maPhim: "",
      tenPhim: "",
      trailer: "",
      moTa: "",
    });
    document.getElementById("form-edit").reset();
    dispatch({
      type: CANCLE_UPDATE,
    });
    history.push("/admin/quanlyphim");
  };

  return (
    <div>
      <h1>THÊM PHIM</h1>
      <form className="container-form" id="form-edit">
        <div className="thongTin">
          <div className="form-group">
            <p>Mã nhóm</p>
            <input
              name="maNhom"
              id="maNhom"
              value={state.maNhom}
              disabled
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <p>Mã phim</p>
            <input
              name="maPhim"
              id="maPhim"
              value={state.maPhim}
              disabled
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <p>Tên phim</p>
            <input
              name="tenPhim"
              id="tenPhim"
              value={state?.tenPhim}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <p>Trailer</p>
            <input
              name="trailer"
              id="trainler"
              value={state?.trailer}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <p>Mô tả</p>
            <input
              name="moTa"
              id="moTa"
              value={state.moTa}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="upHinh">
          <div className="form-group">
            <p>Hình ảnh</p>
            <input type="file" name="hinhAnh" onChange={handleChange} />
          </div>
          <img
            src={thongTinPhim?.hinhAnh}
            alt=""
            width={250}
            height={300}
            style={{ marginBottom: "5%" }}
          />
        </div>

        <>
          <button className="updatePhim" onClick={handleUpdate}>
            Cập nhật phim
          </button>{" "}
          <button className="cancle" onClick={handleCancle}>
            Hủy bỏ
          </button>
        </>
      </form>
    </div>
  );
}
