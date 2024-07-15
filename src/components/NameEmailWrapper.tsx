import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FirstNameWrapperType = {
  className?: string;
  firstName?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const NameEmailWrapper: FunctionComponent<FirstNameWrapperType> = ({
  className = "",
  firstName,
  propFlex,
  propMinWidth,
  propAlignSelf,
}) => {
  const firstNameWrapperStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinWidth, propAlignSelf]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[10.688rem] text-left text-[1.5rem] text-black font-h4-desktop-tablet-bold ${className}`}
      style={firstNameWrapperStyle}
    >
      <b className="self-stretch relative sm:leading-[2rem] mq450:text-[1.188rem] leading-[1.625rem]">
        {firstName}
      </b>
      <div className="self-stretch flex flex-col items-start justify-start relative gap-[0.25rem] text-[1rem] text-color-text-gray-base font-text-md-l-24-regular">
       
        <div className="self-stretch rounded-md overflow-hidden flex flex-row items-center justify-start border-[1px] border-solid border-color-border-gray-bold-100">
          <input
            className="w-full [border:none] [outline:none] bg-[transparent] h-[2.5rem] flex-1 flex flex-row items-center justify-start py-[0.5rem] px-[0.75rem] box-border font-text-md-l-24-regular text-[1rem] text-color-border-gray-bold-100 min-w-[9.875rem]"
            placeholder="Placeholder"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default NameEmailWrapper;
