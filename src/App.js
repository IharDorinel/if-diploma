


//components
import TopSection from "./TopSection";
import Category from "./Category";
import Footer from "./Footer";
import Sale from "./Sale";
import EnterSearch from "./EnterSearch";
import Account from "./Account";


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
  return (
    <div className="App">
      <TopSection />
      <Category />
      <Sale />
      <Footer />
    </div>
  );
}

export default App;
