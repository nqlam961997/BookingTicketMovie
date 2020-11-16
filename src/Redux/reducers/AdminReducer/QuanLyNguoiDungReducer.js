import { LAY_DANH_SACH_NGUOI_DUNG } from "../../constants/AdminConst/QuanLyNguoiDungConst";

const initialState = {
  dsNguoiDung: [],
};

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_NGUOI_DUNG: {
      state.dsNguoiDung = action.dsNguoiDung;
      return { ...state };
    }

    default:
      return state;
  }
};
