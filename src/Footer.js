import React from 'react';

// images
import facebook from './project_images/footer_images/facebook-logo.svg';
import odnoklassniki from './project_images/footer_images/ok-logo.svg';
import instagram from './project_images/footer_images/instagram-logo.svg';


const Footer = () => {

  return (
    <>
      <section className="footer__section">
        <p className="footer__title">SIGN UP FOR UPDATES</p>
        <p className="footer__text">Sign up for exclusive early sale access and tailored new arrivals.</p>
        <input type="email" name="email" className="footer__input" placeholder="Your email address" />
        <button type="submit" className="footer__button">JOIN</button>
        <hr className="footer__hr"/>

        <div className="footer__container">
          <div className="footer__box">
          <p className="footer__title">CUSTOMER SERVICE</p>

            <p className="footer__text">CONTACT</p>
            <p className="footer__text">TRACK ORDER</p>
            <p className="footer__text">DELIVERY & RETURNS</p>
            <p className="footer__text">PAYMENT</p>
            <p className="footer__text">MAKE A RETURN</p>
            <p className="footer__text">FAQ</p>

          </div>

          <div className="footer__box">
            <p className="footer__title">INFO</p>

              <p className="footer__text">GIFT VOUCHERS</p>
              <p className="footer__text">SIZE GUIDE</p>
              <p className="footer__text">CAREERS AT MODNIKKY</p>
              <p className="footer__text">ABOUT US</p>
              <p className="footer__text">LEGAL POLICIES</p>

          </div>

          <div className="footer__box">
            <p className="footer__title">FOLLOW US</p>

            <div className="footer__boxContainer">
            <img src={facebook} className="footer__image" alt="facebook" />
              <p className="footer__text">FACEBOOK</p>
          </div>
            <div className="footer__boxContainer">
            <img src={odnoklassniki} className="footer__image" alt="odnoklassniki" />
              <p className="footer__text">ODNOKLASSNIKI</p>
        </div>
            <div className="footer__boxContainer">
            <img src={instagram} className="footer__image" alt="instagram" />
              <p className="footer__text">INSTAGRAM</p>
      </div>

          </div>

          <div className="footer__box">
            <p className="footer__title">CONTACT US</p>
            <p className="footer__text">hello@modnikky.com</p>
            <p className="footer__text">+7 910 832 26XX</p>
            <p className="footer__text">Visit us at Shalalaeva 23,</p>
            <p className="footer__text">Bologoe, Russia</p>
          </div>

        </div>

      </section>

    </>
  )
}

export default Footer;