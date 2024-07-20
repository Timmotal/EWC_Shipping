import React from 'react'

const ShipmentIcon = () => {
  return (<div
    className={`w-[182px] flex flex-col items-start justify-start gap-[8px] text-left text-5xl text-white-base-ffffff font-h4-desktop-tablet-regular `}
    // style={navigationStyle}
  >
    <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
      <img
        className="h-8 w-8 relative min-h-[32px]"
        loading="lazy"
        alt=""
        src="/iconBoat.svg"
      />
      <a className="[text-decoration:none] flex-1 relative leading-[32px] font-bold text-[inherit] mq450:text-lgi mq450:leading-[26px]">
        shipments
      </a>
    </div>
    <a className="[text-decoration:none] self-stretch relative text-xl leading-[28px] text-white-alpha300-ffffff75 text-right mq450:text-base mq450:leading-[22px]">
      navigationSeparator
    </a>
  </div>)
}

export default ShipmentIcon
