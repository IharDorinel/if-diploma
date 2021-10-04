import React, {useState} from 'react';

// images
import cross from './project_images/cross.svg';

const EnterSearch = ({setIsVisible, setValue}) => {


  const closeSearch = () => {
    setIsVisible(prev => !prev);
  }

  return (
    <>
      <section className="enterSearch__section">
        <div className="enterSearch__container">
        <img src={cross} className="enterSearch__cross" alt="cross" onClick={closeSearch} />
          <div className="enterSearch__box">
    <input type="text" name="text" className="enterSearch__input" placeholder="ENTER SEARCH TERMS" onChange={setValue}/>
            {/*<button type="submit" value="Search" className="submit-button" onClick={handleSearch}>Search</button>*/}
        <hr className="enterSearch__hr"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default EnterSearch;