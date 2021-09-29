import React from 'react';

// images
import close_icon from './project_images/close-icon.svg';

const Account = () => {

  return (
    <>
      <section className="account__section">
        <div className="account__container">
    <p className="account__title">CREATE ACCOUNT</p>
        <img src={close_icon} className="account__close" alt="close_icon" />
        </div>

        <form className="account__form">
        <input type="text" name="text" className="account__input" placeholder="First Name" />
        <hr className="account__hr"/>

        <input type="text" name="text" className="account__input" placeholder="Last Name" />
        <hr className="account__hr"/>

        <input type="email" name="email" className="account__input" placeholder="Email" />
        <hr className="account__hr"/>

        <input type="password" name="password" className="account__input" placeholder="Password" />
        <hr className="account__hr"/>
        </form>

        <div className="account__checkboxContainer">
        <input className="account__checkbox" type="checkbox" />
        <div className="account__checkboxBox">
        <p className="account__text">Let's get personal! We'll send you only the good stuff:</p>
        <p className="account__text">Exclusive early access to Sale, new arrivals and promotions. No nasties.</p>
        </div>
        </div>

        <span className="account__text, color_gray">By signing up you agree to </span>
        <span className="account__text, text-decoration">Terms of Service</span>
        <span className="account__text, color_gray"> and </span>
        <span className="account__text, text-decoration">Privacy Policy</span>

        <button type="submit" className="account__button">SIGN UP</button>

        <p className="account__href"><a href="#">I HAVE AN ACCOUNT</a></p>

      </section>
    </>
  )
}

export default Account;