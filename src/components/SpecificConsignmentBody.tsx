// import ShipmentOriginFlag from "./ShipmentOriginFlag";
import ConsignmentsFound_ShipmentPrimaryDetails from "./consigmentsFound/ConsignmentFound_ShipmentPrimaryDetails";
import { NavLink } from "react-router-dom";
import FooterTextNav from "./FooterTextNav";
// import ShipmentSecondaryDetails from "../ShipmentSecondaryDetails"
// import ConsignmentsFound_ShipmentPrimaryDetails from"./.ConsignmentFound_ShipmentPrimaryDetails";

const SpecificConsignmentBody = () => {

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
            name: 'United Kingdom',
            city: 'London',
            flag: 'FlagOfUK.png'
          },
        },

        role: 'Freight Forwarder',
        createdBy: 'TZT Forwarding',

        departureDate: '9 October, 2024'
      },
  ];




  return (
    <div
      className={`self-stretch bg-white rounded-lg flex flex-col items-start justify-start pb-7 px-8 pt-8 gap-[20px] max-w-full text-left text-xl text-black `}
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
        departureDate={shipment.departureDate}

      />
      ))}




     <NavLink to="/tradecustomsdocumentationpage" >
      <div className="self-stretch flex flex-col items-start justify-start gap-7 pt-7 ">
                <div className="self-stretch flex flex-col items-start justify-start gap-2 ">
                  <div className="self-stretch flex flex-row items-start justify-end">
                    <b className="flex-1 relative text-2xl">
                      Trade and Customs Documentation
                    </b>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end">
                    <div className="flex-1 relative text-base">
                      Find all your documentation in one place
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start  justify-start gap-2 text-lg">
                  <div className="self-stretch rounded-lg bg-[#F2F4F7] overflow-hidden flex flex-row items-center justify-start p-2 text-base border-[1px] border-solid">
                    <div className="flex-1 flex flex-row items-start justify-center">
                      <div className="flex-1 relative text-base">
                        Document type
                      </div>
                      <div className="flex-1 relative text-base">
                        Last Update
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch shadow-[0px_1px_5.7px_rgba(16,_24,_40,_0.08)] rounded-lg overflow-hidden flex flex-row items-center justify-start p-2 gap-12 border-[1px] border-solid">
                    <div className="w-[401px] rounded bg-[#ECF4FC] box-border overflow-hidden shrink-0 flex flex-row items-center justify-start p-2 gap-[6px border-[1px] border-solid">
                      <div className="flex flex-row items-center justify-start">
                        <div className="flex flex-row items-start justify-start">
                          <img
                            className="w-6 relative h-6"
                            alt=""
                            src="/iconfile.svg"
                          />
                        </div>
                      </div>
                      <div className="relative text-lg">
                        Rules of Origin Certificate
                      </div>
                    </div>
                    <div className="relative leading-[24px]">
                      <span>{`12 March, 15:06 PM GMT +00:00, by `}</span>
                      <span className="text-[#0354A6]">
                        David
                      </span>
                    </div>
                  </div>
                  <div className="self-stretch shadow-[0px_1px_5.7px_rgba(16,_24,_40,_0.08)] rounded-lg overflow-hidden flex flex-row items-center justify-start p-2 gap-[50px] border-[1px] border-solid">
                    <div className="w-[401px] rounded bg-[#ECF4FC] box-border overflow-hidden shrink-0 flex flex-row items-center justify-start p-2 gap-[6px] border-[1px]">
                    <div className="flex flex-row items-center justify-start">
                        <div className="flex flex-row items-start justify-start">
                          <img
                            className="w-6 relative h-6"
                            alt=""
                            src="/iconfile.svg"
                          />
                        </div>
                      </div>
                      <div className="relative text-lg]">
                        Transport and Customs Documentation
                      </div>
                      <img className="w-4 relative h-4 hidden" alt="" />
                    </div>
                    <div className="relative text-lg">
                      <span>{`12 March, 16:21 PM GMT +00:00, by `}</span>
                      <span className="text-[#0354A6]">
                        David
                      </span>
                    </div>
                  </div>
                </div>

                <div className="self-stretch relative text-base text-[#1465B4] text-center">
                  See all documentation
                </div>
              </div>
              </NavLink>

      {/* MESSAGING SECTION */}
      
      <div className="self-stretch flex flex-col items-start justify-start gap-2">
                <div className="self-stretch flex flex-row items-start justify-end">
                  <b className="flex-1 relative text-2xl">Messages</b>
                </div>
                <div className="self-stretch flex flex-row items-start justify-end text-base">
                  <div className="flex-1 relative text-base text-[#363535]">
                    See what people are talking about
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[0px_1px_5.7px_rgba(16,_24,_40,_0.08)] rounded-lg overflow-hidden flex flex-col items-start justify-center p-4 gap-[16px] text-lg border-[1px] border-solid">
                <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                  <div className="flex flex-row items-center justify-start gap-[16px]">
                    <div className="w-16 rounded-full h-16 overflow-hidden  box-border relative gap-[6px] bg-[url('/public/chip@3x.png')] bg-cover bg-no-repeat bg-[center]">
                      {/* USER CHAT IMAGE LEFT SIDE */}
                    </div>
                    <div className="flex flex-col items-start justify-center rounded-[1.25rem] p-3 gap-[8px] text-sm bg-[#F2F4F7]">
                      <div className="flex flex-row items-center justify-start gap-[4px]">
                        <div className="relative text-lg font-semibold text-black">
                          Suzi Wan
                        </div>
                        <div className="w-[130px] rounded box-border h-7 overflow-hidden bg-[#FCFCFD] shrink-0 flex flex-row items-center justify-center py-1 px-2 relative gap-[6px] border-[1px]">
                        
                          <div className="relative text-sm font-medium z-[1]">
                            COSCO Shipping
                          </div>
                         
                        </div>
                        <div className="rounded bg-[#FCFCFD] box-border h-7 overflow-hidden flex flex-row items-center justify-center py-1 px-2 relative gap-[6px] border-[1px] border-solid ">
                          
                          <div className="relative font-medium z-[1]">
                            Logistics Coordinator
                          </div>
                         
                        </div>
                      </div>
                      <div className="relative text-lg">
                        <p className="[margin-block-start:0] [margin-block-end:8px]">
                          <span className="text-[#1465B4] text-lg">@Here</span>
                          <span className="text-black">{` Updated vessel name in `}</span>
                          <span className="text-[#1465B4]">Transport and Customs Documentation</span>
                          <span className="text-black">{`, `}</span>
                        </p>
                        <p className="m-0 text-black">
                          as I did it wrong before.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 relative text-lg text-[#7A7F89] text-right">
                    16:21 PM
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-end gap-[16px]">
                  <div className="flex-1 relative text-lg text-[#7A7F89]">16:21 PM</div>
                  <div className="rounded-xl bg-[#F2F4F7] flex flex-col items-start justify-center p-3 gap-[8px] text-sm">
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <div className="relative text-lg  font-semibold text-black">
                        Mark James
                      </div>
                      <div className="w-[130px] rounded bg-[#FCFCFD] box-border h-7 overflow-hidden shrink-0 flex flex-row items-center justify-center py-1 px-2 relative gap-[6px] border-[1px] border-solid border-gray-200-e4e7ec">
                        
                        <div className="relative leading-[20px] font-medium z-[1]">
                          TZT Forwarding
                        </div>
                      </div>
                      <div className="rounded box-border h-7 overflow-hidden flex flex-row bg-[#FCFCFD] items-center justify-center py-1 px-2 relative gap-[6px] border-[1px] border-solid">
                        
                        <div className="relative font-medium z-[1]">
                          Ops Manager
                        </div>
                      </div>
                    </div>
                    <div className="relative text-lg text-black">
                      <span>{`Looks good except vessel in B/L. `}</span>
                      <span className="text-[#1465B4]">
                        @Suzi
                      </span>
                      <span> pls update</span>
                    </div>
                  </div>
                  <div className="w-16 rounded-full h-16 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border relative gap-[6px] bg-[url('/public/User2.png')] bg-cover bg-no-repeat bg-[top]  ">
                  {/* USER CHAT PICTURE RIGHT SIDE */}
                  </div>
                </div>
                <div className="self-stretch bg-[#F2F4F7] rounded-lg bg-color-border-gray-subtle-300 flex flex-row items-center justify-start p-2 gap-[10px]">
                  <img
                    className="w-8 relative h-8"
                    alt=""
                    src="/iconpaperclip.svg"
                  />
                  <div className="flex-1 relative leading-[24px]">
                    Write a message...
                  </div>
                  <img
                    className="w-8 relative h-8"
                    alt=""
                    src="/iconpaperplaneright.svg"
                  />
                </div>
              </div>
      
      <FooterTextNav
        pageLinkURL={"/activeconsigments"}
        pageLinkText={"Back to all consignments"} 
      />
    </div>
  );
};

export default SpecificConsignmentBody;
