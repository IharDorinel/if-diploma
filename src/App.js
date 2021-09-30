import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


//components
import TopSection from "./TopSection";
import Category from "./Category";
import Footer from "./Footer";
import Sale from "./Sale";
import ItemCard from "./ItemCard";


// styles
import './styles/App.css';
import './styles/TopSection.css';
import './styles/Category.css';
import './styles/Sale.css';
import './styles/Footer.css';
import './styles/EnterSearch.css';
import './styles/Account.css';
import './styles/SaleContent.css';



function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://modnikky-api.herokuapp.com/api/catalog')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.err)
  }, [])

  return (
   <>
     <Router>
      <TopSection />
      <Category props={data}/>
      <Sale props={data}/>
       <Route exact path="/:id">
         <ItemCard />
       </Route>
      <Footer />
     </Router>
   </>
  );
}

export default App;
