import { BsYoutube, BsInstagram } from "react-icons/bs";

const Dropdown = ({drop}) => {
    return ( 
        <>
        <div className={drop?"mobile:flex mobile:flex-col  flex flex-col w-[100vw] h-[90vh] fixed z-10 p-4  top-[88px] bg-white": "hidden"}>
            <a href="/" className="mobile:text-[25px] mobile:py-1 relative w-fit text-4xl py-3 flex flex-row" >SEKOLAH
                <div className="mobile:absolute mobile:top-[150px] mobile:left-0 absolute right-[-300px] text-2xl">
                    <ul className="">
                        <li className="py-[10px]"><a className=" flex flex-row relative" href="/profil-page">PROFIL
                            {/* <div className="absolute right-[-300px] text-xl ">
                                <ul>
                                    <li className="py-[10px]"><a href="">Kepala Sekolah</a></li>
                                    <li className="py-[10px]"><a href="">Identitas Sekolah</a></li>
                                    <li className="py-[10px]"><a href="">Visi Misi</a></li>
                                    <li className="py-[10px]"><a href="">Sejarah Singkat</a></li>
                                    <li className="py-[10px]"><a href="">Struktur Organisasi</a></li>
                                    <li className="py-[10px]"><a href="">Guru</a></li>
                                    <li className="py-[10px]"><a href="">Tata Usaha</a></li>
                                </ul>
                            </div> */}
                        </a></li>
                        <li className="py-[10px]"><a href="/Spektrum-keahlian">SPEKTRUM KEAHLIAN</a></li>
                        <li className="py-[10px]"><a href="/Kerjasama">KERJASAMA</a></li>
                    </ul>
                </div>
            </a>
            <a href="http://lms.smkn2bandung.sch.id:1234/" className="mobile:text-[25px] mobile:py-1 text-4xl py-3 " >LMS</a>
            <a href="https://forms.gle/xxgk9pTt1L44ojuQ9" target='_blank' className="mobile:text-[25px] mobile:py-1 text-4xl py-3">PPDB</a>
        <div className="absolute  bottom-[70px] left-[20px]">
         <h1 className="text-3xl font-semibold">Ikuti kami</h1>
            <div className="flex flex-row  mx-4 gap-3">
                <a href="https://youtube.com/@SMKNEGERI2BANDUNG"><BsYoutube className="text-3xl "/></a>
              <a href="https://instagram.com/smkn2bandung?igshid=NTc4MTIwNjQ2YQ=="><BsInstagram className="text-3xl"/></a>
            </div>
        </div>
        </div>        
        </>
     );
}
 
export default Dropdown;