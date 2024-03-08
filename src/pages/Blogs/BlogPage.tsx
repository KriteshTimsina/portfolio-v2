import { FaLinkedinIn } from "react-icons/fa";


const BlogPage = () => {
  return (
    <div className='w-full px-5 md:px-0 md:w-[797px] mx-auto mt-[50px] flex flex-col items-center gap-8'>
        <h2 className='text-5xl font-bold text-center '>React 19 is here. Here's what you need to know.</h2>
        <p className='text-typography'>this is Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        <div className='bg-red-300 w-full' >
            <img className='w-full h-full  object-cover'  src='https://miro.medium.com/v2/resize:fit:1100/format:webp/1*eqqGLkn3XbYpHNGS-F5SxQ.png'/>
        </div>
        <div className='h-[2px] w-full bg-black rounded-full ' />
        <section className='flex flex-col md:flex-row gap-5 md:w-full'>
            <div className='flex items-center  gap-5'>
                <div>
                    <img src="https://kriteshtimsina.com.np/assets/kritesh-057690bd.jpg" alt="Kritesh Timsina" className='w-20 h-20 rounded-full' />
                </div>
                <div >
                    <h2 className='font-extrabold text-lg'>Kritesh Timsina</h2>
                    <div className='flex items-center gap-2'>
                        <p>September 12, 2020</p>
                        <p>&#x2022;</p>
                        <p>5 min read</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-evenly h-16 bg-white shadow-md border-gray-200 border-[1px] rounded-md md:flex-1'>
                <div className="h-full border-r-[1px] flex justify-center items-center">
                </div>
                <div className="h-full border-r-[1px]"></div>
            </div>
        </section>
    </div>
  )
}

export default BlogPage