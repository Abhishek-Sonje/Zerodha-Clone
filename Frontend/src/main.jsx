import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './Landing/home/HomePage.jsx'
import Signup from './Landing/signup/Signup.jsx'
import AboutPage from './Landing/about/AboutPage.jsx'
import ProductPage from './Landing/products/ProductPage.jsx'
import PricingPage from './Landing/pricing/PricingPage.jsx'
import SupportPage from './Landing/support/SupportPage.jsx'
 
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Landing/Navbar.jsx'
import Footer from './Landing/Footer.jsx'
import PageNotFound from './Landing/PageNotFound.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
<Footer/>
  </BrowserRouter>
)
