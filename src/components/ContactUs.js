import React from 'react'
import styles from '../style'
import { team_img, placeholder,  phone } from '../assets'
const ContactUs = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>



    <div className={`flex-1 flex ${styles.center}  x1:px-0 sm: px-2  ml-auto `}>


  <img src={team_img} alt='teamImg' className="w-[100%] xl:h-[100%] md:h-[75%] relative z-[5]  mt-10 rounded-md"/>


</div>

<div className={`flex-1  mb-auto md:pr-5 sm: mt-10 flex-col x1:px-0 sm:px-16 xl:px-16 `}>


<div className="flex flex-row justify-between items-center w-full md:h-[75%]">
    <h3 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[25px] text-black ss:leading-[100px] leading-[50px]">
      Contact <br className=""/> {" "}

      <span className="text-coral-red"> Our </span> {""}


    </h3>

      

  </div>

  <h3 className=" font-poppins font-semibold ss:text-[68px] text-[25px] text-black ss:leading-[100px] 
  leading-[50px] w-full">Team

  <div className='w-[100px]  h-[5px] bg-coral-red'></div>
      </h3>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-slate-gray`}>
            Get in contact with us today


      </p>


      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">


         <div className="flex ring-coral-red ring-2 justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 ">
    <img src={placeholder} alt="location"  className="w-[45px] h-[35px] mx-auto flex mb-0 justify-center  object-contain"/>
    <p className="font-poppins font-normal text-[18px] mb-1 flex justify-center leading-[32px] text-slate-gray my-10">Find Us</p>
    <div className="flex flex-row">
       {/* <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />  */}
          <div className="flex flex-col ml-4">
              <h4 className="font-poppins font-semibold text-[20px] flex justify-center leading-[32px] text-black">Our Address</h4>
              <p className="font-poppins font-normal text-[16px] flex justify-center leading-[24px] text-slate-gray">35 Coreen Drive, Wamberal NSW 2260</p>
          </div>
    </div>
  </div>

  <div className="flex ring-coral-red ring-2 justify-between flex-col w-full px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 ">
    <img src={phone} alt="call"  className="w-[45px] h-[35px] mx-auto flex mb-0 justify-center  object-contain"/>
    <p className="font-poppins font-normal text-[18px] mb-1 flex justify-center leading-[32px] text-slate-gray my-10">Contact Us</p>
    <div className="flex flex-row">
       {/* <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />  */}
          <div className="flex flex-col ml-4">
              <h4 className="font-poppins font-semibold text-[20px] flex justify-center mr-5 leading-[32px] text-black">Our Phone number</h4>
              <p className="font-poppins font-normal text-[16px] flex justify-center leading-[24px] ml-10 text-slate-gray">0472710987</p>
          </div>
    </div>
  </div>
    
</div>
</div>
</section>
  )
}

export default ContactUs
