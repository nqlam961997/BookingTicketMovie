import {
  DANG_NHAP,
  HANDLE_CHANGE_INPUT,
  DANG_KI,
  LAY_THONG_TIN_USER,
} from "../const/QuanLyNguoiDungConst";

const { USER_LOGIN } = require("../../Util/Config");

let usLogin = [];
if (localStorage.getItem(USER_LOGIN)) {
  usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: {},
  thongTinUser: {},

  registerStateForm: {
    registerValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
      hoTen: "",
      maNhom: "GP07",
      maLoaiNguoiDung: "KhachHang",
    },
    registerErrors: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
      hoTen: "",
    },
  },
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP: {
      state.userLogin = action.userLogin;
      return { ...state };
    }

    case DANG_KI: {
      state.userLogin = action.register;
      return { ...state };
    }

    case LAY_THONG_TIN_USER: {
      state.thongTinUser = action.thongTinUser;
      return { ...state };
    }

    case HANDLE_CHANGE_INPUT: {
      state.registerStateForm = { ...action.newState };
      return { ...state };
    }

    default:
      return { ...state };
  }
};
