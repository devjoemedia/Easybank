import './App.css';
import Articles from './components/Articles/Articles';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="app">
      <Navbar />
       <Banner />
      <Services />
      <Articles />
      <Footer />  
    </div>
  );
}

export default App;
