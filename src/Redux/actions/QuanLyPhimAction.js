import Axios from "axios";
import { ACCESSTOKEN, DOMAIN } from "../../Util/Config";
import {
  LAY_CHI_TIET_PHIM,
  LAY_THONG_TIN_PHONG_VE,
  LAY_DANH_SACH_PHIM_ACTION,
  LAY_THONG_TIN_HE_THONG_RAP,
  lAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP,
  lAY_THONG_TIN_PHONG_VE,
} from "../const/QuanLyPhimConst";
import Swal from "sweetalert2";

export const layDanhSachPhimAction = async () => {
  return async (dispatch) => {
    try {
      const { data, status } = await Axios({
        url: DOMAIN + "/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET",
      });
      if (status === 200) {
        dispatch({
          type: LAY_DANH_SACH_PHIM_ACTION,
          dsPhim: data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const layThongTinHeThongRapAction = async () => {
  return async (dispatch) => {
    try {
      const { data, status } = await Axios({
        url: DOMAIN + "/api/QuanLyRap/LayThongTinHeThongRap",
        method: "GET",
      });
      if (status === 200) {
        dispatch({
          type: LAY_THONG_TIN_HE_THONG_RAP,
          heThongRap: data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const layThongTinLichChieuHeThongRapAction = async (
  maHeThongRap,
  maNhom
) => {
  return async (dispatch) => {
    try {
      const { data, status } = await Axios({
        url:
          DOMAIN +
          `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${maNhom}`,
        method: "GET",
      });
      if (status === 200) {
        dispatch({
          type: lAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP,
          lichChieu: data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const layChiTietPhimApiAction = async (maPhim) => {
  return async (dispatch) => {
    try {
      const { data, status } = await Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        method: "GET",
      });
      if (status === 200) {
        dispatch({
          type: LAY_CHI_TIET_PHIM,
          chiTietPhim: data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const layThongtinPhongVeAction = async (maLichChieu) => {
  return async (dispatch) => {
    try {
      const { data, status } = await Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
        method: "GET",
      });
      console.log("dataThongTinPhongVe", data);
      if (status === 200) {
        dispatch({
          type: lAY_THONG_TIN_PHONG_VE,
          thongTinPhongVe: data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const datVeAction = async (thongTinVe) => {
  return async (dispatch) => {
    try {
      const { data, status } = await Axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
        method: "POST",
        data: thongTinVe,
        headers: {
          'Authorization' : "Bearer" + localStorage.getItem(ACCESSTOKEN),
        },
      });
      // reload danhSachGhe
      dispatch(await layThongtinPhongVeAction(thongTinVe.maLichChieu));
      dispatch({type: "DAT_VE_THANH_CONG"})
      Swal.fire("Thông báo", "Đặt vế thành công!", "success");
      console.log(data);
    } catch (err) {
      console.log(err);
      Swal.fire("Thông báo", "Đặt vế thất bại!", "error");
    }
  };
};
