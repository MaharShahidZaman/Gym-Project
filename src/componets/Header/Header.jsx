import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import '../styles/Header.css'
import { Link } from 'react-scroll';

 const mobile = window.innerWidth<=768 ? true : false;
export const Header = () => {
  const [menue, setMenue] = useState(false)
  return (
    <div className='header'>
        <img src={logo} className='logo'/>
        {menue === false && mobile === true ? (

<div onClick={()=>setMenue(true)} style={{backgroundColor:'var(--appColor)', padding:'0.4rem', borderRadius:'5px'}}>
<img src={Bars} alt="" style={{ width:'1.5rem', height:'1.5rem'}} />

</div>
        ): 
        <ul className="header-menue">
        <li ><Link onClick={()=> setMenue(false)} to='hero'
        smooth={true}
        >Home</Link></li>
        <li><Link onClick={()=> setMenue(false)} to='programs' 
        span={true}
        smooth={true}>Programs</Link></li>
        <li><Link to='reasons' onClick={()=> setMenue(false)}
        span={true}
        smooth={true}
        >Why us</Link></li>
        <li ><Link onClick={()=> setMenue(false)} to='Plans-container'
        span={true}
        smooth={true}
        >Plans</Link> </li>
        <li ><Link onClick={()=> setMenue(false)} 
        to='testimoniels'
        span={true}
        smooth={true}
        >Testimoniels</Link></li>
    </ul>

      }
       
       
    </div>
  )
}
