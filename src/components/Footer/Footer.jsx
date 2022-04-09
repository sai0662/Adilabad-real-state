import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className='main-footer'>
            <div className='container'>
                <div className='footer-links'>
                     <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>CONTACT</h2>
                            <li>Mahender Mamilla</li>
                           <ul>
                               <li>
                                   Ravindra Nagar
                               </li>
                               <li>
                                   Adilabad
                               </li>
                               <li>
                                   504001
                               </li>
                           </ul>
                           <ul>
                               <li>+7013826602</li>
                               <li>mahendermamilla@gmail.com</li>
                           </ul>
                        
                        </div>

                        <div className='footer-link-items2'>
                            <h2>COMPANY</h2>
                           <li>
                           
                           <Link to='/Contact' style={{textDecoration:'none',color:'grey'}}>CONTACT</Link> 
                           </li>
                           <li>
                           <Link to='/About' style={{textDecoration:'none',color:'grey'}}>ABOUT</Link>
                           
                          </li>
                        
                        </div>  

                        <div className='footer-link-items3'>
                            <h2>MORE LINKS</h2>
                           
                               <li>
                                  <Link to='/Admin' style={{textDecoration:'none',color:'grey'}}>Admin</Link>
                               </li>
                               <li>
                                   <Link to='/Home' style={{textDecoration:'none',color:'grey'}}>Home</Link>
                               </li>
                              </div> 
                     </div>
                </div>
            </div>
            <div className='footer-row'>
                <span>© 2022 , ADILABAD REALESTATE.</span>
            </div>
        </div>
    );
}

export default Footer;