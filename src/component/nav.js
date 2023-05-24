import { BiMenu } from "react-icons/bi";
import { Fade as Hamburger } from 'hamburger-react'
import logo from '../image/logo.png'


const Nav = ({onDrop}) => {
    return ( 
        <>
            <div className="flex mobile:w-screen flex-row justify-between items-center fixed z-[10] left-0 right-0 py-5 px-5  bg-[#ffff] text-[#FF6000]">
                <div className="flex text-2xl flex-row items-center font-bold">
                  <Hamburger onToggle={onDrop}/>
                </div>
                <img src={logo} alt="" className="w-[60px] laptop:inline-block mobile:hidden h-[60px]" />
                <div>
                    <h1 className="text-2xl mobile:translate-x-[-50px] font-bold">SMKN 2</h1>
                </div>
            </div>
        </>
     );
}
 
export default Nav;