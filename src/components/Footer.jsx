import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src="/Your paragraph text.jpg" alt="logo" className={styles.logo} />

      <div className={styles["social-container"]}>
        <h4>Follow us:</h4>
        <ul className={styles["social-icons"]}>
          <li>
            <a href="#">
              <img src="/images/tel.svg" alt="Telegram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/ins.scv.svg" alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/Linkdinn.svg" alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/sup.svg" alt="WhatsApp" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
