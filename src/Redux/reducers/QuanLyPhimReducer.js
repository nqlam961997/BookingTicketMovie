import {
  LAY_DANH_SACH_PHIM_ACTION,
  LAY_THONG_TIN_HE_THONG_RAP,
  lAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP,
} from "../const/QuanLyPhimConst";

const stateDefault = {
  dsPhim: [],
  chiTietPhim: {},
  thongTinPhongVe: {},
  heThongRap: [],
  lichChieu:[],
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_PHIM_ACTION: {
      state.dsPhim = action.dsPhim;
      return { ...state };
    }

    case LAY_THONG_TIN_HE_THONG_RAP: {
      state.heThongRap = action.heThongRap;
      return { ...state };
    }

    case lAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP:{
      state.lichChieu = action.lichChieu;
      return {...state};
    }
    default:
      return { ...state };
  }
};
