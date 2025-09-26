import React from 'react'

const App = () => {
  return (
    <>

<header className=' w-full text-white flex justify-between items-center px-10 fixed'>
 <a href="#" className='py-2'>
  <img className='w-16 h-16' src="https://png.pngtree.com/png-clipart/20220616/original/pngtree-white-shoes-png-image_8080511.png" alt="" />
  <p className='text-xs'>The shoe Company</p>
 </a>
 <nav className='hidden md:block lg:space-x-8 space-x-6 font-bold lg:text-2xl '>
   <a href="#">Home</a>
  <a href="#home">How it,s work</a>
  <a href="#about">about</a>
  <a href="#testimonials">Testimonials</a>
  <a href="#contect us">Contect Us</a>
 </nav>

 <button className=" md:hidden text-3xl">☰</button>
</header>

<section className='bg-contain bg-no-repeat bg-right  ' style={{backgroundImage:`url("https://static.vecteezy.com/system/resources/previews/020/328/693/original/3d-white-particle-wave-pattern-on-a-black-background-digital-abstract-background-can-be-applied-for-web-design-website-wallpaper-banner-or-cover-illustration-vector.jpg")`}}>
<div className="hero flex text-white pt-14 ">

  <div className=' max-w-3xl mx-auto flex items-center '>
    <p className='text-8xl font-black leading-[92px]'>THE<br/> SHOE <br/>COMPANY</p>
  </div>
  <div className=''>
 <img className='w-[670px]' src="https://www.iconarchive.com/download/i138022/microsoft/fluentui-emoji-3d/Running-Shoe-3d.1024.png" alt="" />
  </div>
</div>
</section>
   </>
  )
}

export default App
