import "./App.css"
import BrandSection from "./components/BrandSection";
import CardSection from "./components/CardSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";
import TravelSection from "./components/TravelSection";

const App = () => {

    return <div>
       
<Navigation />
<HeroSection />
<BrandSection />
<CardSection />
<TravelSection />
<EmailSection />
<Footer />
    </div>;
  

};
export default App;