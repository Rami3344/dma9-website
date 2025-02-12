import React from 'react'
import deliv from '../../content/join/delivery.jpeg'
import supp from '../../content/join/support.jpeg'
import part from '../../content/join/partner.jpeg'
function Join() {
  return (
    <div className='join'>
        <h1 id='join'>Join Us</h1>
        <ul className='list'>
            <li>
                <img src={deliv}/><br></br>
                <h3>Become a Delivery Man</h3>
                <p>Earn money from food delivery and have your freedom to work any time you want</p>
            </li>
            <li>
                <img src={supp}/><br></br>
                <h3>Become a Supporter</h3>
                <p>Help people that have issues in delivery or any technical issues</p>
            </li>
            <li>
                <img src={part}/><br></br>
                <h3>Become a partner </h3>
                <p>Join our Team and help us improve our company</p>
            </li>
        </ul>
    </div>
  )
}

export default Join
