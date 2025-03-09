import { useState } from "react";
import arrowDown from "../assets/images/down-arrow-svgrepo-com.svg";

import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  return (
    <header>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <img src="/src/assets/images/hamburger.svg" alt="Menu" />
      </div>

      <div className="logo-container">
        <img
          className="logo"
          src="/src/assets/Your paragraph text.jpg"
          alt=" logo"
        />
      </div>

      <nav className="desktop-nav">
        <ul>
          <li>
            <a href="#">خانه</a>
          </li>
          <li
            className="nav-item"
            onMouseEnter={toggleServices}
            onMouseLeave={toggleServices}
          >
            <a href="#">
              خدمات
              <img src={arrowDown} alt="Arrow" className="arrow-icon" />
            </a>
            {isServicesOpen && (
              <ul className="dropdown-menu">
                <li className="dropdown-content">
                  <img src="/src/assets/images/mob-app.svg" alt="Service 1" />
                  <div>
                    <h4>طراحی اپلیکیشن</h4>
                    <p>App Design</p>
                  </div>
                </li>
                <li className="dropdown-content">
                  <img src="/src/assets/images/startup.svg" alt="Service 2" />
                  <div>
                    <h4>استارت آپ</h4>
                    <p>Startup</p>
                  </div>
                </li>
                <li className="dropdown-content">
                  <img src="/src/assets/images/devops.svg" alt="Service 2" />
                  <div>
                    <h4>خدمات دوآپس</h4>
                    <p>DevOps Services</p>
                  </div>
                </li>

                <li className="dropdown-content">
                  <img src="/src/assets/images/web-app.svg" alt="Service 2" />
                  <div>
                    <h4>طراحی وب سایت</h4>
                    <p>Website Design</p>
                  </div>
                </li>
                <li className="dropdown-content">
                  <img src="/src/assets/images/designer.png" alt="Service 2" />
                  <div>
                    <h4>طراحی رابط کاربری</h4>
                    <p>UI/UX Design</p>
                  </div>
                </li>

                <li className="dropdown-content">
                  <img src="/src/assets/images/d-market.svg" alt="Service 2" />
                  <div>
                    <h4>دیجیتال مارکتینگ</h4>
                    <p>Digital Marketing</p>
                  </div>
                </li>
                <li className="dropdown-content">
                  <img src="/src/assets/images/seo.svg" alt="Service 2" />
                  <div>
                    <h4>سئو</h4>
                    <p>SEO</p>
                  </div>
                </li>

                <li className="dropdown-content">
                  <img src="/src/assets/images/social.svg" alt="Service 2" />
                  <div>
                    <h4>سوشال مدیا</h4>
                    <p>Social Media</p>
                  </div>
                </li>
              </ul>
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={toggleProducts}
            onMouseLeave={toggleProducts}
          >
            <a href="#">
              محصولات
              <img src={arrowDown} alt="Arrow" className="arrow-icon" />
            </a>
            {isProductsOpen && (
              <ul className="dropdown-menu">
                <li className="dropdown-content">
                  <img src="/src/assets/images/e-shop.svg" alt="Product 1" />{" "}
                  <div>
                    <h4>فروشگاه آنلاین</h4>
                    <p>Online Shop</p>
                  </div>
                </li>

                <li className="dropdown-content">
                  <img src="/src/assets/images/serv.svg" alt="Product 2" />{" "}
                  <div>
                    <h4>سایت خدماتی</h4>
                    <p>Service Site</p>
                  </div>
                </li>

                <li className="dropdown-content">
                  <img src="/src/assets/images/compony.svg" alt="Product 2" />{" "}
                  <div>
                    <h4>سایت شرکتی</h4>
                    <p>Compony Site</p>
                  </div>
                </li>

                <li className="dropdown-content">
                  <img src="/src/assets/images/personal.svg" alt="Product 2" />{" "}
                  <div>
                    <h4>سایت شخصی</h4>
                    <p>Personal Site</p>
                  </div>
                </li>

                <li className="dropdown-content">
                  <img
                    src="/src/assets/images/desktop-menu-icon-clinic.svg"
                    alt="Product 2"
                  />
                  <div>
                    <h4>کلینیک آنلاین</h4>
                    <p>Online Clinic</p>
                  </div>
                </li>

                <li className="dropdown-content">
                  <img src="/src/assets/images/lab.svg" alt="Product 2" />
                  <div>
                    <h4>آزمایشگاه آنلاین</h4>
                    <p>Online Lab</p>
                  </div>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#">بلاگ</a>
          </li>
          <li>
            <a href="#"> درباره‌ مجموعه</a>
          </li>
          <li>
            <a href="#">تماس با ما</a>
          </li>
        </ul>
      </nav>

      <div className="banner-button-header">
        <div className="register-header">
          <a href="#">درخواست مشاوره</a>
        </div>
      </div>

      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="side-menu-header">
          <img
            className="side-menu-logo"
            src="/src/assets/Your paragraph text.jpg"
            alt=" logo"
          />
        </div>

        <div className="side-menu-content">
          <div className="consultation-box">
            <span>درخواست مشاوره</span>
          </div>

          <ul className="side-menu-list">
            <li>
              <a href="#">
                <img src="/src/assets/images/homeIcon.svg" alt="Home" />
                <span>خانه</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/src/assets/images/services.svg" alt="Services" />
                <span>خدمات</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/src/assets/images/products.svg" alt="Products" />
                <span>محصولات</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/src/assets/images/blog.svg" alt="Blog" />
                <span>بلاگ</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/src/assets/images/about.svg" alt="About" />
                <span>درباره ی مجموعه</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/src/assets/images/contact.svg" alt="Contact" />
                <span>اطلاعات تماس</span>
              </a>
            </li>
          </ul>

          <div className="email-link">
            <a href="mailto:f.aefi982@gmail.com">
              <img src="/src/assets/images/email.svg" alt="Email" />
              <span>f.arefi982@gmail.com</span>
            </a>
          </div>

          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/images/telegramm.svg" alt="Telegram" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/images/instagramm.svg" alt="Instagram" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/images/linkdin.svg" alt="LinkedIn" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/images/whatsapp.svg" alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
