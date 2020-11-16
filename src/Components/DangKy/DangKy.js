import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HANDLE_CHANGE_INPUT } from "../../Redux/const/QuanLyNguoiDungConst";
import swal from "sweetalert2";
import { dangKiAction } from "../../Redux/actions/QuanLyNguoiDungAction";

export default function DangKy(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(true);

  const dispatch = useDispatch();

  const { registerValues, registerErrors } = useSelector(
    (state) => state.QuanLyNguoiDungReducer.registerStateForm
  );

  const handleChange = (e) => {
    let { name, value } = e.target;
    let types = e.target.getAttribute("types");

    let newValues = { ...registerValues };
    newValues[name] = value;

    let newErrors = { ...registerErrors };
    newErrors[name] = value.trim() === "" ? "Không được bỏ trống" : "";

    // Validation types
    if (types === "soDT") {
      const regexNumber = /^[0-9]+$/;
      if (!regexNumber.test(value.trim())) {
        newErrors[name] = "Dữ liệu phải là số!";
      }
    }

    if (types === "email") {
      const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))+$/;
      if (!regexEmail.test(value.trim())) {
        newErrors[name] = "Dữ liệu không hợp lệ!";
      }
    }

    let action = {
      type: HANDLE_CHANGE_INPUT,
      newState: {
        registerValues: newValues,
        registerErrors: newErrors,
      },
    };
    dispatch(action);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    for (let name in registerValues) {
      if (registerValues[name].toString().trim() === "") {
        valid = false;
      }
    }
    for (let name in registerErrors) {
      if (registerErrors[name].toString().trim() !== "") {
        valid = false;
      }
    }

    if (!valid) {
      swal.fire("Thông báo", "Dữ liệu không hợp lệ!", "error");
      return;
    }
    swal.fire("Thông báo", "Đăng kí thành công!", "success");

    dispatch(await dangKiAction(registerValues));
  };

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
            <label>TÀI KHOẢN</label>
            <input type="text" name="taiKhoan" onChange={handleChange} />
            <span className="errorInput">{registerErrors.taiKhoan}</span>
          </div>
          <div className="dangky-item">
            <label>MẬT KHẨU</label>
            <input type="password" name="matKhau" onChange={handleChange} />
            <span className="errorInput">{registerErrors.matKhau}</span>
          </div>
          <div className="dangky-item">
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              types="email"
            />
            <span className="errorInput">{registerErrors.email}</span>
          </div>
          <div className="dangky-item">
            <label>Số điện thoại</label>
            <input
              type="text"
              name="soDT"
              onChange={handleChange}
              types="soDT"
            />
            <span className="errorInput">{registerErrors.soDT}</span>
          </div>
          <div className="dangky-item">
            <label>Họ tên</label>
            <input type="text" name="hoTen" onChange={handleChange} />
            <span className="errorInput">{registerErrors.hoTen}</span>
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
