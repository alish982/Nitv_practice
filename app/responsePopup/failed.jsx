import Image from 'next/image'
import failed from '../../public/failed.png'

function Failed(){
    return(
         <div className = "flex flex-row absolute bottom-10 right-7 box-border border-none w-[399px] h-88 border-2 p-6 rounded bg-[#F6F6F6]">
            <div className = "p-2" > 
              <Image className = "mt-1" src= {failed} alt = "" height = "31" width = "31"/>
            </div>
            <div className = "p-2">
            <p className = "text-[#191D23] text-opacity-70 font-bold">
              Something went wrong!
            </p>
            <p className = "text-sm text-[#191D23] text-opacity-40">
              failed
            </p>
            </div>
           </div> 
    )
}

export default Failed