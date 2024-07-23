import { NavLink } from 'react-router-dom'

interface HeaderNavProps {
    pageLinkUrl: string;
    pageLinkText: string;
}

const HeaderNav = ({pageLinkUrl, pageLinkText}: HeaderNavProps) => {
  return (
    <>
    <div className="flex flex-row items-start justify-start">
        <div className="rounded-md flex flex-row items-center justify-center py-[0.625rem] px-[1.437rem] gap-[0.5rem] border-[1px] border-solid border-[#0354A6]">
          <div className="flex flex-row items-center justify-center">
            {" "}
            <img
              className="h-[1.5rem] w-[1.5rem] relative"
              loading="lazy"
              alt=""
              src="/iconarrowleft.svg"
            />
          </div>

     
          <NavLink to={pageLinkUrl}>
          <a className="[text-decoration:none] text-[#0354A6] relative text-base  font-medium text-left ">
            {pageLinkText}
          </a>
          </NavLink>
         
        </div>
      </div>
    </>
  )
}

export default HeaderNav