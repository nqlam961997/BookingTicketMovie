import {
  LAY_CHI_TIET_PHIM,
  LAY_DANH_SACH_PHIM_ACTION,
  LAY_THONG_TIN_HE_THONG_RAP,
  lAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP,
  lAY_THONG_TIN_PHONG_VE,
} from "../const/QuanLyPhimConst";

const stateDefault = {
  dsPhim: [],
  chiTietPhim: {},
  thongTinPhongVe: {},
  heThongRap: [],
  lichChieu: [],
  danhSachGheDangDat: [
    // { maGhe: 52361, stt: "01", giaVe: 75000 },
    // { maGhe: 52362, stt: "02", giaVe: 75000 },
  ],
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

    case lAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP: {
      state.lichChieu = action.lichChieu;
      return { ...state };
    }

    case LAY_CHI_TIET_PHIM: {
      state.chiTietPhim = action.chiTietPhim;
      return { ...state };
    }

    case lAY_THONG_TIN_PHONG_VE: {
      state.thongTinPhongVe = action.thongTinPhongVe;
      return { ...state };
    }

    case "DAT_GHE": {
      let mangGheDangDat = [...state.danhSachGheDangDat];
      let index = mangGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.maGhe === action.bookingSeat.maGhe
      );
      if (index !== -1) {
        mangGheDangDat.splice(index, 1);
      } else {
        mangGheDangDat.push(action.bookingSeat);
      }
      return { ...state, danhSachGheDangDat: mangGheDangDat };
    }

    case "DAT_VE_THANH_CONG": {
      return { ...state, danhSachGheDangDat: [] };
    }

    default:
      return { ...state };
  }
};
