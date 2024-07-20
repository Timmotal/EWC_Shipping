


const DependencyFile= ({ company, name, docType, email, phone  }) => {

  return (
    <div className="self-stretch shadow-[0px_1px_5.7px_rgba(16,_24,_40,_0.08)] rounded-lg bg-white-base-ffffff overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[2.562rem] border-[1px] border-solid border-gray-200-e4e7ec">
                <div className="w-[12.438rem] rounded bg-[#ECF4FC] box-border overflow-hidden shrink-0 flex flex-row items-center justify-start p-[0.5rem] gap-[0.375rem] border-[1px] border-solid border-color-border-primary-subtle-300">
                  <div className="hidden flex-row items-center justify-start">
                    <div className="flex flex-row items-start justify-start">
                      <img className="w-[1.5rem] relative h-[1.5rem]" alt="" />
                    </div>
                  </div>
                  <div className="relative ">{name}</div>
                  <img className="w-[1rem] relative h-[1rem] hidden" alt="" />
                </div>
                <div className="w-32 bg-[#FCFCFD] rounded box-border h-7 overflow-hidden shrink-0 flex flex-row items-center justify-center py-1 px-2 relative gap-[0.375rem] text-sm border-[1px] border-solid ">
                  
                  <div className="relative  font-medium z-[1]">
                    {company}
                  </div>
                 
                </div>
                <div className="relative leading-[1.25rem]">{docType}</div>
                <div className="relative leading-[1.25rem]">
                  {email}
                </div>
                <div className="rounded bg-[#F2F4F7] box-border h-7 overflow-hidden flex flex-row items-center justify-center py-1 px-2 gap-[0.375rem] text-sm border-[1px] border-solid">
                
                  <div className="relative  leading-[1.25rem] font-medium">
                    +{phone}
                  </div>
                  <img className="w-[1rem] relative h-[1rem] hidden" alt="" />
                </div>
              </div>
  );
};

export default DependencyFile;
