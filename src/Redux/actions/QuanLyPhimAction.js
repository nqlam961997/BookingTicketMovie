import Axios from "axios";
import {
  LAY_CHI_TIET_PHIM,
  LAY_THONG_TIN_PHONG_VE,
  LAY_DANH_SACH_PHIM_ACTION,
} from "../const/QuanLyPhimConst";

export const layDanhSachPhimAction = async () => {
  return async (dispatch) => {
    try {
      const { data, status } = await Axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07",
        method: "GET",
      });
      if (data === 200) {
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
