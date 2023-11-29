
import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home.jsx"
import Navbar from './component/navbar/Navbar.jsx';
import PageContainer from './container/PageContainer.jsx';
import Detail from './pages/Detail.jsx';
import Cart from './pages/Cart.jsx';
import Search from './pages/Search.jsx';

function App() {
  return (
    <>
    <PageContainer>
    
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products/:id' element={<Detail/>}/>
      <Route path='/cart' element={<Cart/>}/>  
      <Route path='/products/:search' element={<Search/>}/>     
    </Routes>
    
    </PageContainer>
    
    </>
  )
}

export default App;
