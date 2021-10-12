import React, {useState} from 'react';
import EnterSearch from "./EnterSearch";
import SearchResults from "./SearchResults";
import Account from "./Account";

// images
import logo from './project_images/brand-logo.svg';
import logo_black from './project_images/brand-logo-black.svg';
import loupe from './project_images/Vector.svg';
import wishlist from './project_images/wishlist-icon.svg';
import {Link} from "react-router-dom";



const TopSection = ({bagContent, headerStyle, headerPagesStyle, setHeaderStyle, setHeaderPagesStyle,
                      loupeStyle, setLoupeStyle, headerText, setHeaderText,
                      logoIsVisible, setLogoIsVisible, logoBlackIsVisible, setLogoBlackIsVisible}) => {



  const [isVisible, setIsVisible] = useState(false);

  const [signInIsVisible, setSignInIsVisible] = useState(true);

  const [signOutIsVisible, setSignOutIsVisible] = useState(false);

  const [accountIsVisible, setAccountIsVisible] = useState(false);

  const [currentValue, setCurrentValue] = useState('');

  const [data, setData] = useState([]);

  const fetchData = () => fetch('https://modnikky-api.herokuapp.com/api/catalog')
    .then(res => res.json());

  const setValue = (event) => {
    setCurrentValue(event.target.value);

    if(!currentValue.trim()) {
      setData([]);
    }

    fetchData(currentValue)
      .then(data => data.filter(obj => obj?.type?.toLowerCase().includes(currentValue.toLowerCase()) ||
        obj?.name?.toLowerCase().includes(currentValue.toLowerCase())))
      .then(data => setData(data))
  };


  const showSearch = () => {
    setIsVisible(prev => !prev);
  };

  const showAccount = () => {
    setAccountIsVisible(prev => !prev);
  };

  const signOut = () => {
    setSignOutIsVisible(prev => !prev);
    setSignInIsVisible(prev => !prev);
  }

  const searchResults = data.length > 0 ? <SearchResults props={data} /> : null;


  return (
    <>

      <div className={headerStyle}>

        <div className="header__mainContainer">
        <div className="header__leftUpperContainer">
        <p className={headerPagesStyle}>NEW ARRIVALS</p>
        <p className={headerPagesStyle}>SHOP</p>
        <p className={headerPagesStyle}>COLLECTIONS</p>
        </div>

          {logoIsVisible
            ? (
          <img src={logo} className="header__logo" alt="logo" />
            ) : null}
          {logoBlackIsVisible
            ? (
          <img src={logo_black} className="header__logo" alt="logo" />
            ) : null}
        <div className="header__rightUpperContainer">
          <div className="header__searchContainer">
          <img className={loupeStyle} src={loupe} alt="loupe" />
          <p className={headerPagesStyle} onClick={showSearch}>SEARCH</p>
        </div>
          {signInIsVisible
            ? (
          <p className={headerPagesStyle} onClick={showAccount}>SIGN IN </p>
            ) : null}
          {signOutIsVisible
            ? (
              <p className={headerPagesStyle} onClick={signOut}>SIGN OUT</p>
            ) : null}
          <p className={headerPagesStyle} onClick={() => {
            setHeaderStyle('header__bigContainerNew');
            setHeaderPagesStyle('header__pageNew');
            setLoupeStyle('header__loupeNew');
            setHeaderText(false);
            setLogoIsVisible(false);
            setLogoBlackIsVisible(true)
          }}><Link to="/bag">BAG ({bagContent.length})</Link></p>
          <rectangle onClick={() => {
            setHeaderStyle('header__bigContainerNew');
            setHeaderPagesStyle('header__pageNew');
            setLoupeStyle('header__loupeNew');
            setHeaderText(false);
            setLogoIsVisible(false);
            setLogoBlackIsVisible(true)
          }}><Link to="/favorites">
          <img src={wishlist} className="header__wishlist" alt="wishlist" /></Link>
          </rectangle>
        </div>
       
        </div>

        {isVisible ? (
          <EnterSearch setValue={setValue} fetchData={fetchData}
                       currentValue={currentValue} setIsVisible={setIsVisible} setData={setData} />
          )
          : null
        }

        {accountIsVisible ? (
          <Account setAccountIsVisible={setAccountIsVisible} setSignInIsVisible={setSignInIsVisible}
                   setSignOutIsVisible={setSignOutIsVisible}/>
        )
          : null
        }

        {headerText
          ? (
        <div className="header__lowerContainer">
        <h1 className="header__header">NEW COLLECTION</h1>
          <p className="header__text">Our easiest chuck-on-and-go staples come with a serious style heritage<br/>
            that’s liberating, sexy, comfy and supremely cool.</p>
        <button type="submit" className="header__button">SHOP NEW ARRIVALS</button>
        </div>
          ) : null}
      </div>

      {searchResults}

    </>
  )
}

export default TopSection;