import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layChiTietPhimApiAction } from "../Redux/actions/QuanLyPhimAction";
import { NavLink } from "react-router-dom";
import moment from "moment";

export default function ThongTinFilm(props) {
  const dispatch = useDispatch();

  const [cumRap, setCumRap] = useState("BHDStar");

  useEffect(async () => {
    let maPhim = props.match.params.maPhim;
    dispatch(await layChiTietPhimApiAction(maPhim));
  }, []);

  const chiTietPhim = useSelector(
    (state) => state.QuanLyPhimReducer.chiTietPhim
  );

  console.log("Chi tiết phim", chiTietPhim);

  const renderMovieTime = () => {
    return chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
      if (heThongRap.maHeThongRap === cumRap) {
        return (
          <div
            key={index}
            className="tab-pane"
            id={heThongRap.maHeThongRap}
          >
            {heThongRap.cumRapChieu?.map((cumRap, index) => {
              return (
                <div key={index} className="time-wrap">
                  <p style={{ fontWeight: "bold", fontSize: "25px" }}>
                    {cumRap.tenCumRap}
                  </p>
                  <div className="time-box">
                    {cumRap.lichChieuPhim
                      ?.slice(0, 6)
                      .map((lichChieu, index) => {
                        return (
                          <NavLink
                            to={"/chitietphongve/" + lichChieu.maLichChieu}
                            className="time"
                            key={index}
                          >
                            {moment(lichChieu.ngayChieuGioChieu).format(
                              "hh:mm A"
                            )}
                          </NavLink>
                        );
                      })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      }
    });
  };

  return (
    <div className="bg-main">
      <div className="box-detail">
        <div className="detail-info">
          <img src={chiTietPhim.hinhAnh} alt="" />
          <div className="detail-content">
            <span>C18</span>
            <h4> {chiTietPhim.tenPhim}</h4>
            <p className="ngBinding">100 phút - IMDb 7.3 - 2D/Digital</p>
            <a href="#time-to-watch" className="btn-red">
              ĐẶT VÉ
            </a>
          </div>
          <div className="circle-star">
            <div className="percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="c-number">
                <h2>8.7</h2>
              </div>
              <h2 className="c-content">69 người đánh giá</h2>
            </div>
          </div>
        </div>
        <div className="movie-info">
          <h2>THÔNG TIN PHIM</h2>
          <div className="movie-info-wrap">
            <div className="movie-detail">
              <div className="detail-item">
                <span>Ngày công chiếu</span>
              </div>
              <div className="detail-item">
                <span>23.10.2020</span>
              </div>
              <div className="detail-item">
                <span>Đạo diễn</span>
              </div>
              <div className="detail-item">
                <span>Phan Gia Nhật Linh</span>
              </div>
              <div className="detail-item">
                <span>Diễn viên</span>
              </div>
              <div className="detail-item">
                <span>
                  Kaity Nguyễn, Kiều Minh Tuấn, Thu Trang, Hứa Vĩ Văn, Hồng Ánh,
                  NSƯT Đức Thịnh, Thái Hòa, Nguyễn Quang Dũng
                </span>
              </div>
              <div className="detail-item">
                <span>Thể Loại</span>
              </div>
              <div className="detail-item">
                <span>hài hước, chính kịch</span>
              </div>
            </div>
            <div className="movie-story">
              <h6>Nội dung</h6>
              <p>{chiTietPhim.moTa}</p>
            </div>
          </div>
          <h2>Lịch Chiếu</h2>
          <div className="movie-time">
            <div className="movie-logo">
              <ul>
                {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
                  return (
                    <li className="logo-item" key={index}>
                      <a
                        onClick={() => setCumRap(heThongRap.maHeThongRap)}
                        href={`#${heThongRap.maHeThongRap}`}
                      >
                        <img src={heThongRap.logo} alt="" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="time-to-watch" id="time-to-watch">{renderMovieTime()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
