import React from "react";

export default function BackApp(props) {
  const renderSliderApp = () => {
    let imgArray = [1, 2, 3];
    return imgArray.map((img, index) => {
      return (
        <div className="app-img">
          <img
            src={`/img/slider-app/slide${img}.jpg`}
            className="img-slider-app"
          />
        </div>
      );
    });
  };

  return (
    <div className="app-wrapper">
      <div className="back-app-img">
        <div className="app-main">
          <div className="app-content">
            <h3>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h3>
            <p>
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <a>App miễn phí - tải về ngay</a>
          </div>
          <div className="app-slider">
            <img src="/img/slider-app/mobile.png" className="img-rps" />
            {renderSliderApp()}
          </div>
        </div>
      </div>
    </div>
  );
}
