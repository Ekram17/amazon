import React from 'react'
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
import LowerHeader from './LowerHeader';

function Header() {
  return (
    <>
        <section>
            <div className={classes.header_container}>
                <div className={classes.logo_container}>
 {/* logo */}
 <a href="/">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />
                </a>
                <div className={classes.delivery}>
                    {/* delivery */}
                <span>
                    {/* icon */}
                    <SlLocationPin /> 

                </span>
                <div >
                    <p> Deliver to</p>
                    <span>LasVegas</span>
                </div>
                </div>
                
                </div>
                
               
                <div className={classes.search}>
                {/* search */}
                <select name="" id="">
                    <option value="">All</option>
                </select>
                <input type="text" name="" id="" placeholder="Search Amazon" />
                {/* icon */}
                <BsSearch size={25} />
            </div>
            <div className={classes.order_container}>
                {/* right side link */}
                
                    <a href="" className={classes.language}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png" alt="" />

                    
                    
                    <select name="" id="">
                       <option value=""> EN</option> 
                    </select>
                    </a>
                    {/* three components */}
<a href="">
    
        <p>Sign In</p>
        <span>Account & Lists</span>

    
</a>
{/* orders */}
<a href="">
    
        <p>returns</p>
        <span>& Orders</span>

    
</a>
{/* cart */}
<a to={"/cart"} className={classes.cart}>
    
        {/* icon */}
        <BiCart size={35} />
        <span>0</span>

    
</a>
            </div>
            </div>
          
            




        </section>
        <LowerHeader/>
    </>
    
  )
}

export default Header

