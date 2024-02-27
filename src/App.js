import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
        </Routes>
        <Routes>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
