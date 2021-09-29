import React from 'react';

// images
import cross from './project_images/cross.svg';

const EnterSearch = () => {

  return (
    <>
      <section className="enterSearch__section">
        <div className="enterSearch__container">
        <img src={cross} className="enterSearch__cross" alt="cross" />
          <div className="enterSearch__box">
    <input type="text" name="text" className="enterSearch__input" placeholder="ENTER SEARCH TERMS"/>
        <hr className="enterSearch__hr"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default EnterSearch;