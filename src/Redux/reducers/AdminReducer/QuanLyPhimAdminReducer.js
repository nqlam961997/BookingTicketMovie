import {
  LAY_DANH_SACH_PHIM,
  LAY_THONG_TIN_PHIM,
} from "../../constants/AdminConst/QuanLyPhimAdminConst";

const initialState = {
  dsPhim: [],
  thongTinPhim: {},
  updateFilm: false,
};

export const QuanLyPhimAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_PHIM: {
      state.dsPhim = action.dsPhim;
      return { ...state };
    }

    case LAY_THONG_TIN_PHIM: {
      state.thongTinPhim = action.thongTinPhim;
      state.updateFilm = true;
      return { ...state };
    }

    default:
      return state;
  }
};
