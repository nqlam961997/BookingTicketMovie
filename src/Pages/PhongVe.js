import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  datVeAction,
  layThongtinPhongVeAction,
} from "../Redux/actions/QuanLyPhimAction";
import { USER_LOGIN } from "../Util/Config";

export default function PhongVe(props) {
  const { thongTinPhongVe, danhSachGheDangDat } = useSelector(
    (state) => state.QuanLyPhimReducer
  );

  const dispatch = useDispatch();

  useEffect(async () => {
    let maLichChieu = props.match.params.maLichChieu;
    dispatch(await layThongtinPhongVeAction(maLichChieu));
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="main-cinema">
          <div className="flex-cinema">
            <div className="screen-main">
              <div className="screen">
                <img
                  src="https://tix.vn/app/assets/img/icons/screen.png"
                  alt="logo"
                />
              </div>
              <div className="row">
                {thongTinPhongVe.danhSachGhe?.map((ghe, index) => {
                  let classVipSeat = ghe.loaiGhe === "Vip" ? "vip-seat" : "";
                  let classBookedSeat = ghe.daDat ? "booked-seat" : "";
                  let content = ghe.daDat ? "X" : ghe.stt;
                  let disabled = ghe.daDat ? "disabled" : "";
                  // render booking seat
                  let indexBookingSeat = danhSachGheDangDat.findIndex(
                    (bookingSeat) => ghe.maGhe === bookingSeat.maGhe
                  );
                  let classBookingSeat =
                    indexBookingSeat !== -1 ? "booking-seat" : "";
                  return (
                    <Fragment key={index}>
                      <button
                        onClick={() => {
                          dispatch({
                            type: "DAT_GHE",
                            bookingSeat: {
                              maGhe: ghe.maGhe,
                              stt: ghe.stt,
                              giaVe: ghe.giaVe,
                            },
                          });
                        }}
                        disabled={disabled}
                        className={`seat ${classVipSeat} ${classBookedSeat} ${classBookingSeat}`}
                      >
                        {content}
                      </button>
                      {(index + 1) % 16 === 0 ? <br /> : ""}
                    </Fragment>
                  );
                })}
              </div>
            </div>
            <div className="cinema-result">
              <div>
                {danhSachGheDangDat
                  .reduce((tongTien, gheDangDat, index) => {
                    return (tongTien += gheDangDat.giaVe);
                  }, 0)
                  .toLocaleString()}
              </div>
              <hr />
              {/* <div className="cinema-rs-img">
                <img src={thongTinPhongVe.thongTinPhim?.hinhAnh} alt={thongTinPhongVe.thongTinPhim?.hinhAnh}/>
              </div> */}
              <h1>{thongTinPhongVe.thongTinPhim?.tenPhim}</h1>
              <p>
                {thongTinPhongVe.thongTinPhim?.tenCumRap} -{" "}
                {thongTinPhongVe.thongTinPhim?.tenRap}
              </p>
              <p>
                {thongTinPhongVe.thongTinPhim?.ngayChieu} -{" "}
                {thongTinPhongVe.thongTinPhim?.gioChieu}
              </p>
              <hr />
              <div>
                Ghế:
                {danhSachGheDangDat.map((gheDangDat, index) => {
                  return (
                    <span key={index} style={{ marginRight: "3px" }}>
                      {" "}
                      {gheDangDat.stt}{" "}
                    </span>
                  );
                })}
              </div>
              <hr />
              <button
                className="btn-white"
                onClick={async () => {
                  if (localStorage.getItem(USER_LOGIN)) {
                    // get userlogin from local storage
                    let usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
                    let objDatVe = {
                      maLichChieu: props.match.params.maLichChieu,
                      danhSachVe: danhSachGheDangDat,
                      taiKhoanNguoiDung: usLogin.taiKhoan,
                    };
                    console.log(usLogin);
                    dispatch(await datVeAction(objDatVe));
                  } else {
                    props.history.push("/dangnhap");
                  }
                }}
              >
                ĐẶT VÉ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
