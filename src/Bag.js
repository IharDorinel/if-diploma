import React from 'react';

// images
import bag from './project_images/bag1.svg';
import cross from './project_images/remove-icon.svg';
import maestro from './project_images/maestro-logo.svg';
import visa from './project_images/visa-logo.svg';


const Bag = () => {

  return (
    <>
      <section className="bag__section">

        <p className="bag__title">BAG</p>
        <hr/>
        <div className="bag__container">
        <img src={bag} className="bag__image" alt="bag" />
          <div className="bag__descrContainer">
        <p className="bag__itemName">WHITE BEAUTY MRS BLONDES MID LENGTH DENIM SHORT</p>
        <p className="bag__text">USD $340.00</p>
        <p className="bag__text">COLOR: WHITE</p>
        <p className="bag__text">SIZE: 2</p>
        <p className="bag__text">QUANTITY: 1</p>
          </div>
        </div>

        <img src={cross} className="bag__cross" alt="cross" />
        <span className="bag__text">REMOVE</span>
        <hr/>

        <p className="bag__total">Total USD $490.00</p>
        <button className="bag__button">PROCEED TO CHECKOUT</button>

        <img src={maestro} className="bag__icon" alt="maestro" />
        <img src={visa} className="bag__icon" alt="visa" />

      </section>
    </>
  )
}

export default Bag;