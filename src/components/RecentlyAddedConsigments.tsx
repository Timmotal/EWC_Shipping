// import ShipmentOriginFlag from "./ShipmentOriginFlag";
// import ShipmentSecondaryDetails from "./ShipmentSecondaryDetails";
import ShipmentPrimaryDetails from "./ShipmentPrimaryDetails";
import { NavLink } from "react-router-dom";

const RecentlyAddedConsigments = () => {

  const shipments = [
    {
      id: '4321S',
      route: 'PACIFIC',
        origin: {
          country: {
          name: 'China',
          city: 'Shanghai',
          flag: '/FlagOfChina.svg',
          }
        },
        destination: {
          country: {
            name: 'United Kingdom',
            city: 'London',
            flag: '/FlagOfUK.png'
          },
        },
        role: 'Freight Forwarder',
        createdBy: 'TZT Forwarding',
        departureDate: '2024-10-09'
      },
      {
        id: '93217',
        route: 'ATLANTIC',
        origin: {
          country: {
            name: 'Korea',
            city: 'Seoul',
            flag: '/FlagOfKorea.png' 
          }
        },
        destination: {
          country: {
            name: 'France',
            city: 'Le Havre',
            flag: 'FlagOfFrance.png' 
          }
        },
   
          role: 'Freight Forwarder',
          createdBy: 'TZT Forwarding',
         
          departureDate: '2024-10-09'
   
      }

  ];




  return (
    <div
      className={`self-stretch shadow-[0px_1px_5.7px_rgba(16,_24,_40,_0.08)] rounded-lg mb-20 box-border flex flex-col items-start justify-start pt-[31px] px-[31px] pb-[19px] gap-[20px] max-w-full text-left text-xl text-black  border-[0.5px] border-solid  `}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-13xl">
        <div className="self-stretch flex flex-row items-start justify-end max-w-full">
          <h2 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[40px] font-bold font-inherit inline-block max-w-full mq900:text-7xl mq900:leading-[32px] mq450:text-lgi mq450:leading-[24px]">{`Recently Added Consignments `}</h2>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end max-w-full text-base text-darkslategray font-text-md-l-24-regular">
          <div className="flex-1 relative leading-[24px] inline-block max-w-full">
            See your recently added consignments
          </div>
        </div>
      </div>
      {shipments.map((shipment) => (
      <ShipmentPrimaryDetails
        key={shipment.id}
        id={shipment.id}
        route={shipment.route}

        originCountry={shipment.origin.country.name}
        originCity={shipment.origin.country.city}
        originCountryFlag={shipment.origin.country.flag}

        
        destinationCountry={shipment.destination.country.name}
        destinationCity={shipment.destination.country.city}
        destinationCountryFlag={shipment.destination.country.flag}

        role={shipment.role} 
        createdBy={shipment.createdBy} 
        departureDate={shipment.departureDate}

      />
      ))}


      
      <div className="self-stretch flex flex-row items-start justify-start max-w-full text-center text-base text-info-400-1465b4 font-text-md-l-24-regular">
        <div className="flex-1 relative text-lg inline-block max-w-full text-[#1465B4]">
          <NavLink to="consignments">
          See all active consignments
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default RecentlyAddedConsigments;
