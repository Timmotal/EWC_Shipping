import SideBar from '../../../components/Sidebar'
// import RecentlyAddedConsigments from '../../../components/RecentlyAddedConsigments'
// import ConsignmentShippingSearchResult from '../../../components/ConsignmentSearchHeader'
// import ConsignmentsFound from '../../../components/ConsignmentsSearchResults'
// import CustomsDoc from '../../../components/SpecificConsignmentBody'
// import CustomsDocHeader from '../../../components/SpecificConsignmentHeader'
// import TradeCustomsDocumentationDownloadPage from '../../../components/CustomsTradeDoc/TradeCustomsDocumentationDownloadPage'
// import DocNavigation from '../../../components/CustomsTradeDoc/SpecificShipmentHeaderNav'
// import Dependency from '../../../components/CustomsTradeDoc/DependenciesPage'
import ShipmentHeaderNav from '../../../components/ShipmentHeaderNav'
import Shipments from '../../../components/SpecificShipmentsFullPageNoHeaderNav'


const ActiveConsignments = () => {
  return (
    <div className="w-full h-[1624px] relative  overflow-hidden ">
      <div className="absolute flex items-end justify-end bottom-0 right-0  z-[-40]">
    <img className="" src="BackgroundImg.svg" alt="East West Background Image" />
  </div>
    {/* <img
      className="absolute top-[calc(50%_-_330px)] left-[calc(50%_-_111px)] w-[1589.7px] h-[1625.7px] overflow-hidden"
      alt=""
      // src="/compassRose.svg"
    /> */}
    <div className="m-0 absolute top-[46px] left-[calc(50%_-_634px)] w-[1268px] flex flex-row items-start justify-start gap-[20px] max-w-full bg-white z-[1]">
      <SideBar />
      <div className="flex-1 flex flex-col items-start justify-start  md:max-w-full">
       <div>
        
       </div>

      
        
       
        <div className=' shadow-[0px_1px_5.7px_rgba(16,_24,_40,_0.08)] border-[0.5px] border-solid rounded-lg '>

          {/* NEED TO MAKE LOTS OF COMPONENTS */}

        {/* All Shipments/ Specific Shipment/ Dependencies Doc/ Chat Area */}
         <ShipmentHeaderNav />
        <Shipments />

          {/* Active Consignment/ Specific Consignment / Trade & Customs Doc / Chat Area
         <CustomsDocHeader />
        <CustomsDoc /> */}

            {/* UNCOMMENT THE CustomsDoc Component with it's Header to render this */}
            {/* <DocNavigation />
            
        <TradeCustomsDocumentationDownloadPage /> */}
        {/* <Dependency /> */}
        </div>
        {/* <div className="self-stretch flex flex-row items-start justify-start max-w-full text-center text-base py-5">
        <div className="flex-1 relative text-lg inline-block max-w-full text-[#1465B4]">
        Back to all consignments
        </div>
      </div> */}
      </div>
    </div>
  </div>
  )
}

export default ActiveConsignments


