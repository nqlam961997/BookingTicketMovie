import { LAY_DANH_SACH_NGUOI_DUNG } from "../../const/AdminConst/QuanLyNguoiDungAdminConst";

const initialState = {
  dsNguoiDung: [],
};

export const QuanLyNguoiDungAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_NGUOI_DUNG: {
      state.dsNguoiDung = action.dsNguoiDung;
      return { ...state };
    }

    default:
      return state;
  }
};
