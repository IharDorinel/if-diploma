import React from 'react';

// images
import wishlist from "./project_images/wishlist-icon.svg";
import {Link} from "react-router-dom";
import SearchResultsItem from "./SearchResultsItem";


const SearchResults = ({props}) => {


  return (
    <section className="filter__section">

        <p className="filter__secondTitle">Search results</p>

      <div className="search__gallery">
        {props.length > 0 ?
          props.map((item) => (
          <SearchResultsItem item={item}/>
        ))
          :
          <p className="search__notFound">Sorry, there is no matches on your request</p>
          }
      </div>

    </section>
  )
}

export default SearchResults;