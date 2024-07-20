
interface ConsignementFileProps {
  docType: string;
  docVersion: number;
  docOrg: string;
}


const ConsignementFile= ({ docType, docVersion, docOrg }: ConsignementFileProps) => {

  return (
    <div
      className={`self-stretch shadow-[0px_1px_5.7px_rgba(16,_24,_40,_0.08)] rounded-lg  overflow-hidden flex flex-row items-center justify-between py-[0.375rem] pr-[3.187rem] pl-[0.5rem] gap-14 text-left text-[1rem] text-black border-[1px] border-solid `}
    >
      <div className="w-[10.75rem] bg-[#ECF4FC] rounded box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-[0.375rem] px-[0.437rem] gap-[0.375rem] border-[1px] border-solid">
        <div className="flex flex-row items-center justify-start ">
          <div className="flex flex-row items-start justify-start">
            <img
              className="h-[1.5rem] w-[1.5rem] relative"
              loading="lazy"
              alt=""
              src="/iconfile.svg"
            />
          </div>
        </div>
        <div className="flex-1 relative">{docType}</div>
        <img className="h-4 w-4 relative hidden" alt="" src="/downloadIcon.svg" />
      </div>
      <div className="w-[2.556rem] relative text-sm flex items-center shrink-0">
        {docVersion}
      </div>
      <div className="w-[10.675rem] relative leading-[1.25rem] flex items-center shrink-0">
        <span className="w-full">
          <span>{`12 March, 15:06 PM GMT +00:00, by `}</span>
          <span className="text-[#0354A6]">David</span>
        </span>
      </div>
      <div className="w-[8.125rem] bg-[#FCFCFD] rounded overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.125rem] px-[0.625rem] relative gap-[0.375rem] text-[0.875rem] border-[1px] border-solid ">
        
        <div className="relative  font-medium inline-block min-w-[6.688rem]">
          {docOrg}
        </div>
        <img
          className="h-[1rem] w-[1rem] relative hidden z-[2]"
          alt=""
          src="/downloadIcon.svg"
        />
      </div>
      <button className="bg-[#F2F4F7] cursor-pointer py-[0rem] px-[0.437rem] rounded overflow-hidden flex flex-row items-center justify-center gap-[0.375rem] border-[1px] border-solid ">
        <div className="flex flex-row items-center justify-start">
          <div className="flex flex-row items-start justify-start">
            <img
              className="h-[1.5rem] w-[1.5rem] relative"
              alt=""
              src="/downloadIcon.svg"
            />
          </div>
        </div>
        <div className="relative text-sm font-medium text-left inline-block min-w-[4.188rem]">
          Download
        </div>
        <img
          className="h-[1rem] w-[1rem] relative hidden"
          alt=""
          src="downloadIcon./svg"
        />
      </button>
    </div>
  );
};

export default ConsignementFile;
