
import React from 'react'

const App = () => {
  return (
  <>
  <div className='p-5 bg-white shadow-lg w-full'>
  <navbar className="md:flex flex justify-between md:justify-between cursor-pointer  bg-white text-black   items-center">
    <div className='flex items-center'>
      <img className='h-10 p-2 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042" alt="" />
<a href="#" className='font-bold text-xl'>Tailwind</a>
    </div>
    <nav className='md:flex hidden md:border-e-black lg:space-x-8 space-x-4  text-black md:items-center cursor-pointer text-lg lg:text-xl  '>

      <a className='hover:text-cyan-400 duration-500 ' href="#">Home</a>
      <a className='hover:text-cyan-400 duration-500 ' href="#about">About</a>
      <a className='hover:text-cyan-400 duration-500 ' href="#Services">Services</a>
      <a className='hover:text-cyan-400 duration-500 ' href="#contect">Contect</a>

    </nav>

<button className='bg-cyan-400 hidden md:block text-white hover:bg-cyan-500 duration-500 hover:scale-95  px-6 py-2 rounded'>Add to card</button>

<button className='md:hidden text-3xl'>☰</button>
  </navbar>
  </div>

 {/* <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 '>
  <div className=' shadow-lg bg-red-600 min-h-[100px] '></div>
  <div className=' shadow-lg bg-yellow-600 min-h-[100px] '></div>
  <div className=' shadow-lg bg-blue-600 min-h-[100px] '></div>
  <div className=' shadow-lg bg-slate-600  min-h-[100px] '></div>
  <div className=' shadow-lg bg-pink-600 min-h-[100px] '></div>
  <div className=' shadow-lg bg-green-600 min-h-[100px] '></div>
  <div className=' shadow-lg bg-stone-50  min-h-[100px] '></div>
  <div className=' shadow-lg bg-lime-400 min-h-[100px] '></div>
  <div className=' shadow-lg bg-teal-300 min-h-[100px] '></div>
  <div className=' shadow-lg bg-cyan-900 min-h-[100px] '></div>
  <div className=' shadow-lg bg-violet-600 min-h-[100px] '></div>
  <div className=' shadow-lg bg-rose-910 min-h-[100px] '></div>
  <div className=' shadow-lg bg-emerald-400 min-h-[100px] '></div>
  <div className=' shadow-lg bg-red-600 min-h-[100px] '></div>
    <div className=' shadow-lg bg-pink-600 min-h-[100px] '></div>
  <div className=' shadow-lg bg-green-600 min-h-[100px] '></div>
  <div className=' shadow-lg bg-stone-50  min-h-[100px] '></div>
  <div className=' shadow-lg bg-lime-400 min-h-[100px] '></div>
  <div className=' shadow-lg bg-teal-300 min-h-[100px] '></div>
  <div className=' shadow-lg bg-cyan-900 min-h-[100px] '></div>
  <div className=' shadow-lg bg-violet-600 min-h-[100px] '></div>
  <div className=' shadow-lg bg-rose-910 min-h-[100px] '></div>
  <div className=' shadow-lg bg-emerald-400 min-h-[100px] '></div>
  <div className=' shadow-lg bg-red-600 min-h-[100px] '></div>


 </div> */}

 <form action="" className=' bg-gradient-to-t from-stone-50 to-cyan-200 grid gap-4  py-8  grid-cols-1 mx-auto  items-center text-center shadow-lg  w-96 mt-20 rounded-lg font-serif '>
<h1 className='text-3xl my-3'>
  Login Page
</h1>
<label htmlFor="" className='text-lg'>Username:<input type="text" name="" className='px-4 py-1 rounded-full ms-2' id="" /></label>
<label htmlFor="" className='text-lg'>Password:<input type='password' name="" id=""  className='px-4 py-1 rounded-full ms-2' /></label>
<button className='bg-cyan-400 mx-auto mt-4 text-white hover:bg-cyan-500 duration-500 hover:scale-95  px-8 py-2 rounded'>
  Submit
</button>

</form>
  </>
  )
}

export default App
