import React from "react";
import "./SideMenu.css";

const SideMenu = ({ isMenuOpen }) => {
  return (
    <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
      <div className="side-menu-header">
        <img
          className="side-menu-logo"
          src="/assets/images/logo.svg"
          alt="Noviner logo"
        />
      </div>

      <div className="side-menu-content">
        <div className="consultation-box">
          <span>درخواست مشاوره</span>
        </div>

        <ul className="side-menu-list">
          <li>
            <a href="#">
              <img src="/assets/images/home-icon.svg" alt="Home" />
              <span>خانه</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/assets/images/services-icon.svg" alt="Services" />
              <span>خدمات</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/assets/images/products-icon.svg" alt="Products" />
              <span>محصولات</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/assets/images/blog-icon.svg" alt="Blog" />
              <span>بلاگ</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/assets/images/about-icon.svg" alt="About" />
              <span>درباره ی مجموعه</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/assets/images/contact-icon.svg" alt="Contact" />
              <span>اطلاعات تماس</span>
            </a>
          </li>
        </ul>

        <div className="email-link">
          <a href="mailto:info@noviner.io">
            <img src="/assets/images/email-icon.svg" alt="Email" />
            <span>info@noviner.io</span>
          </a>
        </div>

        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/telegram-icon.svg" alt="Telegram" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/instagram-icon.svg" alt="Instagram" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/linkedin-icon.svg" alt="LinkedIn" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/whatsapp-icon.svg" alt="WhatsApp" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
