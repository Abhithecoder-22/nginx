import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, NotFound } from './Components/default';
import { Box } from '@mui/material'

//components
import Header from './Components/Header/Header';
import Header2 from './Components/Header/Header2';
import DetailView from './Components/ItemDetails/DetailView';
import TemplateProvider from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import Cart from './Components/Cart/Cart';
import Services from './pages/Blog';
import ChatMeta from './pages/ChatMeta';
import About from './pages/About';
import Ai from './pages/Ai';
import Blog from './pages/Blog';

import CloudWhatsapp from './pages/CloudWhatsapp';
import ContactUs from './pages/ContactUs';
import CustomSoftware from './pages/CustomeSoftware';
import DailyDomainDatabase from './pages/DailyDomainDatabase';
import GoogleAds from './pages/GoogleAds';
import LogoDesign from './pages/LogoDesign';
import Meta from './pages/Meta';
import Products from './pages/Products';
import SearchEngine from './pages/SearchEngine';
import SmmService from './pages/SmmService';
import SocialMedia from './pages/SocialMedia';
import Software from './pages/Software';
import WebDesign from './pages/WebDesign';

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter >
        
        <Header />
        
        <Header2/>
      
          
          <Box style={{marginTop: 30}}>
            <Routes>
              <Route path= '/' element={<Home />} />
              <Route path= '/cart' element={<Cart />} />
              <Route path= '/product/:id' element={<DetailView />} />
              <Route path='/blog' element={<Services/>}/>
              <Route path='/chatmeta' element={<ChatMeta/>}/>
              <Route path='/about'  element={<About/>}></Route>
     <Route path='/ai'  element={<Ai/>}></Route>
     <Route path='/blog'  element={<Blog/>}></Route>
     <Route path='/chatmeta'  element={<ChatMeta/>}></Route>
     <Route path='/cloudWhatsapp'  element={<CloudWhatsapp/>}></Route>
     <Route path='/contactus'  element={<ContactUs/>}></Route>
     <Route path='/customsoftware'  element={<CustomSoftware/>}></Route>
     <Route path='/ddd'  element={<DailyDomainDatabase/>}></Route>
     <Route path='/googleads'  element={<GoogleAds/>}></Route>
 
     <Route path='/logodesign'  element={<LogoDesign/>}></Route>
     <Route path='/meta'  element={<Meta/>}></Route>
     <Route path='/products'  element={<Products/>}></Route>
     <Route path='/searchengine'  element={<SearchEngine/>}></Route>
     <Route path='/smmservice'  element={<SmmService/>}></Route>
     <Route path='/socialmedia'  element={<SocialMedia/>}></Route>
     <Route path='/software'  element={<Software/>}></Route>
     <Route path='/webdesign'  element={<WebDesign/>}></Route>
    
            </Routes>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
