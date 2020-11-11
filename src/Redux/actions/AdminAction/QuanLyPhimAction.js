import Axios from "axios";
import { LAY_DANH_SACH_PHIM } from "../../constants/AdminConst/QuanLyPhimConst";

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

export const layDanhSachPhimApi = (dataPhim) => ({
  type: LAY_DANH_SACH_PHIM,
});
