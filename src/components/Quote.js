

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../style';
export const Quote = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6tnqqqk', 'template_bixjlyt', form.current, 'fWYHs-B1UPQebOPwW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <form ref={form} onSubmit={sendEmail} className="max-sm mx-auto">
              <div className="mb-5 p-6 ring-2 ring-coral-red rounded-xl">

      <label className={`block mb-2 font-poppins font-semibold text-black text-[18px] leading-[23px]`} >Name</label>
      <input type="text" name="user_name"className ="bg-black-50 border border-slate-gray placeholder-black
//         -700 text-sm rounded-lg   block w-full p-2.5 " />
      <label className={`block mb-2 mt-5 font-poppins font-semibold text-black text-[18px] leading-[23px]`}>Email</label>
      <input type="email" className ="bg-black-50 border border-slate-gray   placeholder-black
//         -700 text-sm rounded-lg    block w-full p-2.5 " name="user_email" />
      <label className={`block mb-2 mt-5 font-poppins font-semibold text-black text-[18px] leading-[23px]`}>Message</label>
      <textarea name="message" className ="bg-black-50 border border-slate-gray    placeholder-black
//         -700 text-sm rounded-lg    block w-full p-2.5 " />
      {/* <input type="submit" className="text-white"value="Send" /> */}
      

      </div>
      <button type="submit" value="Send" styles="mt-10" className={`py-4 px-6 bg-coral-red font-poppins font-medium text-[18px] 
    text-white outline-none ${styles} rounded-[10px]`}>Submit Details</button>
    </form>
    
  );
};


// const Quote = () => {
//   return (
//     <form  className="max-sm mx-auto ">
//         <div className="mb-5 p-6 ring-2 ring-cyan-500 rounded-xl">
//         <label for="f-name" className={`block mb-2 font-poppins font-semibold text-white text-[18px] leading-[23px]`}>Your name</label>
//         <input type="text" id="f-name" className ="bg-black-50 border border-cyan-500 placeholder-black
//         -700 text-sm rounded-lg   block w-full p-2.5 " placeholder="Enter your name" />


//           <label for="email" className={`block mb-2 block mb-2 mt-5 font-poppins font-semibold text-white text-[18px] leading-[23px]`}>Your email</label>
//         <input type="email" id="email" className ="bg-black-50 border border-cyan-500  placeholder-black
//         -700 text-sm rounded-lg    block w-full p-2.5 " placeholder="Enter your email" />


//           <label for="mob-num" className={`block mb-2 block mb-2 mt-5 font-poppins font-semibold text-white text-[18px] leading-[23px]`}>Your mobile number</label>
//         <input type="tel" id="mob-num" className ="bg-black-50 border border-cyan-500 placeholder-black
//         -700 text-sm rounded-lg   block w-full p-2.5 " placeholder="Enter your mobile" />

//         {/* need to implement a api to find suburbs */}
//          <label for="suburb" className={`block mb-2 block mb-2 mt-5 font-poppins font-semibold text-white text-[18px] leading-[23px]`}>Your suburb</label>
//         <input type="text" id="mob-num" className ="bg-black-50 border border-cyan-500 placeholder-black
//         -700 text-sm rounded-lg   block w-full p-2.5 " placeholder="Enter your suburb" />
//            <label for="message" className={`block mb-2 block mb-2 mt-5 font-poppins font-semibold text-white text-[18px] leading-[23px]`}>Message</label>
//         <input type="text" id="mob-num" className ="bg-black-50 border border-cyan-500 placeholder-black
//         -700 text-sm rounded-lg   block w-full p-2.5 " placeholder="Details about the job" />

        

 
//       </div>
      
//     </form>


//   )
//   }

export default Quote
