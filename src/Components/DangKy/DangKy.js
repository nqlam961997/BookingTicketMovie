import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function DangKy(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(true);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  return (
    <div className="form-dangky">
      <div className="form-dangky-content">
        <h2>
          <NavLink to="/dangnhap" onClick={handleClick}>
            <span>ĐĂNG NHẬP</span>
          </NavLink>
          <NavLink to="/dangky" onClick={handleClick}>
            <span className={click ? "active" : ""}>ĐĂNG KÝ</span>
          </NavLink>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="dangky-item">
            <span>TÀI KHOẢN</span>
            <input type="text" name="taiKhoan" onChange={handleChange} />
          </div>
          <div className="dangky-item">
            <span>MẬT KHẨU</span>
            <input type="password" name="matKhau" onChange={handleChange} />
          </div>
          <div className="dangky-item">
            <span>Email</span>
            <input type="text" name="email" onChange={handleChange} />
          </div>
          <div className="dangky-item">
            <span>Số điện thoại</span>
            <input type="" name="soDt" onChange={handleChange} />
          </div>
          <div className="dangky-item">
            <span>Họ tên</span>
            <input type="text" name="hoTen" onChange={handleChange} />
          </div>
          <div className="dangky-item checkbox">
            <input type="checkbox" name="OK" value="OK" />
            <span>Tôi đồng ý với điều khoản sử dụng của CYBERSOFT</span>
          </div>
          <div className="dangky-item">
            <input type="submit" value="ĐĂNG KÝ"></input>
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
