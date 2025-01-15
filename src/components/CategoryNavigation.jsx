import React from 'react'
import "./../styles/CategoryNavigationStyles.css"
import { Link } from 'react-router-dom'

const CategoryNavigation = () => {
  return (
    <div className="categories d-flex align-items-center">
        <div className="cateogory">
            <ul className="categoryList d-flex justify-content-between">
                <li className="categoryListItems"><Link to="/smartPhones" className='a-categoryListItems'>Smartphones</Link></li>
                <li className="categoryListItems"><Link to="/laptops" className='a-categoryListItems'>Laptops</Link></li>
                <li className="categoryListItems"><Link to="/tablets" className='a-categoryListItems'>Tablets</Link></li>
                <li className="categoryListItems"><Link to="/mobileAccessories" className='a-categoryListItems'>Mobile Accessories</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default CategoryNavigation
