import {
  LAY_DANH_SACH_NGUOI_DUNG,
  LAY_THONG_TIN_NGUOI_DUNG,
} from "../../const/AdminConst/QuanLyNguoiDungAdminConst";

const initialState = {
  dsNguoiDung: [],
  thongTinUser: {},
};

export const QuanLyNguoiDungAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_NGUOI_DUNG: {
      state.dsNguoiDung = action.dsNguoiDung;
      return { ...state };
    }

    case LAY_THONG_TIN_NGUOI_DUNG: {
      state.thongTinUser = action.thongTinUser;
      console.log("state reducer -> ", state.thongTinUser);
      return { ...state };
    }

    default:
      return state;
  }
};
