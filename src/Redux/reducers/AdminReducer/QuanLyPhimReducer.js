import { LAY_DANH_SACH_PHIM } from "../../constants/AdminConst/QuanLyPhimConst";

const initialState = {
  dsPhim: [],
};

export const QuanLyPhimReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_PHIM: {
      state.dsPhim = action.dsPhim;
      return { ...state };
    }

    default:
      return state;
  }
};
