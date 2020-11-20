import { LAY_DANH_SACH_PHIM_ACTION } from "../const/QuanLyPhimConst";

const stateDefault = {
  dsPhim: [],
  chiTietPhim: {},
  thongTinPhongVe: {},
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_PHIM_ACTION: {
      state.dsPhim = action.dsPhim;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
