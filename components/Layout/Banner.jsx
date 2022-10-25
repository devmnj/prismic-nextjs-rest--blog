import React from 'react'

export default function Banner() {
    return (
        <div className="container my-10 mx-auto">

   
    <section className="">

      <div className="bg-slate-600 alert alert-dismissible fade show fixed top-0 right-0 left-0 z-[1030] w-full py-2 px-6 text-white md:flex justify-between items-center text-center md:text-left">
        <div className="mb-1 md:mb-0 flex items-center flex-wrap justify-center md:justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-4 h-4 mr-2">
            <path fill="currentColor"
              d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z" />
          </svg>
          <strong className="mr-1">Built with </strong> <a href="https://nextjs.org/"  >Nextjs</a> 
        </div>
     
      </div>

    </section>
   

  </div>
   
    )
}
