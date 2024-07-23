
interface ShipmentOriginFlagProps {
  country: string;
  city: string;
  countryFlag: string; // Adjust types as needed
  transportType: string;
}


const ShipmentOriginFlag = ({ country, city, countryFlag, transportType }: ShipmentOriginFlagProps) => {

  return (
    <div
    className={`rounded-lg flex flex-row items-center justify-start py-3.5 pr-[19px] pl-[15px] gap-[16px] bg-[#FCFCFD] border-[1px] border-solid`}
  
  >
    <div className="relative text-2xl ">
      {transportType}
    </div>
    <div className="rounded overflow-hidden flex w-44 flex-row items-center justify-center py-0.5 px-[7px] gap-[6px] text-sm bg-[#F2F4F7]   border-[1px]">
      <div className="flex flex-row items-center justify-start">
        <div className="flex flex-col items-start justify-start">
          <img
            className="w-6 h-4 relative rounded-sm overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src={countryFlag}
          />
        </div>
      </div>
      <div className="relative  leading-[20px] font-medium inline-block min-w-[109px]">
        {`${city}, ${country} `}
      </div>
    </div>
  </div>
  )
}

export default ShipmentOriginFlag
