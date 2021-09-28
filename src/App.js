import logo from './project_images/brand-logo.svg';


//components
import TopSection from "./TopSection";
import Category from "./Category";
import Footer from "./Footer";
import Sale from "./Sale";


// styles
import './App.css';
import './styles/TopSection.css';
import './styles/Category.css';
import './styles/Sale.css';
import './styles/Footer.css';




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
