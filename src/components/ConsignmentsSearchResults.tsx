import { NavLink } from "react-router-dom";
import ShipmentPrimaryDetails from "./ShipmentPrimaryDetails";

const ConsignmentsSearchResults = () => {

  const shipments = [
    {
      id: '4321S',
      route: 'PACIFIC',
        origin: {
          country: {
          name: 'Korea',
          city: 'Seoul',
          flag: '/FlagOfKorea.png',
          }
        },
        destination: {
          country: {
            name: 'France',
            city: 'Le Havre',
            flag: 'FlagOfFrance.png'
          },
        },

        role: 'Freight Forwarder',
        createdBy: 'TZT Forwarding',

        departureDate: '9 October, 2024'
      },
      {
        id: '93217',
        route: 'ATLANTIC',
        origin: {
          country: {
            name: 'France',
            city: 'Le Havre',
            flag: 'FlagOfFrance.png' 
          }
        },
        destination: {
          country: {
            name: 'Korea',
            city: 'Seoul',
            flag: '/FlagOfKorea.png' 
          }
        },

          role: 'Freight Forwarder',
          createdBy: 'TZT Forwarding',

          departureDate: '9 March, 2023'

      },
      {
        id: '420B',
        route: 'ANARTICA',
          origin: {
            country: {
            name: 'China',
            city: 'Shenzhen',
            flag: '/FlagOfChina.svg',
            }
          },
          destination: {
            country: {
              name: 'Korea',
              city: 'Seoul',
              flag: '/FlagOfKorea.png'
            },
          },
  
          role: 'Freight Forwarder',
          createdBy: 'TZT Forwarding',
  
          departureDate: '10 April, 2023'
        },
        {
          id: '127FIB',
          route: 'PACIFIC',
            origin: {
              country: {
              name: 'Korea',
              city: 'Seoul',
              flag: '/FlagOfKorea.png'
              }
            },
            destination: {
              country: {
                name: 'China',
                city: 'Shenzhen',
                flag: '/FlagOfChina.svg',
              },
            },
    
            role: 'Freight Forwarder',
            createdBy: 'TZT Forwarding',
    
            departureDate: '11 September, 2022'
          },

  ];




  return (
    <div
      className={`self-stretch rounded-lg flex flex-col items-start justify-start px-8 pb-5 gap-[20px] max-w-full text-left text-xl
         text-black `}
    >
      
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



      
      <div className="self-stretch flex flex-row items-start justify-start max-w-full text-center text-base">
        <div className="flex-1 relative text-lg inline-block max-w-full text-[#1465B4]">
          <NavLink to="/activeconsignment">
          See all active consignments
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ConsignmentsSearchResults;
