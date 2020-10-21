import React from 'react';
import {Route} from 'react-router-dom'
import "../styles/Header.css"
import img1 from '../images/zamek2.jpg'


const Header = () => {
    return ( 
    <>
    <Route path="/" render={() => (<img src={img1} alt="zamek"/>)}/>
    </>
     );
}
 
export default Header;
