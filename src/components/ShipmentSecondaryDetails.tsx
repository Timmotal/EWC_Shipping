// const Pin = ({ pin: {postedBy, image, _id, destination, save }}) => {
const ShipmentSecondaryDetails = ({id, role, createdBy, route, departureDate}) => {


  // key={shipment.id} 
  // role={shipment.role} 
  // createdBy={shipment.createdBy} 
  // route={shipment.route}
  // departureDate={shipment.departureDate}

  return (
    <div className='flex gap-2'>
      <div className="bg-[#FCFCFD] min-w-44 rounded-lg box-border shrink-0 flex flex-row items-center justify-start py-3.5 px-2 gap-[8px] border-[1px] border-solid">
            <div className="relative  inline-block sm:min-w-[81px]">
              Your Role:
            </div>
            <div className="flex-1 rounded bg-[#F2F4F7] overflow-hidden flex flex-row items-center justify-center py-0.5 px-[7px] gap-[6px]  border-[1px] border-solid ">
              <div className="relative text-sm font-medium inline-block min-w-[58px]">
                {role}
              </div>
            </div>
          </div>

          {/* partifition */}
          <div className="bg-[#FCFCFD] min-w-44 rounded-lg box-border shrink-0 flex flex-row items-center justify-start py-3.5 px-2 gap-[8px] border-[1px] border-solid">
            <div className="relative  inline-block sm:min-w-[81px]">
              Created By:
            </div>
            <div className="flex-1 rounded bg-[#F2F4F7] overflow-hidden flex flex-row items-center justify-center py-0.5 px-[7px] gap-[6px]  border-[1px] border-solid ">
              <div className="relative text-sm font-medium inline-block min-w-[58px]">
                {createdBy}
              </div>
            </div>
          </div>

          <div className="bg-[#FCFCFD] min-w-44 rounded-lg box-border shrink-0 flex flex-row items-center justify-start py-3.5 px-2 gap-[8px] border-[1px] border-solid">
            <div className="relative  inline-block sm:min-w-[81px]">
              Vehicle/Voyage
            </div>
            <div className="flex-1 rounded bg-[#F2F4F7] overflow-hidden flex flex-row items-center justify-center py-0.5 px-[7px] gap-[6px]  border-[1px] border-solid ">
              <div className="relative text-sm font-medium inline-block min-w-[58px]">
              {`${route} ${id}`}
              </div>
            </div>
          </div>

          <div className="bg-[#FCFCFD]  min-w-44 rounded-lg box-border shrink-0 flex flex-row items-center justify-start py-3.5 px-2 gap-[8px] border-[1px] border-solid">
            <div className="relative  inline-block sm:min-w-[81px]">
              Departure:
            </div>
            <div className="flex-1 rounded bg-[#F2F4F7] overflow-hidden flex flex-row items-center justify-center py-0.5 px-[7px] gap-[6px]  border-[1px] border-solid ">
              <div className="relative text-sm font-medium inline-block min-w-[58px]">
                {departureDate}
              </div>
            </div>
          </div>
    </div>
  //   <div
  //   className={`rounded-lg bg-gray-50-fcfcfd flex flex-row items-center justify-start py-3.5 px-2 gap-[8px] text-left text-lg text-darkslategray font-text-md-l-24-regular border-[1px] border-solid border-gray-200-e4e7ec `}
  // >
  //   <div className="relative leading-[24px] inline-block min-w-[100px]">
  //     createdBy
  //   </div>
  //   <div className="w-12 rounded bg-color-border-gray-subtle-300 box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-0.5 px-[7px] relative gap-[6px] text-sm text-color-text-gray-subtle-100 border-[1px] border-solid border-gray-200-e4e7ec">
      
  //     <div className="relative leading-[20px] font-medium inline-block min-w-[32px]">
  //       diff
  //     </div>
  //   </div>
  // </div>
  )
}

export default ShipmentSecondaryDetails
