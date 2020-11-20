import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachPhimAction } from "../Redux/actions/QuanLyPhimAction";

export default function TrangChu(props) {
  const dsPhim = useSelector((state) => state.QuanLyPhimReducer);

  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(await layDanhSachPhimAction());
  }, []);

  const renderPhim = () => {};

  const handleAddActive = () => {
    let trailer = document.querySelector(".trailer");
    trailer.classList.toggle("active");
  };

  return (
    <>
    <div className="carousel">
      <div className="carousel-content">
        <h2>
          Put on a <span>Happy</span> face
        </h2>
        <p>
          Joker từ lâu đã là siêu ác nhân huyền thoại của điện ảnh thế giới.
          Nhưng có bao giờ bạn tự hỏi, Joker đến từ đâu và điều gì đã biến Joker
          trở thành biểu tượng tội lỗi của thành phố Gotham? JOKER sẽ là cái
          nhìn độc đáo về tên ác nhân khét tiếng của Vũ trụ DC – một câu chuyện
          gốc thấm nhuần, nhưng tách biệt rõ ràng với những truyền thuyết quen
          thuộc xoay quanh nhân vật mang đầy tính biểu tượng này.
        </p>
        <a href="#" className="play" onClick={handleAddActive}>
          <img src="img/play.png" />
          Watch Trailer
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
    <div className="film"></div>
    </>
  );
}
