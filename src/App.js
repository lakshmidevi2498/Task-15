import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Img from './components/img';
import Cards from './components/cards';
import MySwiper from './components/swiper';
import Footer from './components/footer'
import Services from './components/services';

function App() {
  return (
    
    <>
    <Navbar/>
    <Img/>
    <MySwiper/>
    
    <Cards/>
    <Services/>
    <Footer/>
    </>
  );
}

export default App;
