import React from 'react'
import styles from '../style'

const GetQuote = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-white p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-coral-red hover:bg-sky-400 w-[100%] h-[100%] rounded-full`}>
          <div className={`${styles.flexStart} flex-row`}>

            <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">

            <span className="text-white "> Contact 
            </span>


            </p>

          </div>

          <p className="font-poppins font-medium text-[18px] leading-[23px]">

            <span className="text-white"> Us
            </span>


            </p>

      </div> 
      
    </div>
  )
}

export default GetQuote
