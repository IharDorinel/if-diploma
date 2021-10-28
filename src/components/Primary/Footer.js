import React, {useState} from 'react';

// images
import facebook from '../../project_images/footer_images/facebook-logo.svg';
import odnoklassniki from '../../project_images/footer_images/ok-logo.svg';
import instagram from '../../project_images/footer_images/instagram-logo.svg';
import plus from "../../project_images/Union.svg";
import minus from "../../project_images/collapse-icon.svg";


const Footer = () => {

  const [email, setEmail] = useState('');

  const [isVisible, setIsVisible] = useState(true);

  const [messageIsVisible, setMessageIsVisible] = useState(false);

  const [serviceIsVisible, setServiceIsVisible] = useState(false);

  const [servicePlusIsVisible, setServicePlusIsVisible] = useState(true);

  const [serviceMinusIsVisible, setServiceMinusIsVisible] = useState(false);

  const [companyIsVisible, setCompanyIsVisible] = useState(false);

  const [companyPlusIsVisible, setCompanyPlusIsVisible] = useState(true);

  const [companyMinusIsVisible, setCompanyMinusIsVisible] = useState(false);

  const [followIsVisible, setFollowIsVisible] = useState(false);

  const [followPlusIsVisible, setFollowPlusIsVisible] = useState(true);

  const [followMinusIsVisible, setFollowMinusIsVisible] = useState(false);

  const [contactIsVisible, setContactIsVisible] = useState(false);

  const [contactPlusIsVisible, setContactPlusIsVisible] = useState(true);

  const [contactMinusIsVisible, setContactMinusIsVisible] = useState(false);

  const showServiceContent = () => {
    setServiceIsVisible(prev => !prev);
    setServicePlusIsVisible(prev => !prev);
    setServiceMinusIsVisible(prev => !prev);
  };

  const showCompanyContent = () => {
    setCompanyIsVisible(prev => !prev);
    setCompanyPlusIsVisible(prev => !prev);
    setCompanyMinusIsVisible(prev => !prev);
  };

  const showFollowContent = () => {
    setFollowIsVisible(prev => !prev);
    setFollowPlusIsVisible(prev => !prev);
    setFollowMinusIsVisible(prev => !prev);
  };

  const showContactContent = () => {
    setContactIsVisible(prev => !prev);
    setContactPlusIsVisible(prev => !prev);
    setContactMinusIsVisible(prev => !prev);
  };
  
  const setValue = (e) => {
    setEmail(e.target.value)
  }

  const emailPOST = (e) => {

    const url = 'https://modnikky-api.herokuapp.com/api/subscription';

    const request = {
      "email": email
    }

    let data = new FormData();
    data.append("json", JSON.stringify(request));

    setEmail(e.target.value);

    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if(re.test(String(email).toLowerCase())) {
      fetch(url, {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(response => setMessageIsVisible(true));

      localStorage.setItem('email', email);
      setIsVisible(false);
    }
  }

  return (
    <>
      <section className="footer__section">
        {isVisible &&
          <>
        <div className="footer__upper">
          <p className="footer__title">SIGN UP FOR UPDATES</p>
          <p className="footer__text">Sign up for exclusive early sale access and tailored new arrivals.</p>
          <input type="email" name="email" className="footer__input" placeholder="Your email address" onChange={setValue} />
          <button type="submit" className="footer__button" onClick={emailPOST}>JOIN</button>
        </div>
        <hr className="footer__hr"/>
          </>
        }

        {messageIsVisible &&
            <>
              <h3 className="bag__message">Thank you for subscribing to our newsletter</h3>
            </>
        }

        <div className="footer__container">

          <div className="footer__box">
            <p className="footer__title">CUSTOMER SERVICE</p>
            <p className="footer__text">CONTACT</p>
            <p className="footer__text">TRACK ORDER</p>
            <p className="footer__text">DELIVERY & RETURNS</p>
            <p className="footer__text">PAYMENT</p>
            <p className="footer__text">MAKE A RETURN</p>
            <p className="footer__text">FAQ</p>
            <hr className="footer__box-hr"/>

            <div className="footer__drop">

              {servicePlusIsVisible &&
            <img src={plus} className="footer__plus" onClick={showServiceContent} alt="plus"/>
                }
              {serviceMinusIsVisible &&
              <img src={minus} className="footer__minus" onClick={showServiceContent} alt="minus"/>
               }
              <div>

                <p className="footer__titleMobile">CUSTOMER SERVICE</p>
              {serviceIsVisible &&
                  <div>
            <p className="footer__textMobile">CONTACT</p>
            <p className="footer__textMobile">TRACK ORDER</p>
            <p className="footer__textMobile">DELIVERY & RETURNS</p>
            <p className="footer__textMobile">PAYMENT</p>
            <p className="footer__textMobile">MAKE A RETURN</p>
            <p className="footer__textMobile">FAQ</p>
                  </div>
               }
              </div>
            </div>
          </div>

          <div className="footer__box">
            <p className="footer__title footer__info">INFO</p>
            <p className="footer__text">GIFT VOUCHERS</p>
            <p className="footer__text">SIZE GUIDE</p>
            <p className="footer__text">CAREERS AT MODNIKKY</p>
            <p className="footer__text">ABOUT US</p>
            <p className="footer__text">LEGAL POLICIES</p>
            <hr className="footer__box-hr"/>
            <div className="footer__drop">
              {companyPlusIsVisible &&
            <img src={plus} className="footer__plus" onClick={showCompanyContent} alt="plus"/>
                }
              {companyMinusIsVisible &&
              <img src={minus} className="footer__minus" onClick={showCompanyContent} alt="minus"/>
              }

              <div>
            <p className="footer__titleMobile footer__company">COMPANY</p>

              {companyIsVisible &&
                  <div>
              <p className="footer__textMobile">GIFT VOUCHERS</p>
              <p className="footer__textMobile">SIZE GUIDE</p>
              <p className="footer__textMobile">CAREERS AT MODNIKKY</p>
              <p className="footer__textMobile">ABOUT US</p>
              <p className="footer__textMobile">LEGAL POLICIES</p>
                  </div>
               }
              </div>
            </div>
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

            <hr className="footer__box-hr"/>
            <div className="footer__drop">
              {followPlusIsVisible &&
            <img src={plus} className="footer__plus" onClick={showFollowContent} alt="plus"/>
               }
              {followMinusIsVisible &&
              <img src={minus} className="footer__minus" onClick={showFollowContent} alt="minus"/>
              }
              <div>

                <p className="footer__titleMobile">FOLLOW US</p>
              {followIsVisible &&
                  <div className="footer__follow">
            <div className="footer__boxContainer">
            <img src={facebook} className="footer__image" alt="facebook" />
              <p className="footer__textMobile">FACEBOOK</p>
            </div>
            <div className="footer__boxContainer">
            <img src={odnoklassniki} className="footer__image" alt="odnoklassniki" />
              <p className="footer__textMobile">ODNOKLASSNIKI</p>
            </div>
            <div className="footer__boxContainer">
            <img src={instagram} className="footer__image" alt="instagram" />
              <p className="footer__textMobile">INSTAGRAM</p>
            </div>
            </div>
               }
              </div>
            </div>
          </div>

          <div className="footer__box">
            <p className="footer__title">CONTACT US</p>
            <p className="footer__text footer__contact">hello@modnikky.com</p>
            <p className="footer__text footer__contact">+7 910 832 26XX</p>
            <p className="footer__text footer__contact">Visit us at Shalalaeva 23,</p>
            <p className="footer__text footer__contact">Bologoe, Russia</p>
            <hr className="footer__box-hr"/>
            <div className="footer__drop">
              {contactPlusIsVisible &&
            <img src={plus} className="footer__plus" onClick={showContactContent} alt="plus"/>
                }
              {contactMinusIsVisible &&
              <img src={minus} className="footer__minus" onClick={showContactContent} alt="minus"/>
              }
              <div>

                <p className="footer__titleMobile">CONTACT US</p>
              {contactIsVisible &&
                  <div>
            <p className="footer__textMobile footer__contact">hello@modnikky.com</p>
            <p className="footer__textMobile footer__contact">+7 910 832 26XX</p>
            <p className="footer__textMobile footer__contact">Visit us at Shalalaeva 23,</p>
            <p className="footer__textMobile footer__contact">Bologoe, Russia</p>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer;