import React from 'react'
import styles, {layout} from '../style'

import { quote_img } from '../assets'
import { features } from '../constants'
import Quote from './Quote'

const FeatureCard = ({icon, title, content, context, index}) => (


  <div className={`flex flex-row p- 6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} `}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-coral-red `}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
    </div>

    <div className="flex-1 flex flex-col ml-3">

      <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-slate-gray text-[16px] leading-[24px] mb-1">
        {content}
      </p>

    </div>

  </div>
)

const Services = () => {
  return (
    <section id="services" className={`flex md:flex-row flex-col ${styles.paddingY}`}>



<div className={`flex-1 ${styles.flexStart} flex-col x1:px-0 sm:px-16 px-6 xl:h-[100%]`}>


<div className="flex flex-row justify-between items-center w-full ">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-black ss:leading-[100px] leading-[75px]">
              Services <br className=""/> {" "}

              <span className="text-coral-red"> We </span> {""}


            </h1>
      
            

          </div>

          <h1 className=" font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100px] 
          leading-[75px] w-full">Offer

          <div className='w-[100px] h-[5px] bg-coral-red'></div>
              </h1>

   

       {/* <div className={`flex-1 flex ${styles.flexStart}  flex-col x1:px-0 sm: px-2  ml-auto `}> */}

       <div className='flex flex-col mr-10 mt-10'>

        {features.map((feature, index) => (
          <FeatureCard key={feature.id}{...feature} index={index}/>

        ))}
        <div>

<button type="button" styles="mt-10" className={`py-4 px-6 bg-coral-red hover:bg-sky-400 font-poppins font-medium text-[18px] 
    text-white outline-none ${styles} rounded-[10px] mt-10`}>Book Service</button>
    </div>

</div>

      {/* </div>  */}
</div>

{/* <div className={`${layout.sectionInfo}  `}>

<h2 className={styles.heading2}>Get A Quote</h2>
<div className='sm: w-full md:w-[100%] flex-1'>

  <Quote />
  

</div>




</div>  */}

<div className={`flex-1 flex ${styles.flexCenter}md:my-0 my-10 relative`}>
          <img src={quote_img} alt='modern_lighting' className=":w-[100%]  h-[85%] xl:h-[75%] relative z-[5] mt-10 rounded-md"/>


        {/* <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/> */}
        

        </div>

    </section>

    
  )
}




export default Services
