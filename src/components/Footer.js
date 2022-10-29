import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Özdemir Hukuk Bürosu - Kartal/İSTANBUL{" "}
        </p>
        <p className="footer-subscription-text">
          Tel: 0(216) 389 57 04 / 0(216) 389 60 78
        </p>
        {/* <p className="footer-subscription-text">GSM: 0(542) 415 5867</p> */}
        <p className="footer-subscription-text">
          Adres: Esentepe Mah. Anayurt Cad. Ataş Apt. No:49/1 Kartal/İSTANBUL
        </p>
      </section>
      {/* <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Hakkımızda</h2>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
          </div>
          <div class="footer-link-items">
            <Link to="/sign-up">Social Media</Link>
          </div>
        </div>
      </div> */}
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Özdemir Hukuk Bürosu
              <i class="fas fa-scale-balanced" />
            </Link>
          </div>
          <small class="website-rights">Copyright © 2022</small>
          {/* <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Footer;
