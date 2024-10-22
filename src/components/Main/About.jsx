import React from 'react'
import deliv from'../../content/delivery.png'
import '../../style/Main.css'
function About() {
  return (
    <div className='about curve'>
        <div className='deliv-img'>
            <img src={deliv} />
        </div>
        <div className='content'>
            <h1>We deliver Food, <br/>To every place in Tunisia!</h1>
            <div className='adrs'>
                <input type="text" name="" id="" placeholder='Adress' />
            </div>
        </div>
    </div>
  )
}

export default About
