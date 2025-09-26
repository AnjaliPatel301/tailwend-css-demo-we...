import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const App = () => {
  return (
    <>

    <div className='grid grid-cols-2 size-[100%] gap-10 m-5 font-[poppins] '>
      <div className='bg-gray-300 p-30'>
        <div className='absolute top-12 left-14 bg-white p-2 text-xl  rounded-full '><IoSearchOutline />
       </div>
         <img className=''  src="https://static.vecteezy.com/system/resources/previews/025/140/283/non_2x/pink-t-shirt-mockup-on-transparent-background-ai-generated-free-png.png" alt="" />
      </div>

      <div className='mx-auto'>
        <p className='text-xs text-gray-400'>MY STORE</p>
        <h1 className='text-6xl leading-[70px] mt-3'>BANANA BLISS <br/>OVERSIZED T-SHIRT</h1>

        <p className='text-lg mt-5 tracking-wider '>Rs. 1,178.82</p>
        <p className='text-sm mt-2 text-gray-400 '>Taxes in cluded <span className='underline decoration-black underline-offset-4 '>Shipping</span> calculated at checkout</p>
        <p className='text-gray-400 mt-8 '>Size </p>
        <div  className='flex space-x-3 mt-3'>
          <div className='rounded-3xl border border-black py-1 px-6'>S</div>
          <div className='rounded-3xl border bg-black text-white border-black py-1 px-6' >M</div>
          <div className='rounded-3xl border border-black py-1 px-6'>L</div>
          <div className='rounded-3xl border border-black py-1 px-6'>XL</div>
          <div className='rounded-3xl border border-black py-1 px-6'>XXL</div>
        </div>
        <p className='mt-6  text-lg text-gray-400'>Quantity</p>
        <div className='w-52 text-xl py-2 px-4 mt-2 border border-black flex justify-between'>
<p>-</p>
<p>1</p>
<p>+</p>
        </div>

        <button className='text-black w-full border border-black border-spacing-2 py-3 mt-5'>Add to cart</button><br/>
        <button className='bg-black text-white w-full border border-black border-spacing-2 py-3 mt-2'>Buy it now</button>
      </div>
       <div className='bg-gray-300'>
        <div className='absolute top-12 left-14 bg-white p-2 text-xl  rounded-full '><IoSearchOutline />
       </div>
         <img className=''  src="https://static.vecteezy.com/system/resources/previews/025/140/283/non_2x/pink-t-shirt-mockup-on-transparent-background-ai-generated-free-png.png" alt="" />
      </div>
    </div>
   
    </>
  )
}

export default App
