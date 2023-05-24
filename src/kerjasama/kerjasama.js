import Nav from "../component/nav";
import Dropdown from "../component/dropdown";
import { useState } from "react";
import image1 from '../image/school_hero.jpg'
import logo1 from '../image/logo-1.jpg'
import logo2 from '../image/angkasa-malaysia.png'
import logo3 from '../image/Komatsu-Logo.png'
import logo4 from '../image/jiaec.png'
import Footer from "../component/footer";

const Kerjasama = () => {
    const[drop, setDrop] = useState(false)
    
    const onDrop = () =>{
      setDrop(!drop)
    }
    return ( 
        <>
          <Nav onDrop={onDrop}/>
          <Dropdown drop={drop}/>
         <div className="relative ">
            <img src={image1} alt="" className="w-[100vw] object-cover h-screen" />
            <div className="w-[100vw] h-screen absolute top-0 flex flex-col justify-center bg-[#0000008a]">
                <div className="text-white mx-[70px]">
                  <h1 className="laptop:inline-block mobile:hidden font-semibold translate-y-[-100px]">SMKN 2</h1>
                  <h1 className="laptop:text-[80px] laptop:border-l-4 laptop:px-[20px] mobile:text-[40px] mobile:border-l-0 mobile:px-0 font-bold text-[80px] border-l-4 border-[#ff6000] border-solid px-[20px]">Kerjasama</h1>
                </div>
            </div>
            <div className=" w-full ">
              <div className="laptop:flex laptop:flex-row laptop:mx-[100px] mobile:flex mobile:mx-[10px] mobile:flex-col-reverse my-[60px] flex flex-row mx-[100px]">
                <div className="laptop:w-[50%] mobile:w-[100%] w-[50%] flex flex-col justify-center">
                  <h1 className="laptop:translate-y-[-40px] mobile:translate-y-[-10px] text-[30px] text-[#ff6000] font-bold translate-y-[-40px]">Lokasi</h1>
                  <h1 className="text-[20px] font-semibold">PT. Asian Welding Specialist</h1>
                  <p className="text-[20px] font-semibold">Jl. Ciliwung No. 4 Cihapit, Bandung, Jawa Barat, 40114</p>
                </div>
                <div className="laptop:w-[50%] mobile:w-[100%] w-[50%] flex justify-center">
                  <img src={logo1} alt="" className="w-[350px] h-[350px]"/>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="laptop:flex laptop:flex-row laptop:mx-[100px] mobile:flex mobile:flex-col mobile:mx-[20px] my-[80px] flex flex-row mx-[100px]">
                  <div className="laptop:w-[50%] mobile:w-[100%] w-[50%] flex justify-center">
                      <img src={logo2} alt="" className="max-w-full" />
                  </div>
                  <div className="laptop:w-[50%] mobile:w-[100%] mobile:my-[10px] w-[50%] flex flex-col justify-center">
                      <h1 className="laptop:translate-y-[-40px] mobile:translate-y-[0px]  text-[30px] text-[#ff6000] font-bold translate-y-[-40px]">Lokasi</h1>
                      <h1 className="text-[20px] font-semibold">Angkatan Koperasi Kebangsaan Malaysia Berhad</h1>
                      <p className="text-[20px] font-semibold">Wisma Ungku A. Aziz, Jalan SS6/1 47301 Kelana Jaya, Petaling Jaya, Selangor</p>
                  </div>
              </div>
            </div>
            <div className="w-full">
            <div className="laptop:flex laptop:flex-row laptop:mx-[100px] mobile:flex mobile:flex-col-reverse mobile:mx-[20px] my-[80px] flex flex-row mx-[100px] gap-[30px]">
              <div className="laptop:w-[50%] mobile:w-[100%] w-[50%] flex flex-col justify-center">
                <h1 className="laptop:translate-y-[-40px] mobile:translate-y-[-10px] text-[30px] text-[#ff6000] font-bold translate-y-[-40px]">Lokasi</h1>
                <h1 className="text-[20px] font-semibold">PT. Komatsu Indonesia</h1>
                <p className="text-[20px] font-semibold">Jl. Cakung Cilincing Raya No.KM. 4, RT.7/RW.2, Sukapura, Kec. Cilincing, Jkt Utara, Daerah Khusus Ibukota Jakarta 14140</p>
              </div>
              <div  className="laptop:w-[50%] mobile:w-[100%] w-[50%] flex justify-center">
                <img src={logo3} alt="" className="max-w-full" />
              </div>
            </div>
          </div>
          <div className="w-full">
              <div className="laptop:flex laptop:flex-row laptop:mx-[100px] mobile:flex mobile:flex-col mobile:mx-[20px] my-[80px] flex flex-row mx-[100px]">
                  <div className="laptop:w-[50%] mobile:w-[100%] w-[50%] flex justify-center">
                      <img src={logo4} alt="" className="max-w-full" />
                  </div>
                  <div className="laptop:w-[50%] mobile:w-[100%] w-[50%] flex flex-col justify-center">
                      <h1 className="laptop:translate-y-[-40px] mobile:translate-y-[-10px] text-[30px] text-[#ff6000] font-bold translate-y-[-40px]">Lokasi</h1>
                      <h1 className="text-[20px] font-semibold">PT. JIAEC</h1>
                      <p className="text-[20px] font-semibold">Jl. Ir H. Juanda Kav. Adikarya No. 20, Bakti Jaya, Sukmajaya, Kota Depok, Jawa Barat 16418</p>
                  </div>
              </div>
            </div>          
         </div>
         <Footer/>
        </>
     );
}

 
export default Kerjasama;