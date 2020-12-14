import React from "react";

export default function Footer(props) {
  return (
    <footer id="lienhe">
      <div id="footer">
        <div className="up-footer">
          <div className="company">
            <h3>CYBERMOVIE</h3>
            <div className="company-use">
              <ul>
                <li>FAQ</li>
                <li>Brand Guidelines</li>
              </ul>
              <ul>
                <li>Thỏa thuận sử dụng</li>
                <li>Chính sách bảo mật</li>
              </ul>
            </div>
          </div>
          <div className="hineOnMobile">
            <h3>ĐỐI TÁC</h3>
            <div className="cpn-logo">
              <a>
                <img src="/img/slider-app/bhd.png" alt="logo" />
              </a>
              <a>
                <img src="/img/slider-app/cgv.png" alt="logo" />
              </a>
              <a>
                <img src="/img/slider-app/cinestar.png" alt="logo" />
              </a>
              <a>
                <img src="/img/slider-app/galaxycine.png" alt="logo" />
              </a>
              <a>
                <img src="/img/slider-app/lotte.png" alt="logo" />
              </a>
            </div>
          </div>
          <div className="mobile-app">
            <h3>MOBILE APP</h3>
            <div className="cpn-logo">
              <a>
                <img src="/img/slider-app/apple-logo.png" alt="" />
              </a>
              <a>
                <img src="/img/slider-app/android-logo.png" alt="" />
              </a>
            </div>
          </div>
          <div className="social-app">
            <h3>SOCIAL</h3>
            <div className="cpn-logo">
              <a>
                <img src="/img/slider-app/facebook-logo.png" alt="" />
              </a>
              <a>
                <img src="/img/slider-app/zalo-logo.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="down-footer">
          <div className="main-logo">
            <img src="/img/slider-app/Cybersoft.png" alt="" />
          </div>
          <div className="main-content">
            <span>CYBERMOVIE – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN CYBERSOFT</span>
            <span>Địa chỉ: 112 Cao Thắng, Quận 3 – HCM</span>
            <span>Hotline: 096.105.1014 – 077.886.1911</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
