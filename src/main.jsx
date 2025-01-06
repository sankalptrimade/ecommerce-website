import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar'
import Heading from './components/Heading'
import CategoryNavigation from './components/CategoryNavigation'
import ImageSlider from './components/ImageSlider'
import ProductDetails from './components/ProductDetails'
import HelpCenterComponent from './components/helpCenterComponent'
import FooterComponent from './components/FooterComponent'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Heading />
    <CategoryNavigation />
    <ImageSlider />
    <ProductDetails />
    <HelpCenterComponent />
    <FooterComponent />
  </StrictMode>,
)
