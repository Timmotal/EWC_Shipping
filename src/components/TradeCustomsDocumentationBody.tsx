//  import SideBar from "../SidebarMenu.tsx";
import { NavLink } from "react-router-dom";
import ConsignementFile from "./Shipments/ConsignementFile";

const TradeCustomsDocumentationBody = () => {
  const tradeCustomsFiles = [
    {
      id: 1,
      docType: "Packing List",
      docVersion: 2,
      docOrg: " Chem Corp",
    },
    {
      id: 2,
      docType: "Customs Transit Document (T1)",
      docVersion: 2,
      docOrg: "TZT Forwarding ",
    },
    {
      id: 3,
      docType: "Commercial Invoice",
      docVersion: 3,
      docOrg: " Chem Corp",
    },
    {
      id: 4,
      docType: "Bill of Lading",
      docVersion: 2,
      docOrg: "COSCO Shipping",
    },
    {
      id: 5,
      docType: "Customs Export Declaration",
      docVersion: 1,
      docOrg: " Chem Corp",
    },
    {
      id: 6,
      docType: "In Land Proof of Delivery (POD",
      docVersion: 2,
      docOrg: "Eddie Stobart",
    },
  ];

  return (
    <>
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

          {tradeCustomsFiles.map((tradeCustomsFile) => (
            <ConsignementFile
              key={tradeCustomsFile.id}
              // id={tradeCustomsFile.id}
              docType={tradeCustomsFile.docType}
              docVersion={tradeCustomsFile.docVersion}
              docOrg={tradeCustomsFile.docOrg}
            />
          ))}
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full text-center text-base">
          <div className="flex-1 relative text-lg inline-block max-w-full text-[#1465B4]">
            <NavLink to="/activeconsignment">Back to consignments</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default TradeCustomsDocumentationBody;
