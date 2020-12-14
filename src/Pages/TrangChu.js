import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachPhimAction } from "../Redux/actions/QuanLyPhimAction";
import { NavLink } from "react-router-dom";
import PhimDangChieu from "./PhimDangChieu";
import ThongTinCumRap from "./ThongTinCumRap";
import TinTuc from "./TinTuc";
import BackApp from "./BackApp";
import PhimSapChieu from "./PhimSapChieu";
import { CarouselItem } from "../Components/Carousel/CarouselItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TrangChu(props) {
  const handleAddActive = () => {
    let trailer = document.querySelector(".trailer");
    trailer.classList.toggle("active");
  };

  useEffect(() => {
    AOS.init({ duration: 1500 });
    // AOS.refresh();
  }, []);

  return (
    <>
      <div className="carousel" data-aos="fade-up">
        <div className="carousel-content">
          <h2>
            PUT ON A <span>HAPPY</span> FACE
          </h2>
          <p>
            {" "}
            "Joker từ lâu đã là siêu ác nhân huyền thoại của điện ảnh thế giới.
            Nhưng có bao giờ bạn tự hỏi, Joker đến từ đâu và điều gì đã biến
            Joker trở thành biểu tượng tội lỗi của thành phố Gotham? JOKER sẽ là
            cái nhìn độc đáo về tên ác nhân khét tiếng của Vũ trụ DC – một câu
            chuyện gốc thấm nhuần, nhưng tách biệt rõ ràng với những truyền
            thuyết quen thuộc xoay quanh nhân vật mang đầy tính biểu tượng
            này.",
          </p>
          <a href="#" className="play" onClick={handleAddActive}>
            <img src="img/play.png" />
            Xem Trailer
          </a>
          <div className="slide"></div>
        </div>
        <div className="trailer">
          <iframe
            controls
            width="853"
            height="480"
            src="https://www.youtube.com/embed/t433PEQGErc"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <img
            src="img/close.png"
            className="close"
            onClick={handleAddActive}
          ></img>
        </div>
      </div>
      <div className="container">
        <div className="film-wrapper" id="phimDangChieu" data-aos="fade-down">
          <div>
            <h1>Phim Đang Chiếu</h1>
            <PhimDangChieu />
          </div>
          <div style={{ marginTop: "30px" }}>
            <h1>Phim Sắp Chiếu</h1>
            <PhimSapChieu />
          </div>
        </div>
        <div id="cumRap" data-aos="fade-right">
          <ThongTinCumRap />
        </div>
        <div data-aos="fade-left">
          <TinTuc />
        </div>
      </div>
      <div data-aos="fade-up-right">
        <BackApp />
      </div>
    </>
  );
}
