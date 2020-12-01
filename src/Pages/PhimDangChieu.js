import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachPhimAction } from "../Redux/actions/QuanLyPhimAction";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PhimDangChieu(props) {
  const dsPhim = useSelector((state) => state.QuanLyPhimReducer.dsPhim);

  console.log(dsPhim);
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(await layDanhSachPhimAction());
  }, []);

  const renderPhim = () => {
    return dsPhim?.slice(0, 8).map((film, index) => {
      return (
        <div className="box" key={index}>
          <div className="box-img">
            <img
              src={film.hinhAnh}
              alt={film.hinhAnh}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = "https://picsum.photos/300/300";
              }}
            />
          </div>
          <div className="film-content">
            <h3 className="film-title">{film.tenPhim}</h3>
            <p>IMDb 7.3/10</p>
          </div>
          <div className="button-bookTicket">
            <NavLink to={"/thongtinphim/" + film.maPhim} className="btn-red">
              ĐẶT VÉ
            </NavLink>
          </div>
        </div>
      );
    });
  };

  let settings = {
    arrows:true,
    pauseOnHover:true,
    autoplaySpeed: 4000,
    autoplay: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <>
      <Slider {...settings}>{renderPhim()}</Slider>
    </>
  );
}
