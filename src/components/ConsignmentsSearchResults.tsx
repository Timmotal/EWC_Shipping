import React from "react";
import ShipmentOriginFlag from "./ShipmentOriginFlag";
// import ShipmentSecondaryDetails from "../ShipmentSecondaryDetails";
import ConsignmentsFound_ShipmentPrimaryDetails from "./consigmentsFound/ConsignmentFound_ShipmentPrimaryDetails";
import { NavLink } from "react-router-dom";

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

        role: 'Importer',
        createdBy: 'MSC',

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

          role: 'Importer',
          createdBy: 'MSC',

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
  
          role: 'Importer',
          createdBy: 'MSC',
  
          departureDate: '10 April, 2023'
        },
        {
          id: '127FIB',
          route: 'PACIFIC',
            origin: {
              country: {
              name: 'Korea',
              city: 'Seoul',
              flag: '/FlagOfKorea.svg',
              }
            },
            destination: {
              country: {
                name: 'China',
                city: 'Shenzhen',
                flag: '/FlagOfChina.png'
              },
            },
    
            role: 'Importer',
            createdBy: 'MSC',
    
            departureDate: '11 September, 2022'
          },

  ];




  return (
    <div
      className={`self-stretch rounded-lg flex flex-col items-start justify-start px-8 pb-5 gap-[20px] max-w-full text-left text-xl
         text-black `}
    >
      
      {shipments.map((shipment) => (
      <ConsignmentsFound_ShipmentPrimaryDetails
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
        route={shipment.route}
        departureDate={shipment.departureDate}

      />
      ))}

      {/* <div className="self-stretch shadow-[0px_1px_5.7px_rgba(16,_24,_40,_0.08)] rounded-lg bg-white-base-ffffff box-border overflow-hidden flex flex-col items-start justify-center py-1.5 pr-0 pl-4 gap-[8px] max-w-full border-[1px] border-solid border-gray-200-e4e7ec">
        <b className="self-stretch relative leading-[28px] mq450:text-base mq450:leading-[22px]">
          ATLANTIC 4321S
        </b>
        <div className="w-[890px] flex flex-row flex-wrap items-center justify-start gap-[16px] max-w-full">
          <ShipmentOriginFlag />
          <div className="flex-1 flex flex-col items-center justify-start py-0 px-1 box-border min-w-[105px]">
            <img
              className="self-stretch h-7 relative rounded-12xs max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <ShipmentOriginFlag />
          <img
            className="h-[18.8px] w-[18.8px] relative rounded-[0.32px] object-contain"
            loading="lazy"
            alt=""
            src="/caretUp.svg"
          />
        </div> */}

        {/* <div className="bg-white-base-ffffff overflow-x-auto flex flex-row items-center justify-center gap-[8px] max-w-full text-lg text-darkslategray font-text-md-l-24-regular">
          {shipments.map((shipment) => (
            <ShipmentSecondaryDetails 
            key={shipment.id} 
            id={shipment.id}
            role={shipment.role} 
            createdBy={shipment.createdBy} 
            route={shipment.route}
            departureDate={shipment.departureDate}
           />
          ))}
        </div> */}
        
      {/* </div> */}
      
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
