import { useState } from 'react'

import React from 'react'
import { close, spartech_logo, hamburger} from '../assets'
import {navLinks} from '../constants'


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  // const routeComponents = navLinks.map(({title, path}) => (
  //   <Route key={title} exact path={path}>
  //     {title}
  //   </Route>
  // ));

  return (
   
    <nav className=" w-full flex  justify-between items-center navbar">
      <img src={spartech_logo} alt="spartech" className="h-[150px]"/>

      

      <ul className="list-none sm:flex  hidden justify-end items-center flex-1">

        
          {/* <Routes>
            {routeComponents}
          </Routes> */}
        
      {navLinks.map((nav, index, path) => ( 
        
            <li key={nav.id} to={path}

            className={`font-poppins  font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ?  'mr-0' : 'mr-10' } text-white`}
            
            >

                <a href={`#${nav.id}`}  className="text-slate-gray hover:text-coral-red ">
                    
                        {nav.title}


                </a>
                

            </li>


        ))}



      </ul>


      {/* on small screen toggle menu */}

      <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : hamburger}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)} 
          
          
          />

          {/* display menu items below toggle menu when clicked */}

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-2 my-2 min-w-[140px] rounded-x1 sidebar`}>
          <ul className="list-none  flex-col justify-end items-center flex-1">
        {navLinks.map((nav, index) => ( 
            <li key={nav.id}
            className={`font-poppins hover:bg-coral-red font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ?  'mr-0' : 'mb-4' } text-white`}
            
            >

                <a href={`#${nav.id}`}>

                        {nav.title}


                </a>
                

            </li>

        ))}

    </ul>

          </div>
          
      </div>




    </nav>
   
 
  )
}

export default Navbar
