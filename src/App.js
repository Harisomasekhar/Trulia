import './App.css';
import MainSection from './components/MainSection';
import Navbar from './components/Navbar';
import MultipleItems from './components/PhotoCarousel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainSection/>
      <MultipleItems/>
      <Footer/>
    </div>
  );
}

export default App;
