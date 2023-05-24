import image1 from '../image/school_hero.jpg'
import image2 from '../image/profil_page.jpg'
import image3 from '../image/Major.jpg'
import image4 from '../image/Partnership.jpg'
import { useState } from "react";
import Nav from '../component/nav'
import Dropdown from '../component/dropdown'
import Footer from '../component/footer';


const Hero = () => {
    const[drop, setDrop] = useState(false)
    
    const onDrop = () =>{
      setDrop(!drop)
    }
    return ( 
        <>
          <Nav onDrop={onDrop}/>
          <Dropdown drop={drop}/>
            <div className='h-[500px] relative'>
                <img src={image1} alt="" className='w-[100vw] h-screen object-cover' />
                <div className=' w-[100vw] h-screen bg-[#0000008a] absolute top-0 flex flex-col justify-center'>
                    <div className='mx-12 my-10 laptop:text-6xl mobile:text-[40px] text-6xl font-semibold'>
                      <h1 className='text-white uppercase'>Selamat Datang di</h1>
                      <h1 className='text-white'>SMKN 2 BANDUNG</h1>
                    </div>
                </div>
            </div>
            <div className=' border mt-[156px] laptop:flex laptop:flex-row mobile:flex mobile:flex-col-reverse flex flex-row justify-between'>
                <div className='laptop:w-[50%] mobile:w-[100%] w-[50%] flex flex-col'>
                    <div className='laptop:my-[100px] mobile:my-[30px] mx-[40px] my-[100px]'>
                       <h1 className='font-semibold laptop:text-xl mobile:text-[15px] text-xl translate-y-[-20px] border-b-2 border-[#ff6000] border-solid w-fit' >Profil</h1>
                        <div className='laptop:my-[20px] mobile:my-[5px] my-[20px] '>
                            <h1 className='text-3xl laptop:text-3xl laptop:leading-[36px] mobile:text-[20px] mobile:leading-[25px]  font-bold text-[#ff6000]' >Mengenal lebih banyak</h1>
                            <h1 className='text-3xl laptop:text-3xl laptop:leading-[36px] mobile:text-[20px] mobile:leading-[25px] font-bold text-[#ff6000]' >Tentang SMKN2</h1>
                            <h1 className='text-3xl laptop:text-3xl laptop:leading-[36px] mobile:text-[20px] mobile:leading-[25px] font-bold text-[#ff6000]' >BANDUNG</h1>
                        </div>
                        <div className=' laptop:my-[100px] mobile:my-[30px] my-[100px]'>
                          <a href="/profil-page" className=' bg-[#ff6000] laptop:py-[10px] laptop:px-[15px] mobile:py-[5px] mobile:px-[10px] mobile:text-[15px] text-[#ffff] font-semibold  rounded-md py-[10px] px-[15px] ' >SELENGKAPNYA</a>
                        </div>
                    </div>
                </div>
                    <div className='laptop:w-[50%] mobile:w-[100%] w-[50%] mt-5'>
                        <img src={image2} alt="" className='max-w-full' />
                    </div>
            </div>
            <div className='laptop:flex laptop:flex-row  mobile:flex mobile:flex-col w-full flex flex-row'>
                <div className='laptop:w-[50%] mobile:w-[100%] w-[50%]'>
                    <img src={image3} alt="" className='max-w-full' />
                </div>
                <div className='laptop:w-[50%] mobile:w-[100%] w-[50%]'>
                    <div className='laptop:my-[100px] mobile:my-[30px] mx-[40px] my-[100px]'>
                        <h1 className='text-3xl laptop:text-3xl laptop:leading-20px  mobile:text-[20px] mobile:leading-[20px] font-bold text-[#ff6000]'>Spektrum keahlian</h1>
                        <h1 className='text-3xl laptop:text-3xl laptop:leading-20px  mobile:text-[20px] mobile:leading-[20px] font-bold text-[#ff6000]'>SMKN 2 BANDUNG</h1>
                        <div className='laptop:my-[40px] mobile:my-[30px] my-[40px]'>
                            <a href="/Spektrum-keahlian" className='bg-[#ff6000] laptop:py-[10px] laptop:px-[15px] mobile:py-[5px] mobile:px-[10px] mobile:text-[15px] text-[#ffff] font-semibold  rounded-md py-[10px] px-[15px]'>SELENGKAPNYA</a>   
                        </div>                    
                    </div>
                </div>
            </div>
            <div className='w-full laptop:flex laptop:flex-row  mobile:flex mobile:flex-col-reverse flex flex-row mt-[50px] '>
                <div className='laptop:w-[50%] mobile:w-[100%] w-[50%]'>
                    <div className='laptop:my-[100px] laptop:mx-[40px] mobile:my-[40px] mobile:mx-[20px] mx-[40px] my-[100px]' >
                        <h1 className='font-semibold laptop:text-xl mobile:text-[15px]  text-xl translate-y-[-40px] border-b-2 border-[#ff6000] border-solid w-fit'>Kerjasama</h1>
                        <h1 className='text-3xl laptop:text-3xl laptop:leading-[36px] mobile:text-[20px] mobile:leading-[20px] font-bold text-[#ff6000]'>Kerjasama SMK 2 dengan perusahaan lain</h1>
                    </div>
                    <div className='laptop:mx-[40px] mobile:mx-[20px] mx-[40px]'>
                        <a href="/Kerjasama" className='bg-[#ff6000] laptop:py-[10px] laptop:px-[15px] mobile:py-[5px] mobile:px-[10px] mobile:text-[15px] text-[#ffff] font-semibold  rounded-md py-[10px] px-[15px]'>SELENGKAPNYA</a>   
                    </div>
                </div>
                <div className='laptop:w-[50%] mobile:w-[100%] w-[50%]'>
                    <img src={image4} alt="" />
                </div>
            </div>
            <Footer/>
        </>
     );
}
 
export default Hero;

