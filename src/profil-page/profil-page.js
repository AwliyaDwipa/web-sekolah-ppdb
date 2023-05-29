import Nav from "../component/nav";
import Dropdown from "../component/dropdown";
import { useState } from "react";
import image1 from '../image/school_hero.jpg'
import image2 from '../image/School_building.jpg'
import Footer from "../component/footer";
import orang1 from '../image/hasan-iskandar.png'

const Profil = () => {
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
                <div className="bg-[#0000008a] w-[100vw] h-screen absolute top-0 flex flex-col justify-center ">
                    <div className="text-white mx-[70px]">
                       <h1 className="laptop-l:inline-block mobile:hidden font-semibold translate-y-[-100px] ">SMKN 2</h1>
                       <h1 className="font-bold laptop-l:text-[80px] mobile:text-[40px] mobile:border-l-0 text-[80px] border-l-[5px]  border-[#ff6000] border-solid px-[20px]">PROFIL</h1>
                    </div>
                </div>    
            </div>
            <div className="mobile-m:mt-[700px] mobile-l:mt-[630px] laptop:mt-[550px] laptop-l:flex laptop-l:flex-row laptop-l:mt-[0px] tablet:mt-[500px]  tablet:w-screen mobile:flex mobile:flex-col-reverse mobile:h-screen  w-full h-screen flex  flex-row mobile:mt-[880px]">
                <div className="laptop-l:w-[50%] mobile:w-[100%] w-[50%]">
                    <div className=" my-[40px] mx-[20px]">
                        <h1 className="laptop-l:text-[30px] mobile:text-[20px] font-bold text-[30px] my-[30px] py-[10px] px-[20px] relative before:absolute before:left-0 before:top-0 before:w-[5px] before:h-full before:bg-[#ff6000]">Sejarah Singkat</h1>
                        <p>SMK Negeri 2 Kota Bandung berawal dari nama besar STM Negeri 1 Bandung. Berdasarkan dari Surat Putusan Menteri Pendidikan, Pengadjaran, dan Kebudayaan No.3835/B.II.1951 yang tertanggal 30 Agustus 1951, diputuskan TMT 01 Agustus 1951 untuk dibuka : Sekolah Teknik Menengah (STM) Negeri (Bagian Bangunan, Mesin, dan Listrik) di Bandung. Maka berdasarkan surat keputusan tersebut didirikanlah STM Negeri I Bandung pada tahun 1951 di Jl. DR.Wahidin No.2 Bandung yang dipimpin oleh : W.G. Zweekhorst. Berdasarkan surat keputusan Kepala Kanwil Departemen Pendidikan dan Kebudayaan Propinsi Jawa Barat No.148/I02.Kep/R.77 tertanggal 16-12-1977, memutuskan untuk memindahkan STM Negeri I Bandung ke Jalan Ciliwung No. 4 Bandung. Pada saat itu di Jalan Ciliwung no.4 pada awalnya adalah sebuah ST Negeri 1 yang didirikan sejak zaman Belanda (tahun tidak tercatat) dan STM Negeri IV Bandung.Kemudian STM Negeri IV Bandung dipindahkan ke Jalan Buah Batu Bandung. Kepindahan STM Negeri 1 Bandung secara bertahap mulai tahun ajaran 1978/1979 dan secara keseluruhan berakhir pada tahun ajaran 1979/1980 secara resmi STM Negeri 1 Bandung pindah dari Jalan DR. Wahidin No.2 ke Jalan Ciliwung No.4 Bandung.Perubahan nama dari STM Negeri 1 menjadi SMK Negeri 2 Bandung berdasarkan SK Mendikbud Nomor 036/O/1997, bulan Oktober 1997, angka indek 1,2,3 dst adalah diambil dari umur sekolah dihitung dari sejak berdirinya sekolah.</p>
                    </div>
                </div>
                <img src={image2} alt="" className=" laptop-l:w-[50%] laptop-l:px-[0px] laptop-l:my-[40px] laptop-l:mx-[40px] tablet:px-[30px] mobile:w-[100%] mobile:mx-[0px] mobile:my-[0px]  w-[50%] my-[40px] mx-[20px]"/>
            </div> 
            <div className="w-full  ">
                <div className="flex justify-center items-center my-[30px]">
                    <h1 className="border-b-4 border-[#ff6000] border-solid font-bold text-[30px]">Visi dan Misi</h1>
                </div>
                <div className=" laptop-l:flex laptop-l:flex-row laptop-l:gap-[0] mobile:flex mobile:flex-col mobile:gap-[20px]  flex flex-row  justify-center my-[20px]">
                    <div className=" laptop-l:w-[300px] laptop-l:mx-[30px]  mobile:w-screen mobile:mx-[0px]  w-[300px] bg-[#ff6000] text-white mx-[30px]">
                       <h1 className="text-center text-[20px] font-bold my-[10px]">Visi</h1>
                       <p className="mx-[10px] font-semibold">Sebagai lembaga pendidikan kejuruan profesional dan berwawasan lingkungan yang mampu menghasilkan lulusan yang bertaqwa, cerdas, kompeten dan kompetitif.</p>
                    </div>
                    <div className="laptop-l:w-[700px] mobile:w-screen w-[700px] bg-[#ff6000] text-white">
                       <h1 className="text-center font-bold my-[10px] text-[20px]">Misi</h1>
                       <ul className="list-decimal mx-[30px] font-semibold my-[10px]">
                         <li>Mengembangkan sikap kewirausahaan yang jujur dan bertanggungjawab.</li>
                         <li>Memberikan mutu layanan pendidikan kejuruan yang profesional dan berkualitas.</li>
                         <li>Meningkat keberkejaan lulusan serta dapat mengembangkan sikap profesional sesuai bidang keahlianya.</li>
                         <li>Menghasilkan lulusan yang mampu memilih karir, berkompeten, produktif, dan dapat mengembangkan diri.</li>
                         <li>Menciotakan lingkungan sekolah yang kondusif</li>
                         <li>Menjalin kerja sama dengan dunia usaha/dunia industri serta instansi terkait.</li>
                       </ul>
                    </div>   
                </div>
                <div className=" laptop-l:flex laptop-l:flex-row mobile:flex mobile:flex-col mx-[30px] my-[45px] flex flex-row gap-[25px]">
                    <div className="w-[50%] laptop-l:w-[50%] mobile:w-[100%]">
                        <img src={orang1} alt="" className="max-w-full" />
                    </div>
                    <div className="laptop-l:w-[50%] laptop-l:px-[20px] mobile:w-[100%] mobile:px-0 w-[50%] px-[20px]">
                        <h1 className="text-center text-[#ff6000] font-bold text-[25px]">SAMBUTAN</h1>
                        <p className="text-[15px]">Selamat datang di dunia pendidikan SMKN 2 Bandung. Kami merasa sangat bangga mendapatkan perhatian dan kepercayaan dari Bapak-Ibu sekalian. Kami akan berupaya untuk dapat menjalankan amanah ini dengan baik agar pertanggung jawaban di hadapan Allah SWT kelak menjadi ringan.Di sini kami mengajak anda para orang tua siswa untuk berpartisipasi membangun masyarakat pembelajar dalam rangka menyongsong era baru bagi anak-anak kita dan menjadikan anak-anak kita generasi yang mampu berkompetisi tanpa kehilangan wajah budaya dan moral.Memasuki pergaulan global yang penuh dengan kompetisi ini, kita perlu menyiapkan mental anak-anak kita agar mampu bersaing dengan baik dengan memiliki moral/adab islami, kemandirian, kecerdasan, juga tentunya kreatifitas-inovasi sesuai tumbuh kembangnya.Di SMKN 2 Bandung setiap siswa memiliki hak untuk berprestasi dan mendapatkan pelayanan yang baik. Karena kami memandang ini semua adalah amanah yang akan kami pertanggung jawabkan di hadapan Allah SWT. Tentu hal ini semakin terasa mudah dengan adanya kerjasama dari para orang tua siswa dalam menjalankan program sekolah.Sebagai penutup, sekali lagi kami ucapkan selamat datang di SMKN 2 Bandung. Marilah bekerjasama agar anak-anak kita dapat berkembang dengan baik sehingga tumbuh menjadi generasi yang berakhlakul karimah dan cerdas.</p>
                    </div>
                </div>
            </div>  
            <Footer/>
        </>
     );
}
 
export default Profil;
