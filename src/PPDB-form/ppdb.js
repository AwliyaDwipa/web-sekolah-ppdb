import Nav from "../component/nav";
import Dropdown from "../component/dropdown";
import { useState } from "react";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";

const Ppdb = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({})

const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setInputs(values => ({...values, [name]: value}));
}
const handleSubmit = (event) => {
  event.preventDefault();

  axios.post('http://localhost:80/smkn2_db/user/save', inputs).then(function(response){
      console.log(response.data);
      navigate('/PPDB');
  }); 
  
  
}



    const[drop, setDrop] = useState(false)
    
    const onDrop = () =>{
      setDrop(!drop)
    }
    return ( 
        <>
          <Nav onDrop={onDrop}/>
          <Dropdown drop={drop}/>
          <div className="background w-full  p-[60px] flex justify-center">
              <form  onSubmit={handleSubmit} action="" className="my-[100px] bg-[#ffff] w-fit py-[20px] px-[30px] rounded-[10px] h-fit">
                 <h1 className="text-[20px] font-bold text-[#ff6000] text-center">Identitas calon peserta didik</h1>
                 <div className="my-[10px]">
                  <label className="mr-[10px] font-semibold text-[#ff6000]">Nama lengkap</label>
                  <input required onChange={handleChange} name="nama_lengkap" type="text" className="border border-[#ff6000] rounded-[10px] border-solid outline-none px-[10px] py-[5px]" />
                 </div>
                  <div className="my-[10px]">
                    <label className="mr-[10px] font-semibold text-[#ff6000]">Jenis kelamin</label>
                    <input required onChange={handleChange} type="radio" id="laki" name="jenis_kelamin" value='laki' />
                    <label htmlFor="laki" className="mr-[10px]">Laki-laki</label>
                    <input required onChange={handleChange} type="radio" id="perempuan" name="jenis_kelamin" value='perempuan' />
                    <label htmlFor="perempuan">Perempuan</label>
                  </div>
                  <div className="my-[10px]">
                    <label className="text-[#ff6000] mr-[10px] font-semibold">NISN</label>
                    <input required onChange={handleChange} name="nisn" type="text" className="border border-[#ff6000] rounded-[10px] py-[5px] px-[10px] border-solid" />
                  </div>
                  <div>
                    <label className="text-[#ff6000] mr-[10px] font-semibold">NIK</label>
                    <input required onChange={handleChange} name="nik" type="text" className="border border-[#ff6000] rounded-[10px] py-[5px] px-[10px] border-solid" />
                  </div>
                  <div className="my-[10px]">
                    <label className="text-[#ff6000] mr-[10px] font-semibold">Tempat lahir</label>
                    <input required onChange={handleChange} name="tempat_lahir" type="text" className="border border-[#ff6000] rounded-[10px] py-[5px] px-[10px] border-solid" />
                  </div>
                  <div className="my-[10px]">
                    <label className="text-[#ff6000] mr-[10px] font-semibold">Tanggal lahir</label>
                    <input required onChange={handleChange} name="tanggal_lahir" type="datetime-local" className="border border-[#ff6000] rounded-[10px] py-[5px] px-[10px] border-solid" />
                  </div>
                  <div className="flex flex-col my-[10px]">
                    <label className="text-[#ff6000] font-semibold">Alamat</label>
                  <textarea  required onChange={handleChange} name="alamat" rows="4" cols="50" className="border border-[#ff6000] rounded-[10px] py-[5px] px-[10px] border-solid"></textarea>
                  </div>
                  <div className="my-[10px]">
                    <label className="text-[#ff6000] font-semibold mr-[10px]">No. HP/WA</label>
                    <input required onChange={handleChange} name="nomor" type="text" className="border border-solid border-[#ff6000] py-[5px] px-[10px] " />
                  </div>
                  <div className="my-[10px]">
                    <label className="text-[#ff6000] font-semibold mr-[10px]">Jurusan</label>
                    <select required onChange={handleChange} name="jurusan" id="jurusan" className="border border-[#ff6000] py-[5px] px-[10px] rounded-[10px] border-solid">
                      <option value="Teknologi Manufaktur & Rekayasa">Teknologi Manufaktur & Rekayasa</option>
                      <option value="Teknologi Informasi">Teknologi Informasi</option>
                      <option value="Seni & Ekonomi Kreatif">Seni & Ekonomi Kreatif</option>
                    </select>
                  </div>
                  <button type="submit" className="my-[10px] border border-[#ff6000] rounded-[10px] py-[5px] px-[10px] text-[#ff6000] font-semibold border-solid">submit</button>
              </form>
          </div> 
        </>
     );
}
 
export default Ppdb;