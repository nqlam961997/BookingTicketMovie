import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachPhimAction } from "../Redux/actions/QuanLyPhimAction";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PhimSapChieu(props) {
  const dsPhim = useSelector((state) => state.QuanLyPhimReducer.dsPhim);

  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(await layDanhSachPhimAction());
  }, []);

  const handleAddClick = (index) => {
    let trailerSoon = document.getElementById(index);
    trailerSoon.classList.toggle("activeSoon");
  };

  let settings = {
    arrows: true,
    pauseOnHover: true,
    autoplaySpeed: 4000,
    autoplay: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {dsPhim?.slice(1, 10).map((film, index) => {
          return (
            <>
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
                </div>
                <div className="play-trailer">
                  <img
                    src="/img/play.png"
                    alt="play"
                    onClick={() => handleAddClick(index)}
                  />
                </div>
              </div>
              <div className="trailerSoon" id={index}>
                <iframe
                  controls
                  width="853"
                  height="480"
                  src={film.trailer}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <img
                  src="/img/close.png"
                  className="close-soon"
                  onClick={() => handleAddClick(index)}
                />
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
}
