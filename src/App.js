import logo from "./logo.svg";
import "./App.scss";
import Header from "./Components/Header/Header";
import { Route, Switch } from "react-router-dom";
import { HomeTemplate } from "./Templates/HomeTemplate";
import TrangChu from "./Pages/TrangChu";
import LienHe from "./Pages/LienHe";
import TinTuc from "./Pages/TinTuc";
import { UserTemplate } from "./Templates/UserTemplate";
import DangKy from "./Components/DangKy/DangKy";
import DangNhap from "./Components/DangNhap/DangNhap";
import PhimDangChieu from "./Pages/PhimDangChieu";
import PhimSapChieu from "./Pages/PhimSapChieu";
import { AdminTemplate } from "./Templates/AdminTemplate";
import QuanLyPhim from "./Pages/Admin/DanhMucPhim/QuanLyPhim";
import QuanLyNguoiDung from "./Pages/Admin/DanhMucNguoiDung/QuanLyNguoiDung";
import ThemPhim from "./Pages/Admin/DanhMucPhim/ThemPhim";
import ThongTinTaiKhoan from "./Pages/ThongTinTaiKhoan";

function App() {
  return (
    <>
      {/* <Header exact /> */}
      <Switch>
        <HomeTemplate exact path="/" Component={TrangChu} />
        <HomeTemplate exact path="/lienhe" Component={LienHe} />
        <HomeTemplate exact path="/tintuc" Component={TinTuc} />
        <HomeTemplate
          exact
          path="/thongtintaikhoan"
          Component={ThongTinTaiKhoan}
        />
        <UserTemplate exact path="/dangky" Component={DangKy} />
        <UserTemplate exact path="/dangnhap" Component={DangNhap} />
        <UserTemplate exact path="/phimsapchieu" Component={PhimSapChieu} />
        <UserTemplate exact path="/phimdangchieu" Component={PhimDangChieu} />

        <AdminTemplate exact path="/admin/quanlyphim" Component={QuanLyPhim} />
        <AdminTemplate exact path="/admin/themphim" Component={ThemPhim} />
        <AdminTemplate
          exact
          path="/admin/quanlynguoidung"
          Component={QuanLyNguoiDung}
        />
        <HomeTemplate exact path="/phimsapchieu" Component={PhimSapChieu} />
        <HomeTemplate exact path="/phimdangchieu" Component={PhimDangChieu} />
      </Switch>
    </>
  );
}

export default App;
