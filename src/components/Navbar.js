import React from "react"

const Navbar = () =>
{
    return (
        <div>

      <nav className="flex justify-between bg-gray-500 p-4 text-black">
        {/* first child */}
        <div>Logo</div>
       {/*  second child */}
        <ul className="flex space-x-6">
        <li>home</li>
        <li>about</li>
        <li>cart</li>
      </ul>
      </nav>
        </div>
    )
}
export default Navbar