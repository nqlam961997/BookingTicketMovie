import React from "react";

export default function TinTuc(props) {
  return (
    <>
      <div className="back-new"></div>
      <div className="news-block" >
        <h1>Điện Ảnh 24h</h1>
        <div className="wrap-news">
          <div className="news-one news">
            <div className="news-img">
              <img src="img/boc-tem.jpg" alt="new1" />
            </div>
            <div className="news-content-one news-content">
              <h4>“Bóc tem” tổ hợp giải trí mới toanh của giới Sài Thành</h4>
              <p>
                Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo
                độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương tại
                360 Giải Phóng!{" "}
              </p>
              <a>Chi tiết</a>
            </div>
          </div>
          <div className="news-two news">
            <div className="news-img">
              <img src="img/tiec-trang-mau.png" alt="new2" />
            </div>
            <div className="news-content-two news-content">
              <h4>
                Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công
                chiếu
              </h4>
              <p>
                Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc bộ
                phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi sao
                “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ trong một
                khung hình để ăn mừng thành tích ấn tượng
              </p>
              <a>Chi tiết</a>
            </div>
          </div>
          <button className="btn-xem">Xem Thêm</button>
        </div>
      </div>
    </>
  );
}
