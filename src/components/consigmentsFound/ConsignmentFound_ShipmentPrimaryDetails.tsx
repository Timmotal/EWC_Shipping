import ShipmentSecondaryDetails from '../ShipmentSecondaryDetails'
import ShipmentOriginFlag from '../ShipmentOriginFlag';
// import { useState } from 'react';

// type Props = {}
interface ConsignmentsFound_ShipmentPrimaryDetailsProps {
  id: string;
  route: string;
  originCountry: string;
  originCity: string;
  originCountryFlag: string;
  destinationCountry: string;
  destinationCity: string;
  destinationCountryFlag: string;
  role: string;
  createdBy: string;
  departureDate: string;
}


const ConsignmentsFound_ShipmentPrimaryDetails = (
    {
    id, 
    route, 
    originCountry, 
    originCity, 
    originCountryFlag, 
    destinationCountry, 
    destinationCity, 
    destinationCountryFlag,
    role,
    createdBy,
    departureDate,
}: ConsignmentsFound_ShipmentPrimaryDetailsProps
) => {


  return (
    <div className="self-stretch rounded-lg box-border overflow-hidden flex flex-col items-start justify-center py-1.5 pr-0 pl-4 gap-[16px] max-w-full">
    
        <div className=" flex flex-row flex-wrap items-center justify-start gap-[16px] max-w-full text-5xl text-darkslategray">
          <ShipmentOriginFlag
            key={id}
            transportType={"Origin"}
            country={originCountry}
            city={originCity}
            countryFlag={originCountryFlag}
          />
          <div className="flex-1 flex flex-col items-center justify-start py-0 px-1 box-border min-w-[105px]">
            <img
              className="  relative overflow-hidden "
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <ShipmentOriginFlag 
          key={id}
          transportType={"Destination"}
          city={destinationCity}
          country={destinationCountry}
          countryFlag={destinationCountryFlag}
          />

      </div>
      
      <div className="overflow-x-auto flex flex-col items-center justify-center gap-[8px] max-w-full text-lg">

        <ShipmentSecondaryDetails
          key={id}
          id={id}
          role={role}
          createdBy={createdBy}
          route={route}
          departureDate={departureDate}
        />
      </div>

      </div>
  )
}

export default ConsignmentsFound_ShipmentPrimaryDetails

