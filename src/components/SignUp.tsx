import { NavLink } from "react-router-dom";
import NameEmailWrapper from "./NameEmailWrapper";


export type HeaderType = {
  className?: string;
};

const SignUp = () => {
  return (
    <div 
      className={`self-stretch flex flex-row items-start justify-center max-w-full text-center text-[2rem]  text-black `}
    >
      <div className="w-[38.125rem] shadow-[0px_1px_5.7px_rgba(16,_24,_40,_0.08)] bg-[#FFFFFF] z-10 rounded-lg  box-border flex flex-col items-start justify-start p-[1.937rem] gap-[2rem] max-w-full border-[0.5px] border-solid ">
        <div className="self-stretch h-[6.5rem] relative max-w-full ">
          <div className="absolute top-[0rem] left-[32.875rem] w-[1.25rem] h-[1.25rem] flex flex-row items-center justify-center py-[0.312rem] px-[0.25rem] box-border">
            <img
              className="h-[0.719rem] w-[0.719rem] relative"
              loading="lazy"
              alt=""
              src="/icon-stroke.svg"
            />
          </div>
          <div className="absolute top-0 left-0 w-full flex flex-col items-start justify-start gap-[0.5rem] max-w-full h-full">
            <b className="w-[31.438rem] relative tracking-[-0.02em]inline-block max-w-full ">
              Sign Up to East-West Company
            </b>
            <div className="self-stretch relative text-base leading-[1.5rem]">
              <p className="[margin-block-start:0] [margin-block-end:8px]">{`Sign Up to access your dashboard, `}</p>
              <p className="m-0">settings and shipments.</p>
            </div>
          </div>
        </div>
        <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.25rem]">
            <NameEmailWrapper firstName="First Name" />
            <NameEmailWrapper
              firstName="Second Name"
              propFlex="1"
              propMinWidth="10.688rem"
              propAlignSelf="unset"
            />
          </div>
          <NameEmailWrapper
            firstName="Work email"
            propFlex="unset"
            propMinWidth="unset"
            propAlignSelf="stretch"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full">
            <b className="self-stretch relative text-[1.5rem] text-black text-left ">
              Business phone
            </b>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0.5rem] max-w-full">
              <div className="w-24 rounded box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.375rem] px-[0.437rem] gap-[0.375rem] border-[1px] border-solid">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <img
                      className="w-6 h-4 relative rounded-sm overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src="/FlagOfUK.png"
                    />
                  </div>
                </div>
                <div className="relative flex justify-center items-center text-center inline-block min-w-[2.875rem]">
                  <span className="text-[1rem] leading-[1.5rem] pr-1">{`+44 `}</span>
                  <span className="text-[0.625rem] leading-[0.75rem] text-[#ABB1BA]">
                    ▼
                  </span>
                </div>
            
              </div>
              <div className="flex-1 rounded-md bg-white-base-ffffff box-border overflow-hidden flex flex-row items-center justify-start min-w-[18.125rem] max-w-full border-[1px] border-solid border-color-border-gray-bold-100">
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] h-[2.5rem] flex-1 flex flex-row items-center justify-start py-[0.5rem] px-[0.75rem] box-border font-text-md-l-24-regular text-[1rem] text-color-border-gray-bold-100 min-w-[15.625rem] max-w-full"
                  placeholder="Placeholder"
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="flex-1 flex flex-row items-center justify-start gap-[0.5rem] max-w-full">
                <input
                  className="m-0 h-[1.25rem] w-[1.25rem] relative rounded overflow-hidden shrink-0"
                  type="checkbox"
                />
                <div className="flex-1 relative text-[1rem] leading-[1.5rem] font-text-md-l-24-regular text-black text-left inline-block max-w-[calc(100%_-_28px)]">
                  I agree to the terms of service and privacy policy
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[0.5rem] px-[1.25rem] bg-[#0354a6] self-stretch rounded-md flex flex-row items-start justify-center gap-[0.5rem]">
          
            
            <div className="relative text-[0.875rem] leading-[1.25rem] font-medium text-white text-left inline-block min-w-[3.313rem] whitespace-nowrap">
              Sign Up
            </div>
          
          </button>
        </form>
        <div className="self-stretch relative text-[1rem] leading-[1.5rem] font-text-md-l-24-regular text-gray">
          <span>{`Already have an account? `}</span>
          <span className="text-[#0354A6]">
          <NavLink to="/loginform">
          Sign in
        </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
