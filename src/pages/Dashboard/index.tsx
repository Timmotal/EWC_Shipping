import Sidebar from '../../components/Sidebar'
import WelcomeUserBanner from '../../components/WelcomeUserBanner'
import ConsignmentShippingSearch from '../../components/ConsignmentShippingSearch'
import RecentlyAddedConsigments from '../../components/RecentlyAddedConsigments'
// import {compassRose} from "../../assets/compasse-rose.svg"

const Dashboard = () => {
  return (
    <div className="w-full h-[1224px] relative overflow-hidden leading-[normal] tracking-[normal]">
    {/* <img
      className="absolute top-[calc(50%_-_330px)] left-[calc(50%_-_111px)] w-[1589.7px] h-[1625.7px] overflow-hidden"
      alt=""
      // src="/compassRose.svg"
    /> */}

    <div className="absolute flex items-end justify-end bottom-0 right-0  z-[-40]">
    <img className="" src="BackgroundImg.svg" alt="East West Background Image" />
  </div>

    <div className="m-0 absolute top-[46px] left-[calc(50%_-_634px)] w-[1268px] flex flex-row items-start justify-start gap-[20px] max-w-full z-[1]">
      <Sidebar />
      <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-[calc(100%_-_282px)] bg-white">
        <WelcomeUserBanner />
        <ConsignmentShippingSearch />
        <RecentlyAddedConsigments />
      </div>
    </div>
  </div>
  )
}

export default Dashboard
