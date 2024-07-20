//  import SideBar from "../SidebarMenu.tsx";

import DependencyFile from "./DependencyFile";

const Dependency = () => {

  const dependencies = [
    {
      id: 1, 
      name: "Suzi Wan",
      company: "COSCO Shipping",
      docType: "Document",
      email: "suziwan@coscoshipping.com",
      phoneNumber: 4478763940,
    },
    {
      id: 2, 
      name: "Sally Jenkins",
      company: "COSCO Shipping",
      docType: "Document",
      email: "suziwan@coscoshipping.com",
      phoneNumber: 4478763940,
    },
    {
      id: 3, 
      name: "Siddhant Jurani",
      company: "COSCO Shipping",
      docType: "Document",
      email: "suziwan@coscoshipping.com",
      phoneNumber: 4478763940,
    },
    {
      id: 4, 
      name: "Mohammed Ali",
      company: "COSCO Shipping",
      docType: "Document",
      email: "suziwan@coscoshipping.com",
      phoneNumber: 4478763940,
    },
    {
      id: 5, 
      name: "Maxime Simbad",
      company: "COSCO Shipping",
      docType: "Document",
      email: "suziwan@coscoshipping.com",
      phoneNumber: 4478763940,
    },
    {
      id: 6, 
      name: "Jireh Loatu",
      company: "COSCO Shipping",
      docType: "Document",
      email: "suziwan@coscoshipping.com",
      phoneNumber: 4478763940,
    },
    
  ];

  return (
    <>
    <div className="self-stretch rounded-lg flex flex-col items-start justify-start pt-8 px-8 gap-[20px] max-w-full">
    {/* <div className="self-stretch flex flex-col items-start justify-start max-w-full text-[2rem] ">
              <div className="flex flex-col items-start justify-center max-w-full">
                <h1 className="m-0 relative text-inherit tracking-[-0.02em] font-bold ">
                  Trade and Customs Documentation
                </h1>
                <div className="relative text-[1rem] leading-6 font-text-md-l-24-regular text-darkslategray">
                  Find all your documentation in one place
                </div>
              </div>
            </div> */}
             <div className="self-stretch flex flex-col items-start justify-start text-[2rem]">
              <div className="flex flex-col items-start justify-center">
                <b className="relative tracking-[-0.02em] ">
                  Dependencies
                </b>
                <div className="relative text-base">
                  Review your dependencies here
                </div>
              </div>
            </div>


            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
              <div className="self-stretch rounded-lg bg-[#F2F4F7] box-border overflow-hidden flex flex-row items-center justify-start py-[0.375rem] px-[0.437rem] max-w-full  border-[1px] border-solid">
                {/* <div className="flex-1 flex flex-row flex-wrap items-start justify-start py-[0rem] pr-[6.75rem] pl-[0rem] box-border max-w-full [row-gap:20px]">
                  <div className="w-[13.175rem] relative leading-6 inline-block shrink-0">
                  Name
                  </div>
                  <div className="w-[7.506rem] relative leading-6 inline-block shrink-0">
                    Company
                    </div>
                  <div className="flex-1 relative leading-6 inline-block min-w-[5rem]">
                  Type 
                   </div>
                  <div className="w-[11.85rem] relative leading-6 inline-block shrink-0">
                  Email 
                  </div>
                  <div className="relative leading-6 inline-block min-w-[3.063rem]">
                  Phone Number
                  </div>
                </div>
              </div> */}

<div className="flex-1 flex flex-row items-start justify-start">
                  <div className="w-[15.313rem] w- relative  inline-block shrink-0">
                    Name
                  </div>
                  <div className="w-[10.163rem] relative  inline-block shrink-0">
                    Company
                  </div>
                  <div className="w-[7.938rem] relative  inline-block shrink-0">
                    Type
                  </div>
                  <div className="w-[15.269rem] relative  inline-block  shrink-0">
                    Email
                  </div>
                  <div className="relative ">Phone Number</div>
                </div>
              </div>
            

{dependencies.map((depedency) => (
      <DependencyFile
        key={depedency.id}
        // id={depedency.id}
        name={depedency.name}
        company={depedency.company}
        docType={depedency.docType}
        email={depedency.email}
        phone={depedency.phoneNumber}


      />
      ))}
             
            </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start max-w-full text-center text-base py-5">
        <div className="flex-1 relative text-lg inline-block max-w-full text-[#1465B4]">
        Back to Shipment PACIFIC 4321S
        </div>
      </div>
    </>
  );
};

export default Dependency