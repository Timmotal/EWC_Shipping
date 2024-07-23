import SideBar from '../../../components/Sidebar'

import ShipmentHeaderNav from '../../../components/ShipmentHeaderNav'
import Shipments from '../../../components/SpecificShipmentsFullPageNoHeaderNav'


const ActiveConsignments = () => {
  return (
    <div className="w-full h-[1624px] relative  overflow-hidden ">
      <div className="absolute flex items-end justify-end bottom-0 right-0  z-[-40]">
    <img className="" src="BackgroundImg.svg" alt="East West Background Image" />
  </div>
 
    <div className="m-0 absolute top-[46px] left-[calc(50%_-_634px)] w-[1268px] flex flex-row items-start justify-start gap-[20px] max-w-full bg-white z-[1]">
      <SideBar />
      <div className="flex-1 flex flex-col items-start justify-start  md:max-w-full">
       <div>
        
       </div>

      
        
       
        <div className=' shadow-[0px_1px_5.7px_rgba(16,_24,_40,_0.08)] border-[0.5px] border-solid rounded-lg '>


         <ShipmentHeaderNav />
        <Shipments />

     
        </div>
 
      </div>
    </div>
  </div>
  )
}

export default ActiveConsignments


