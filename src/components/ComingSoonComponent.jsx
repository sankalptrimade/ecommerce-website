import React from 'react'
import "./../styles/ComingSoonComponentStyles.css";
import droneImg from "./../images/BgImg5.png";

const ComingSoonComponent = () => {
  return (
    <div className='comingSoonComponent-parent'>
      <div className="droneImg-text">
        <p className="badge-text">Launching Soon</p>
        <p className='droneImg-text-1'>Best Arial View in Town</p>
        <p className="droneImg-text-2"><span className='first-text'>30&#37;</span> OFF</p>
        <p className="droneImg-text-3">on professional camera drones</p>
        <p className="droneImg-text-4">Sky's the Limit<br />Fly Higher with Our New Drone</p>
        {/* <button type="submit" className="droneImg-shop-btn">Shop</button> */}
      </div>
      <div className="droneImg">
        <img src={droneImg} alt="droneImage" />
      </div>
    </div>
  )
}

export default ComingSoonComponent
