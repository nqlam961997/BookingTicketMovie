import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dangNhapAction } from "../../Redux/actions/QuanLyNguoiDungAction";
import DangKy from "../DangKy/DangKy";
import { history } from "../../Util/history";

export default function DangNhap(props) {
  const [userLogin, setUserLogin] = useState({ taiKhoan: "", matKhau: "" });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { value, name } = e.target;
    let newUserLogin = { ...userLogin, [name]: value };
    console.log(name, value);
    setUserLogin(newUserLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(await dangNhapAction(userLogin));
  };

  const handleChangeRegister = () => {
    let login = document.querySelector("#login");
    let register = document.querySelector("#register");
    let fillBtn = document.querySelector("#fill-btn");

    login.style.left = "-400px";
    register.style.left = "50px";
    fillBtn.style.left = "125px";
  };

  const handleChangeLogin = () => {
    let login = document.querySelector("#login");
    let register = document.querySelector("#register");
    let fillBtn = document.querySelector("#fill-btn");

    login.style.left = "50px";
    register.style.left = "450px";
    fillBtn.style.left = "0";
  };

  const handleBackHome = () => {
    history.push("/");
  };

  return (
    <>
      <div className="form-box">
        <img
          src="img/close.png"
          className="close-form-login"
          onClick={handleBackHome}
        ></img>
        <div className="form-wrapper">
          <div className="button-box">
            <div id="fill-btn"></div>
            <button className="toggle-btn" onClick={handleChangeLogin}>
              ĐĂNG NHẬP
            </button>
            <button className="toggle-btn" onClick={handleChangeRegister}>
              ĐĂNG KÝ
            </button>
          </div>
          <form onSubmit={handleSubmit} className="input-group" id="login">
            <div className="login-item">
              <span>TÀI KHOẢN</span>
              <input type="text" name="taiKhoan" onChange={handleChange} />
            </div>
            <div className="login-item">
              <span>MẬT KHẨU</span>
              <input type="password" name="matKhau" onChange={handleChange} />
            </div>
            <div className="login-item">
              <button type="submit" className="submit-btn">
                ĐĂNG NHẬP
              </button>
            </div>
            <div className="login-item">
              <p style={{ marginTop: "12px" }}>
                <a href="#">Bạn muốn tìm lại mật khẩu?</a>
              </p>
            </div>
            <div style={{ marginRight: "15px" }}>
              <h3>Kết nối với chúng tôi</h3>
              <ul className="sci-media">
                <li>
                  <a>
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i class="fab fa-google"></i>
                  </a>
                </li>
              </ul>
            </div>
          </form>
          <DangKy />
        </div>
      </div>
    </>
  );
}
