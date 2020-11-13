import { DANG_NHAP } from "../const/QuanLyNguoiDungConst";

const { USER_LOGIN } = require("../../Util/Config");

let usLogin = [];
if (localStorage.getItem(USER_LOGIN)) {
  usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: {},
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP: {
      state.userLogin = action.userLogin;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
