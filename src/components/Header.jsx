import React from "react";
import { IoMdSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosHelpBuoy } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoMdCart } from "react-icons/io";
import {Link} from 'react-router-dom'
import { FcAbout } from "react-icons/fc";
// import {useSelector} from 'react-redux'
import { useSelector } from "react-redux";
function Header(){
   const cartItems = useSelector((state) => state.cart?.items || []);

    return(

        <div>
            <nav className="flex justify-between items-center border-b-2 border-gray-300">
                <img className="w-20 h-20 mx-15" src="/logo.png" alt="" />
                <ul className="flex  gap-10 p-4 m-4 text-xl ">
                    <div className="flex">
                  <span className="px-2 my-1"><IoMdSearch /></span>
                    
                    <li> SEARCH</li>
                    </div>


                    <div className="flex">
                        
                    <span className="px-2 my-1"> <BiSolidOffer /></span>
                    <li> <Link to='/offer'> OFFER </Link></li>

                    </div>
                    
                    <div className="flex">
                    <span className="px-2 my-1"><IoIosHelpBuoy /></span>
                    <li> <Link to='/help'>HELP</Link> </li>
                    </div>
                    
                    <div className="flex">
                    <span className="px-2 my-1"><CgProfile /></span>
                    
                    <li><Link to='/signin'>SIGNIN</Link> </li>
                    </div>
                    
                    <div className="flex">
                    <span className="px-2 my-1"><IoMdCart /></span>
                    
                    <li><Link to='/cart'>CART-<span className="cart-count">{cartItems.length}</span></Link> </li>

                    </div>
                    <div className="flex">
                    <span className="px-2 my-1"><FcAbout /></span>
                    <li><Link to='/about'>About</Link> </li>
                     
                    </div>
                    
                    
                </ul>
            </nav>
        </div>

    )
}

export default Header;