//  import SideBar from "../SidebarMenu.tsx";
import { NavLink } from "react-router-dom";
import ConsignementFile from "./Shipments/ConsignementFile";

const TradeCustomsDocumentationBody = () => {

  const tradeCustomsFiles = [
    {
      id: 1,
      docType: "Packing List",
      docVersion: 2,
      docOrg: " Chem Corp"
    },
    {
      id: 2,
      docType: "Customs Transit Document (T1)",
      docVersion: 2,
      docOrg: "TZT Forwarding "
    },
    {
      id: 3,
      docType: "Commercial Invoice",
      docVersion: 3,
      docOrg: " Chem Corp"
    },
    {
      id: 4,
      docType: "Bill of Lading",
      docVersion: 2,
      docOrg: "COSCO Shipping"
    },
    {
      id: 5,
      docType: "Customs Export Declaration",
      docVersion: 1,
      docOrg: " Chem Corp"
    },
    {
      id: 6,
      docType: "In Land Proof of Delivery (POD",
      docVersion: 2,
      docOrg: "Eddie Stobart"
    },
    
  ];

  return (
    <>
    <NavLink to="/">
    <div className="self-stretch rounded-lg flex flex-col items-start justify-start pt-8 px-8 pb-8 gap-[20px] max-w-full">
    <div className="self-stretch flex flex-col items-start justify-start max-w-full text-[2rem] ">
              <div className="flex flex-col items-start justify-center max-w-full">
                <h1 className="m-0 relative text-inherit tracking-[-0.02em] font-bold ">
                  Trade and Customs Documentation
                </h1>
                <div className="relative text-[1rem] leading-6 font-text-md-l-24-regular text-darkslategray">
                  Find all your documentation in one place
                </div>
              </div>
            </div>

            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
              <div className="self-stretch rounded-lg bg-[#F2F4F7] box-border overflow-hidden flex flex-row items-center justify-start py-[0.375rem] px-[0.437rem] max-w-full text-color-text-gray-subtle-100 border-[1px] border-solid border-gray-200-e4e7ec">
                <div className="flex-1 flex flex-row flex-wrap items-start justify-start py-[0rem] pr-[6.75rem] pl-[0rem] box-border max-w-full [row-gap:20px]">
                  <div className="w-[13.175rem] relative leading-6 inline-block shrink-0">
                    Document type
                  </div>
                  <div className="w-[7.506rem] relative leading-6 inline-block shrink-0">
                    Version
                  </div>
                  <div className="flex-1 relative leading-6 inline-block min-w-[5rem]">
                    Last Modified
                  </div>
                  <div className="w-[11.85rem] relative leading-6 inline-block shrink-0">
                    Organization
                  </div>
                  <div className="relative leading-6 inline-block min-w-[3.063rem]">
                    Action
                  </div>
                </div>
              </div>
              {/* <div className="self-stretch shadow-[0px_1px_5.7px_rgba(16,_24,_40,_0.08)] rounded-lg overflow-hidden flex flex-row items-center justify-between py-[0.375rem] pr-[3.187rem] pl-[0.5rem] gap-[1.25rem] border-[1px] border-solid">
                <div className="w-[10.75rem] rounded box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-[0.375rem] px-[0.437rem] gap-[0.375rem] border-[1px] border-solid">
                <div className="flex flex-row items-center justify-start">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="h-[1.5rem] w-[1.5rem] relative"
                        loading="lazy"
                        alt=""
                        src="/iconfile.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 relative leading-[1.25rem]">
                    Packing List
                  </div>
                  
                </div>
                <div className="w-[2.556rem] relative leading-[1.25rem] flex items-center shrink-0">
                  3
                </div>
                <div className="w-44 relative flex items-center shrink-0">
                  <span className="w-full">
                    <span>{`12 March, 15:06 PM GMT +00:00, by `}</span>
                    <span className="text-color-border-primary-bold-100">
                      David
                    </span>
                  </span>
                </div>
                <div className="rounded overflow-hidden flex flex-row items-center justify-center py-[0.125rem] px-[1.625rem] relative gap-[0.375rem] text-[0.875rem] text-color-text-gray-subtle-100 border-[1px] border-solid border-gray-200-e4e7ec">
                  <div className="h-6 !m-[0] absolute top-[0.25rem] left-[0.5rem] hidden flex-row items-center justify-start z-[0]">
                    <div className="flex flex-col items-start justify-start">
                      <img
                        className="w-6 h-[1rem] relative rounded-sm overflow-hidden shrink-0 object-cover"
                        alt=""
                        src="/flagkr--korea-south@2x.png"
                      />
                    </div>
                  </div>
                  <div className="relative  font-medium inline-block min-w-20">
                    Chem Corp
                  </div>
                  
                </div>
                <button className="cursor-pointer py-0 px-2 rounded overflow-hidden flex flex-row items-center justify-center gap-[0.375rem] border-[1px] border-solid">
                  <div className="flex flex-row items-center justify-start">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="h-6 w-6 relative"
                        alt=""
                        src="/downloadIcon.svg"
                      />
                    </div>
                  </div>
                  <div className="relative text-[0.875rem] leading-[1.25rem] font-medium font-text-md-l-24-regular text-color-text-gray-subtle-100 text-left inline-block min-w-[4.188rem]">
                    Download 1
                  </div>
                  <img
                    className="h-[1rem] w-[1rem] relative hidden"
                    alt=""
                    src="/downloadIcon.svg"
                  />
                </button>
              </div> */}

{tradeCustomsFiles.map((tradeCustomsFile) => (
      <ConsignementFile
        key={tradeCustomsFile.id}
        // id={tradeCustomsFile.id}
        docType={tradeCustomsFile.docType}
        docVersion={tradeCustomsFile.docVersion}
        docOrg={tradeCustomsFile.docOrg}


      />
      ))}

              {/* <ConsignementFile
                label="Customs Transit Document (T1)"
                iconX="/downloadIcon.svg"
                prop="3"
                flagKRKoreaSouth="/flagkr--korea-south-1@2x.png"
                label1="TZT Forwarding "
                iconX1="/downloadIcon.svg"
                iconX2="/downloadIcon.svg"
              /> */}
              {/* <ConsignementFile
                label="Commercial Invoice"
                iconX="/downloadIcon.svg"
                prop="1.2"
                flagKRKoreaSouth="/flagkr--korea-south-2@2x.png"
                label1="Chem Corp"
                iconX1="/downloadIcon.svg"
                iconX2="/downloadIcon.svg"
              /> */}
              {/* <div className="self-stretch shadow-[0px_1px_5.7px_rgba(16,_24,_40,_0.08)] rounded-lg bg-white-base-ffffff overflow-hidden flex flex-row items-center justify-between py-[0.375rem] pr-[3.187rem] pl-[0.5rem] gap-[1.25rem] text-[0.875rem] border-[1px] border-solid border-gray-200-e4e7ec mq825:flex-wrap">
                <button className="cursor-pointer py-[0.375rem] px-[0.437rem] bg-color-background-primary-subtle-300 w-[10.75rem] rounded box-border overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[0.375rem] border-[1px] border-solid border-color-border-primary-subtle-300">
                  <div className="flex flex-row items-center justify-start">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="h-6 w-6 relative"
                        alt=""
                        src="/iconfile.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 relative text-[1rem] leading-[1.25rem] font-text-md-l-24-regular text-black text-left">
                    Bill of Lading
                  </div>
                  <img
                    className="h-[1rem] w-[1rem] relative hidden"
                    alt=""
                    src="/downloadIcon.svg"
                  />
                </button>
                <div className="w-[2.556rem] relative leading-[1.25rem] flex items-center shrink-0">
                  1.1
                </div>
                <div className="w-[10.675rem] relative text-[1rem] leading-[1.25rem] flex items-center shrink-0">
                  <span className="w-full">
                    <span>{`12 March, 15:06 PM GMT +00:00, by `}</span>
                    <span className="text-color-border-primary-bold-100">
                      David
                    </span>
                  </span>
                </div>
                <div className="rounded bg-gray-50-fcfcfd overflow-hidden flex flex-row items-center justify-center py-[0.125rem] px-[0.437rem] relative gap-[0.375rem] text-color-text-gray-subtle-100 border-[1px] border-solid border-gray-200-e4e7ec">
                  <div className="h-6 !m-[0] absolute top-[0.25rem] left-[0.5rem] hidden flex-row items-center justify-start z-[0]">
                    <div className="flex flex-col items-start justify-start">
                      <img
                        className="w-6 h-[1rem] relative rounded-sm overflow-hidden shrink-0 object-cover"
                        alt=""
                        src="/flagkr--korea-south-3@2x.png"
                      />
                    </div>
                  </div>
                  <div className="relative leading-[1.25rem] font-medium inline-block min-w-[7.125rem]">
                    COSCO Shipping
                  </div>
                  <img
                    className="h-[1rem] w-[1rem] relative hidden z-[2]"
                    alt=""
                    src="/downloadIcon.svg"
                  />
                </div>
                <button className="cursor-pointer py-[0rem] px-[0.437rem] bg-color-border-gray-subtle-300 rounded overflow-hidden flex flex-row items-center justify-center gap-[0.375rem] border-[1px] border-solid border-gray-200-e4e7ec">
                  <div className="flex flex-row items-center justify-start">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="h-6 w-6 relative"
                        alt=""
                        src="/downloadIcon.svg"
                      />
                    </div>
                  </div>
                  <div className="relative text-[0.875rem] leading-[1.25rem] font-medium font-text-md-l-24-regular text-color-text-gray-subtle-100 text-left inline-block min-w-[4.188rem]">
                    Download
                  </div>
                  <img
                    className="h-[1rem] w-[1rem] relative hidden"
                    alt=""
                    src="/downloadIcon.svg"
                  />
                </button>
              </div> */}
              {/* <div className="self-stretch shadow-[0px_1px_5.7px_rgba(16,_24,_40,_0.08)] rounded-lg bg-white-base-ffffff overflow-hidden flex flex-row items-center justify-between py-[0.375rem] pr-[3.187rem] pl-[0.5rem] gap-[1.25rem] text-[0.875rem] border-[1px] border-solid border-gray-200-e4e7ec mq825:flex-wrap">
                <button className="cursor-pointer py-[0.375rem] px-[0.437rem] bg-color-background-primary-subtle-300 w-[10.75rem] rounded box-border overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[0.375rem] border-[1px] border-solid border-color-border-primary-subtle-300">
                  <div className="flex flex-row items-center justify-start">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="h-6 w-6 relative"
                        alt=""
                        src="/iconfile.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 relative text-[1rem] leading-[1.25rem] font-text-md-l-24-regular text-black text-left">
                    Customs Export Declaration
                  </div>
                  <img
                    className="h-[1rem] w-[1rem] relative hidden"
                    alt=""
                    src="/downloadIcon.svg"
                  />
                </button>
                <div className="w-[2.556rem] relative leading-[1.25rem] flex items-center shrink-0">
                  1
                </div>
                <div className="w-[10.675rem] relative text-[1rem] leading-[1.25rem] flex items-center shrink-0">
                  <span className="w-full">
                    <span>{`12 March, 15:06 PM GMT +00:00, by `}</span>
                    <span className="text-color-border-primary-bold-100">
                      David
                    </span>
                  </span>
                </div>
                <div className="rounded bg-gray-50-fcfcfd overflow-hidden flex flex-row items-center justify-center py-[0.125rem] px-[0.437rem] relative gap-[0.375rem] text-color-text-gray-subtle-100 border-[1px] border-solid border-gray-200-e4e7ec">
                  <div className="h-6 !m-[0] absolute top-[0.25rem] left-[0.5rem] hidden flex-row items-center justify-start z-[0]">
                    <div className="flex flex-col items-start justify-start">
                      <img
                        className="w-6 h-[1rem] relative rounded-sm overflow-hidden shrink-0 object-cover"
                        alt=""
                        src="/flagkr--korea-south-4@2x.png"
                      />
                    </div>
                  </div>
                  <div className="relative leading-[1.25rem] font-medium inline-block min-w-[7.125rem]">
                    COSCO Shipping
                  </div>
                  <img
                    className="h-[1rem] w-[1rem] relative hidden z-[2]"
                    alt=""
                    src="/downloadIcon.svg"
                  />
                </div>
                <button className="cursor-pointer py-[0rem] px-[0.437rem] bg-color-border-gray-subtle-300 rounded overflow-hidden flex flex-row items-center justify-center gap-[0.375rem] border-[1px] border-solid border-gray-200-e4e7ec">
                  <div className="flex flex-row items-center justify-start">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="h-6 w-6 relative"
                        alt=""
                        src="/downloadIcon.svg"
                      />
                    </div>
                  </div>
                  <div className="relative text-[0.875rem] leading-[1.25rem] font-medium font-text-md-l-24-regular text-color-text-gray-subtle-100 text-left inline-block min-w-[4.188rem]">
                    Download
                  </div>
                  <img
                    className="h-[1rem] w-[1rem] relative hidden"
                    alt=""
                    src="/downloadIcon.svg"
                  />
                </button>
              </div> */}
              {/* <ConsignementFile
                label="In Land Proof of Delivery (POD)"
                iconX="/downloadIcon.svg"
                prop="1.1"
                flagKRKoreaSouth="/flagkr--korea-south-5@2x.png"
                label1="Eddie Stobart"
                iconX1="/downloadIcon.svg"
                iconX2="/downloadIcon.svg"
              /> */}
              
            </div>
            </div>
            </NavLink>
    </>
  );
};

export default TradeCustomsDocumentationBody