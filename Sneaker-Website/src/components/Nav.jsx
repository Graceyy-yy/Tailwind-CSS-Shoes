import { TbShoppingBag } from "react-icons/tb"; 
import { HiOutlineShoppingBag } from "react-icons/hi"; 
import {useState, React}  from 'react'
import NikeLogo from '../assets/nike-logo.svg'
import {RxHamburgerMenu} from "react-icons/rx"

const ROUTES = [
    "Home", 
    "About",
    "Services",
    "Pricing",
    "Contact"];

export function Nav() {
    const [isMobileMenuShown,setisMobileMenuShown] = useState(false);

  return (
    <nav className = "flex flex-wrap items-center justify-between ">
        <a href = ""> 
            <img src = {NikeLogo} className= "h-20 w-20"/>
        </a>
       <button onClick = {()=> setisMobileMenuShown(!isMobileMenuShown)} className= "lg:hidden hover:bg-gray-100 rounded-lg p-2 focus:ring-2 focus:ring-gray-200">
        <RxHamburgerMenu size = {25} />
       </button>

        <div className = {`w-full lg:w-auto lg:block ${!isMobileMenuShown && "hidden"}`}>
            <ul className = "space-x-8 lg:bg-transparent flex flex-col lg:flex-row rounded-lg lg:border-none  bg-gray-50 text-lg border border-gray-100 p-4 ">
                {ROUTES.map((route,i) => {
                    return (<li className = {`px-3 py-2 cursor-pointer rounded ${i===0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-100"}`} key = {route}>{route}</li>) 
                })}
            </ul>
        </div>
        <div className = "fixed left-4 bottom-4 lg:static ">
             <div className = "flex-center h-12 w-12 rounded-full bg-white shadow-md">
               <TbShoppingBag />
             </div>
        </div>
       
      
    </nav>
  )
}

export default Nav