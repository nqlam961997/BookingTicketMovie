import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  layThongTinHeThongRapAction,
  layThongTinLichChieuHeThongRapAction,
} from "../Redux/actions/QuanLyPhimAction";

export default function ThongTinCumRap(props) {
  const [maHeThongRap, setMaHeThongRap] = useState("BHDStar");
  const [danhSachPhim, setDanhSachPhim] = useState([]);

  const { heThongRap, lichChieu } = useSelector(
    (state) => state.QuanLyPhimReducer
  );

  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(await layThongTinHeThongRapAction());
  }, []);

  console.log(lichChieu);

  console.log("danhSachPhim", danhSachPhim);

  const renderHeThongRap = () => {
    return heThongRap.map((rap, index) => {
      return (
        <li key={index} className="cinema-col">
          <a
            className="cinema-ho"
            onClick={() => {
              setMaHeThongRap(rap.maHeThongRap);
            }}
          >
            <img src={rap.logo} alt="logo" className="logo" />
          </a>
        </li>
      );
    });
  };

  useEffect(async () => {
    dispatch(await layThongTinLichChieuHeThongRapAction(maHeThongRap, "GP01"));
  }, [maHeThongRap]);

  const renderCinema = () => {
    return lichChieu.map((item, index) => {
      return (
        <div className="cinema-item" key={index}>
          {item.lstCumRap.map((cumRap, index) => {
            return (
              <div className="cinema-dt" key={index}>
                <a onClick={() => setDanhSachPhim(cumRap.danhSachPhim)}>
                  <span>{cumRap.tenCumRap}</span>
                  <p>{cumRap.diaChi}</p>
                </a>
              </div>
            );
          })}
        </div>
      );
    });
  };

  const renderMovie = () => {
    return danhSachPhim?.slice(0, 8).map((phim, index) => {
      return (
        <div className="box-movie">
          <div key={index} className="movie-info">
            <img
              src={phim.hinhAnh}
              alt={phim.hinhAnh}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = "https://picsum.photos/300/300";
              }}
            />
            <div className="wrap-info">
              <p>
                <span>C18</span>
                <h4> {phim.tenPhim}</h4>
              </p>
              <p className="ngBinding">100 phút - IMDb 7.3</p>
            </div>
          </div>
          <div className="movie-time">
            <h3>2D Digital</h3>
            <a className="season">
              <span>15:30</span>~17:30
            </a>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="back-new"></div>
      <div className="cinema-block" id="cumRap">
        <div className="home-cinema">
          <ul className="list-cinemas">{renderHeThongRap()}</ul>
          <div className="cinema">{renderCinema()}</div>
          <div className="wrap-movie">{renderMovie()}</div>
        </div>
      </div>
    </>
  );
}
