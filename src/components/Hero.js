import React from 'react'
import styles from '../style'
import GetQuote from './GetQuote'
import {  main_img } from '../assets'

const Hero = () => 
   (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
              <div className={`flex-1 ${styles.flexStart} flex-col x1:px-0 sm:px-16 px-6`}>


<div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-black ss:leading-[100px] leading-[75px]">
              Spartech <br className=""/> {" "}

              <span className="text-coral-red"> Electrical </span> {""}


            </h1>

             <div className= "ss:flex hidden md:mr-4 mr-0">

              <GetQuote/>

            </div> 

          </div>

          <h1 className=" font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100px] 
          leading-[75px] w-full">Services

          <div className='w-[100px] h-[5px] bg-coral-red'></div>
              </h1>
              <p className={`${styles.paragraph} max-w-[470px] mt-5 text-slate-gray`}> is a family owned and operated business. 
              We are very proud of our traditional values, innovation and continuous professional development.
               Utilising the latest technology, we provide our clients the best electrical service at the Hoxley Park area and surrounds.


              </p>


      </div>
      <div className={`flex-1 flex ${styles.flexCenter}md:my-0 my-10 relative`}>
          <img src={main_img} alt='modern_lighting' className=":w-[100%]  h-[100%] relative z-[5] mt-10 rounded-md"/>


        {/* <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/> */}
        

        </div>

        <div className={`ss:hidden ${styles.flexCenter} mt-10`}>
          <GetQuote/>
        </div>

    </section>
  )


export default Hero
