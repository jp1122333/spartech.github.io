import React from 'react'
import styles from '../style'
import {  hero2_img } from '../assets'


const Hero2 = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>



            <div className={`flex-1 flex ${styles.flexCenter}md:my-0 my-10 relative`}>


          <img src={hero2_img} alt='modern_lighting' className="w-[100%]  h-[85%] relative z-[5] mt-10 rounded-md"/>

       
        </div>

        <div className={`flex-1  mb-auto md:pr-5 sm: mt-10 flex-col x1:px-0 sm:px-16 xl:px-16`}>


<div className="flex flex-row justify-between items-center w-full">
            <h3 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[25px] text-black ss:leading-[100px] leading-[50px]">
              Servicing Homes <br className=""/> {" "}

              <span className="text-coral-red"> & </span> {""}


            </h3>

              

          </div>

          <h3 className=" font-poppins font-semibold ss:text-[68px] text-[25px] text-black ss:leading-[100px] 
          leading-[50px] w-full">Businesses

          <div className='w-[100px]  h-[5px] bg-coral-red'></div>
              </h3>
              <p className={`${styles.paragraph} max-w-[470px] mt-5 text-slate-gray`}>Whether you have an electrical fault that needs fixing, want to upgrade your switchboard or need new outlets or appliances installed, TB Electrical & Communications is the name to remember. We offer a wide range of services across the Central Coast for homes, businesses, disability and industrial residences.<br />
               Our team is equipped with advanced equipment and is regularly upskilled, so great service is guaranteed. <br />

               We appreciate that an electrical emergency can happen at any hour of the day or night. That’s why we’re proud to offer 24/7 emergency services. We’re also accredited to carry out advanced Level 2 electrical work, including high-voltage connections. <br />

                Contact TB Electrical & Communications today on 0451 157 595. We travel throughout Gosford, Erina, Kincumber, Woy Woy and surrounding regions.

              </p>

              <div className='flex p-3 mt-10'>

              <button type="button" className={`py-4 px-6  hover:bg-sky-400 hover:text-white bg-coral-red font-poppins font-medium text-[18px ] 
                 text-white outline-none ${styles}  rounded-[10px]`}>
                    Get In Touch
                 </button>

                 <button type="button" className={`py-4 px-6  bg-coral-red hover:bg-sky-400 hover:text-white font-poppins font-medium text-[18px] 
                 text-white outline-none ${styles} ml-10 rounded-[10px]`}>
                    Book A Visit
                 </button>

                 </div>



</div>
    </section>
  )
}

export default Hero2
