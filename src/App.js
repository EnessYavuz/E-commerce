
import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home.jsx"
import Navbar from './component/navbar/Navbar.jsx';
import PageContainer from './container/PageContainer.jsx';

function App() {
  return (
    <>
    <PageContainer>
    
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    
    </PageContainer>
    
    </>
  )
}

export default App;
