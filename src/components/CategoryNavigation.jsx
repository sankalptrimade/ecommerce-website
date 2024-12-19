import React from 'react'
import "./../styles/CategoryNavigationStyles.css"

const CategoryNavigation = () => {
  return (
    <div className="categories d-flex align-items-center">
        <div className="cateogory">
            <ul className="categoryList d-flex justify-content-between">
                <li className="categoryListItems"><a className='a-categoryListItems' href="/">Smartphones</a></li>
                <li className="categoryListItems"><a className='a-categoryListItems' href="/">Laptops</a></li>
                <li className="categoryListItems"><a className='a-categoryListItems' href="/">Tablets</a></li>
                <li className="categoryListItems"><a className='a-categoryListItems' href="/">Mobile Accessories</a></li>
            </ul>
        </div>
    </div>
  )
}

export default CategoryNavigation
