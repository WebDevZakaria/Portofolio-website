import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import  {Route,Routes,BrowserRouter} from 'react-router-dom'

import Singleprjectss from './components/Portofolio/Singleprjectss';
import OnlineProject from './components/Portofolio/OnlineProject';
import Handy from './components/Portofolio/Handy';
import Ecommerce from './components/Portofolio/Ecommerce';

function App() {
  return (
  <BrowserRouter>
      <>

    <main className="main">
      <Routes>
      
   <Route path='/' element = {<Home />} />
   <Route path='/singleprojectss' element = {<Singleprjectss />} />
   <Route path='/onlineProject' element = {<OnlineProject />} />
   <Route path='/handymen' element = {<Handy />} />
   <Route path='/phoneecommerce' element = {<Ecommerce />} />   

      </Routes>

    </main>

     </>
     
     </BrowserRouter>
     
  );

}


export default App;
