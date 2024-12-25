import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar'
import Heading from './components/Heading'
import CategoryNavigation from './components/CategoryNavigation'
import ImageSlider from './components/ImageSlider'
import InfoImage from './components/InfoImage'
// import ProductDetails from './components/ProductDetails'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Heading />
    <CategoryNavigation />
    <ImageSlider />
    <InfoImage />
    {/* <ProductDetails /> */}
  </StrictMode>,
)
