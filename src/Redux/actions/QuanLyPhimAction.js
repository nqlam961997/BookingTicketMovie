import Axios from "axios";
import { DOMAIN } from "../../Util/Config";
import {
  LAY_CHI_TIET_PHIM,
  LAY_THONG_TIN_PHONG_VE,
  LAY_DANH_SACH_PHIM_ACTION,
  LAY_THONG_TIN_HE_THONG_RAP,
  lAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP,
} from "../const/QuanLyPhimConst";

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
