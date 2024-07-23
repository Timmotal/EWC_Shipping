interface ShipmentSecondaryDetailsProps {
  id: string,
  role : string;
  createdBy: string;
  route: string;
  departureDate: string;
}


const ShipmentSecondaryDetails = ({id, role, createdBy, route, departureDate}: ShipmentSecondaryDetailsProps) => {




  return (
    <div className='flex flex-wrap gap-2'>
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

  )
}

export default ShipmentSecondaryDetails
