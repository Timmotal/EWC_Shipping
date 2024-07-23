import { NavLink } from 'react-router-dom';
import ShipmentOriginFlag from './ShipmentOriginFlag'
import ShipmentSecondaryDetails from './ShipmentSecondaryDetails'

interface ShipmentPrimaryDetailsProps {
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



const ShipmentPrimaryDetails = (
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
}: ShipmentPrimaryDetailsProps
) => {


  return (
    <NavLink to="/specificconsignmentpage">
    <div className="self-stretch shadow-[0px_1px_5.7px_rgba(16,_24,_40,_0.08)] rounded-lg box-border overflow-hidden flex flex-col items-start justify-center py-1.5 pr-0 pl-4 gap-[16px] max-w-full border-[1px] border-solid">
        <b className="self-stretch relative">
            {`${route} ${id}`}
        </b>
        <div className=" flex flex-row flex-wrap bg-re items-center justify-start gap-[16px] max-w-full text-5xl">
          <ShipmentOriginFlag
            // id={id}
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
      
      <div className=" overflow-x-auto flex flex-row items-center justify-center gap-[8px] max-w-full text-lg">

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
      </NavLink>
  )
}

export default ShipmentPrimaryDetails

