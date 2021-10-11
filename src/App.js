import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch, useParams} from 'react-router-dom';


//components
import TopSection from "./TopSection";
import EnterSearch from "./EnterSearch";
import Category from "./Category";
import Instagram from "./Instagram";
import Footer from "./Footer";
import Sale from "./Sale";
import ItemCard from "./ItemCard";
import Bag from "./Bag";
// import data from './constants/content';


// styles
import './styles/App.css';
import './styles/TopSection.css';
import './styles/Category.css';
import './styles/Sale.css';
import './styles/Footer.css';
import './styles/EnterSearch.css';
import './styles/Account.css';
import './styles/SaleContent.css';
import './styles/ItemCard.css';
import './styles/Bag.css';
import './styles/Instagram.css';
import './styles/FilterItems.css';
import './styles/Block.css';

const data = [{"id":"5cd9a543-e4a3-4aa7-afa7-a78cf716ad9d","type":"Dresses","name":"SATIN EFFECT TUNIC DRESS","price":{"currency":"USD","value":"4990"},"color":{"name":"Orange","hex":"#ED7C00"},"availableSizes":["XS, S, M, L, XL, XXL"],"description":"SLEEVELESS TUNIC DRESS WITH V-NECKLINE AND WIDE ARM HOLES. FRONT PLEATS. ASYMMETRIC HEM.","images":["https://res.cloudinary.com/intellectfox/image/upload/v1619551443/Diploma%20Front-end/Online%20shop_Modmikky/Dresses/dress_1_1.jpg","https://res.cloudinary.com/intellectfox/image/upload/v1619551814/Diploma%20Front-end/Online%20shop_Modmikky/Dresses/dress_1_2.jpg"]},{"id":"bb5d77d1-7f4d-432c-a508-71dc8d7d3784","type":"Dresses","name":"PRINTED MINI DRESS","price":{"currency":"USD","value":"3990"},"color":{"name":"Blue","hex":"#0284CC"},"availableSizes":["XS, S, M, L, XL, XXL"],"description":"V-NECK DRESS WITH THIN STRAPS. RUFFLED HEM. SIDE HIDDEN IN-SEAM ZIP CLOSURE.","images":["https://res.cloudinary.com/intellectfox/image/upload/v1619552035/Diploma%20Front-end/Online%20shop_Modmikky/Dresses/dress_2_1.webp","https://res.cloudinary.com/intellectfox/image/upload/v1619552100/Diploma%20Front-end/Online%20shop_Modmikky/Dresses/dress_2_2.webp"]},{"id":"c07c6fd2-ccc8-4575-a2c7-415b380b777e","type":"Dresses","name":"WASHED EFFECT DRESS","price":{"currency":"USD","value":"3990"},"color":{"name":"Pink","hex":"#ED8E96"},"availableSizes":["XS, S, M, L, XL, XXL"],"description":"ROUND NECK SLEEVELESS MIDI DRESS. RUCHING DETAIL. WASHED EFFECT.","images":["https://res.cloudinary.com/intellectfox/image/upload/v1619552346/Diploma%20Front-end/Online%20shop_Modmikky/Dresses/dress_3_1.webp","https://res.cloudinary.com/intellectfox/image/upload/v1619552378/Diploma%20Front-end/Online%20shop_Modmikky/Dresses/dress_3_2.jpg"]},{"id":"63ff4fbc-7c61-4037-91ef-7c325d45d349","type":"Dresses","name":"RUCHED MIDI DRESS","price":{"currency":"USD","value":"3590"},"color":{"name":"Black","hex":"#000000"},"availableSizes":["XS, S, M, L, XL, XXL"],"description":"V-NECK MIDI DRESS WITH SPAGHETTI STRAPS THAT CROSS AT BACK. ADJUSTABLE DRAWSTRING WAIST AT BACK.","images":["https://res.cloudinary.com/intellectfox/image/upload/v1619552535/Diploma%20Front-end/Online%20shop_Modmikky/Dresses/dress_4_1.webp","https://res.cloudinary.com/intellectfox/image/upload/v1619552567/Diploma%20Front-end/Online%20shop_Modmikky/Dresses/dress_4_2.webp"]},{"id":"1314a7c9-853e-494b-bba4-de8e1ecf6134","type":"Dresses","name":"FLORAL PRINT DRESS","price":{"currency":"USD","value":"4990"},"color":{"name":"Ecru","hex":"#EAE3E3"},"availableSizes":["XS, S, M, L, XL, XXL"],"description":"SHORT DRESS WITH ROUND NECK AND BELOW-THE-ELBOW LENGTH SLEEVES. FLOUNCED HEM. BACK OPENING WITH BUTTON CLOSURE.","images":["https://res.cloudinary.com/intellectfox/image/upload/v1619552798/Diploma%20Front-end/Online%20shop_Modmikky/Dresses/dress_5_1.webp","https://res.cloudinary.com/intellectfox/image/upload/v1619552831/Diploma%20Front-end/Online%20shop_Modmikky/Dresses/dress_5_2.webp"]},{"id":"f47fb063-888d-4d33-a906-0b56c22dcbd2","type":"Dresses","name":"SATIN EFFECT SLIP DRESS","price":{"currency":"USD","value":"3990"},"color":{"name":"Midnight blue","hex":"#033F6F"},"availableSizes":["XS, S, M, L, XL, XXL"],"description":"V-NECK MIDI DRESS WITH ADJUSTABLE SPAGHETTI STRAPS. FRONT SLIT DETAIL.","images":["https://res.cloudinary.com/intellectfox/image/upload/v1619553043/Diploma%20Front-end/Online%20shop_Modmikky/Dresses/dress_6_1.webp","https://res.cloudinary.com/intellectfox/image/upload/v1619553108/Diploma%20Front-end/Online%20shop_Modmikky/Dresses/dress_6_2.webp"]},{"id":"aed4860f-1c04-4c4c-b1ae-9fdb5de09afb","type":"Dresses","name":"LINEN BLEND DRESS","price":{"currency":"USD","value":"4990"},"color":{"name":"White","hex":"#FFFFFF"},"availableSizes":["XS, S, M, L, XL, XXL"],"description":"SHORT LINEN BLEND DRESS. V-NECK AND SHORT SLEEVES. TONAL EMBROIDERED DETAIL. INTERIOR LINING.","images":["https://res.cloudinary.com/intellectfox/image/upload/v1619553254/Diploma%20Front-end/Online%20shop_Modmikky/Dresses/dress_7_1.webp","https://res.cloudinary.com/intellectfox/image/upload/v1619553290/Diploma%20Front-end/Online%20shop_Modmikky/Dresses/dress_7_2.webp"]},{"id":"45f1f692-386b-4232-8468-7d8aa208954c","type":"Dresses","name":"COTTON MIDI DRESS","price":{"currency":"USD","value":"4990"},"color":{"name":"Lilac","hex":"#ACBCF6"},"availableSizes":["XS, S, M, L, XL, XXL"],"description":"DRESS MADE OF 100% COTTON FABRIC. V-NECKLINE AND THIN STRAPS. INTERIOR LINING. RUFFLED HEM.","images":["https://res.cloudinary.com/intellectfox/image/upload/v1619553472/Diploma%20Front-end/Online%20shop_Modmikky/Dresses/dress_8_1.webp","https://res.cloudinary.com/intellectfox/image/upload/v1619553503/Diploma%20Front-end/Online%20shop_Modmikky/Dresses/dress_8_2.webp"]},{"id":"70294935-bfbf-4bb5-92d8-f106596e85b7","type":"Tees","name":"RIBBED T-SHIRT","price":{"currency":"USD","value":"1790"},"color":{"name":"Black","hex":"#000000"},"availableSizes":["S, M, L"],"description":"V-NECK SHIRT WITH WIDE STRAPS. HIDDEN METAL DETAIL APPLIQUÉ AT THE FRONT. RIB TRIM.","images":["https://res.cloudinary.com/intellectfox/image/upload/v1619553786/Diploma%20Front-end/Online%20shop_Modmikky/Tees/t-shirt_1_1.webp","https://res.cloudinary.com/intellectfox/image/upload/v1619553822/Diploma%20Front-end/Online%20shop_Modmikky/Tees/t-shirt_1_2.webp"]},{"id":"57258134-9fa5-4821-83f1-c62159877052","type":"Tees","name":"CROSSED HALTER TOP","price":{"currency":"USD","value":"1290"},"color":{"name":"Black","hex":"#000000"},"availableSizes":["S, M, L"],"description":"ADJUSTABLE CROPPED HALTER TOP WITH TIES. FRONT SLIT.","images":["https://res.cloudinary.com/intellectfox/image/upload/v1619553960/Diploma%20Front-end/Online%20shop_Modmikky/Tees/t-shirt_2_1.webp","https://res.cloudinary.com/intellectfox/image/upload/v1619553989/Diploma%20Front-end/Online%20shop_Modmikky/Tees/t-shirt_2_2.jpg"]},{"id":"e2ebc0ce-9ea3-4a28-b157-0b7bc0d67ae0","type":"Tees","name":"RIBBED CROPPED TOP","price":{"currency":"USD","value":"790"},"color":{"name":"Beige","hex":"#D3BFB5"},"availableSizes":["S, M, L"],"description":"V-NECK CROP TOP WITH STRAPS.V-NECK CROP TOP WITH STRAPS.","images":["https://res.cloudinary.com/intellectfox/image/upload/v1619554159/Diploma%20Front-end/Online%20shop_Modmikky/Tees/t-shirt_3_1.webp","https://res.cloudinary.com/intellectfox/image/upload/v1619554200/Diploma%20Front-end/Online%20shop_Modmikky/Tees/t-shirt_3_2.webp"]},{"id":"8a4b2a76-03d2-480a-a931-3488c88de582","type":"Tees","name":"TEXT T-SHIRT","price":{"currency":"USD","value":"990"},"color":{"name":"Orange","hex":"#ED7C00"},"availableSizes":["S, M, L"],"description":"ROUND NECK TOP WITH SHORT SLEEVES. FRONT TEXT DETAIL.","images":["https://res.cloudinary.com/intellectfox/image/upload/v1619554408/Diploma%20Front-end/Online%20shop_Modmikky/Tees/t-shirt_4_1.webp","https://res.cloudinary.com/intellectfox/image/upload/v1619554440/Diploma%20Front-end/Online%20shop_Modmikky/Tees/t-shirt_4_2.webp"]},{"id":"44aa2ccb-59ca-40b7-a3e4-c3d3bc6b9d34","type":"Tees","name":"TIE DYE SHIRT","price":{"currency":"USD","value":"1990"},"color":{"name":"Gray (#666666)","hex":"#666666"},"availableSizes":["S, M, L, XL"],"description":"","images":["https://res.cloudinary.com/intellectfox/image/upload/v1619554584/Diploma%20Front-end/Online%20shop_Modmikky/Tees/t-shirt_5_1.webp","https://res.cloudinary.com/intellectfox/image/upload/v1619554636/Diploma%20Front-end/Online%20shop_Modmikky/Tees/t-shirt_5_2.jpg"]},{"id":"829d1807-f1c2-43a0-ad1b-ed54add20058","type":"Tees","name":"T-SHIRT WITH PETER PAN COLLAR","price":{"currency":"USD","value":"2590"},"color":{"name":"White","hex":"#FFFFFF"},"availableSizes":["S, M, L, XL"],"description":"PETER PAN COLLAR TOP WITH MATCHING TONAL LACE APPLIQUÉ. SHORT SLEEVES. BACK OPENING WITH BUTTON CLOSURE.","images":["https://res.cloudinary.com/intellectfox/image/upload/v1619554790/Diploma%20Front-end/Online%20shop_Modmikky/Tees/t-shirt_6_1.webp","https://res.cloudinary.com/intellectfox/image/upload/v1619554856/Diploma%20Front-end/Online%20shop_Modmikky/Tees/t-shirt_6_2.webp"]},{"id":"7f674082-c14b-4de8-92ef-259dc65e33c9","type":"Tees","name":"RIBBED CROP TOP","price":{"currency":"USD","value":"990"},"color":{"name":"Green","hex":"#C6FF4C"},"availableSizes":["S, M, L"],"description":"TANK STYLE CROP TOP WITH ROUND NECKLINE.","images":["https://res.cloudinary.com/intellectfox/image/upload/v1619555089/Diploma%20Front-end/Online%20shop_Modmikky/Tees/t-shirt_7_1.webp","https://res.cloudinary.com/intellectfox/image/upload/v1619555121/Diploma%20Front-end/Online%20shop_Modmikky/Tees/t-shirt_7_2.webp"]},{"id":"9c2b2cca-c9f4-496c-98e3-899725c1d58d","type":"Tees","name":"COTTON T-SHIRT","price":{"currency":"USD","value":"990"},"color":{"name":"Pink","hex":"#ED8E96"},"availableSizes":["S, M, L"],"description":"FULL CUT T-SHIRT WITH ROUND NECK AND SHORT SLEEVES.","images":["https://res.cloudinary.com/intellectfox/image/upload/v1619555255/Diploma%20Front-end/Online%20shop_Modmikky/Tees/t-shirt_8_1.webp","https://res.cloudinary.com/intellectfox/image/upload/v1619555295/Diploma%20Front-end/Online%20shop_Modmikky/Tees/t-shirt_8_2.jpg"]},{"id":"b9fdbfd0-364f-47c7-8eb3-73342d6680e7","type":"Swimwear","name":"LARGE RUFFLE SWIMSUIT","price":{"currency":"USD","value":"3990"},"color":{"name":"Purple","hex":"#293688"},"availableSizes":["S, M, L, XL"],"description":"SWIMSUIT WITH STRAIGHT NECKLINE AND EXPOSED SHOULDERS. COMBINATION TONAL RUFFLE AT CHEST.","images":["https://res.cloudinary.com/intellectfox/image/upload/v1619555500/Diploma%20Front-end/Online%20shop_Modmikky/Swimwear/suit_1_1.webp","https://res.cloudinary.com/intellectfox/image/upload/v1619555533/Diploma%20Front-end/Online%20shop_Modmikky/Swimwear/suit_1_2.webp"]},{"id":"9563c513-f5e2-4853-84e1-98882f9b3f4c","type":"Swimwear","name":"CUT-OUT LASER-CUT SWIMSUIT","price":{"currency":"USD","value":"3990"},"color":{"name":"Midnight blue","hex":"#033F6F"},"availableSizes":["S, M, L, XL"],"description":"SWIMSUIT WITH ASYMMETRIC NECKLINE, REMOVABLE CUPS, AND WIDE STRAP. OPENING DETAIL AT WAIST. SEAMLESS FABRIC WITH LASER-CUT HEM.","images":["https://res.cloudinary.com/intellectfox/image/upload/v1619555700/Diploma%20Front-end/Online%20shop_Modmikky/Swimwear/suit_2_1.webp","https://res.cloudinary.com/intellectfox/image/upload/v1619555765/Diploma%20Front-end/Online%20shop_Modmikky/Swimwear/suit_2_2.webp"]},{"id":"2a519a79-bd99-4dc5-9c08-4309756a3c1c","type":"Swimwear","name":"TEXTURED SWIMSUIT","price":{"currency":"USD","value":"3990"},"color":{"name":"Black","hex":"#000000"},"availableSizes":["S, M, L, XL"],"description":"SQUARE NECK SWIMSUIT WITH REMOVABLE CUPS AND WIDE STRAPS.","images":["https://res.cloudinary.com/intellectfox/image/upload/v1619555990/Diploma%20Front-end/Online%20shop_Modmikky/Swimwear/suit_3_1.webp","https://res.cloudinary.com/intellectfox/image/upload/v1619556062/Diploma%20Front-end/Online%20shop_Modmikky/Swimwear/suit_3_2.webp"]},{"id":"96a2c4e3-0a4b-41ec-96d2-971223069fe4","type":"Denim","name":"RIPPED STRAIGHT LEG HIGH RISE JEANS","price":{"currency":"USD","value":"3990"},"color":{"name":"Light blue","hex":"#B6E1F1"},"availableSizes":["S, M"],"description":"HIGH-WAISTED STRAIGHT LEG JEANS. FIVE POCKETS AND WASHED EFFECT. RIPPED DETAIL AT KNEE. UNFINISHED HEM. FRONT METAL BUTTON CLOSURE.","images":["https://res.cloudinary.com/intellectfox/image/upload/v1619556317/Diploma%20Front-end/Online%20shop_Modmikky/Denim/jeans_1_1.webp","https://res.cloudinary.com/intellectfox/image/upload/v1619556391/Diploma%20Front-end/Online%20shop_Modmikky/Denim/jeans_1_2.webp"]},{"id":"763fa760-8508-4683-a3f9-75f177180c5b","type":"Denim","name":"THE ‘90S FULL LENGTH JEANS","price":{"currency":"USD","value":"4990"},"color":{"name":"White","hex":"#FFFFFF"},"availableSizes":["S, M, L"],"description":"SLIM FIT - WIDE LEG - HIGH RISE ZW SIGNATURE DENIM JEANS HIGH-WAISTED JEANS WITH FIVE POCKETS. WASHED EFFECT. UNFINISHED HEM. FRONT ZIP AND METAL BUTTON CLOSURE.","images":["https://res.cloudinary.com/intellectfox/image/upload/v1619556527/Diploma%20Front-end/Online%20shop_Modmikky/Denim/jeans_2_1.webp","https://res.cloudinary.com/intellectfox/image/upload/v1619556560/Diploma%20Front-end/Online%20shop_Modmikky/Denim/jeans_2_2.webp"]},{"id":"c3463cb2-a1a6-4ede-9570-860b64d7105e","type":"Denim","name":"THE TREVOR FULL LENGTH JEANS","price":{"currency":"USD","value":"4990"},"color":{"name":"Pink","hex":"#ED8E96"},"availableSizes":["S, M"],"description":"STRAIGHT LEG - MID RISE ZW SIGNATURE DENIM JEANS MID-RISE FIVE POCKET JEANS. STRAIGHT LEG. UNFINISHED HEM. FRONT ZIP AND METAL BUTTON CLOSURE.","images":["https://res.cloudinary.com/intellectfox/image/upload/v1619556683/Diploma%20Front-end/Online%20shop_Modmikky/Denim/jeans_3_1.webp","https://res.cloudinary.com/intellectfox/image/upload/v1619556724/Diploma%20Front-end/Online%20shop_Modmikky/Denim/jeans_3_2.webp"]},{"id":"ddecb181-3e02-435d-bea3-17855a109820","type":"Denim","name":"THE TRUTE WIDE LEG JEANS","price":{"currency":"USD","value":"4990"},"color":{"name":"Blue","hex":"#0284CC"},"availableSizes":["S, M"],"description":"SLIM FIT - WIDE LEG - HIGH RISE ZW SIGNATURE DENIM JEANS HIGH-WAISTED JEANS WITH FIVE POCKETS. WIDE LEG. FRONT ZIP AND METAL BUTTON CLOSURE.","images":["https://res.cloudinary.com/intellectfox/image/upload/v1619556889/Diploma%20Front-end/Online%20shop_Modmikky/Denim/jeans_4_1.webp","https://res.cloudinary.com/intellectfox/image/upload/v1619556921/Diploma%20Front-end/Online%20shop_Modmikky/Denim/jeans_4_2.webp"]}]


function App() {


  const [bagContent, setBagContent] = useState([]);


  return (

     <Router>
      <TopSection bagContent={bagContent}/>

       {/*<Switch>*/}
       <Route exact path="/">
         <MainPage />
       </Route>


       <Route exact path="/:id" >
       <ItemCard data={data} bagContent={bagContent} setBagContent={setBagContent}/>
       </Route>

       <Route exact path="/bag/:id">
       <Bag data={data} bagContent={bagContent} setBagContent={setBagContent}/>
       </Route>

         <Route exact path="/bag">
           <Bag data={data} bagContent={bagContent} setBagContent={setBagContent}/>
         </Route>
       {/*</Switch>*/}

      <Footer />
     </Router>

  );
}

function MainPage() {
  return (
  <>
  <Category data={data}/>
  <Sale props={data}/>
  <Instagram />
  </>
  )
}

export default App;
