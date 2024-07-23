import HeaderNav from "./HeaderNav";

const ConsignmentSearchHeader = () => {
  return (
    <div
      className={`self-stretch rounded-lg  box-border flex flex-col items-start justify-start pt-8 px-8 gap-5 mb-5 max-w-full text-left text-[#0B0101] `}
    >

<HeaderNav
      pageLinkUrl="/"
      pageLinkText="Back to Dashboard" 
    />


      <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] top-[0] z-[99] sticky max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-center">
            <h1 className="m-0 relative text-[2rem] tracking-[-0.02em] font-bold text-black text-left whitespace-nowrap ">
              Consignments Found
            </h1>
            <div className="relative text-base  text-[#363535] text-left whitespace-nowrap ">
              Search results for ‘Seoul’
            </div>
          </div>
        </div>
      </div>

      <div className="self-stretch flex flex-row items-start justify-start gap-[20px] top-[0] z-[99] max-w-full text-base ">
        <div className="flex-1 flex flex-col items-start justify-center py-0.5 px-0 box-border max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start relative gap-[4px] max-w-full">
            <div className="self-stretch rounded-md bg-[#FCFCFD] box-border overflow-hidden flex flex-row items-center justify-start max-w-full text-sm  border-[1px] border-solid ">
              <div className="flex-1 flex flex-row items-center justify-start py-1.5 px-3 box-border relative gap-[8px] max-w-full">
                <div className="relative leading-[20px] text-[#ABB1BA]">
                Seoul
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-2 px-[43px] bg-[#0354A6] rounded-md flex flex-row items-center justify-center relative gap-[8px]">
          <div className="relative text-sm font-medium text-white text-left inline-block min-w-[47px]">
            Search
          </div>
        </button>
      </div>
    </div>
  );
};

export default ConsignmentSearchHeader;
