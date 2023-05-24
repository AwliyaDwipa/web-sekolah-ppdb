import { useState } from "react";
import Nav from '../component/nav'
import Dropdown from '../component/dropdown'
import image1 from '../image/school_hero.jpg'
import icon1 from '../image/engineer.png'
import icon2 from '../image/coding.png'
import icon3 from '../image/pallete.png'
import Footer from '../component/footer'

const Keahlian = () => {
    const[drop, setDrop] = useState(false)
    
    const onDrop = () =>{
      setDrop(!drop)
    }

    return ( 
        <>
          <Nav onDrop={onDrop}/>
          <Dropdown drop={drop}/>
            <div className="relative">
                <img src={image1} alt="" className="w-[100vw] h-screen object-cover" />
                <div className="w-[100vw] h-screen absolute top-0 flex flex-col justify-center bg-[#0000008a]">
                    <div className="laptop:mx-[70px] mobile:mx-[20px] text-white mx-[70px]">
                        <h1 className="laptop:inline-block mobile:hidden font-semibold translate-y-[-100px]">SMKN 2</h1>
                        <h1 className="laptop:text-[80px] laptop:border-l-4 laptop:leading-none  mobile:text-[40px] mobile:border-l-0 mobile:leading-[35px] font-bold text-[80px] border-l-4 border-[#ff6000] border-solid px-[20px]">SPEKTRUM KEAHLIAN</h1>
                    </div>
                </div>
                <div className="laptop:h-screen mobile:w-screen mobile:h-fit  h-screen">
                    <div className="laptop:mx-[0px] laptop:flex laptop:flex-col laptop:items-center laptop:my-[80px] tablet:mx-[30px] mobile:flex mobile:flex-col  mobile:my-[30px] flex items-center flex-col my-[80px] gap-[20px]">
                      <div className=" laptop:w-fit laptop:flex laptop:flex-row  tablet:w-full  mobile:flex mobile:flex-col flex flex-row rounded-[10px] w-fit mx-[20px]">
                        <div className="bg-[#ff6000] laptop:w-fit laptop:rounded-l-[10px] laptop:rounded-r-[0px] tablet:w-full mobile:rounded-t-[10px] mobile:rounded-b-none rounded-l-[10px] text-white py-[20px] px-[10px] w-fit flex flex-col items-center">
                          <img src={icon1} alt="" className="w-[60px] my-[10px] rounded-[50px] bg-white " />
                          <h1 className="font-bold text-[20px]">Teknologi Manufaktur & Rekayasa</h1>
                        </div>
                        <div className="bg-[#ff6000] py-[20px] px-[10px] text-white">
                            <h1 className="font-semibold text-center my-[10px]">Program Keahlian</h1>
                            <ul className="list-decimal font-medium mx-[40px] my-[20px]">
                                <li>Teknik Mesin</li>
                                <li>Teknik pengelasan & fabrikasi logam</li>
                            </ul>
                        </div>
                        <div className="bg-[#ff6000] laptop:rounded-r-[10px] laptop:rounded-l-none py-[20px] px-[10px] text-white mobile:rounded-b-[10px] mobile:rounded-t-none rounded-r-[10px]">
                            <h1 className="font-semibold text-center my-[10px]">Kosentrasi </h1>
                            <ul className="list-decimal font-medium mx-[40px] my-[20px]">
                                <li>Teknik Pemesinan</li>
                                <li>Teknik Perancangan Gambar Mesin</li>
                                <li>Teknik Pengelasan</li>
                            </ul>
                        </div>
                      </div>
                      <div className="laptop:flex laptop:flex-row laptop:w-fit tablet:w-full mobile:flex mobile:flex-col  mx-[20px] flex flex-row rounded-l-[10px]">
                        <div className="bg-[#ff6000] laptop:rounded-l-[10px] laptop:rounded-r-none laptop:w-fit   mobile:rounded-t-[10px] mobile:w-full mobile:rounded-b-none rounded-l-[10px] text-white py-[20px] px-[10px] w-fit flex flex-col items-center">
                          <img src={icon2} alt="" className="w-[60px] p-[5px] rounded-[10px]  bg-white" />
                          <h1 className="font-bold text-[20px]">Teknologi Informasi</h1>
                        </div>
                        <div className="bg-[#ff6000] py-[20px] px-[10px] text-white ">
                            <h1 className="font-semibold text-center my-[10px]">Program Keahlian</h1>
                            <ul className="list-decimal font-medium mx-[40px] my-[20px]">
                                <li>Pengembangan Perangkat Lunak & Gim</li>
                                <li>Teknik Jaringan Komputer & Telekomunikasi</li>
                            </ul>
                        </div>
                        <div className="laptop:rounded-r-[10px] laptop:rounded-l-none mobile:rounded-b-[10px] mobile:rounded-t-none bg-[#ff6000] rounded-r-[10px] py-[20px] px-[10px] text-white">
                            <h1 className="font-semibold text-center my-[10px]">Konsentrasi</h1>
                            <ul className="list-decimal font-medium mx-[40px] my-[20px]">
                                <li>Rekayasa Perangkat Lunak</li>
                                <li>Teknik Komputer & Jaringan</li>
                            </ul>
                        </div>
                      </div>
                      <div className="laptop:flex laptop:flex-row laptop:w-fit tablet:w-full mobile:flex mobile:flex-col mx-[20px] flex flex-row">
                        <div className="bg-[#ff6000] laptop:rounded-l-[10px] laptop:rounded-r-none tablet:w-full mobile:rounded-t-[10px] mobile:rounded-b-none rounded-l-[10px] text-white py-[20px] px-[10px] w-fit flex flex-col items-center">
                            <img src={icon3} alt="" className="w-[60px] p-[5px] rounded-[10px]  bg-white" />
                            <h1 className="font-bold text-[20px]">Seni & Ekonomi Kreatif</h1>
                        </div>
                        <div className="mobile:w-full bg-[#ff6000]  text-white py-[20px] px-[10px] w-fit flex flex-col items-center" >
                            <h1 className="tablet:my-[5px] font-semibold text-center my-[10px]">Program Keahlian</h1>
                            <ul className="tablet:my-[5px] list-decimal font-medium mx-[40px] my-[20px]">
                                <li>Animasi</li>
                            </ul>
                        </div>
                        <div className="laptop:rounded-r-[10px] laptop:rounded-l-none mobile:rounded-b-[10px] mobile:rounded-t-none mobile:w-full bg-[#ff6000] rounded-r-[10px] text-white py-[20px] px-[10px] w-fit flex flex-col items-center">
                            <h1 className="tablet:my-[5px] font-semibold text-center my-[10px]">Konsentrasi</h1>
                            <ul className="tablet:my-[5px] list-decimal font-medium mx-[40px] my-[20px]"> 
                                <li>Animasi</li>
                                <li>Multi Media</li>
                            </ul>
                        </div>
                      </div>
                    </div>
                </div>
            </div>   
            <Footer/>     
        </>
     );
}
 
export default Keahlian;