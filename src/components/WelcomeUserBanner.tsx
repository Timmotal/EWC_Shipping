// import React from 'react' 

const WelcomeUserBanner = () => {
  const userLogisticsData = {
    username: "Matthew",
    shipments: 616,
    consignments: 212
  };
  

  return (
    <div
    className={`self-stretch rounded-lg bg-black flex flex-row items-center justify-between py-4 px-8 box-border max-w-full gap-5 text-left `}
  >
    <div className="flex flex-row items-center justify-center gap-4 max-w-full ">
      <img
        className="h-8 w-8 relative"
        loading="lazy"
        alt=""
        src="/IconSparkle.svg"
      />
      <h1 className="m-0 relative text-3xl text-white tracking-[-0.02em] leading-[44px] font-bold font-inherit ">
        Welcome, {userLogisticsData.username}!
      </h1>
    </div>

    <div className="w-[445px] flex flex-row items-center justify-center gap-8 max-w-full text-5xl">
      <div>
        <div className="flex gap-2">
        <img src="/Boat.svg"  />
        <p className='font-bold text-2xl text-white'>Shipments</p>
        </div>
      <p className='text-[#FFFFFFBF] text-xl text-right'>{userLogisticsData.shipments}</p>
      </div>

        <img
          className="self-stretch bg-white w-px relative max-h-full min-h-16"
          loading="lazy"
          alt=""
          src="/HeaderSeperator.svg"
        />

     
      <div>
      <div className='flex gap-2'>
      <img src="/IconArrowsOutCardinal.svg" />
      <p className='font-bold text-2xl text-white'>Consigments</p>
      </div>
      <p className='text-[#FFFFFFBF] text-xl text-right'>{userLogisticsData.consignments}</p>
      </div>
    </div>

  </div>
  )
}

export default WelcomeUserBanner
