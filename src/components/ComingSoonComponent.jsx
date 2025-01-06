import React from 'react'
import "./../styles/ComingSoonComponentStyles.css";
import droneImg from "./../images/BgImg5.png";

const ComingSoonComponent = () => {
  return (
    <div className='comingSoonComponent-parent'>
      <div className="droneImg-text">
        <p className="badge-text">Today&#39;s Special</p>
        <p className='droneImg-text-1'>Best Arial View in Town</p>
        <p className="droneImg-text-2"><span className='first-text'>30&#37;</span> OFF</p>
        <p className="droneImg-text-3">on professional camera drones</p>
        <p className="droneImg-text-4">Limited quantities.<br />See product detail pages for availability.</p>
        <button type="submit" className="droneImg-shop-btn">Shop</button>
      </div>
      <div className="droneImg">
        <img src={droneImg} alt="droneImage" />
      </div>
    </div>
  )
}

export default ComingSoonComponent
