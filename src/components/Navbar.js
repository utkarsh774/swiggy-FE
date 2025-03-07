import React from "react"
import { appLogo } from "../utils/constants"
import {Link} from "react-router-dom";
const Navbar = () =>
{
    return (
        <div>


      <nav className="flex justify-between bg-gray-500 p-4 text-black">
        {/* first child */}
       <Link to="/"><img src = {appLogo}  className="w-16 h-12"/></Link> 
       {/*  second child */}
        <ul className="flex space-x-6">
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/cart">cart</Link></li>
      </ul>
      </nav>
        </div>
    )
}
export default Navbar