import React from 'react'
import styles from './style'

import { Navbar, Hero, Services, Stats, Testimonials,Quote,  Footer, Hero2, ContactUs } from './components'

const App = () => {
  return (

   
    <div className="bg-primary w-full overflow-hidden">



      <div className={`${styles.paddingX} ${styles.flexCenter}`}>

        <div className={`${styles.boxWidth}`}>



          <Navbar />

        
    

          <div className='fixed sm:hidden bottom-1  w-full'>
    <button class='my-4 flex justify-center ml-20 px-5 py-2 bg-coral-red  text-white text-sm font-bold tracking-wide rounded-full focus:outline-none'>Phone 0472112322</button>
</div>

      


        </div>

      </div>

      <div className={`bg-primary ${styles.flexStart}`}>

<div className={`${styles.boxWidth}`}>
  

   <Hero/> 
  


</div>

</div>

<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div styles={`${styles.boxWidth}`}>
      <Stats />
      <Hero2 />
      <Services />
      <ContactUs />
      <Testimonials />
      <Footer />
     


      </div>

    
</div>
    
      
    </div>
   

  )
}

export default App
