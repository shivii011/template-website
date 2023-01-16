import './App.css';
import Footer from './components/Footer';
import HeroSection from "./components/HeroSection"
import HomeSpine from './components/HomeSpine';
import Orthopedics from './components/Orthopedics';
import Section1 from './components/Section1';

function App() {
  return (
<div className="App" >
  <HeroSection/>
  <HomeSpine/>
  <Section1/>
  <Orthopedics/>
  <Footer/>
    </div>
  );
}

export default App;
