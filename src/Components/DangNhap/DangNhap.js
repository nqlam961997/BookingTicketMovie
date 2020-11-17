import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dangNhapAction } from "../../Redux/actions/QuanLyNguoiDungAction";

export default function DangNhap(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(true);

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

  return (
    <div className="form-dangnhap">
      <div className="form-dangnhap-content">
        <h2>
          <NavLink to="/dangnhap" onClick={handleClick}>
            <span className={click ? "active" : ""}>ĐĂNG NHẬP</span>
          </NavLink>
          <NavLink to="/dangky" onClick={handleClick}>
            <span>ĐĂNG KÝ</span>
          </NavLink>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="dangnhap-item">
            <span>TÀI KHOẢN</span>
            <input type="text" name="taiKhoan" onChange={handleChange} />
          </div>
          <div className="dangnhap-item">
            <span>MẬT KHẨU</span>
            <input type="text" name="matKhau" onChange={handleChange} />
          </div>
          <div className="dangnhap-item">
            <input type="submit" value="ĐĂNG NHẬP"></input>
          </div>
          <div className="dangnhap-item">
            <p>
              <a href="#">Bạn muốn tìm lại mật khẩu?</a>
            </p>
          </div>
        </form>
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
    </div>
  );
}
