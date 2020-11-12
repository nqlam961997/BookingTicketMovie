import Axios from "axios";
import {
  LAY_DANH_SACH_PHIM,
  THEM_PHIM_MOI,
  XOA_PHIM,
} from "../../constants/AdminConst/QuanLyPhimConst";
import noti from "sweetalert2";

export const layDanhSachPhimApiAction = () => {
  return async (dispatch) => {
    try {
      let { data, status } = await Axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET",
      });
      if (status === 200) {
        dispatch({
          type: LAY_DANH_SACH_PHIM,
          dsPhim: data,
        });
      }
    } catch (err) {
      console.log(err.data);
    }
  };
};

export const themPhimMoiApiAction = (thongTin) => {
  console.log(thongTin);
  return async (dispatch) => {
    try {
      let { data, status } = await Axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
        method: "POST",
        data: thongTin,
      });
      if (status === 200) {
        dispatch({
          type: THEM_PHIM_MOI,
        });
        noti.fire("Thông báo", "Thêm phim thành công", "success");
      }
    } catch (e) {
      noti.fire("Thông báo", "Thêm phim không thành công", "error");
    }
  };
};

export const xoaPhimApiAction = (maPhim) => {
  return async (dispatch) => {
    try {
      let { data, status } = await Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
        method: "DELETE",
      });
      if (status === 200) {
        dispatch({
          type: XOA_PHIM,
        });
      }
      noti.fire("Thông báo", "Xóa phim thành công", "success");
    } catch (err) {
      noti.fire("Thông báo", "Xóa phim không thành công", "error");
    }
  };
};
