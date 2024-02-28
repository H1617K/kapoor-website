import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import { Blogs } from './Layout/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
        </Routes>
        <Routes>
          <Route  path="/Blogs" element={<Blogs/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
