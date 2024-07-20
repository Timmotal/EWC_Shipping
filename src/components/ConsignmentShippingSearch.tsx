import React from 'react'

const ConsignmentShippingSearch = () => {
  return (
    <div
      className={`self-stretch shadow-[0px_1px_5.7px_rgba(16,_24,_40,_0.08)] rounded-lg  box-border flex flex-col items-start justify-start p-[31px] gap-[32px] max-w-full text-left text-[#0B0101]  border-[0.5px] border-solid  `}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
          <h2 className="m-0 flex-1 relative text-inherit sm:text-[2rem] text-2xl  tracking-[-0.02em] leading-[40px] font-bold  inline-block max-w-full ">
            Consignment and Shipping Search
          </h2>

       
          <div className="flex-1 relative leading-[24px] inline-block max-w-full">
            Find a specific consignement or shipping
          </div>
      
      </div>


      <div className="self-stretch flex flex-row items-start justify-start gap-[20px] top-[0] z-[99] max-w-full text-base ">
        <div className="flex-1 flex flex-col items-start justify-center py-0.5 px-0 box-border max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start relative gap-[4px] max-w-full">
        
            <div className="self-stretch rounded-md bg-[#F2F4F7] box-border overflow-hidden flex flex-row items-center justify-start max-w-full text-sm  border-[1px] border-solid ">
              <div className="flex-1 flex flex-row items-center justify-start py-1.5 px-3 box-border relative gap-[8px] max-w-full">
                  <div className="relative leading-[20px] text-[#ABB1BA]">
                    Search Carrier Booking Number
                  </div>
                
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-2 px-[43px] bg-[#0354A6] rounded-md flex flex-row items-center justify-center relative gap-[8px]">
      
          <div className="relative text-sm font-medium text-white text-left inline-block min-w-[47px]">
            Search
          </div>
         
        </button>
      </div>
    </div>
  )
}

export default ConsignmentShippingSearch
