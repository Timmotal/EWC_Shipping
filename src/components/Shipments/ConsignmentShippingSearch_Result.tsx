import React from "react";

const CustomsDocHeader = () => {
  return (
    <div
      className={`self-stretch rounded-lg  box-border flex flex-col items-start justify-start px-8 pt-8 gap-5 mb-5 max-w-full text-left text-[#0B0101] `}
    >
      <div className="flex flex-row items-start justify-start">
        <div className="rounded-md flex flex-row items-center justify-center py-[0.625rem] px-[1.437rem] gap-[0.5rem] border-[1px] border-solid border-[#0354A6]">
          <div className="flex flex-row items-center justify-center">
            {" "}
            <img
              className="h-[1.5rem] w-[1.5rem] relative"
              loading="lazy"
              alt=""
              src="/iconarrowleft.svg"
            />
          </div>

          <a className="[text-decoration:none] text-[#0354A6] relative text-base  font-medium text-left ">
            Back to all consignment
          </a>

         
        </div>
      </div>


       {/* FIX THIS TO BE IN ANOTHER COMPONENT */}

      {/* <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] top-[0] z-[99] sticky max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-center">
            <h1 className="m-0 relative text-[2rem] tracking-[-0.02em] font-bold text-black text-left whitespace-nowrap ">
            Consignment EXPRESS 9832N
            </h1>
            <div className="relative text-base  text-[#363535] text-left whitespace-nowrap ">
            Information about this consignment
            </div>
          </div>
        </div>
      </div> */}

      
    </div>
  );
};

export default CustomsDocHeader;
