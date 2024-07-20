// import React from 'react'
import Sidebar from '../../../components/Sidebar'
// import WelcomeUserBanner from '../../../components/WelcomeUserBanner'
// import RecentlyAddedConsigments from '../../../components/RecentlyAddedConsigments'
import ConsignmentSearchHeader from '../../../components/ConsignmentSearchHeader'
import ConsignmentsSearchResults from '../../../components/ConsignmentsSearchResults'
// import {compassRose} from "../../assets/compasse-rose.svg"

const CosignmentSearchPage = () => {
  return (
    <div className="w-full h-[1224px] relative  overflow-hidden ">
      
      <div className="absolute flex items-end justify-end bottom-0 right-0  z-[-40]">
    <img className="" src="BackgroundImg.svg" alt="East West Background Image" />
 </div>
    <div className="m-0 absolute top-[46px] left-[calc(50%_-_634px)] w-[1268px] flex flex-row items-start justify-start gap-[20px] max-w-full z-[1]">
      <Sidebar />
      <div className=" bg-white flex-1 flex flex-col items-start justify-start  md:max-w-full">

        
        <div className=' shadow-[0px_1px_5.7px_rgba(16,_24,_40,_0.08)] border-[0.5px] border-solid rounded-lg '>
        <ConsignmentSearchHeader />
        <ConsignmentsSearchResults />
        </div>
      </div>
    </div>
  </div>
  )
}

export default CosignmentSearchPage


