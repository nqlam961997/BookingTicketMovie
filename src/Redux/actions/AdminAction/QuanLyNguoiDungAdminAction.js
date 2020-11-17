import Axios from "axios";
import noti from "sweetalert2";
import { LAY_DANH_SACH_NGUOI_DUNG } from "../../constants/AdminConst/QuanLyNguoiDungAdminConst";

export const layDanhSachNguoiDungApiAction = () => {
  return async (dispatch) => {
    try {
      let { data, status } = await Axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
        method: "GET",
      });
      if (status === 200) {
        dispatch({
          type: LAY_DANH_SACH_NGUOI_DUNG,
          dsNguoiDung: data,
        });
      }
    } catch (err) {
      noti.fire("Thông báo", err.data, "error");
    }
  };
};
