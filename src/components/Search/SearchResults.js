import React from 'react';

// components
import SearchResultsItem from "./SearchResultsItem";

const SearchResults = ({props, setItemFav}) => {
  
  return (
    <section className="filter__section">
      <p className="filter__secondTitle">Search results</p>
      <div className="search__gallery">
        {props.length > 0 && props !== [] ?
          props.map((item) => (
          <SearchResultsItem item={item} setItemFav={setItemFav}/>
        ))
          :
          <p className="search__notFound">Sorry, there is no matches on your request</p>
          }
      </div>
    </section>
  )
}

export default SearchResults;