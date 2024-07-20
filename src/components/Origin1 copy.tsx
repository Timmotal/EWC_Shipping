import { FunctionComponent } from "react";

export type Origin2Type = {
  className?: string;
  createdBy?: string;
  flagKRKoreaSouth?: string;
  label?: string;
  iconX?: string;
};

const Origin2: FunctionComponent<Origin2Type> = ({
  className = "",
  createdBy,
  flagKRKoreaSouth,
  label,
  iconX,
}) => {
  return (
    <div
      className={`rounded-lg bg-gray-50-fcfcfd flex flex-row items-center justify-start py-3.5 px-2 gap-[8px] text-left text-lg text-darkslategray font-text-md-l-24-regular border-[1px] border-solid border-gray-200-e4e7ec `}
    >
      <div className="relative leading-[24px] inline-block min-w-[100px]">
        {createdBy}
      </div>
      <div className="w-12 rounded bg-color-border-gray-subtle-300 box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-0.5 px-[7px] relative gap-[6px] text-sm text-color-text-gray-subtle-100 border-[1px] border-solid border-gray-200-e4e7ec">
        <div className="h-6 !m-[0] absolute top-[4px] left-[8px] hidden flex-row items-center justify-start z-[0]">
          <div className="flex flex-col items-start justify-start">
            <img
              className="w-6 h-4 relative rounded-sm overflow-hidden shrink-0 object-cover"
              alt=""
              src={flagKRKoreaSouth}
            />
          </div>
        </div>
        <div className="relative leading-[20px] font-medium inline-block min-w-[32px]">
          {label}
        </div>
        <img className="h-4 w-4 relative hidden z-[2]" alt="" src={iconX} />
      </div>
    </div>
  );
};

export default Origin2;
