import React, {useEffect, useState} from 'react';
import SaleContent from "./SaleContent";

const Sale = () => {

  const [data, setData] = useState('');

  useEffect(() => {
    fetch('https://modnikky-api.herokuapp.com/api/catalog')
    .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.err)
  }, [])

  return (
    <>
    <section className="sale__section">
      <span className="sale__firstTitle">#MODNIKKY_</span>
      <span className="sale__secondTitle">Sale</span>
      <div className="sale__gallery">
        <SaleContent props={data}/>

      </div>

    </section>
    </>
  )
}

export default Sale;