import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import { Blogs } from './Layout/Blogs/Blogs';
import NewsLetter from './Layout/NewsLetterPage/NewsLetter';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
        </Routes>
        <Routes>
          <Route  path="/Blogs" element={<Blogs/>}></Route>
          <Route path='/NewsLetter' element={<NewsLetter/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
