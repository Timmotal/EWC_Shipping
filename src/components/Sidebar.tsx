import  { useState } from 'react'
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  
  const [activeLink, setActiveLink] = useState<string>('');

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
  };
  return (
    <div
      className={`h-[44rem] w-[16.375rem] shadow-[0px_1px_5.7px_rgba(16,_24,_40,_0.08)] rounded-lg box-border overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[8px] text-left text-lg  border-[1px] border-solid`}
    >
      {/* SIDEBAR LOGO */}
      <div className="self-stretch h-[7.125rem] w-[333px]  overflow-hidden shrink-0 flex flex-col items-center justify-center py-5 px-[1.1875rem] box-border">
        <img
          className="self-stretch flex-1 relative max-w-full left-[-32px] overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/east-west-logo-v1-20240408-165550-3@2x.png"
        />
      </div>

      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-4">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive || activeLink === "/"
              ? "bg-[#ECF4FC] self-stretch flex flex-row items-center justify-start py-2 pl-[27px]  relative gap-3 text-base"
              : " self-stretch flex flex-row items-center justify-start py-2 pl-[27px]  relative gap-3 text-base"
          }
          onClick={() => handleSetActiveLink("/")}
        >
          <div className="flex flex-row items-center justify-start">
            <img className="h-5 w-5 relative" alt="" src="/iconhouse.svg" />
            <div className="flex-1 flex flex-col items-start justify-center py-1.5 pl-[.75rem] box-border min-h-8">
              Dashboard
            </div>
          </div>
        </NavLink>

        <NavLink
          to=""
          end
          className={({ isActive }) =>
            isActive || activeLink === "/"
              ? " self-stretch flex flex-row items-center justify-start py-2 pl-[27px]  relative gap-3 text-base"
              : " self-stretch flex flex-row items-center justify-start py-2 pl-[27px]  relative gap-3 text-base"
          }
          // onClick={() => handleSetActiveLink("")}
        >
          <div className="flex flex-row items-center justify-start">
          <img
                className="h-5 w-5 relative"
                loading="lazy"
                alt=""
                src="/iconbell.svg"
              />
            <div className="flex-1 flex flex-col items-start justify-center py-1.5 pl-[.75rem] box-border min-h-8">
            Notifications
            </div>
          </div>
        </NavLink>
        
        <NavLink
          to=""
          end
          className={({ isActive }) =>
            isActive || activeLink === "/"
              ? " self-stretch flex flex-row items-center justify-start py-2 pl-[27px]  relative gap-3 text-base"
              : " self-stretch flex flex-row items-center justify-start py-2 pl-[27px]  relative gap-3 text-base"
          }
          // onClick={() => handleSetActiveLink("")}
        >
          <div className="flex flex-row items-center justify-start">
          <img
                className="h-5 w-5 relative"
                loading="lazy"
                alt=""
                src="/iconchatcenteredtext.svg"
              />
            <div className="flex-1 flex flex-col items-start justify-center py-1.5 pl-[.75rem] box-border min-h-8">
            Messages
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/shipments"
          end
          className={({ isActive }) =>
            isActive || activeLink === "/shipments"
              ? "bg-[#ECF4FC] self-stretch flex flex-row items-center justify-start py-2 pl-[27px]  relative gap-3 text-base"
              : " self-stretch flex flex-row items-center justify-start py-2 pl-[27px]  relative gap-3 text-base"
          }
          onClick={() => handleSetActiveLink("shipments")}
        >
          <div className="flex flex-row items-center justify-start">
          <img
                className=" relative "
                loading="lazy"
                alt=""
                src="/cardinalSB.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-center py-1.5 pl-[.75rem] box-border min-h-8">
            All Shipments
            </div>
          </div>
        </NavLink>
        
        <NavLink
          to="/activeconsignments"
          end
          className={({ isActive }) =>
            isActive || activeLink === "/activeconsignments"
              ? "bg-[#ECF4FC] self-stretch flex flex-row items-center justify-start py-2 pl-[27px]  relative gap-3 text-base"
              : " self-stretch flex flex-row items-center justify-start py-2 pl-[27px]  relative gap-3 text-base"
          }
          onClick={() => handleSetActiveLink("/activeconsignments")}
        >
          <div className="flex flex-row items-center justify-start">
          <img
                className="h-5 w-5 relative"
                loading="lazy"
                alt=""
                src="/Icon_BoatSB.svg"
              />
            <div className="flex-1 flex flex-col items-start justify-center py-1.5 pl-[.75rem] box-border min-h-8">
            Active consignments
            </div>
          </div>
        </NavLink>
      </div>
      <img
        className="w-[13.45rem] h-px relative object-contain bg-[#D0D5DD]"
        alt=""
        src="/sideBarDivider.svg"
      />
      <div className="self-stretch flex flex-row items-center justify-start py-3 px-5 relative gap-4">
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-row items-center justify-center">
            <img
              className="h-5 w-5 relative"
              loading="lazy"
              alt=""
              src="/iconuser.svg"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-center py-1 px-0 box-border min-h-8">
          <div className="self-stretch relative leading-[24px]">Account</div>
        </div>
      </div>

      {/* <NavLink
          to="/shipments"
          end
          className={({ isActive }) =>
            isActive || activeLink === "/"
              ? "bg-[#ECF4FC] self-stretch flex flex-row items-center justify-start py-2 pl-12  relative gap-3 text-base"
              : ""
          }
          onClick={() => handleSetActiveLink("/")}
        >
          <div className="flex flex-row items-center justify-start">
            <img className="h-5 w-5 relative" alt="" src="/iconhouse.svg" />
            <div className="flex-1 flex flex-col items-start justify-center py-1.5 pl-[.75rem] box-border min-h-8">
              Dashboard
            </div>
          </div>
        </NavLink> */}
       <NavLink
          to="/signup"
          end
          className={({ isActive }) =>
            isActive || activeLink === "/signup"
              ? "bg-[#ECF4FC] self-stretch flex flex-row items-center justify-start py-2 pl-[27px]  relative gap-3 text-base"
              : " self-stretch flex flex-row items-center justify-start py-2 pl-[27px]  relative gap-3 text-base"
          }
          onClick={() => handleSetActiveLink("signup")}
        >
          <div className="flex flex-row items-center justify-start">
          <img
              className="h-5 w-5 relative"
              loading="lazy"
              alt=""
              src="/iconsignout.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-center py-1.5 pl-[.75rem] box-border min-h-8">
            Sign Out
            </div>
          </div>
        </NavLink>
    </div>
  );
}

export default SideBar


// import { NavLink } from 'react-router-dom';

// const Sidebar: React.FC = () => {
//   const [activeLink, setActiveLink] = useState<string>('/');

//   const handleSetActiveLink = (link: string) => {
//     setActiveLink(link);
//   };

//   return (
//     <div className="w-64 bg-gray-100 p-4">
//       <ul className="space-y-4">
//         <li>
//           <NavLink
//             to="/"
//             end
//             className={({ isActive }) => 
//               `block p-2 ${isActive || activeLink === '/' ? 'bg-gray-300 rounded' : ''}`}
//             onClick={() => handleSetActiveLink('/')}
//           >
//             Dashboard
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="notifications"
//             className={({ isActive }) => 
//               `block p-2 ${isActive || activeLink === 'notifications' ? 'bg-gray-300 rounded' : ''}`}
//             onClick={() => handleSetActiveLink('notifications')}
//           >
//             Notifications
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="messages"
//             className={({ isActive }) => 
//               `block p-2 ${isActive || activeLink === 'messages' ? 'bg-gray-300 rounded' : ''}`}
//             onClick={() => handleSetActiveLink('messages')}
//           >
//             Messages
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="shipments"
//             className={({ isActive }) => 
//               `block p-2 ${isActive || activeLink === 'shipments' ? 'bg-gray-300 rounded' : ''}`}
//             onClick={() => handleSetActiveLink('shipments')}
//           >
//             Shipments
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="active-consignments"
//             className={({ isActive }) => 
//               `block p-2 ${isActive || activeLink === 'active-consignments' ? 'bg-gray-300 rounded' : ''}`}
//             onClick={() => handleSetActiveLink('active-consignments')}
//           >
//             Active Consignments
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="account"
//             className={({ isActive }) => 
//               `block p-2 ${isActive || activeLink === 'account' ? 'bg-gray-300 rounded' : ''}`}
//             onClick={() => handleSetActiveLink('account')}
//           >
//             Account
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
